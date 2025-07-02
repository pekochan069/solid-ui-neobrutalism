import type { LucideIcon } from "lucide-solid";

import { For } from "solid-js";
import FolderIcon from "lucide-solid/icons/folder";
import MoreHorizontalIcon from "lucide-solid/icons/more-horizontal";
import ShareIcon from "lucide-solid/icons/share";
import Trash2Icon from "lucide-solid/icons/trash-2";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "~/components/ui/sidebar";

export function NavProjects(props: {
  projects: {
    name: string;
    url: string;
    icon: LucideIcon;
  }[];
}) {
  const { isMobile } = useSidebar();

  return (
    <SidebarGroup class="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Projects</SidebarGroupLabel>
      <SidebarMenu>
        <For each={props.projects}>
          {(item) => (
            <SidebarMenuItem>
              <SidebarMenuButton as="a" href={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </SidebarMenuButton>
              <DropdownMenu
                placement={isMobile() ? "bottom-end" : "right-start"}
              >
                <DropdownMenuTrigger as={SidebarMenuAction} showOnHover>
                  <MoreHorizontalIcon />
                  <span class="sr-only">More</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent class="w-48">
                  <DropdownMenuItem>
                    <FolderIcon class="text-muted-foreground" />
                    <span>View Project</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <ShareIcon class="text-muted-foreground" />
                    <span>Share Project</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Trash2Icon class="text-muted-foreground" />
                    <span>Delete Project</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          )}
        </For>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <MoreHorizontalIcon />
            <span>More</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
