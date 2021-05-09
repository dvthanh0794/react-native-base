import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../app/store"

// Define a type for the slice state
interface AuthenState {
  value: boolean
}

// Define the initial state using that type
const initialState: AuthenState = {
  value: false,
}

export const authenSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    login: state => {
      state.value = true
    },
    logout: state => {
      state.value = false
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

export const { login, logout } = authenSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectAuthen = (state: RootState) => state.authen.value

export default authenSlice.reducer
