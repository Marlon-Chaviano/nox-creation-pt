"use client";

import Image from "next/image";
import {use, useEffect, useState} from "react";
import Link from "next/link";
import React from "react";

import Avatar from "../../../images/avatar-svgrepo-com.png";

import PostsList from "@/components/PostsList";
import {Post} from "@/types";
import {api} from "@/api";
import UsersPostsList from "@/components/UsersPostsList";
import LeftArrowIcon from "@/components/icons/LeftArrowIcon";

function Page({params}: {params: {userId: number}}) {
  const [userPosts, setUserPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetch = async function () {
      setUserPosts(await api.getUserPosts(Number(params.userId)));
    };

    fetch();
  }, [params.userId]);

  return (
    <section className="min-h-screen w-screen bg-primary pt-10 text-white">
      <div className="flex w-full items-center justify-center">
        <Link className="px-10" href="/posts">
          <LeftArrowIcon />
        </Link>
        <div className="flex w-full items-center justify-center space-x-2 px-4">
          <Image alt="avatar photo" loading="lazy" src={Avatar} width={80} />
          <h2 className="text-2xl font-bold">All the posts of this user </h2>
        </div>
      </div>
      <div className="px-10 pb-20 pt-10">
        <UsersPostsList posts={userPosts} />
      </div>
    </section>
  );
}

export default Page;
