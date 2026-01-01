"use client";

import { PageError } from "@/app/components/Error";

export default function Error({ reset }) {
  return (
    <PageError
      title="Failed to load posts"
      description="We couldn't fetch the posts. Please try again."
      onRetry={reset}
    />
  );
}
