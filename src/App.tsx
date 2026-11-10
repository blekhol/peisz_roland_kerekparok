import { useEffect, useState } from "react"
import type { KerekparInterface } from "./types/Kerekpar"
import "bootstrap/dist/css/bootstrap.min.css"
import Kerekpar from "./components/Kerekpar"

function App() {
  useEffect(() => {
    document.title = "Kiadó kerékpárok"
  }, [])

  return (
    <>
      <KerekparLista></KerekparLista>
    </>
  )
}

export default App

function KerekparLista() {
  const [lista, setLista] = useState<KerekparInterface[]>([]);
  const [db, setDb] = useState(0);
  const [legolcsobb, setLegolcsobb] = useState(0);
  const [legdragabb, setLegdragabb] = useState(0);

  useEffect(() => {
    async function betolt() {
      const response = await fetch("./kerekparok.json");
      const data = await response.json() as KerekparInterface[];

      setLista(data);

      setDb(data.length);
      setLegolcsobb(data.toSorted((a, b) => a.napiDij - b.napiDij)[0].napiDij);
      setLegdragabb(data.toSorted((a, b) => b.napiDij - a.napiDij)[0].napiDij);
    }
    betolt();
  }, [])

  return (
    <>
      <div className="container">
        <h1>Kiadó kerékpárok</h1>
        <div className="row">
          {lista.map(k => (
            <Kerekpar
              id={k.id}
              nev={k.nev}
              tipus={k.tipus}
              napiDij={k.napiDij}
              szin={k.szin}
            ></Kerekpar>
          ))}
        </div>

        <div className="row">
          <p>Kerékpárok száma: {db}</p>
          <p>Legolcsóbb kerékpár: {legolcsobb}</p>
          <p>Legdrágább kerékpár: {legdragabb}</p>
        </div>
      </div>


    </>
  )
}