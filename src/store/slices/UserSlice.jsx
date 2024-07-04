import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name:"UserSlice",
    initialState:{
        userLoading:false,
        userData:null,
        userError:null
    },
    reducers:{
        getUserLoading(state,action){
            return{
                ...state,
                userLoading: true,
            }
        },
        getUserData(state,action){
            return{
               ...state,
                userLoading: false,
                userData: action.payload
            }
        },
        getUserError(state,action){
            return{
                ...state,
                userLoading: false,
                userError: action.payload
            }
        }
    }
})

export const {
    getUserLoading,
    getUserData,
    getUserError,
} = UserSlice.actions;

export default UserSlice.reducer;