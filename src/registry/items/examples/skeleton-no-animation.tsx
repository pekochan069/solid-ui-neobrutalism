import { Skeleton } from "~/components/ui/skeleton";

export default function SkeletonNoAnimation() {
  return <Skeleton height={48} circle animate={false} />;
}
