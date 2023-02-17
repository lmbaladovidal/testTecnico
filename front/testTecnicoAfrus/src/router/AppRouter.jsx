import { Route, Routes } from "react-router-dom"
import { DatosComprador } from "../components/DatosComprador"
import { DetalleComprador } from "../components/DetalleComprador"


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/datosComprador" element={<DatosComprador/>}/>
        <Route path="/detalleComprador" element={<DetalleComprador/>}/>
    </Routes>
  )
}
