import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface User {
  username: string
}

interface UserState {
  currentUser: User | null
}

const initialState: UserState = {
  currentUser: null,
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload
      localStorage.setItem("codeleap_user", JSON.stringify(action.payload))
    },
    loadUser: (state) => {
      try {
        const savedUser = localStorage.getItem("codeleap_user")
        if (savedUser) {
          state.currentUser = JSON.parse(savedUser)
          console.log("User loaded from localStorage:", state.currentUser)
        }
      } catch (error) {
        console.error("Error loading user from localStorage:", error)
      }
    },
    clearUser: (state) => {
      state.currentUser = null
      localStorage.removeItem("codeleap_user")
    },
  },
})

export const { setUser, loadUser, clearUser } = userSlice.actions

export default userSlice.reducer
