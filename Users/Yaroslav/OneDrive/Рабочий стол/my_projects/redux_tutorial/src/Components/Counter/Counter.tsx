import { useDispatch, useSelector } from "react-redux";
import "./Counter.css";
import { appDispatch, RootState } from "../../state/store";
import { increment, decrement, incrementByAmount, incrementAsync } from "../../state/counter/counterSlice";
import { Dispatch } from "@reduxjs/toolkit";

function Counter(): JSX.Element {
    const count :number= useSelector((state:RootState)=>{
        return state.counter.value;
    });
    const dispatch = useDispatch<appDispatch>();
    return (
        <div className="Counter">
			<h2>{count}</h2>
            <div>
                <button onClick={()=>dispatch(incrementAsync(10))}>Increment</button>
                <button onClick={()=>dispatch(decrement())}>Decrement</button>
            </div>
        </div>
    );
}

export default Counter;
