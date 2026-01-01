import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="p-6 max-w-8xl mx-auto space-y-6">
      <Skeleton className="h-8 w-3/4" />

      <div className="flex gap-4">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-4 w-32" />
      </div>

      <div className="rounded-xl p-6 grid md:grid-cols-2 gap-6">
        <Skeleton className="h-72 w-full rounded-lg" />

        <div className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />

          <div className="space-y-2 pt-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-20" />
          </div>

          <Skeleton className="h-6 w-24 rounded-full mt-4" />
        </div>
      </div>
    </div>
  );
}
