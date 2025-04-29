export interface Post {
  id: number
  username: string
  created_datetime: string
  title: string
  content: string
}

export interface CreatePostRequest {
  username: string
  title: string
  content: string
}

export interface UpdatePostRequest {
  title: string
  content: string
}

export interface PostsResponse {
  count: number
  next: string | null
  previous: string | null
  results: Post[]
}

export interface ResponseError {
  message: string[]
}
