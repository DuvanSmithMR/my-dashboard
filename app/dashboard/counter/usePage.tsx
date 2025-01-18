'use client';

import { decrement, increment } from "@/app/dashboard/counter/services/Counter.slice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

export const usePage = () => {
    const { value } = useSelector((state: RootState) => state.counter);
    const dispatch = useDispatch();

    const incremenetB = () => {
        dispatch(increment());
    }

    const decrementB = () => {
        dispatch(decrement());
    }

    return {
        value,
        incremenetB,
        decrementB,
    }
}
