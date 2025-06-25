import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";

export default function SheetSide() {
  return (
    <div class="grid grid-cols-2 gap-4">
      <SheetLeft />
      <SheetTop />
      <SheetRight />
      <SheetBottom />
    </div>
  );
}

function SheetLeft() {
  return (
    <Sheet>
      <SheetTrigger as={Button<"button">}>Left</SheetTrigger>
      <SheetContent position="left">
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

function SheetTop() {
  return (
    <Sheet>
      <SheetTrigger as={Button<"button">}>Top</SheetTrigger>
      <SheetContent position="top">
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

function SheetRight() {
  return (
    <Sheet>
      <SheetTrigger as={Button<"button">}>Right</SheetTrigger>
      <SheetContent position="right">
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

function SheetBottom() {
  return (
    <Sheet>
      <SheetTrigger as={Button<"button">}>Bottom</SheetTrigger>
      <SheetContent position="bottom">
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
