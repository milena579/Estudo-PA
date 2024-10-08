"use client" 
// hook = useState

import React, {use, useState} from "react"

const Maths: React.FC = () => {
    const [numero1, setNumero1] = useState<string>("")
    const [numero2, setNumero2] = useState<string>("")
    const [respSoma, setRespSoma] = useState<number | undefined>()
    const [respSub, setRespSub] = useState<number | undefined>()
    const [respMulti, setRespMulti] = useState<number | undefined>()
    const [respDiv, setRespDiv] = useState<number | undefined>()

    const msgError = "Digite um numero válido"
    console.log(typeof numero1, typeof numero2)

    const handleSoma = () => {
        const n1 = parseFloat(numero1)
        const n2 = parseFloat(numero2)

        if(!isNaN(n1) && !isNaN(n2)){
            setRespSoma (n1 + n2)
        } else{
            setRespSoma(undefined)
        }
    }

    const handleSub = () => {
        const n1 = parseFloat(numero1)
        const n2 = parseFloat(numero2)

        if(!isNaN(n1) && !isNaN(n2)){
            setRespSub (n1 - n2)
        } else{
            setRespSub(undefined)
        }
    }

    const handleMulti = () => {
        const n1 = parseFloat(numero1)
        const n2 = parseFloat(numero2)

        if(!isNaN(n1) && !isNaN(n2)){
            setRespMulti (n1 * n2)
        } else{
            setRespMulti(undefined)
        }
    }

    const handleDiv = () => {
        const n1 = parseFloat(numero1)
        const n2 = parseFloat(numero2)

        if(!isNaN(n1) && !isNaN(n2)){
            if(n2  == 0){
                set
            }
            setRespDiv (n1 / n2)
        } else{
            setRespDiv(undefined)
        }
    }

    return (
        <>
            <h1>Use client com controle de estado</h1>
            <div>
                <div className="rounded-lg border w-80 h-auto p-5 items-center justify-center flex flex-col gap-2">
                        <div className="w-full">
                            <input className="border p-2 w-full" type="text" placeholder="Numero 01" value={numero1} onChange={(e) => setNumero1(e.target.value)} />
                        </div>
                        <div className="w-full">
                            <input className="border p-2 w-full" type="text" placeholder="Número 02" value={numero2} onChange={(e) => setNumero2(e.target.value)}/>
                        </div>
                    </div>
    
                <div>
                    <h2>Soma: {!isNaN(respSoma ?? NaN) ? respSoma : msgError}</h2>
                    <button onClick={handleSoma}>SOMAR</button>
                </div>

                <div>
                    <h2>Subtração: {!isNaN(respSub ?? NaN) ? respSub : msgError}</h2>
                    <button onClick={handleSub}>SUBTRAIR</button>
                </div>

                <div>
                    <h2>Multiplicação: {!isNaN(respMulti ?? NaN) ? respMulti : msgError}</h2>
                    <button onClick={handleDiv}>MULTIPLICAR</button>
                </div>
                
                <div>
                    <h2>Divisão: {!isNaN(respMulti ?? NaN) ? respMulti : msgError}</h2>
                    <button onClick={handleDiv}>DIVIDIR</button>
                </div>
            </div>
        </>
    )
}

export default Maths