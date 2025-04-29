import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { postsApi } from "@/lib/api"
import type { CreatePostRequest, UpdatePostRequest } from "@/lib/types"

export const usePosts = () => {
  const queryClient = useQueryClient()

  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: postsApi.getPosts,
  })

  const createPostMutation = useMutation({
    mutationFn: (newPost: CreatePostRequest) => postsApi.createPost(newPost),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] })
    },
  })

  const updatePostMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: UpdatePostRequest }) => postsApi.updatePost(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] })
    },
  })

  const deletePostMutation = useMutation({
    mutationFn: (id: number) => postsApi.deletePost(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] })
    },
  })

  return {
    posts: postsQuery.data?.results || [],
    isLoading: postsQuery.isLoading,
    isError: postsQuery.isError,
    createPost: createPostMutation.mutate,
    updatePost: updatePostMutation.mutate,
    deletePost: deletePostMutation.mutate,
  }
}
