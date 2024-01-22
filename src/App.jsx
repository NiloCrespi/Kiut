import "./App.css"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

const App = () => {
    return (
        <>
            <body>
                <header>
                    <NavBar/>
                </header>

                <main>
                    <ItemListContainer greeting="Aca van cosas :)"/>
                </main>
            </body>
        </>
    )
}

export default App