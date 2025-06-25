import { createSignal } from "solid-js";

import { Calendar } from "~/components/ui/calendar";

export default function CalendarDemo() {
  const [dates, setDates] = createSignal<Date[]>([]);

  return <Calendar mode="multiple" value={dates()} onValueChange={setDates} />;
}
