import './index.css'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Navigation from "./components/Navigation.tsx";

// Example pages for the routes
const About = () => <h2>About Page</h2>

function App() {

    return (
        <>
            <Navigation />

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </>
  )
}

export default App
