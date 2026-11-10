import { useState } from "react";
import type { KerekparInterface } from "../types/Kerekpar";

export default function Kerekpar(k: KerekparInterface) {
    const [reszletek, setReszletek] = useState(true)
    
    return (
        <>
            <div className="col-sm-4">
                <div className="card mb-3">
                    <div className="card-body">
                        <h3 className="card-title" style={{color: k.szin}}>{k.nev}</h3>
                        <p className="card-text"><em>{reszletek? k.tipus:""}</em></p>
                        <p className="card-text"><u>{reszletek? k.napiDij:""}</u></p>
                    </div>
                    <button
                        onClick={()=>{setReszletek(!reszletek)}}
                        className="btn btn-primary">
                        Részletek
                    </button>
                </div>
            </div>
        </>
    )
}