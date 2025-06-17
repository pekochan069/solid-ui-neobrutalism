import type { PackageManager } from "~/types/store";

import { persistentAtom } from "@nanostores/persistent";

const packageManagerAtom = persistentAtom<PackageManager>(
  "packageManager",
  "npm",
);

export { packageManagerAtom };
