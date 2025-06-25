import { Badge } from "~/components/ui/badge";

export default function BadgeDemo() {
  return (
    <div class="flex flex-col items-center gap-2">
      <div class="flex w-full flex-wrap gap-2">
        <Badge>Badge</Badge>
        <Badge variant="neutral">Neutral Badge</Badge>
      </div>
    </div>
  );
}
