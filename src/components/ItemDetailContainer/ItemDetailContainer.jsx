import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
    const [producto,setProducto] = useState([]);

    const {id} = useParams()

    useEffect(()=>{
        
        const fetchData = async () => {
            try {
                const response = await fetch("/productos.json");
                const data = await response.json()
                const producto = data.find((p)=>p.id == id)
                setProducto(producto)
            }
            catch (error) {
                console.log("Error en el fetch "+error)
            }
        }

        fetchData()

    },[])

    return (
        <ItemDetail producto={producto}/>
    );
}

export default ItemDetailContainer;
