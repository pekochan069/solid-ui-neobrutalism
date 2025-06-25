import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import {
  TextField,
  TextFieldInput,
  TextFieldLabel,
} from "~/components/ui/text-field";

export default function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger as={Button<"button">}>Open</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div class="mt-4 grid flex-1 auto-rows-min gap-6">
          <TextField>
            <TextFieldLabel>Name</TextFieldLabel>
            <TextFieldInput id="sheet-demo-name" />
          </TextField>
          <TextField>
            <TextFieldLabel>Email</TextFieldLabel>
            <TextFieldInput id="sheet-demo-email" type="email" />
          </TextField>
        </div>
        <SheetFooter class="grid gap-2">
          <Button type="submit">Save changes</Button>
          <SheetClose as={Button<"button">} variant="neutral">
            Close
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
