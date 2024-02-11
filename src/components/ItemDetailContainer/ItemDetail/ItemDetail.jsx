import React, {useState} from "react";
import "./ItemDetail.css";
import ItemCount from "../../ItemCount/ItemCount"

function ItemDetail ({producto}) {
    return (
        <div className="item-detail">
            <div className="item-detail_img">
                <img src={producto.imgurl} alt={producto.product} />
            </div>

            <div className="item-detail_info">
                <h2 className="item-detail_product">{producto.product}</h2>
                <h3 className="item-detail_detail">{producto.detail}</h3>
                <h4 className="item-detail_price">$ {producto.price}</h4>
                <small className="item-detail_category">{producto.category}</small>
                <ItemCount initial={1} stock={producto.stock}></ItemCount>
            </div>
        </div>
    );
}

export default ItemDetail;