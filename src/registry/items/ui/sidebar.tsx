import type { PolymorphicProps } from "@kobalte/core";
import type { ButtonProps } from "~/components/ui/button";
import type { VariantProps } from "class-variance-authority";
import type {
  Accessor,
  Component,
  ComponentProps,
  JSX,
  ValidComponent,
} from "solid-js";

import {
  createContext,
  createEffect,
  createMemo,
  createSignal,
  Match,
  mergeProps,
  onCleanup,
  Show,
  splitProps,
  Switch,
  useContext,
} from "solid-js";
import { Polymorphic } from "@kobalte/core";
import { cva } from "class-variance-authority";
import PanelLeftIcon from "lucide-solid/icons/panel-left";

import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { Sheet, SheetContent } from "~/components/ui/sheet";
import { Skeleton } from "~/components/ui/skeleton";
import { TextField, TextFieldInput } from "~/components/ui/text-field";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { cn } from "~/lib/utils";

const MOBILE_BREAKPOINT = 768;
const LOCAL_STORAGE_KEY = "sidebar-state";
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

type SidebarContext = {
  state: Accessor<"expanded" | "collapsed">;
  open: Accessor<boolean>;
  setOpen: (open: boolean) => void;
  openMobile: Accessor<boolean>;
  setOpenMobile: (open: boolean) => void;
  isMobile: Accessor<boolean>;
  toggleSidebar: () => void;
};

const SidebarContext = createContext<SidebarContext | null>(null);

function useSidebar() {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("useSidebar must be used within a Sidebar.");
  }

  return context;
}

export function useIsMobile(fallback = false) {
  const [isMobile, setIsMobile] = createSignal(fallback);

  createEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(e.matches);
    };
    mql.addEventListener("change", onChange);
    onChange(mql);
    onCleanup(() => mql.removeEventListener("change", onChange));
  });

  return isMobile;
}

type SidebarProviderProps = Omit<ComponentProps<"div">, "style"> & {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  style?: JSX.CSSProperties;
};

function getSidebarState() {
  if (!window.localStorage) {
    return true;
  }

  const initialState = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (!initialState) {
    return true;
  }

  return initialState === "true";
}

function setSidebarState(openState: boolean) {
  if (!window.localStorage) {
    return;
  }

  localStorage.setItem(LOCAL_STORAGE_KEY, openState.toString());
}

const SidebarProvider: Component<SidebarProviderProps> = (rawProps) => {
  const props = mergeProps({ defaultOpen: true }, rawProps);
  const [local, others] = splitProps(props, [
    "defaultOpen",
    "open",
    "onOpenChange",
    "class",
    "style",
    "children",
  ]);

  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = createSignal(false);

  const [_open, _setOpen] = createSignal(getSidebarState());
  const open = () => local.open ?? _open();
  const setOpen = (value: boolean | ((value: boolean) => boolean)) => {
    if (local.onOpenChange) {
      return local.onOpenChange?.(
        typeof value === "function" ? value(open()) : value,
      );
    }
    _setOpen(value);
    setSidebarState(open());
  };

  const toggleSidebar = () => {
    return isMobile()
      ? setOpenMobile((open) => !open)
      : setOpen((open) => !open);
  };

  createEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    onCleanup(() => window.removeEventListener("keydown", handleKeyDown));
  });

  const state = () => (open() ? "expanded" : "collapsed");

  const contextValue = {
    state,
    open,
    setOpen,
    isMobile,
    openMobile,
    setOpenMobile,
    toggleSidebar,
  };

  return (
    <SidebarContext.Provider value={contextValue}>
      <div
        style={{
          "--sidebar-width": SIDEBAR_WIDTH,
          "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
          ...local.style,
        }}
        class={cn(
          "group/sidebar-wrapper text-sidebar-foreground has-[[data-variant=inset]]:bg-sidebar flex min-h-svh w-full",
          local.class,
        )}
        {...others}
      >
        {local.children}
      </div>
    </SidebarContext.Provider>
  );
};

type SidebarProps = ComponentProps<"div"> & {
  side?: "left" | "right";
  variant?: "sidebar" | "floating" | "inset";
  collapsible?: "offcanvas" | "icon" | "none";
};

const Sidebar: Component<SidebarProps> = (rawProps) => {
  const props = mergeProps<SidebarProps[]>(
    {
      side: "left",
      variant: "sidebar",
      collapsible: "offcanvas",
    },
    rawProps,
  );
  const [local, others] = splitProps(props, [
    "side",
    "variant",
    "collapsible",
    "class",
    "children",
  ]);

  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

  return (
    <Switch>
      <Match when={local.collapsible === "none"}>
        <div
          class={cn(
            "bg-sidebar text-sidebar-foreground flex h-full w-[--sidebar-width] flex-col",
            local.class,
          )}
          {...others}
        >
          {local.children}
        </div>
      </Match>
      <Match when={isMobile()}>
        <Sheet open={openMobile()} onOpenChange={setOpenMobile} {...others}>
          <SheetContent
            data-sidebar="sidebar"
            data-mobile="true"
            class="bg-sidebar text-sidebar-foreground w-[--sidebar-width] p-0 [&>button]:hidden"
            style={{
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            }}
            position={local.side}
          >
            <div class="flex size-full flex-col">{local.children}</div>
          </SheetContent>
        </Sheet>
      </Match>
      <Match when={!isMobile()}>
        <div
          class="group peer hidden md:block"
          data-state={state()}
          data-collapsible={state() === "collapsed" ? local.collapsible : ""}
          data-variant={local.variant}
          data-side={local.side}
        >
          {/* This is what handles the sidebar gap on desktop */}
          <div
            class={cn(
              "relative h-svh w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-in-out",
              "group-data-[collapsible=offcanvas]:w-0",
              "group-data-[side=right]:rotate-180",
              local.variant === "floating" || local.variant === "inset"
                ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
                : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)",
            )}
          />
          <div
            class={cn(
              "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-in-out md:flex",
              local.side === "left"
                ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
                : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              local.variant === "floating" || local.variant === "inset"
                ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
                : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
              local.class,
            )}
            {...others}
          >
            <div
              data-sidebar="sidebar"
              class="bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
            >
              {local.children}
            </div>
          </div>
        </div>
      </Match>
    </Switch>
  );
};

type SidebarTriggerProps<T extends ValidComponent = "button"> =
  ButtonProps<T> & {
    onClick?: (event: MouseEvent) => void;
  };

const SidebarTrigger = <T extends ValidComponent = "button">(
  props: SidebarTriggerProps<T>,
) => {
  const [local, others] = splitProps(props as SidebarTriggerProps, [
    "class",
    "onClick",
  ]);
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      class={cn("size-7", local.class)}
      onClick={(event: MouseEvent) => {
        local.onClick?.(event);
        toggleSidebar();
      }}
      {...others}
    >
      <PanelLeftIcon />
      <span class="sr-only">Toggle Sidebar</span>
    </Button>
  );
};

const SidebarRail: Component<ComponentProps<"button">> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  const { toggleSidebar } = useSidebar();

  return (
    <button
      data-sidebar="rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      class={cn(
        "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-in-out group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex",
        "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:hover:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        local.class,
      )}
      {...others}
    />
  );
};

const SidebarInset: Component<ComponentProps<"main">> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <main
      data-slot="sidebar-inset"
      class={cn(
        "relative flex w-full flex-1 flex-col bg-background",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        local.class,
      )}
      {...others}
    />
  );
};

type SidebarInputProps<T extends ValidComponent = "input"> = ComponentProps<
  typeof TextFieldInput<T>
>;

const SidebarInput = <T extends ValidComponent = "input">(
  props: SidebarInputProps<T>,
) => {
  const [local, others] = splitProps(props as SidebarInputProps, ["class"]);
  return (
    <TextField>
      <TextFieldInput
        data-sidebar="input"
        class={cn(
          "focus-visible:ring-sidebar-ring h-8 w-full bg-background shadow-none focus-visible:ring-2",
          local.class,
        )}
        {...others}
      />
    </TextField>
  );
};

const SidebarHeader: Component<ComponentProps<"div">> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <div
      data-sidebar="header"
      class={cn("flex flex-col gap-2 p-2", local.class)}
      {...others}
    />
  );
};

const SidebarFooter: Component<ComponentProps<"div">> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <div
      data-sidebar="footer"
      class={cn("flex flex-col gap-2 p-2", local.class)}
      {...others}
    />
  );
};

type SidebarSeparatorProps<T extends ValidComponent = "hr"> = ComponentProps<
  typeof Separator<T>
>;

const SidebarSeparator = <T extends ValidComponent = "hr">(
  props: SidebarSeparatorProps<T>,
) => {
  const [local, others] = splitProps(props as SidebarSeparatorProps, ["class"]);
  return (
    <Separator
      data-sidebar="separator"
      class={cn("bg-sidebar-border mx-2 w-auto", local.class)}
      {...others}
    />
  );
};

const SidebarContent: Component<ComponentProps<"div">> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <div
      data-sidebar="content"
      class={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        local.class,
      )}
      {...others}
    />
  );
};

const SidebarGroup: Component<ComponentProps<"div">> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <div
      data-sidebar="group"
      class={cn("relative flex w-full min-w-0 flex-col p-2", local.class)}
      {...others}
    />
  );
};

type SidebarGroupLabelProps<T extends ValidComponent = "div"> =
  ComponentProps<T>;

const SidebarGroupLabel = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, SidebarGroupLabelProps<T>>,
) => {
  const [local, others] = splitProps(props as SidebarGroupLabelProps, [
    "class",
  ]);

  return (
    <Polymorphic<SidebarGroupLabelProps>
      as="div"
      data-sidebar="group-label"
      class={cn(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium transition-[margin,opa] duration-200 ease-in-out outline-none focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        local.class,
      )}
      {...others}
    />
  );
};

type SidebarGroupActionProps<T extends ValidComponent = "button"> =
  ComponentProps<T>;

const SidebarGroupAction = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, SidebarGroupActionProps<T>>,
) => {
  const [local, others] = splitProps(props as SidebarGroupActionProps, [
    "class",
  ]);
  return (
    <Polymorphic<SidebarGroupActionProps>
      as="button"
      data-sidebar="group-action"
      class={cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 transition-transform outline-none focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        local.class,
      )}
      {...others}
    />
  );
};

const SidebarGroupContent: Component<ComponentProps<"div">> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <div
      data-sidebar="group-content"
      class={cn("w-full text-sm", local.class)}
      {...others}
    />
  );
};

const SidebarMenu: Component<ComponentProps<"ul">> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <ul
      data-sidebar="menu"
      class={cn("flex w-full min-w-0 flex-col gap-1", local.class)}
      {...others}
    />
  );
};

const SidebarMenuItem: Component<ComponentProps<"li">> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <li
      data-sidebar="menu-item"
      class={cn("group/menu-item relative list-none", local.class)}
      {...others}
    />
  );
};

const sidebarMenuButtonVariants = cva(
  "peer/menu-button ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm transition-[width,height,padding] transition-colors outline-none group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:font-medium [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        invert:
          "hover:bg-foreground-hover bg-foreground text-background hover:text-background active:bg-foreground/80 active:text-background",
        outline:
          "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type SidebarMenuButtonProps<T extends ValidComponent = "button"> =
  ComponentProps<T> &
    VariantProps<typeof sidebarMenuButtonVariants> & {
      isActive?: boolean;
      tooltip?: string;
    };

const SidebarMenuButton = <T extends ValidComponent = "button">(
  rawProps: PolymorphicProps<T, SidebarMenuButtonProps<T>>,
) => {
  const props = mergeProps(
    { isActive: false, variant: "default", size: "default" },
    rawProps,
  );
  const [local, others] = splitProps(props as SidebarMenuButtonProps, [
    "isActive",
    "tooltip",
    "variant",
    "size",
    "class",
  ]);
  const { isMobile, state } = useSidebar();

  const button = (
    <Polymorphic<SidebarMenuButtonProps>
      as="button"
      data-sidebar="menu-button"
      data-size={local.size}
      data-active={local.isActive}
      class={cn(
        sidebarMenuButtonVariants({ variant: local.variant, size: local.size }),
        local.class,
      )}
      {...others}
    />
  );

  return (
    <Show when={local.tooltip} fallback={button}>
      <Tooltip placement="right" openDelay={0} closeDelay={0}>
        <TooltipTrigger class="w-full">{button}</TooltipTrigger>
        <TooltipContent hidden={state() !== "collapsed" || isMobile()}>
          {local.tooltip}
        </TooltipContent>
      </Tooltip>
    </Show>
  );
};

type SidebarMenuButtonWithShortcutProps = {
  children: JSX.Element;
  shortcut: string;
};

const SidebarMenuButtonInnerWithShortcut = (
  props: SidebarMenuButtonWithShortcutProps,
) => {
  return (
    <div class="flex w-full items-center justify-between">
      <div class="flex items-center gap-2">{props.children}</div>
      <span>{props.shortcut}</span>
    </div>
  );
};

type SidebarMenuActionProps<T extends ValidComponent = "button"> =
  ComponentProps<T> & {
    showOnHover?: boolean;
  };

const SidebarMenuAction = <T extends ValidComponent = "button">(
  rawProps: PolymorphicProps<T, SidebarMenuActionProps<T>>,
) => {
  const props = mergeProps({ showOnHover: false }, rawProps);
  const [local, others] = splitProps(props as SidebarMenuActionProps, [
    "class",
    "showOnHover",
  ]);

  return (
    <Polymorphic<SidebarMenuActionProps>
      as="button"
      data-sidebar="menu-action"
      class={cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 transition-transform outline-none focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        local.showOnHover &&
          "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
        local.class,
      )}
      {...others}
    />
  );
};

const SidebarMenuBadge: Component<ComponentProps<"div">> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <div
      data-sidebar="menu-badge"
      class={cn(
        "text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        local.class,
      )}
      {...others}
    />
  );
};

type SidebarMenuSkeletonProps = ComponentProps<"div"> & {
  showIcon?: boolean;
};

const SidebarMenuSkeleton: Component<SidebarMenuSkeletonProps> = (rawProps) => {
  const props = mergeProps({ showIcon: false }, rawProps);
  const [local, others] = splitProps(props, ["class", "showIcon"]);

  // Random width between 50 to 90%.
  const width = createMemo(() => `${Math.floor(Math.random() * 40) + 50}%`);

  return (
    <div
      data-sidebar="menu-skeleton"
      class={cn("flex h-8 items-center gap-2 rounded-md px-2", local.class)}
      {...others}
    >
      {local.showIcon && (
        <Skeleton class="size-4 rounded-md" data-sidebar="menu-skeleton-icon" />
      )}
      <Skeleton
        class="h-4 max-w-[--skeleton-width] flex-1"
        data-sidebar="menu-skeleton-text"
        style={{
          "--skeleton-width": width(),
        }}
      />
    </div>
  );
};

const SidebarMenuSub: Component<ComponentProps<"ul">> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <ul
      data-sidebar="menu-sub"
      class={cn(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        local.class,
      )}
      {...others}
    />
  );
};

const SidebarMenuSubItem: Component<ComponentProps<"li">> = (props) => (
  <li {...props} />
);

type SidebarMenuSubButtonProps<T extends ValidComponent = "a"> =
  ComponentProps<T> & {
    size?: "sm" | "md";
    isActive?: boolean;
  };

const SidebarMenuSubButton = <T extends ValidComponent = "a">(
  rawProps: PolymorphicProps<T, SidebarMenuSubButtonProps<T>>,
) => {
  const props = mergeProps({ size: "md" }, rawProps);
  const [local, others] = splitProps(props as SidebarMenuSubButtonProps, [
    "size",
    "isActive",
    "class",
  ]);

  return (
    <Polymorphic<SidebarMenuSubButtonProps>
      as="a"
      data-sidebar="menu-sub-button"
      data-size={local.size}
      data-active={local.isActive}
      class={cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        local.size === "sm" && "text-xs",
        local.size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        local.class,
      )}
      {...others}
    />
  );
};

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuButtonInnerWithShortcut,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
};
