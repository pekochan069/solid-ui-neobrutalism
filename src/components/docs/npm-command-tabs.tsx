import { useStore } from "@nanostores/solid";

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
      <TabsList>
        <TabsTrigger value="npm">
          <span>npm</span>
        </TabsTrigger>
        <TabsTrigger value="yarn">
          <span>yarn</span>
        </TabsTrigger>
        <TabsTrigger value="pnpm">
          <span>pnpm</span>
        </TabsTrigger>
        <TabsTrigger value="bun">
          <span>bun</span>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
