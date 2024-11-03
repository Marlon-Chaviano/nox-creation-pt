import Link from "next/link";

export default function Page() {
  return (
    <section className="flex min-h-screen w-screen items-center bg-primary">
      <div className="mx-auto flex w-full max-w-md flex-col space-y-10 px-8 text-center">
        <h2 className="text-5xl font-bold text-red-200">
          <span>Error</span> <span className="">500</span>
        </h2>
        <p className="text-2xl font-semibold text-white">
          An error occurred while fetching the posts
        </p>
        <Link
          className="mx-auto w-fit rounded-xl border-[.30rem] p-4 px-10 text-2xl font-semibold text-white shadow-2xl transition duration-200 hover:bg-white hover:text-primary"
          href="/posts"
        >
          Try Again
        </Link>
      </div>
    </section>
  );
}
