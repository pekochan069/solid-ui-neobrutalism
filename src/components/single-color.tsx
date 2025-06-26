import type { Color } from "~/lib/colors";

import CheckIcon from "lucide-solid/icons/check";
import ClipboardIcon from "lucide-solid/icons/clipboard";

type ColorProps = {
  color: Color;
};

export default function SingleColor(props: ColorProps) {
  return (
    <button
      type="button"
      class="group relative flex aspect-[3/1] w-full flex-1 cursor-pointer flex-col gap-2 text-(--text) sm:aspect-[2/3] sm:h-auto sm:w-auto [&>svg]:absolute [&>svg]:top-4 [&>svg]:right-4 [&>svg]:z-10 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:opacity-0 [&>svg]:transition-opacity"
      // data-last-copied={lastCopied === color[format]}
      style={{
        "--bg": `${props.color.oklch}`,
        "--text": props.color.foreground,
      }}
      // onClick={() => {
      //   copyToClipboard(color[format]);
      //   trackEvent({
      //     name: "copy_color",
      //     properties: {
      //       color: color.id,
      //       value: color[format],
      //       format,
      //     },
      //   });
      //   setLastCopied(color[format]);
      //   toast.success(`Copied ${color[format]} to clipboard.`);
      // }}
    >
      {/* {isCopied ? (
        <CheckIcon class="group-hover:opacity-100 group-data-[last-copied=true]:opacity-100" />
      ) : (
        <ClipboardIcon class="group-hover:opacity-100" />
      )} */}
      <div class="border-ghost after:border-input w-full flex-1 rounded-md bg-(--bg) after:rounded-lg md:rounded-lg" />
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
