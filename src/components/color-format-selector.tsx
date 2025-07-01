import type { Color, ColorFormat } from "~/lib/colors";

import { createMemo, Match, on, Switch } from "solid-js";
import { useStore } from "@nanostores/solid";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { getColorFormat } from "~/lib/colors";
import { $colorFormat } from "./colors-context";

type ColorFormatSelectorProps = {
  color: Color;
};

export default function ColorFormatSelector(props: ColorFormatSelectorProps) {
  const colorFormat = useStore($colorFormat);
  const colorFormatList = createMemo(() => getColorFormat(props.color));

  const onChange = (value: ColorFormat | null) => {
    console.log(value);
    if (value === colorFormat() || value === null) {
      return;
    }

    $colorFormat.set(value);
  };

  return (
    <div>
      <Select
        defaultValue={"oklch"}
        options={["className", "hex", "rgb", "hsl", "oklch", "var"]}
        value={colorFormat()}
        onChange={(v) => onChange(v as ColorFormat | null)}
        itemComponent={(itemProps) => (
          <SelectItem item={itemProps.item}>
            <div>{itemProps.item.rawValue}</div>
            <div class="text-muted-foreground">
              <Switch>
                <Match when={itemProps.item.rawValue === "className"}>
                  {colorFormatList().className}
                </Match>
                <Match when={itemProps.item.rawValue === "hex"}>
                  {colorFormatList().hex}
                </Match>
                <Match when={itemProps.item.rawValue === "rgb"}>
                  {colorFormatList().rgb}
                </Match>
                <Match when={itemProps.item.rawValue === "hsl"}>
                  {colorFormatList().hsl}
                </Match>
                <Match when={itemProps.item.rawValue === "oklch"}>
                  {colorFormatList().oklch}
                </Match>
                <Match when={itemProps.item.rawValue === "var"}>
                  {colorFormatList().var}
                </Match>
              </Switch>
            </div>
          </SelectItem>
        )}
      >
        <SelectTrigger class="w-32">
          <SelectValue<ColorFormat>>
            {(state) => state.selectedOption()}
          </SelectValue>
        </SelectTrigger>
        <SelectContent />
      </Select>
    </div>
  );
}
