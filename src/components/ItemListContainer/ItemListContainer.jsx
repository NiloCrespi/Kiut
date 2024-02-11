import {useState,useEffect} from "react"
import ItemList from "./ItemList/ItemList";
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

    const [productos,setProductos] = useState([]);

    const {categoryId} = useParams()

    useEffect(()=>{
        
        const fetchData = async () => {
            try {
                const response = await fetch("/productos.json");
                const data = await response.json()                
                
                if (categoryId) {
                    const filteredProducts = data.filter((prod) => prod.category == categoryId)
                    setProductos(filteredProducts)
                }else{
                    setProductos(data)
                }
            }
            catch (error) {
                console.log("Error en el fetch "+error)
            }
        }
        fetchData()
    },[categoryId])

    return (
        <div className="ItemListContainer">
            {productos.length == 0 ? <h2>cargando...</h2> : <ItemList productos={productos}/>}
        </div>
    );
}

export default ItemListContainer;