"use client";

import Link from "next/link";
import {useParams, useSearchParams} from "next/navigation";

function Error() {
  const params = useSearchParams();
  const redirect = params.get("redirectTo") || "/";
  const message = params.get("message");
  const statusCode = params.get("statusCode");

  return (
    <section className="flex min-h-screen w-screen items-center bg-primary">
      <div className="mx-auto flex w-full max-w-md flex-col space-y-10 px-8 text-center">
        <h2 className="text-5xl font-bold text-red-200 text-white">
          <span>Error</span> <span className="">{statusCode}</span>
        </h2>
        <p className="text-2xl font-semibold text-white">{message}</p>
        <Link
          className="mx-auto w-fit rounded-xl border border-[.30rem] p-4 px-10 text-2xl font-semibold text-white shadow-2xl transition duration-200 hover:bg-white hover:text-primary"
          href={redirect}
        >
          Try Again
        </Link>
      </div>
    </section>
  );
}

export default Error;
