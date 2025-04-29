import { useQuery } from "@tanstack/react-query"
import type { AxiosError } from "axios"

import { fetchGetPosts } from "@/lib/api/posts/fetchGetPosts"
import type { PostsResponse, ResponseError } from "@/lib/types/post.types"

export function useGetPosts() {
  const { data, isLoading, error, isError, refetch, isRefetching } = useQuery<PostsResponse, AxiosError<ResponseError>>(
    {
      queryKey: ["posts"],
      queryFn: fetchGetPosts,
      refetchOnWindowFocus: false,
      retry: false,
    },
  )

  return {
    posts: data?.results || [],
    isLoading,
    error,
    isError,
    refetch,
    isRefetching,
  }
}
