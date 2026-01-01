import { Skeleton } from "@/components/ui/skeleton";

export function TableSkeleton({
  rows = 10,
  columns = 4,
  titleWidth = "w-48",
}) {
  return (
    <div className="p-6 space-y-6">
      <Skeleton className={`h-8 ${titleWidth}`} />
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
      >
        {Array.from({ length: columns }).map((_, i) => (
          <Skeleton key={i} className="h-6" />
        ))}
      </div>
      <div className="space-y-4">
        {Array.from({ length: rows }).map((_, row) => (
          <div
            key={row}
            className="grid gap-4"
            style={{
              gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
            }}
          >
            {Array.from({ length: columns }).map((_, col) => (
              <Skeleton key={col} className="h-6" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
