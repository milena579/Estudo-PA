"use client"

import { useEffect, useState, Suspense } from "react";
import Image from "next/image";

import { api } from "@/constans/api";

interface IData {
    name: string;
    gender: string;
    status: string;
    species: string;
    image: string;
}

const AxiosPage = () => {
    const [data, setData] = useState<IData[]>([])
    const [erroMessage, setErroMessage] = useState<string>("Não foi possível buscar os dados")
    const [erro, setErro] = useState<boolean>(false)

    const [page, setPage] = useState<string>("")


    useEffect(() => {
        api.get(`/character?page=${page}`).then((res) => {
            setErro(false)
            setData(res.data.results);
            console.log()
        }).catch(error => {
            if(error.response.status == 404){
                setErroMessage("Pagina nao encontrada");
            }

            setErro(true);
        })
    }, [page])

    return (
        <>
        <h1>Pagino com useEfect e axios</h1>   

        <input type="text" onChange={(e) => setPage(e.target.value)} value={page} placeholder="1/42 - Insira a pagina"/>

        {erro && <h5>{erroMessage}</h5>}
        {data.map((item, index) => {
           return(
            <div>
                <h2>{item.name}</h2>
                <Image src={item.image} alt="" height={200} width={200} priority={true}/> 
                <p>{item.gender}</p>
                <p>{item.species}</p>
                <p>{item.status}</p>
            </div>
           )
        })} 
        </>
    )
}

export default AxiosPage;