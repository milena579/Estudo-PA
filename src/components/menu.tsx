import Link from "next/link";
import {ROUTES} from "@/constans/routes"

interface IMenu{
    op1: string;
    op2: string;
    op3: string;
    op4: string;
    op5: string;
    op6: string;
    op7: string;
}

export const Menu:React.FC<IMenu> = ({op1, op2, op3, op4, op5, op6, op7}) => {
    return (
    <>
        <nav className="text-pink-500 font-roboto flex flex-row justify-center align-center gap-5 text-large bg-indigo-900">
            <Link href={ROUTES.home}>{op1}</Link>
            <Link href={ROUTES.maths}>{op2}</Link>
            <Link href={ROUTES.generalFunction}>{op3}</Link>
            <Link href={ROUTES.card}>{op4}</Link>
            <Link href={ROUTES.fetchNativo}>{op5}</Link>
            <Link href={ROUTES.axios}>{op6}</Link>
            <Link href={ROUTES.severPage}>{op7}</Link>
        </nav>
    </>
    )
}