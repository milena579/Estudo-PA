"use client"

import { useEffect, useState } from "react";
import Image from "next/image";

interface IData {
    id: string;
    name: string;
    image: string;
}

const FetchPage = () => {
    const [charecters, setCharacters] = useState<IData[]>([]);

    useEffect(() => {
        const load = async () => {
            const  res = await fetch("https://rickandmortyapi.com/api/character");
            const data = await res.json();
            setCharacters(data.results);
            console.log(data);
        }
        load();
    }, [])
    return (
        <>
            <h1>Fetch Nativo para requisições get</h1>
            {charecters.map((items, index) => {
                return(
                    <div key={items.id}>
                        <h2>{items.name}</h2>
                        <Image src={items.image} width={64} height={60} alt="Imagem personagem" />
                    </div>
                )
            })}
        </>
    )
}

export default FetchPage;