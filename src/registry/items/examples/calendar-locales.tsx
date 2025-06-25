import { createSignal } from "solid-js";

import { Calendar } from "~/components/ui/calendar";

export default function CalendarDemo() {
  const [date, setDate] = createSignal<Date | null>(null);

  return (
    <Calendar
      locales="ko-KR"
      mode="single"
      value={date()}
      onValueChange={setDate}
    />
  );
}
