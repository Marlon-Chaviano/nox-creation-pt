"use client";
import {useEffect, useState} from "react";

import PostCard from "./PostCard";
import {PostSkeleton} from "./PostSkeleton";

import {Post} from "@/types";

interface Props {
  posts: Post[];
}

function UsersPostsList({posts}: Props) {
  return (
    <ul className="grid grid-cols-1 place-content-center gap-8 pt-9 md:grid-cols-2 lg:grid-cols-3">
      {posts.length > 0
        ? posts.map((post) => <PostCard key={post.id} avatar post={post} />)
        : Array.from({length: 6}).map((_, i) => <PostSkeleton key={i} avatar />)}
    </ul>
  );
}

export default UsersPostsList;
