import type { ParentProps } from "solid-js";

import { createSignal, Match, Switch } from "solid-js";

import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";
import {
  TextField,
  TextFieldInput,
  TextFieldLabel,
} from "~/components/ui/text-field";
import { cn } from "~/lib/utils";

export default function DrawerResponsiveDemo() {
  const [open, setOpen] = createSignal(false);
  const isDesktop = window.innerWidth >= 768;

  return (
    <Switch>
      <Match when={isDesktop}>
        <Dialog open={open()} onOpenChange={setOpen}>
          <DialogTrigger as={Button<"button">}>Edit Profile</DialogTrigger>
          <DialogContent class="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </Match>
      <Match when={!isDesktop}>
        <Drawer open={open()} onOpenChange={setOpen}>
          <DrawerTrigger as={Button<"button">}>Edit Profile</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader class="text-left">
              <DrawerTitle>Edit profile</DrawerTitle>
              <DrawerDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </DrawerDescription>
            </DrawerHeader>
            <ProfileForm class="px-4" />
            <DrawerFooter class="pt-2">
              <DrawerClose as={Button<"button">} variant="outline">
                Cancel
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Match>
    </Switch>
  );
}

function ProfileForm(props: ParentProps<{ class: string }>) {
  return (
    <form class={cn("grid items-start gap-6", props.class)}>
      <div class="grid gap-3">
        <TextField>
          <TextFieldLabel for="email">Email</TextFieldLabel>
          <TextFieldInput type="email" id="email" value="shadcn@example.com" />
        </TextField>
      </div>
      <div class="grid gap-3">
        <TextField>
          <TextFieldLabel for="name">Name</TextFieldLabel>
          <TextFieldInput type="text" id="name" value="Shad CN" />
        </TextField>
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  );
}
