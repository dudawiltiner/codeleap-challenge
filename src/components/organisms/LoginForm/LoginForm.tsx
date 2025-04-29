"use client"

import { Button } from "@/components/atoms/Button/Button"
import { Input } from "@/components/atoms/Input/Input"
import { useLoginForm } from "./LoginForm.hooks"

export function LoginForm() {
  const { username, setUsername, handleSubmit, isFormValid } = useLoginForm()

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f2f2f2] p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="mb-6 text-xl sm:text-2xl font-bold text-gray-800">Welcome to CodeLeap network!</h1>

        <form onSubmit={handleSubmit}>
          <p className="mb-2 text-sm text-gray-700">Please enter your username</p>

          <Input
            type="text"
            placeholder="John doe"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mb-4 border border-gray-200 rounded-lg focus:border-[#7695ec] focus:ring-1 focus:ring-[#7695ec]"
          />

          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={!isFormValid}
              className={`px-6 py-2.5 text-white rounded-lg transition-all ${
                isFormValid ? "bg-[#7695ec] hover:bg-[#6585dc]" : "bg-[#7695ec] opacity-50 cursor-not-allowed"
              }`}
            >
              ENTER
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
