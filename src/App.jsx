import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Footer from "./components/Footer.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { setData } from "./store/actions/settingsActions.js";
import Header from "./components/Header/Header.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Colors from "./components/Colors.jsx";

function App() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const loading = useSelector((state) => state.theme.loading);

  useEffect(() => {
    dispatch(setData());
  }, [dispatch]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  if (loading) return <div className="loading">Yükleniyor...</div>;

  return (
    <>
      <div className="bg-white dark:bg-slate-800 max-w-360 mx-auto px-6 md:px-20 lg:px-37.5">
        <Header />
        <main>
          <Hero />
          <Skills />
          <Profile />
          <Projects />
        </main>
        <Footer />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
