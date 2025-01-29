import './index.css'
import {Routes, Route, useLocation} from 'react-router-dom'
import Home from './routes/Home'
import Navigation from "./components/Navigation.tsx";
import AddPoem from "./routes/AddPoem.tsx";
import {AnimatePresence} from "framer-motion";

function App() {
    const location = useLocation();

    return (
        <>
            <Navigation />

            <main>
                <AnimatePresence mode="wait">
                    <Routes  location={location} key={location.pathname}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/pridat-svoj-vers" element={<AddPoem/>}/>
                    </Routes>
                </AnimatePresence>
            </main>
        </>
  )
}

export default App
