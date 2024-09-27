import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Text Next.ts",
  description: "Ets bosch",
};

export default function Home() {
  return (
    <>
    <div className="flex items-center justify-center p-10">
      <form className="flex flex-col items-center justify-center w-96 rounded-lg p-5 gap-5 bg-purple-400 text-white">
        <h1 className="text-medium">Login</h1>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="email">Email: </label>
          <input type="email" className="border-2 w-full"/>
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="senha">Senha: </label>
          <input type="password" className="border-2 w-full"/>
        </div>
        <button className="bg-purple-500 p-2 w-full rounded-lg">Entrar</button>
      </form>
    </div>
    </>
  );
}
