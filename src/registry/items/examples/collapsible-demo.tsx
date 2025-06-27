import { createSignal } from "solid-js";
import ChevronsUpDown from "lucide-solid/icons/chevrons-up-down";

import { Button } from "~/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";

export default function CollapsibleDemo() {
  const [open, setOpen] = createSignal(false);

  return (
    <Collapsible
      open={open()}
      onOpenChange={setOpen}
      class="flex w-[330px] flex-col gap-2"
    >
      <div class="flex items-center justify-between gap-4 px-4">
        <h4 class="text-sm font-semibold">
          @pekochan069 starred 3 repositories
        </h4>
        <CollapsibleTrigger
          as={Button}
          variant="ghost"
          size="icon"
          class="size-8"
        >
          <ChevronsUpDown />
          <span class="sr-only">Toggle</span>
        </CollapsibleTrigger>
      </div>
      <div class="rounded-md border px-4 py-2 font-mono text-sm">
        @kobalte/core
      </div>
      <CollapsibleContent class="flex flex-col gap-2">
        <div class="rounded-md border px-4 py-2 font-mono text-sm">
          @corvu/drawer
        </div>
        <div class="rounded-md border px-4 py-2 font-mono text-sm">
          solid-sonner
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
