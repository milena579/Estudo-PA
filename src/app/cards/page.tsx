"use client"

import Card from "@/components/card";

const Cards: React.FC = () => {{
    const dados: {imagem: string, dias: string, titulo: string, texto: string, metros: string, visu: string, comentario: string} [] = [
        {
            imagem: "1",
            dias: "4 days ago",
            titulo: "Post One",
            texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            metros: "4m",
            visu: "5123",
            comentario: "32"
        },
        {
            imagem: "2",
            dias: "4 days ago",
            titulo: "Post One",
            texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            metros: "4m",
            visu: "5123",
            comentario: "32"
        },
        {
            imagem: "3",
            dias: "4 days ago",
            titulo: "Post One",
            texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            metros: "4m",
            visu: "5123",
            comentario: "32"
        }
    ]
    return (
        <>  
            <div className="flex flex-wrap justify-center items-center gap-8 p-5 min-h-[88vh]">
                {dados.map((item, index) =>(
                    <Card key={index} imagem={item.imagem} dias={item.dias} titulo={item.titulo} texto={item.texto} metros={item.metros} visu={item.visu} comentario={item.comentario} />
                ))}
            </div>
        </>

    );
}}

export default Cards