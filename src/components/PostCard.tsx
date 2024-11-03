import {AvatarIcon} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

import Avatar from "../images/avatar-svgrepo-com.png";

import {Post} from "@/types";
interface Props {
  post: Post;
  avatar?: boolean;
  link?: boolean;
}

function PostCard({post, avatar, link}: Props) {
  if (link) {
    return (
      <Link
        className="flex w-full flex-col items-center space-y-4 rounded-xl border-gray-500 px-4 py-4 text-center shadow-2xl transition duration-300 hover:border"
        href={`posts/${post.userId}`}
      >
        <div className={`${avatar && "hidden"}`}>
          <Image alt="avatar photo" loading="lazy" src={Avatar} width={100} />
        </div>
        <div className="flex flex-col space-y-2">
          <h2 className="text-2xl font-bold">{post.title}</h2>
          <p className="mt-auto text-gray-400">{post.body}</p>
        </div>
      </Link>
    );
  } else {
    return (
      <div className="flex w-full flex-col items-center space-y-4 rounded-xl border border-gray-500 px-4 py-4 text-center shadow-2xl">
        <div className={`${avatar && "hidden"}`}>
          <Image alt="avatar photo" loading="lazy" src={Avatar} width={100} />
        </div>
        <div className="flex flex-col space-y-2">
          <h2 className="text-2xl font-bold">{post.title}</h2>
          <p className="mt-auto text-gray-400">{post.body}</p>
        </div>
      </div>
    );
  }
}

export default PostCard;
