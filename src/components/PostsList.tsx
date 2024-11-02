"use client";
import {useEffect, useState} from "react";

import PostCard from "./PostCard";
import {PostSkeleton} from "./PostSkeleton";

import {Post} from "@/types";
import {api} from "@/api";

function PostsList() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      setPosts(await api.getAll());
    };

    fetchPosts();
  }, []);

  return (
    <ul className="grid grid-cols-1 place-content-center gap-8 pt-9 md:grid-cols-2 lg:grid-cols-3">
      {posts.length > 0
        ? posts.map((post) => <PostCard key={post.id} link post={post} />)
        : Array.from({length: 9}).map((_, i) => <PostSkeleton key={i} />)}
    </ul>
  );
}

export default PostsList;
