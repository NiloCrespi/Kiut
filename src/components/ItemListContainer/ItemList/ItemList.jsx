import React from 'react'
import Item from './Item/Item'
import "../ItemList/ItemList.css"

const ItemList = ({productos}) => {
    return (
        <div className='ItemList'>        
            {productos.map ((producto) => {
                return (
                    <Item key={producto.id} producto = {producto}/>
                )
            })}   
        </div>
    ) 
}

export default ItemList