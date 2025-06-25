import { createSignal } from "solid-js";
import MinusIcon from "lucide-solid/icons/minus";
import PlusIcon from "lucide-solid/icons/plus";

import { Button } from "~/components/ui/button";
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

export default function DrawerDemo() {
  const [goal, setGoal] = createSignal(250);

  const onClick = (change: number) => {
    setGoal(goal() + change);
  };

  return (
    <Drawer>
      <DrawerTrigger as={Button<"button">}>Open Drawer</DrawerTrigger>
      <DrawerContent>
        <div class="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div class="p-4 pb-0">
            <div class="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                class="size-8 shrink-0 rounded-full"
                onClick={() => onClick(-10)}
                disabled={goal() <= 200}
              >
                <MinusIcon class="size-4" />
                <span class="sr-only">Decrease</span>
              </Button>
              <div class="flex-1 text-center">
                <div class="text-7xl font-bold tracking-tighter">{goal()}</div>
                <div class="text-[0.70rem] text-muted-foreground uppercase">
                  Calories/day
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                class="size-8 shrink-0 rounded-full"
                onClick={() => onClick(10)}
                disabled={goal() >= 400}
              >
                <PlusIcon class="size-4" />
                <span class="sr-only">Increase</span>
              </Button>
            </div>
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose as={Button<"button">} variant="outline">
              Cancel
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
