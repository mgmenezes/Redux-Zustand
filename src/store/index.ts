import { TypedUseSelectorHook, useSelector } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

// const todoSlice = createSlice({
//   name: 'todo',
//   initialState: ['fazer cafe', 'estudar','estudar zustand'],
//   reducers: {
//     add: (state, action) => { 
//       console.log(state, action);
//        state.push(action.payload.newTodo);
    // }
//   }
// })

// const todoSlice = createSlice({
//   name: 'todo',
//   initialState: ['fazer cafe', 'estudar','estudar zustand'],
//   reducers: {}
// })

// export const store = configureStore({
//   reducer: {
//     todo: todoSlice.reducer,
//   }
// })
export const store = configureStore({
  reducer: {}
})

// export const { add } = todoSlice.actions
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
