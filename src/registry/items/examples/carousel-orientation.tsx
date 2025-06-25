import { For } from "solid-js";

import { Card, CardContent } from "~/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

export default function CarouselDemo() {
  return (
    <Carousel
      class="w-full max-w-xs"
      opts={{
        align: "start",
      }}
      orientation="vertical"
    >
      <CarouselContent class="-mt-1 h-[200px]">
        <For each={[1, 2, 3, 4, 5]}>
          {(_, index) => (
            <CarouselItem class="pt-1 md:basis-1/2">
              <div class="p-1">
                <Card>
                  <CardContent class="flex items-center justify-center p-6">
                    <span class="text-4xl font-semibold">{index() + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          )}
        </For>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
