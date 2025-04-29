"use client";

import type React from "react";

import { isEmptyString } from "@/lib/utils/string.utils";
import { useAppDispatch } from "@/providers/redux/hooks";
import { setUser } from "@/providers/redux/userSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function useLoginForm() {
  const [username, setUsername] = useState("");
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isEmptyString(username)) {
      dispatch(setUser({ username }));
      router.push("/");
    }
  };

  const isFormValid = !isEmptyString(username);

  return {
    username,
    setUsername,
    handleSubmit,
    isFormValid,
  };
}
