import type { ComponentProps, JSX } from "solid-js";

import { createSignal, For } from "solid-js";
import { ChevronsUpDown, Plus } from "lucide-solid";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "~/components/ui/sidebar";

export function TeamSwitcher(props: {
  teams: {
    name: string;
    logo: (props: ComponentProps<"svg">) => JSX.Element;
    plan: string;
  }[];
}) {
  const { isMobile } = useSidebar();
  const [activeTeam, setActiveTeam] = createSignal(props.teams[0]);
  const Logo = activeTeam().logo;

  if (!activeTeam) {
    return null;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu
          placement={isMobile() ? "bottom-start" : "right-start"}
          gutter={4}
          sameWidth
        >
          <DropdownMenuTrigger
            as={SidebarMenuButton}
            size="lg"
            class="ui-expanded:bg-sidebar-accent ui-expanded:text-sidebar-accent-foreground"
          >
            <div class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
              <Logo class="size-4" />
            </div>
            <div class="grid flex-1 text-left text-sm leading-tight">
              <span class="truncate font-medium">{activeTeam().name}</span>
              <span class="truncate text-xs">{activeTeam().plan}</span>
            </div>
            <ChevronsUpDown class="ml-auto" />
          </DropdownMenuTrigger>
          <DropdownMenuContent class="min-w-56 rounded-lg">
            <DropdownMenuLabel class="text-xs text-muted-foreground">
              Teams
            </DropdownMenuLabel>
            <For each={props.teams}>
              {(team, index) => (
                <DropdownMenuItem
                  onClick={() => setActiveTeam(team)}
                  class="gap-2 p-2"
                >
                  <div class="flex size-6 items-center justify-center rounded-md border">
                    <team.logo class="size-3.5 shrink-0" />
                  </div>
                  {team.name}
                  <DropdownMenuShortcut>⌘{index() + 1}</DropdownMenuShortcut>
                </DropdownMenuItem>
              )}
            </For>
            <DropdownMenuSeparator />
            <DropdownMenuItem class="gap-2 p-2">
              <div class="flex size-6 items-center justify-center rounded-md border bg-transparent">
                <Plus class="size-4" />
              </div>
              <div class="font-medium text-muted-foreground">Add team</div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
