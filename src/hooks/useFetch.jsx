import {useEffect, useState} from "react"

export const useFetch = (url) => {
    const [dato, setDatos] = useState ()

    useEffect (() => {
            fetch(url)
                .then(res => res.json)
                .then(data => setDatos(data))
                .catch(error => console.log(error))
    })

    return dato
}

/*              COMO IMPLEMENTAR

import React from 'react'
import {useFetch} from 'directorio useFetch.jsx'

const ProbandoUseFetch = () => {
    const dato = useFetch('https://jsoplaceholder.typicode.com/users')

    return (
        <div>
            {dato && dato.map ((item, index) => {
                return (
                    <div key = {index}>
                        <p>{item.name}</p>
                    </div>    
                )
            })
            }
        </div>
    )
}

*/
