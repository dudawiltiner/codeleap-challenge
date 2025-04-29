"use client";

import { useAppDispatch, useAppSelector } from "@/providers/redux/hooks";
import { openDeleteModal, openEditModal } from "@/providers/redux/modalSlice";
import { Edit, Trash2 } from "lucide-react";
import type { PostHeaderProps } from "./PostHeader.types";

export function PostHeader({ post }: PostHeaderProps) {
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector((state) => state.user);

  const isAuthor = currentUser?.username === post.username;

  console.log("Current user:", currentUser?.username);
  console.log("Post author:", post.username);
  console.log("Is author?", isAuthor);

  return (
    <div className="bg-[#7695ec] text-white p-4 rounded-t-lg flex justify-between items-center">
      <h3 className="font-bold text-lg truncate">{post.title}</h3>

      {isAuthor && (
        <div className="flex gap-4">
          <button
            onClick={() => dispatch(openDeleteModal(post.id))}
            className="text-white hover:opacity-80"
            aria-label="Delete post"
          >
            <Trash2 size={20} />
          </button>
          <button
            onClick={() => dispatch(openEditModal(post))}
            className="text-white hover:opacity-80"
            aria-label="Edit post"
          >
            <Edit size={20} />
          </button>
        </div>
      )}
    </div>
  );
}
