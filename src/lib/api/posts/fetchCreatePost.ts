import { api } from "../axios-config"
import type { CreatePostRequest, Post } from "@/lib/types/post.types"

export async function fetchCreatePost(params: CreatePostRequest): Promise<Post> {
  const { data } = await api.post<Post>("", params)
  return data
}
