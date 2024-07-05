import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterSlice  {
    value: number;
}

const initialState: CounterSlice = {
    value: 0
}
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        increment: (state)=>{
            state.value += 1;
        },
        decrement: (state)=>{
            state.value -= 1;
        },
        incrementByAmount: (state, action:PayloadAction<number>)=>{
            state.value += action.payload;
        }
    },
    //Extra Reducers are for reducers for working with async function.
    extraReducers: (builder)=>{
        builder.addCase(incrementAsync.fulfilled, (state,action: PayloadAction<number>)=>{
            state.value += action.payload
        })
        .addCase(incrementAsync.pending, (state)=>{
            console.log("incrementAsync.pending");
        })
    }
});

export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async (amount: number)=>{
        await new Promise((resolve)=>{setTimeout(resolve, 1000);})
        return amount;
    }
)
export const {increment, decrement, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer