import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { AxiosError } from "axios"

import { fetchCreatePost } from "@/lib/api/posts/fetchCreatePost"
import type { CreatePostRequest, Post, ResponseError } from "@/lib/types/post.types"

export function useCreatePost() {
  const queryClient = useQueryClient()

  const { mutate, isLoading, isError, error } = useMutation<Post, AxiosError<ResponseError>, CreatePostRequest>({
    mutationFn: (data: CreatePostRequest) => fetchCreatePost(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] })
    },
  })

  return {
    createPost: mutate,
    isLoading,
    isError,
    error,
  }
}
