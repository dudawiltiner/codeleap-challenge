"use client"

import { useState, useMemo } from "react"
import { useGetPosts } from "./useGetPosts"

export function useFilteredPosts() {
  const { posts, isLoading, isError, refetch } = useGetPosts()
  const [searchQuery, setSearchQuery] = useState("")
  const [dateRange, setDateRange] = useState<{
    start: Date | null
    end: Date | null
  }>({
    start: null,
    end: null,
  })

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      // Filtrar por título
      const matchesTitle = post.title.toLowerCase().includes(searchQuery.toLowerCase())

      // Filtrar por data
      let matchesDate = true
      if (dateRange.start || dateRange.end) {
        const postDate = new Date(post.created_datetime)

        if (dateRange.start && postDate < dateRange.start) {
          matchesDate = false
        }

        if (dateRange.end && postDate > dateRange.end) {
          matchesDate = false
        }
      }

      return matchesTitle && matchesDate
    })
  }, [posts, searchQuery, dateRange])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  const handleDateFilterChange = (start: Date | null, end: Date | null) => {
    setDateRange({ start, end })
  }

  return {
    posts: filteredPosts,
    allPosts: posts,
    isLoading,
    isError,
    refetch,
    handleSearch,
    handleDateFilterChange,
  }
}
