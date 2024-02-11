import React from 'react'
import { useContador } from '../../hooks/useContador'

const ItemCountConHookPersonalizado = () => {
    const {contador, incrementar, decrementar} = useContador (1, 10)

    return (
    <div>
        <p>Contador: {contador}</p>
        <button onClick = {decrementar}>-</button>
        <button onClick = {incrementar}>+</button>
    </div>
    )
}

export default ItemCountConHookPersonalizado