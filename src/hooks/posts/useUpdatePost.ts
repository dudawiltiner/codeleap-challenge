import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { AxiosError } from "axios"

import { fetchUpdatePost } from "@/lib/api/posts/fetchUpdatePost"
import type { UpdatePostRequest, Post, ResponseError } from "@/lib/types/post.types"

interface UpdatePostParams {
  id: number
  data: UpdatePostRequest
}

export function useUpdatePost() {
  const queryClient = useQueryClient()

  const { mutate, isLoading, isError, error } = useMutation<Post, AxiosError<ResponseError>, UpdatePostParams>({
    mutationFn: ({ id, data }: UpdatePostParams) => fetchUpdatePost(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] })
    },
  })

  return {
    updatePost: mutate,
    isLoading,
    isError,
    error,
  }
}
