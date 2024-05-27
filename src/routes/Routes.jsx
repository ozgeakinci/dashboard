import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../App";
import Layout from "../components/shared/Layout";
import Products from "../components/Products";
import Dashboard from "../components/Dashboard";


export const routes = createBrowserRouter(
    createRoutesFromElements(
       <Route element={<App/>}>
        <Route path='/' element ={<Layout/>} >
        <Route index element={<Dashboard/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        </Route>
        <Route path="/login" element={<div>This is Login page</div>}/>
       </Route>
      
      
    )
)