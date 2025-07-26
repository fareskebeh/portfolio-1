import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import About from "./pages/About";
import bg from "./assets/bg.jpg"
import MyWork from "./pages/MyWork";
import ContactMe from "./pages/ContactMe";
import Nav from "./components/Nav";
import Card from "./pages/Card";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/about"
          element={
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.2 }}
              className="sm:py-20 px-8 sm:absolute   right-0 top-0 bottom-0 left-1/2"
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/my-work"
          element={
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.2 }}
              className="sm:py-20 px-8 sm:absolute   right-0 top-0 bottom-0 left-1/2"
            >
              <MyWork />
            </motion.div>
          }
        />
        <Route
          path="/contact-me"
          element={
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.2 }}
              className="sm:py-20 px-8 sm:absolute   flex items-center right-0 top-0 bottom-0 left-1/2"
            >
              <ContactMe />
            </motion.div>
          }
        />
        <Route path="*" element={<Navigate to="/about" />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <div className="flex relative flex-col md:flex-row">
        <div style={{backgroundImage: `url(${bg})`}} className={`bg-cover brightness-15 fixed -z-10 inset-0`}/>
        <Nav />
        <Card />
        <AnimatedRoutes />
      </div>
    </Router>
  );
};

export default App;
