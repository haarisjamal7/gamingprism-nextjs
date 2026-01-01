"use client";

import { Button } from "@/components/ui/button";

export function PageError({
  title = "Something went wrong",
  description = "An unexpected error occurred. Please try again.",
  onRetry,
}) {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center gap-4 p-6 text-center">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-muted-foreground">{description}</p>

      {onRetry && (
        <Button onClick={onRetry}>
          Try again
        </Button>
      )}
    </div>
  );
}
