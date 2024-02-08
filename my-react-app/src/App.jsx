import { Route, Routes} from "react-router-dom";
import Main from './routes/Main.jsx'
import { Header } from './Components/Header/Header.jsx'
import { Footer } from './Components/Footer/Footer.jsx'
import './App.css'

function App() {
    return (
        <Routes>
            <Header/>
            <Route path="/" element={<Main/>}/>
            <Footer/>
        </Routes>
    )
}

export default App


