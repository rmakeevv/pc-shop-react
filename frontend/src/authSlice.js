import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        value: {
            isLogged: false,
            userId: null,
            token: null
        }
    },
    reducers: {
        logIn: (state, action) => {
          state.value = {
              isLogged: true,
              userId: action.payload.userId,
              token: action.payload.token
          }
        },
        logOut: state => {
            state.value = {
                isLogged: false,
                userId: null,
                token: null
            }
        }
    }
})

export const {logOut, logIn} = authSlice.actions

export default authSlice.reducer