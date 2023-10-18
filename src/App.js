import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./common/Navbar/Navbar";
import Home from "./components/Pages/Home";
import About from "./components/About/About";
import Gallery from "./components/gallery/Gallery";
import Destinations from "./components/Destinations/Home";
import SinglePage from "./SinglePage/SinglePage";
import Blog from "./components/Blog/Blog";
import BlogSingle from "./components/Blog/blog-single-page/BlogSingle";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
import Login from "./components/login/Login";
import Register from "./components/login/Register";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" exact Component={Home} />
                    <Route path="/about" exact Component={About} />
                    <Route path="/gallery" exact Component={Gallery} />
                    <Route
                        path="/destinations"
                        exact
                        Component={Destinations}
                    />
                    <Route
                        path="/singlepage/:id"
                        exact
                        Component={SinglePage}
                    />
                    <Route path="/blog" exact Component={Blog} />
                    <Route
                        path="/blogsingle/:id"
                        exact
                        Component={BlogSingle}
                    />
                    <Route path="/testimonial" exact Component={Testimonial} />
                    <Route path="/contact" exact Component={Contact} />
                    <Route path="/sign-in" exact Component={Login} />
                    <Route path="/Register" Component={Register} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
