import type { LucideIcon } from "lucide-solid";

import { For } from "solid-js";
import ChevronRight from "lucide-solid/icons/chevron-right";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "~/components/ui/sidebar";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        <For each={items}>
          {(item) => (
            <Collapsible
              as={SidebarMenuItem}
              defaultOpen={item.isActive}
              class="group/collapsible"
            >
              <CollapsibleTrigger as={SidebarMenuButton} tooltip={item.title}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
                <ChevronRight class="ml-auto transition-transform duration-200 group-ui-expanded/collapsible:rotate-90" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  <For each={item.items}>
                    {(subItem) => (
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton as="a" href={subItem.url}>
                          <span>{subItem.title}</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    )}
                  </For>
                </SidebarMenuSub>
              </CollapsibleContent>
            </Collapsible>
          )}
        </For>
      </SidebarMenu>
    </SidebarGroup>
  );
}
