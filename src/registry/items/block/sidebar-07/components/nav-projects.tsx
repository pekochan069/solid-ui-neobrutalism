import type { LucideIcon } from "lucide-solid";

import FolderIcon from "lucide-solid/icons/folder";
import ForwardIcon from "lucide-solid/icons/forward";
import MoreHorizontalIcon from "lucide-solid/icons/more-horizontal";
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

export function NavProjects({
  projects,
}: {
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
        {projects.map((item) => (
          <SidebarMenuItem>
            <SidebarMenuButton as="a" href={item.url}>
              <item.icon />
              <span>{item.name}</span>
            </SidebarMenuButton>
            <DropdownMenu placement={isMobile() ? "bottom-end" : "right-start"}>
              <DropdownMenuTrigger as={SidebarMenuAction} showOnHover>
                <MoreHorizontalIcon />
                <span class="sr-only">More</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent class="w-48 rounded-lg">
                <DropdownMenuItem>
                  <FolderIcon class="text-muted-foreground" />
                  <span>View Project</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ForwardIcon class="text-muted-foreground" />
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
        ))}
        <SidebarMenuItem>
          <SidebarMenuButton class="text-sidebar-foreground/70">
            <MoreHorizontalIcon class="text-sidebar-foreground/70" />
            <span>More</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
