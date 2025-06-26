import type { ColorPalette as ColorPaletteType } from "~/lib/colors";

import { For } from "solid-js";

import ColorFormatSelector from "./color-format-selector";
import SingleColor from "./single-color";

type ColorPaletteProps = {
  colorPalette: ColorPaletteType;
};

export default function ColorPalette(props: ColorPaletteProps) {
  return (
    <div id={props.colorPalette.name} class="scroll-mt-20 rounded-lg">
      <div class="flex items-center px-4">
        <div class="flex-1 pl-1 text-sm font-medium">
          <h2 class="capitalize">{props.colorPalette.name}</h2>
        </div>
        <ColorFormatSelector color={props.colorPalette.colors[0]} />
      </div>
      <div class="flex flex-col gap-4 py-4 sm:flex-row sm:gap-2">
        <For each={props.colorPalette.colors}>
          {(color) => <SingleColor color={color} />}
        </For>
      </div>
    </div>
  );
}
