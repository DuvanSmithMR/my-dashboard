import type { Metadata } from "next";
import { CarCounter } from "./components";

export const metadata: Metadata = {
  title: "Counter",
  description: "Counter productos",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CarCounter />
    </div>
  );
}