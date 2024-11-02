import {Skeleton} from "@/components/ui/skeleton";

export function PostSkeleton({avatar}: {avatar?: boolean}) {
  return (
    <div className="space-y-6 rounded-xl border-[0.5px] border-white/5 px-4 py-10 text-center shadow-2xl">
      <div className={`${avatar ? "hidden" : "flex"} w-full justify-center`}>
        <Skeleton className="h-24 w-24 rounded-full" />
      </div>
      <div className="flex flex-col items-center space-y-2">
        <Skeleton className="h-4 w-full" />
      </div>

      <div className="flex w-full flex-col items-center space-y-2">
        <Skeleton className="h-4 w-full max-w-[400px]" />
        <Skeleton className="h-4 w-full max-w-[400px]" />
        <Skeleton className="h-4 w-full max-w-[400px]" />
      </div>
    </div>
  );
}
