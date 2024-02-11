import "./App.css"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import NotFound from "./components/NotFound/NotFound"
import Footer from "./components/Footer/Footer"

const App = () => {
    return (
        <>
            <BrowserRouter>

                <NavBar/>

                <Routes>  
                        <Route path='/' element={<ItemListContainer/>}/>

                        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>

                        <Route path='/detail/:id' element={<ItemDetailContainer/>}/>

                        <Route path='*' element={<NotFound/>}/>
                </Routes>

                <Footer/>
                
            </BrowserRouter>
        </>
    )
}

export default App