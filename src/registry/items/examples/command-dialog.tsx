import { createSignal, onCleanup, onMount } from "solid-js";
import CalculatorIcon from "lucide-solid/icons/calculator";
import CalendarIcon from "lucide-solid/icons/calendar";
import CreditCardIcon from "lucide-solid/icons/credit-card";
import SettingsIcon from "lucide-solid/icons/settings";
import SmileIcon from "lucide-solid/icons/smile";
import UserIcon from "lucide-solid/icons/user";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "~/components/ui/command";

export default function CommandDialogDemo() {
  const [open, setOpen] = createSignal(false);

  const down = (e: KeyboardEvent) => {
    if (e.key === "j" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      setOpen((prev) => !prev);
    }
  };

  onMount(() => {
    document.addEventListener("keydown", down);
  });

  onCleanup(() => {
    document.removeEventListener("keydown", down);
  });

  return (
    <>
      <p class="text-sm text-foreground">
        Press{" "}
        <kbd class="pointer-events-none inline-flex h-5 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-foreground opacity-100 select-none">
          <span class="text-xs">⌘</span>J
        </kbd>
      </p>
      <CommandDialog open={open()} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <CalendarIcon />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <SmileIcon />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <CalculatorIcon />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <UserIcon />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCardIcon />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <SettingsIcon />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
