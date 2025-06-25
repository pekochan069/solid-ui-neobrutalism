import BoldIcon from "lucide-solid/icons/bold";
import ItalicIcon from "lucide-solid/icons/italic";
import UnderlineIcon from "lucide-solid/icons/underline";

import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group";

export default function ToggleGroupDemo() {
  return (
    <ToggleGroup>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <BoldIcon class="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <ItalicIcon class="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <UnderlineIcon class="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
