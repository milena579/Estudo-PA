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

const Card: React.FC<DadosCard> = ({imagem,dias, titulo, texto, metros, visu, comentario}) => {{
    return (
        <>
        <div className="flex flex-row w-full flex-wrap ">
            <div className="flex flex-col justify-items-center items-center w-80 border border-black rounded-xl">
                <div className="overflow-hidden w-[350px] h-[350px]">
                    <Image className="w-full"  src={parseInt(imagem)== 1? img1: parseInt(imagem)==2? img2:img3 } alt=""></Image>
                </div>
                <header>
                    <p>{dias}</p>
                    <h1 className="text-lg">{titulo}</h1>
                </header>
                <div>
                    <p>{texto}</p>
                </div>
                <footer className="flex g-5 justify-around w-full">
                    <div>
                        <p>{metros}</p>
                    </div>
                    <div>
                        <p>{visu}</p>
                    </div>
                    <div>
                        <p>{comentario}</p>
                    </div>
                </footer>
            </div>

        </div>
        </>

    );
}}

export default Card