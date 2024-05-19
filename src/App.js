import './App.css';
import NavBar from "./components/navBar/NavBar";
import {Routes, Route} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import Contacts from "./pages/contacts/Contacts";
import Login from "./pages/login/Login";
import Portfolio from "./pages/portfolio/Portfolio";
import Footer from "./components/footer/Footer";
import Layout from "./components/hoc/Layout";

function App() {
  return (
    <>
        <Layout>
            <Routes>
                <Route path="/"/>
                <Route index element={<MainPage/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/porftolio" element={<Portfolio/>}/>
            </Routes>
        </Layout>
    </>
  );
}

export default App;
