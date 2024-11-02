import {redirect} from "next/navigation";

import {Post} from "./types";

export const api = {
  getAll: async function () {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL as string);
      const fetchedPosts = (await response.json()) as Post[];
      const sixPostsOneEveryUser = [];
      const users = new Set();

      for (const post of fetchedPosts) {
        if (!users.has(post.userId) && sixPostsOneEveryUser.length < 6) {
          sixPostsOneEveryUser.push(post);
          users.add(post.userId);
        }

        if (sixPostsOneEveryUser.length == 6) break;
      }

      return sixPostsOneEveryUser;
    } catch (e) {
      redirect("/error");
    }
  },
  getUserPosts: async (userId: number) => {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL as string);
      const fetchedPosts = (await response.json()) as Post[];

      return fetchedPosts.filter((post) => post.userId == userId);
    } catch (e) {
      redirect("/error");
    }
  },
};