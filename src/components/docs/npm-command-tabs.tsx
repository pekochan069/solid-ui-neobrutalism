import { useStore } from "@nanostores/solid";
import TerminalIcon from "lucide-solid/icons/terminal";

import { packageManagerAtom } from "~/atoms/global-atoms";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

export default function NpmCommandTabs() {
  const packageManager = useStore(packageManagerAtom);

  return (
    <Tabs
      value={packageManager()}
      onChange={(value) =>
        packageManagerAtom.set(value as "npm" | "yarn" | "pnpm" | "bun")
      }
    >
      <TabsList class="mt-[5px] h-auto border-0 bg-transparent py-0">
        <div class="mr-3 ml-2">
          <TerminalIcon class="size-4 text-muted-foreground" />
        </div>
        <TabsTrigger value="npm" class="py-0.5">
          <span>npm</span>
        </TabsTrigger>
        <TabsTrigger value="yarn" class="py-0.5">
          <span>yarn</span>
        </TabsTrigger>
        <TabsTrigger value="pnpm" class="py-0.5">
          <span>pnpm</span>
        </TabsTrigger>
        <TabsTrigger value="bun" class="py-0.5">
          <span>bun</span>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
