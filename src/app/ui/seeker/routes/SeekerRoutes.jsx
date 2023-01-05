import { Route, Routes } from "react-router-dom"
import { HomePages } from "../pages/home/HomePages"
import { ProductPage } from "../pages/product/ProductPage"


export const SeekerRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={ <HomePages /> } />
            <Route path="items/:id" element={ <ProductPage /> } />
            <Route path="items/search" element={ <ProductPage /> } />

        </Routes>
    </>
  )
}
