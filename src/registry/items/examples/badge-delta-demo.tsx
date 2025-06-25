import { BadgeDelta } from "~/components/ui/badge-delta";

export default function BadgeDemo() {
  return (
    <div class="flex flex-col items-center gap-2">
      <div class="flex w-full flex-wrap gap-2">
        <BadgeDelta deltaType="decrease">-5</BadgeDelta>
        <BadgeDelta deltaType="moderateDecrease">-1</BadgeDelta>
        <BadgeDelta deltaType="unchanged">0</BadgeDelta>
        <BadgeDelta deltaType="moderateIncrease">+1</BadgeDelta>
        <BadgeDelta deltaType="increase">+5</BadgeDelta>
      </div>
    </div>
  );
}
