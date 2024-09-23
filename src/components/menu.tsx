import Link from "next/link";
interface IMenu{
    op1: string;
    op2: string;
    op3: boolean;
    op4: string;
}

export const Menu:React.FC<IMenu> = ({op1, op2, op3, op4}:{
    op1: string;
    op2: string;
    op3: boolean;
    op4: string;

}) => {
    return (
    <>
        <nav className="text-pink-500 font-roboto flex flex-row justify-center align-center gap-5 text-large bg-indigo-900">
            <p>{op1}</p>
            <p>{op2}</p>
            <p>{op3}</p>
            <p>{op4}</p>
        </nav>
    </>
    )
}