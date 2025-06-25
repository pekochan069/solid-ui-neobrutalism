import type { ParentProps } from "solid-js";

import { createSignal, mergeProps } from "solid-js";

import { Button } from "~/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";
import { cn } from "~/lib/utils";

export default function CollapsibleCodeContent(
  props: ParentProps<{ frame?: boolean; class?: string }>,
) {
  props = mergeProps({ frame: true }, props);

  const [opened, setOpened] = createSignal(false);

  return (
    <Collapsible
      open={opened()}
      onOpenChange={setOpened}
      forceMount
      class={cn("group/collapsible relative mt-8", props.class)}
    >
      <CollapsibleTrigger
        as="div"
        class="absolute top-1.5 z-10 flex items-center data-[has-frame=false]:right-12 data-[has-frame=true]:right-4"
        data-has-frame={props.frame}
      >
        <Button
          variant="ghost"
          size="sm"
          class="h-7 rounded-md px-2 text-muted-foreground"
        >
          {opened() ? "Collapse" : "Expand"}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent class="relative overflow-hidden rounded-base border-2 border-border shadow-shadow ui-closed:max-h-64 [&_.expressive-code]:my-0 [&_.expressive-code]:border-none [&_.expressive-code]:shadow-none [&>figure]:mt-0 [&>figure]:md:!mx-0">
        {props.children}
      </CollapsibleContent>
      <CollapsibleTrigger class="absolute inset-x-0 -bottom-2.5 mx-1 my-3 flex h-20 items-center justify-center rounded-b-lg bg-gradient-to-b from-code-background/40 to-code-background text-sm text-muted-foreground group-ui-expanded/collapsible:hidden">
        {opened() ? "Collapse" : "Expand"}
      </CollapsibleTrigger>
    </Collapsible>
  );
}
