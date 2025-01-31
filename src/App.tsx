import './index.css'
import {Routes, Route, useLocation} from 'react-router-dom'
import Home from './routes/Home'
import Navigation from "./components/Navigation.tsx";
import AddPoem from "./routes/AddPoem.tsx";
import {AnimatePresence} from "framer-motion";
import Terms from "./routes/Terms.tsx";
import EmailSent from "./routes/EmailSent.tsx";
import PoemVerify from "./routes/PoemVerify.tsx";
import Poems from "./routes/Poems.tsx";
import {FirebaseProvider} from "./contexts/FirebaseContext.tsx";
import NotFound from "./routes/NotFound.tsx";
import Poem from "./routes/Poem.tsx";

function App() {
    const location = useLocation();

    return (
        <FirebaseProvider>
            <Navigation />

            <main>
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/pridat-svoj-vers" element={<AddPoem/>}/>
                        <Route path="/podmienky" element={<Terms/>}/>
                        <Route path="/email-uspesne-poslany" element={<EmailSent/>}/>
                        <Route path="/verifikacia/:id" element={<PoemVerify/>}/>
                        <Route path="/verse" element={<Poems/>}/>
                        <Route path="/vers/:id" element={<Poem/>}/>
                        <Route path="/404" element={<NotFound/>}/>
                        <Route path="/*" element={<NotFound/>}/>
                    </Routes>
                </AnimatePresence>
            </main>
        </FirebaseProvider>
  )
}

export default App
