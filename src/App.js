import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Home from "./components/Home";
import AboutHomeSection from "./components/AboutHome";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Journey from "./components/Journey";
import Partners from "./components/Partners";
import Events from "./components/Events";
import BankingDetails from "./components/BankingDetails";

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
                            <BankingDetails />
                        </>
                    }
                />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/journey" element={<Journey />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/events" element={<Events />} />
            </Routes>
        </Router>
    );
}