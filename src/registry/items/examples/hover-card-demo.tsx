import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card";

export default function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger as={Button<"button">} variant="link">
        solid-js
      </HoverCardTrigger>
      <HoverCardContent class="w-80">
        <div class="flex justify-between gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/solidjs.png" />
            <AvatarFallback>Solid.js</AvatarFallback>
          </Avatar>
          <div class="space-y-1">
            <h4 class="text-sm font-semibold">@solidjs</h4>
            <p class="text-sm">
              The SolidJS framework is a declarative, fast, and efficient
              JavaScript library for building user interfaces.
            </p>
            <div class="text-xs text-muted-foreground">Joined June 2021</div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
