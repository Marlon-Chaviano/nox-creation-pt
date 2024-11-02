import React from "react";

import PostsList from "@/components/PostsList";

const page = () => {
  return (
    <section className="flex min-h-screen w-screen flex-col items-center bg-primary px-6 py-10 pt-10 text-white lg:px-14">
      <div className="w-full">
        <div className="flex w-full justify-center md:hidden">
          <h4 className="text-2xl font-bold">Posts</h4>
        </div>
        <PostsList />
      </div>
    </section>
  );
};

export default page;
