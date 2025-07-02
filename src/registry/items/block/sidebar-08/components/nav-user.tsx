import BadgeCheckIcon from "lucide-solid/icons/badge-check";
import BellIcon from "lucide-solid/icons/bell";
import ChevronsUpDownIcon from "lucide-solid/icons/chevrons-up-down";
import CreditCardIcon from "lucide-solid/icons/credit-card";
import LogOutIcon from "lucide-solid/icons/log-out";
import SparklesIcon from "lucide-solid/icons/sparkles";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "~/components/ui/sidebar";

export function NavUser(props: {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}) {
  const { isMobile } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu
          placement={isMobile() ? "bottom-end" : "right-end"}
          sameWidth
          gutter={4}
        >
          <DropdownMenuTrigger
            as={SidebarMenuButton}
            size="lg"
            class="ui-expanded:bg-sidebar-accent ui-expanded:text-sidebar-accent-foreground"
          >
            <Avatar class="h-8 w-8 rounded-lg">
              <AvatarImage src={props.user.avatar} alt={props.user.name} />
              <AvatarFallback class="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div class="grid flex-1 text-left text-sm leading-tight">
              <span class="truncate font-medium">{props.user.name}</span>
              <span class="truncate text-xs">{props.user.email}</span>
            </div>
            <ChevronsUpDownIcon class="ml-auto size-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent class="min-w-56 rounded-lg">
            <DropdownMenuLabel class="p-0 font-normal">
              <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar class="h-8 w-8 rounded-lg">
                  <AvatarImage src={props.user.avatar} alt={props.user.name} />
                  <AvatarFallback class="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div class="grid flex-1 text-left text-sm leading-tight">
                  <span class="truncate font-medium">{props.user.name}</span>
                  <span class="truncate text-xs">{props.user.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <SparklesIcon />
                Upgrade to Pro
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <BadgeCheckIcon />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCardIcon />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BellIcon />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOutIcon />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
