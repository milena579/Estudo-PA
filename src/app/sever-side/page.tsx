import { Suspense } from "react"
import Link from "next/link"

type IData = {
    results : {
        name: string;
        id: string;
        status: string;
    }[]
}

const SeverSide = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character")
    const data : IData  = await res.json()
    console.log(data)

    return(
        <>
            <h1>Sever side render</h1>
            <Suspense fallback={<div>Loofing...</div>}>
                {data.results.map((item) => {
                    return(
                        <div key={item.id}>
                            <h2>{item.name}</h2>
                            <p>{item.status}</p>
                            <Link href={`/perso/${item.id}`}>ABRIR</Link>
                        </div>
                    )
                })}
            </Suspense> 
        </>
    )
}

export default SeverSide