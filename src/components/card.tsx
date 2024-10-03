"use client"
import { useState } from "react"
import  img1 from "@/img/img1.jpg"
import  img2 from "@/img/img2.jpg"
import  img3 from "@/img/img3.jpg"

import Image from "next/image"

interface DadosCard {
    imagem: string,
    dias: string,
    titulo: string,
    texto: string,
    metros: string,
    visu: string,
    comentario: string
}

const cores = {
    paris: "flex g-5 justify-around w-full h-28 items-center bg-amber-400 text-white",
    cabana: "flex g-5 justify-between w-full h-28 items-center bg-amber-800 text-white",
    piscina: "flex g-5 justify-around w-full h-28  items-center  bg-green-500 text-white",
    amarelo: "text-amber-400",
    marrom: "text-amber-800 ",
    verde: "text-green-500"
}

const Card: React.FC<DadosCard> = ({imagem,dias, titulo, texto, metros, visu, comentario}) => {{
    return (
        <> 
        <div className="flex flex-col justify-items-center items-center w-80 h-100 border-black rounded-xl overflow-hidden shadow-lg shadow-black-500/2  transition duration-500 hover:scale-105">
            <div className="overflow-hidden w-80 object-cover h-auto">
                <Image className="w-full h-60" src={parseInt(imagem)== 1? img1: parseInt(imagem)==2? img2:img3 } alt=""></Image>
            </div>
            <div className="flex flex-col gap-4 p-2 items-center">
                <p className="font-medium">{dias}</p>
                <h1 className="text-[25px] font-bold">{titulo}</h1>
            </div>
            <div className="p-3 text-stone-500">
                <p className="flex flex-wrap w-full text-center justify-center">{texto}</p>
            </div>
            <div className={parseInt(imagem)== 1? cores.paris: parseInt(imagem)==2? cores.cabana:cores.piscina}>
                <div className="flex flex-col items-center w-1/3 h-full justify-center border-r border-zinc-500	">
                    <p className="font-medium">{metros}</p>
                    <p>READ</p>
                </div>
                <div className="flex flex-col items-center h-full w-1/3 justify-center">
                    <p className="font-medium">{visu}</p>
                    <p>VIEWS</p>
                </div>
                <div className="flex flex-col items-center w-1/3 h-full justify-center border-l border-zinc-500">
                    <p className="font-medium">{comentario}</p>
                    <p>COMMENTS</p>
                </div>
            </div>
        </div>
        </>

    );
}}

export default Card