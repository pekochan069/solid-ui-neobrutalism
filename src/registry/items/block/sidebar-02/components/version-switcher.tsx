import { createSignal, For } from "solid-js";
import CheckIcon from "lucide-solid/icons/check";
import ChevronsUpDownIcn from "lucide-solid/icons/chevrons-up-down";
import GalleryVerticalEndIcon from "lucide-solid/icons/gallery-vertical-end";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";

export function VersionSwitcher(props: {
  versions: string[];
  defaultVersion: string;
}) {
  const [selectedVersion, setSelectedVersion] = createSignal(
    props.defaultVersion,
  );

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu sameWidth>
          <DropdownMenuTrigger
            as={SidebarMenuButton}
            size="lg"
            class="ui-expanded:bg-sidebar-accent ui-expanded:text-sidebar-accent-foreground"
          >
            <div class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
              <GalleryVerticalEndIcon class="size-4" />
            </div>
            <div class="flex flex-col gap-0.5 leading-none">
              <span class="font-medium">Documentation</span>
              <span class="">v{selectedVersion()}</span>
            </div>
            <ChevronsUpDownIcn class="ml-auto" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <For each={props.versions}>
              {(version) => (
                <DropdownMenuItem onSelect={() => setSelectedVersion(version)}>
                  v{version}{" "}
                  {version === selectedVersion() && (
                    <CheckIcon class="ml-auto" />
                  )}
                </DropdownMenuItem>
              )}
            </For>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
