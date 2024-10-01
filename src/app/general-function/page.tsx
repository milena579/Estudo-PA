"use client"

import { useState } from "react";

interface HandleProps {
    a:string,
    b:string 
}

const GeneralFunction : React.FC = () => {
    
    const [numero1, setNumero1] = useState<string>("")
    const [numero2, setNumero2] = useState<string>("")
    
    const [respSoma, setRespSoma] = useState<number | undefined>()
    const [respSub, setRespSub] = useState<number | undefined>()
    const [respMulti, setRespMulti] = useState<number | undefined>()
    const [respDiv, setResDiv] = useState<number | undefined>()

    const erro = "Digite corretamente";

    const handleAll = ({a, b}: HandleProps) => {
        const n1 = parseFloat(a)
        const n2 = parseFloat(b)

        if(!isNaN(n1) && !isNaN(n2)){
            setRespSoma(n1 + n2)
            setRespSub( n1 - n2)
            setRespMulti(n1 * n2)
            setResDiv( n2 !== 0 ? n1/n2 : undefined)
        } 
    }

    return(
        <>
            <h2>Funcao Reaproveitada</h2>
            <div>
                <input type="text" placeholder="Numero 01" value={numero1} onChange={(e) => setNumero1(e.target.value)} />
            </div>
            <div>
                <input type="text" placeholder="Número 02" value={numero2} onChange={(e) => setNumero2(e.target.value)}/>

            </div>
            <div>
                <button onClick={() => handleAll({a: numero1, b: numero2})}>Calcular todes</button>
            </div>
            <div>
                <div>
                    <h2>Soma</h2>
                    <p>{!isNaN(respSoma ?? NaN) ? respSoma : erro}</p>
                </div>
            </div>
            <div>
                <div>
                    <h2>Subtracao</h2>
                    <p>{respSub? respSub : erro}</p>
                </div>
            </div>
            <div>
                <div>
                    <h2>Multiplicacao</h2>
                    <p>{respMulti? respMulti : erro}</p>
                </div>
            </div>
            <div>
                <div>
                    <h2>Divisao</h2>
                    <p>{respDiv? respDiv?.toFixed(1) : erro}</p>
                </div>
            </div>
        </>
    );
}

export default GeneralFunction;