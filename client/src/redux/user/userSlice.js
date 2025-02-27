import { createSlice, current,  } from "@reduxjs/toolkit";
const intialState={
      currentUser:null,
      error:null,
      loading:false
};

const userSlice=createSlice({
      name:"user",
      intialState,
      reducers:{
           signInStart:(state)=>{
            state.loading=false;
            state.error=null;
           },
           signInSuccess:(state)=>{
            state.currentUser=action.payload;
            state.loading=false;
            state.error=null;
           },
           signInFailure:(state)=>{
            state.loading=false;
            state.error=action.payload;
           },
      },


});

export const {signInStart, signInSuccess, signInFailure}=userSlice.actions;
export default userSlice.reducer;