import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Home from "./components/Home";
import AboutHomeSection from "./components/AboutHome";
import Contact from "./components/Contact";


export default function App() {
    return (
        <Router basename="/miss-kingdom-impact">
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Hero />
                            <Home />
                            <AboutHomeSection />

                        </>
                    }
                />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}