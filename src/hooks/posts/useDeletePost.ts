import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { AxiosError } from "axios"

import { fetchDeletePost } from "@/lib/api/posts/fetchDeletePost"
import type { ResponseError } from "@/lib/types/post.types"

export function useDeletePost() {
  const queryClient = useQueryClient()

  const { mutate, isLoading, isError, error } = useMutation<void, AxiosError<ResponseError>, number>({
    mutationFn: (id: number) => fetchDeletePost(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] })
    },
  })

  return {
    deletePost: mutate,
    isLoading,
    isError,
    error,
  }
}
