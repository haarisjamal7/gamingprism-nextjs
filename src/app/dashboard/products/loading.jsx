
import { TableSkeleton } from "@/app/components/Skeleton";

export default function Loading() {
  return <TableSkeleton rows={10} columns={5} />;
}
