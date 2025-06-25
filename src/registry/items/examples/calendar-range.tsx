import { createSignal } from "solid-js";

import { Calendar } from "~/components/ui/calendar";

export default function CalendarDemo() {
  const [dates, setDates] = createSignal<
    | {
        from: Date | null;
        to: Date | null;
      }
    | undefined
  >();

  return <Calendar mode="range" value={dates()} onValueChange={setDates} />;
}
