import { createSlice } from "@reduxjs/toolkit"
import { getStorage } from "../../helpers/helpers"


let users = getStorage("users")??[{name:"admin",password:1234,records:[]}]
export const usersSlice = createSlice({
    name:"users",
    initialState:users,
    reducers:{
        addUser(state,action){
            return[
                ...state,{
                    name:action.payload.name,
                    password:action.payload.password
                }
            ]
        }
    }
})

export const {
    addUser
} = usersSlice.actions
export default usersSlice.reducer
