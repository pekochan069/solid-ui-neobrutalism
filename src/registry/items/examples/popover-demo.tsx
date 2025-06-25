import { Button } from "~/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import {
  TextField,
  TextFieldInput,
  TextFieldLabel,
} from "~/components/ui/text-field";

export default function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger as={Button<"button">}>Open</PopoverTrigger>
      <PopoverContent class="w-80">
        <div class="grid gap-4">
          <div class="space-y-2">
            <h4 class="leading-none font-medium">Dimensions</h4>
            <p class="text-sm">Set the dimensions for the layer.</p>
          </div>
          <div class="grid gap-4">
            <div class="items-center gap-4">
              <TextField>
                <TextFieldLabel>Width</TextFieldLabel>
                <TextFieldInput type="text" id="width" />
              </TextField>
            </div>
            <div class="items-center gap-4">
              <TextField>
                <TextFieldLabel>Max. width</TextFieldLabel>
                <TextFieldInput type="text" id="maxWidth" />
              </TextField>
            </div>
            <div class="items-center gap-4">
              <TextField>
                <TextFieldLabel>Height</TextFieldLabel>
                <TextFieldInput id="height" class="col-span-2 h-8" />
              </TextField>
            </div>
            <div class="items-center gap-4">
              <TextField>
                <TextFieldLabel>Max. height</TextFieldLabel>
                <TextFieldInput id="maxHeight" class="col-span-2 h-8" />
              </TextField>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
