import { Route, Routes } from 'react-router-dom'
import { SeekerRoutes } from '../seeker/'

export const AppRouter = () => {
  return (
    <>
      { /* TODO: Rutas de Autenticación */}
      <Routes>
        <Route path='/*' element={ <SeekerRoutes/> } />
      </Routes>
    </>
  )
}
