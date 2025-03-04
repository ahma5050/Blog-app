import { createSlice, current,  } from "@reduxjs/toolkit";
const initialState={     //it is intioaly impity array initialState[]
      currentUser:null, // [currentUser, setcurrentUser]=usestet(null)
      error:null,  // [error, seterror]=usestet(null)
      loading:false  // [loading, setloading]=usestet(null)
};

const userSlice=createSlice({
      name:"user",// name of userslice stored in store
      initialState,
      reducers:{  //action maker
            // these are actions
           signInStart:(state)=>{
            state.loading=false;
            state.error=null;
           },
           signInSuccess:(state, action)=>{
            state.currentUser=action.payload;
            state.loading=false;
            state.error=null;
           },
           signInFailure:(state, action)=>{
            state.loading=false;
            state.error=action.payload;
           },
      },


});

export const {signInStart, signInSuccess, signInFailure}=userSlice.actions;
export default userSlice.reducer;