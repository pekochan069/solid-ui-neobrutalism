import { toast } from "solid-sonner";

import { Button } from "~/components/ui/button";

export default function SonnerDemo() {
  return (
    <Button
      onClick={() =>
        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 12:00 PM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Show Toast
    </Button>
  );
}
