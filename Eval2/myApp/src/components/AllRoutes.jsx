import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import PrivateRoute from "./PrivateRoute"
import ProductDetailsPage from "../pages/ProductDetailsPage"
export default function AllRoutes(){
    return(
        <Routes>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/" element={<PrivateRoute><HomePage/></PrivateRoute>} />
            <Route path="/product/:id" element={<PrivateRoute><ProductDetailsPage></ProductDetailsPage></PrivateRoute>} />
            
        </Routes>
    )
}