"use client"

import { PostCard } from "@/components/organisms/PostCard/PostCard"
import { SearchBar } from "@/components/molecules/SearchBar/SearchBar"
import { useFilteredPosts } from "@/hooks/posts/useFilteredPosts"

export function PostList() {
  const { posts, isLoading, isError, handleSearch, handleDateFilterChange } = useFilteredPosts()

  if (isLoading) {
    return <div className="text-center py-8">Loading posts...</div>
  }

  if (isError) {
    return <div className="text-center py-8 text-red-500">Error loading posts. Please try again.</div>
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} onDateFilterChange={handleDateFilterChange} />

      {posts.length === 0 ? (
        <div className="text-center py-8 bg-white rounded-lg border border-[#cccccc] p-6">
          No posts found. Try adjusting your search criteria.
        </div>
      ) : (
        posts.map((post) => <PostCard key={post.id} post={post} />)
      )}
    </div>
  )
}
