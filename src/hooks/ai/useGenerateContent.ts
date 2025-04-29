"use client";

import { OpenAI } from "openai";
import { useState } from "react";

const createOpenAIClient = () => {
  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

  if (!apiKey) {
    console.warn("API key for OpenAI is not defined");
    return null;
  }

  try {
    return new OpenAI({
      apiKey,
      dangerouslyAllowBrowser: true,
    });
  } catch (error) {
    console.error("Failed to initialize OpenAI client:", error);
    return null;
  }
};

const openaiClient = createOpenAIClient();

export function useGenerateContent() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateContent = async (title: string): Promise<string> => {
    if (!title) return "";

    setIsGenerating(true);
    setError(null);

    try {
      if (!openaiClient) {
        throw new Error(
          "OpenAI client is not initialized. Check your API key."
        );
      }

      const response = await openaiClient.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are an assistant specialized in creating short and informative articles in Markdown format. You must respond in English.",
          },
          {
            role: "user",
            content: `Write a short and informative article about "${title}". 
            The article should be original, informative, and well-structured.
            Use Markdown format with:
            - Main title (H1)
            - Subtitles (H2, H3) when appropriate
            - Informative paragraphs
            - Lists of important points
            - A relevant code snippet if the topic is technical
            - A brief conclusion
            
            The article should be between 200-300 words and be engaging and informative.
            DO NOT use generic templates. The content must be specific about "${title}".`,
          },
        ],
        max_tokens: 600,
        temperature: 0.7,
      });

      const content = response.choices[0]?.message?.content;
      if (!content) {
        throw new Error("No content generated from OpenAI");
      }

      return content;
    } catch (err) {
      console.error("Error generating content:", err);
      setError("Failed to generate content. Please try again.");

      return `## Could not generate content

An error occurred while trying to generate content for "${title}".

Possible causes:
- API connection issues
- Invalid or expired API key
- Request limit exceeded

Please try again later.`;
    } finally {
      setIsGenerating(false);
    }
  };

  return {
    generateContent,
    isGenerating,
    error,
  };
}
