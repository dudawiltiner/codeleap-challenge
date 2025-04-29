"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAppSelector } from "@/providers/redux/hooks"
import { CreatePostForm } from "@/components/organisms/CreatePostForm/CreatePostForm"
import { PostList } from "@/components/organisms/PostList/PostList"
import { DeletePostModal } from "@/components/organisms/DeletePostModal/DeletePostModal"
import { EditPostModal } from "@/components/organisms/EditPostModal/EditPostModal"

export default function HomePage() {
  const { currentUser } = useAppSelector((state) => state.user)
  const router = useRouter()

  useEffect(() => {
    if (!currentUser) {
      router.push("/login")
    }
  }, [currentUser, router])

  if (!currentUser) {
    return null
  }

  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      <header className="bg-[#7695ec] text-white p-4 sticky top-0 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-xl font-bold">CodeLeap Network</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-6 px-4 sm:px-6">
        <CreatePostForm />
        <PostList />
      </main>

      <DeletePostModal />
      <EditPostModal />
    </div>
  )
}
