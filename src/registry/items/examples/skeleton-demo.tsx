import { Skeleton } from "~/components/ui/skeleton";

export default function SkeletonDemo() {
  return (
    <div class="flex items-center space-x-4">
      <Skeleton height={48} circle />
      <div class="space-y-2">
        <Skeleton height={16} width={250} />
        <Skeleton height={16} width={200} />
      </div>
    </div>
  );
}
