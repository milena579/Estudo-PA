import Link from "next/link";

interface IFooter {
    endereco: string;
    numero: number;
    maps: string;
}

export const Footer: React.FC<IFooter> = ({endereco, numero, maps}) => {
    return(
        <footer className="flex flex-row items-center justify-around bg-purple-900 text-white p-5 w-full">
            <p>{endereco}</p>
            <p>{numero}</p>
            <p>{maps}</p>
        </footer>
    );
}