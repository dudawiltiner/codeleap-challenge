"use client";

import { Button } from "@/components/atoms/Button/Button";
import { Input } from "@/components/atoms/Input/Input";
import { FormField } from "@/components/molecules/FormField/FormField";
import { MarkdownEditor } from "@/components/ui/markdown-editor";
import { Sparkles } from "lucide-react";
import { useCreatePostForm } from "./CreatePostForm.hooks";

export function CreatePostForm() {
  const {
    title,
    setTitle,
    content,
    setContent,
    handleSubmit,
    handleGenerateContent,
    isFormValid,
    isGenerating,
  } = useCreatePostForm();

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 mb-6 shadow-sm">
      <h2 className="text-xl font-bold mb-6 text-gray-800">
        What's on your mind?
      </h2>

      <form onSubmit={handleSubmit}>
        <FormField label="Title" htmlFor="title">
          <Input
            id="title"
            placeholder="Hello world"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="rounded-lg border-gray-200 focus:border-[#7695ec] focus:ring-1 focus:ring-[#7695ec]"
          />
        </FormField>

        <div className="flex items-center justify-between mb-2">
          <FormField label="Content" htmlFor="content">
            <div className="w-full"></div>
          </FormField>

          <Button
            type="button"
            variant="secondary"
            onClick={handleGenerateContent}
            disabled={!title || isGenerating}
            className="flex items-center gap-1 h-8 mt-1 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 rounded-lg transition-all"
          >
            <Sparkles size={16} />
            {isGenerating ? "Generating..." : "Generate"}
          </Button>
        </div>

        <MarkdownEditor
          value={content}
          onChange={setContent}
          placeholder="Write your content here..."
          className="mb-4 border-gray-200 rounded-lg"
          minHeight="200px"
        />

        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={!isFormValid}
            className={`px-6 py-2.5 rounded-lg transition-all ${
              isFormValid
                ? "bg-[#7695ec] hover:bg-[#6585dc] text-white"
                : "bg-[#7695ec] opacity-50 cursor-not-allowed text-white"
            }`}
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  );
}
