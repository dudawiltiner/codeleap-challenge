import { api } from "../axios-config"
import type { UpdatePostRequest, Post } from "@/lib/types/post.types"

export async function fetchUpdatePost(id: number, params: UpdatePostRequest): Promise<Post> {
  const { data } = await api.patch<Post>(`${id}/`, params)
  return data
}
