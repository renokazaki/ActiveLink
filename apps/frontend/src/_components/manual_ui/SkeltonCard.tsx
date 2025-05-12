import { Skeleton } from "../shadcn_ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[100px] w-full rounded-xl" />
    </div>
  )
}

export function SkeletonTab() {
    return (
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
        </div>
    )
  }