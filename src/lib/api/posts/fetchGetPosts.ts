import { api } from "../axios-config"
import type { PostsResponse } from "@/lib/types/post.types"

export async function fetchGetPosts(): Promise<PostsResponse> {
  const { data } = await api.get<PostsResponse>("")
  return data
}
