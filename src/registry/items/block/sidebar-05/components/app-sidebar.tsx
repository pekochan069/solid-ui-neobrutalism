import type { ComponentProps } from "solid-js";

import { For, Show } from "solid-js";
import GalleryVerticalEndIcon from "lucide-solid/icons/gallery-vertical-end";
import MinusIcon from "lucide-solid/icons/minus";
import PlusIcon from "lucide-solid/icons/plus";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "~/components/ui/sidebar";
import { SearchForm } from "./search-form";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Getting Started",
      url: "#",
      items: [
        {
          title: "Installation",
          url: "#",
        },
        {
          title: "Project Structure",
          url: "#",
        },
      ],
    },
    {
      title: "Building Your Application",
      url: "#",
      items: [
        {
          title: "Routing",
          url: "#",
        },
        {
          title: "Data Fetching",
          url: "#",
          isActive: true,
        },
        {
          title: "Rendering",
          url: "#",
        },
        {
          title: "Caching",
          url: "#",
        },
        {
          title: "Styling",
          url: "#",
        },
        {
          title: "Optimizing",
          url: "#",
        },
        {
          title: "Configuring",
          url: "#",
        },
        {
          title: "Testing",
          url: "#",
        },
        {
          title: "Authentication",
          url: "#",
        },
        {
          title: "Deploying",
          url: "#",
        },
        {
          title: "Upgrading",
          url: "#",
        },
        {
          title: "Examples",
          url: "#",
        },
      ],
    },
    {
      title: "API Reference",
      url: "#",
      items: [
        {
          title: "Components",
          url: "#",
        },
        {
          title: "File Conventions",
          url: "#",
        },
        {
          title: "Functions",
          url: "#",
        },
        {
          title: "next.config.js Options",
          url: "#",
        },
        {
          title: "CLI",
          url: "#",
        },
        {
          title: "Edge Runtime",
          url: "#",
        },
      ],
    },
    {
      title: "Architecture",
      url: "#",
      items: [
        {
          title: "Accessibility",
          url: "#",
        },
        {
          title: "Fast Refresh",
          url: "#",
        },
        {
          title: "Next.js Compiler",
          url: "#",
        },
        {
          title: "Supported Browsers",
          url: "#",
        },
        {
          title: "Turbopack",
          url: "#",
        },
      ],
    },
    {
      title: "Community",
      url: "#",
      items: [
        {
          title: "Contribution Guide",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar(props: ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" as="a" href="#">
              <div class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <GalleryVerticalEndIcon class="size-4" />
              </div>
              <div class="flex flex-col gap-0.5 leading-none">
                <span class="font-medium">Documentation</span>
                <span class="">v1.0.0</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <For each={data.navMain}>
              {(item, index) => (
                <Collapsible
                  defaultOpen={index() === 1}
                  class="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger as={SidebarMenuButton} asChild>
                      {item.title}{" "}
                      <PlusIcon class="ml-auto group-ui-expanded/collapsible:hidden" />
                      <MinusIcon class="ml-auto group-ui-not-expanded/collapsible:hidden" />
                    </CollapsibleTrigger>
                    <Show when={item.items?.length}>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          <For each={item.items}>
                            {(item) => (
                              <SidebarMenuSubItem>
                                <SidebarMenuSubButton
                                  as="a"
                                  href={item.url}
                                  isActive={item.isActive}
                                >
                                  {item.title}
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            )}
                          </For>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Show>
                  </SidebarMenuItem>
                </Collapsible>
              )}
            </For>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
