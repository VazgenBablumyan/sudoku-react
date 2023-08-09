import { createSlice } from "@reduxjs/toolkit"
import { getStorage } from "../../helpers/helpers"

let user = getStorage("user")??{togleLogin:false,togleRegist:false}
export const userSlice = createSlice({
    name:"user",
    initialState:user,
    reducers:{
        togleLogin(state){
            console.log(5445)
            return{
                ...state,
                togleLogin:!state.togleLogin,
            }
        },
        togleRegist(state){
            return{
                ...state,
                togleLogin:false,
                togleRegist:true,
            }
        },
        logPage(state,action){
            return{
                ...state,
                togleRegist:false,
                togleLogin:false,
                log:true,
                username:action.payload.name
            }
        },
        quitPage(state){
            return{
                ...state,
                log:false
            }
        }

    }
})

export const {
    togleLogin,
    togleRegist,
    logPage,
    quitPage
} = userSlice.actions
export default userSlice.reducer
