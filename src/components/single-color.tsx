import type { Color } from "~/lib/colors";

import { createSignal, Show } from "solid-js";
import { useStore } from "@nanostores/solid";
import CheckIcon from "lucide-solid/icons/check";
import ClipboardIcon from "lucide-solid/icons/clipboard";
import { toast } from "solid-sonner";

import { $colorFormat } from "./colors-context";

type ColorProps = {
  color: Color;
};

export default function SingleColor(props: ColorProps) {
  const format = useStore($colorFormat);
  const [copied, setCopied] = createSignal(false);

  function copy() {
    navigator.clipboard.writeText(props.color[format()]).then(() => {
      setCopied(true);
      toast.success(`Copied ${props.color[format()]} to clipboard`);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  }

  return (
    <button
      type="button"
      class="group relative flex aspect-[3/1] w-full flex-1 cursor-pointer flex-col gap-2 text-(--text) sm:aspect-[2/3] sm:h-auto sm:w-auto [&>svg]:absolute [&>svg]:top-4 [&>svg]:right-4 [&>svg]:z-10 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:opacity-0 [&>svg]:transition-opacity"
      style={{
        "--bg": `${props.color.oklch}`,
        "--text": props.color.foreground,
      }}
      onClick={copy}
    >
      <Show
        when={copied()}
        fallback={
          <ClipboardIcon class="absolute top-4 right-4 z-10 size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
        }
      >
        <CheckIcon class="absolute top-4 right-4 z-10 size-3.5 opacity-100!" />
      </Show>
      <div class="w-full flex-1 rounded-md border-1 border-border bg-(--bg) after:rounded-lg md:rounded-lg" />
      <div class="flex w-full flex-col items-center justify-center gap-1">
        <span class="font-mono text-xs text-muted-foreground tabular-nums transition-colors group-hover:text-foreground group-data-[last-copied=true]:text-primary sm:hidden xl:flex">
          {props.color.className}
        </span>
        <span class="hidden font-mono text-xs text-muted-foreground tabular-nums transition-colors group-hover:text-foreground group-data-[last-copied=true]:text-primary sm:flex xl:hidden">
          {props.color.scale}
        </span>
      </div>
    </button>
  );
}
