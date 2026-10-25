
export default function HomePageSkeleton() {
  return (
    <main className="min-h-screen overflow-hidden bg-white px-5 py-10 text-gray-900 sm:px-8 lg:px-14">
      {/* Hero Skeleton */}
      <section className="mx-auto grid min-h-[75vh] max-w-[1440px] items-center gap-12 lg:grid-cols-2">
        <div className="space-y-7">
          {/* Small Label */}
          <div className="h-4 w-36 animate-pulse rounded-full bg-gray-200" />

          {/* Heading */}
          <div className="space-y-4">
            <div className="h-10 w-full max-w-lg animate-pulse rounded-lg bg-gray-200 sm:h-14" />
            <div className="h-10 w-4/5 max-w-md animate-pulse rounded-lg bg-gray-100 sm:h-14" />
          </div>

          {/* Description */}
          <div className="space-y-3">
            <div className="h-3 w-full max-w-lg animate-pulse rounded bg-gray-200" />
            <div className="h-3 w-11/12 max-w-md animate-pulse rounded bg-gray-200" />
            <div className="h-3 w-3/5 max-w-sm animate-pulse rounded bg-gray-100" />
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="h-12 w-44 animate-pulse rounded-[10px] bg-gray-200" />
            <div className="h-12 w-36 animate-pulse rounded-[10px] border border-gray-200 bg-gray-50" />
          </div>
        </div>

        {/* Hero Image Placeholder */}
        <div className="mx-auto w-full max-w-xl">
          <div className="aspect-[4/3] animate-pulse rounded-3xl bg-gray-100" />
        </div>
      </section>

      {/* Trusted By / Logos */}
      <section className="mx-auto max-w-[1440px] space-y-8 py-12">
        <div className="mx-auto h-3 w-48 animate-pulse rounded bg-gray-200" />

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="h-8 w-24 animate-pulse rounded-md bg-gray-100"
            />
          ))}
        </div>
      </section>

      {/* Next Section */}
      <section className="mx-auto max-w-[1440px] space-y-8 py-16">
        <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />

        <div className="h-8 w-full max-w-xl animate-pulse rounded-lg bg-gray-200 sm:h-12" />

        <div className="grid gap-5 pt-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="h-48 animate-pulse rounded-2xl border border-gray-100 bg-gray-50"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
