import { createSignal } from "solid-js";

import { Calendar } from "~/components/ui/calendar";

export default function CalendarDemo() {
  const [date, setDate] = createSignal<Date | null>(null);

  return <Calendar mode="single" value={date()} onValueChange={setDate} />;
}
