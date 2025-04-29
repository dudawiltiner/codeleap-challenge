import axios from "axios"
import type { CreatePostRequest, Post, UpdatePostRequest } from "./types"

const API_URL = "https://dev.codeleap.co.uk/careers/"

export const api = axios.create({
  baseURL: API_URL,
})

export const postsApi = {
  getPosts: async (): Promise<{ results: Post[] }> => {
    const response = await api.get("")
    return response.data
  },

  createPost: async (data: CreatePostRequest): Promise<Post> => {
    const response = await api.post("", data)
    return response.data
  },

  updatePost: async (id: number, data: UpdatePostRequest): Promise<Post> => {
    const response = await api.patch(`${id}/`, data)
    return response.data
  },

  deletePost: async (id: number): Promise<void> => {
    await api.delete(`${id}/`)
  },
}
