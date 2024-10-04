import Image from "next/image";


interface IPerson {
    params: {
        id: string;
    }
}

interface IData {
    id: string;
    name: string;
    status: string;
    species: string;
    image: string;
}

interface IDataStaticIndex {
    results : IData[]
}

const Perso = async ({params: {id}}: IPerson) => {
    const res = await fetch (`https://rickandmortyapi.com/api/character/${id}`)
    const data : IData = await res.json()
    return(
        <>
            <div>
                <h1>{data.id}</h1>
                <p>{data.name}</p>
                <p>{data.status}</p>
                <p>{data.species}</p>
                <Image src={data.image} alt="Foto personagem" width={150} height={150} priority={true}></Image>
            </div>
        
        </>
    )
}

export async function generateStaticParams(){
    const res = await fetch("https://rickandmortyapi.com/api/character/")
    const data: IDataStaticIndex = await res.json();

    return data.results.map((item) => item.id.toString())
}

export default Perso