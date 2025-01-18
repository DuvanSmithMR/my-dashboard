'use client';

import { decrement, increment } from "@/store/exampleSlice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

export const usePage = () => {
    const { value } = useSelector((state: RootState) => state.example);
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
