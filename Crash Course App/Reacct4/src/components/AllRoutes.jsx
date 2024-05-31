import { Route, Routes, Navigate } from "react-router-dom";
import Tickets from "../pages/Tickets";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import TicketCreate from "../pages/TicketCreate";
import TicketEdit from "../pages/TicketEdit";
import TicketView from "../pages/TicketView";
import { AuthContext} from "../context/AuthContextprovider"
import { useContext } from "react";

function PrivateRoute({children}){

    const { authDetails} = useContext(AuthContext)

    if(!authDetails.isLoggedin){
        return <Navigate to="/login" />
    }

    return <>{children}</>
}


export default function AllRoutes(){
    return(
        <Routes>
            <Route path="/login" element={<Login />} />


            <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>} />
            <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
            <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>} />
            <Route path="/Logout" element={<PrivateRoute><Logout /></PrivateRoute>} />
            <Route path="/Tickets" element={<PrivateRoute><Tickets /></PrivateRoute>} />
            <Route path="/TicketCreate" element={<PrivateRoute><TicketCreate /></PrivateRoute>} />
            <Route path="/TicketEdit" element={<PrivateRoute><TicketEdit /></PrivateRoute>} />
            <Route path="/TicketView" element={<PrivateRoute><TicketView /></PrivateRoute>} />
            
        </Routes>
    )
}