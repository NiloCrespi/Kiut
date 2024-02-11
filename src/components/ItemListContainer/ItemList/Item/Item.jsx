import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'


const Item = ({producto}) => {
    return (
        <Link to={`/detail/${producto.id}`}>

            <div key={producto.id} className="item-card">
                <div className="item-card_header">
                    <h2>{producto.product}</h2>
                </div>

                <div className="item-card_img">
                    <img src={producto.imgurl} alt={producto.product} />
                </div>

                <div className="item-card_details">
                    <h3 className="item-card_detail">{producto.detail}</h3>
                    <h4 className="item-card_price">$ {producto.price}</h4>
                    <small>{producto.category}</small>
                </div>
            </div>

        </Link>

    )
}

export default Item