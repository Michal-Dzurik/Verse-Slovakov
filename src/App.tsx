import './index.css'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Navigation from "./components/Navigation.tsx";
import AddPoem from "./routes/AddPoem.tsx";

function App() {

    return (
        <>
            <Navigation />

            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/pridat-svoj-vers" element={<AddPoem/>}/>
                </Routes>
            </main>
        </>
  )
}

export default App
