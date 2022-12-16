import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./components/login";
import SignUp from "./components/signup";
import ShipAdd from "./components/shipadd";
import Payment from "./components/payment";
import Order from "./components/order";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
         <Route path='/' exact element={<Home />} />
         <Route path="/Home" exact element={<Home />} />
         <Route path='/Menu' exact element={<Menu />} />
         <Route path='/About' exact element={<About />} />
         <Route path='/Contact' exact element={<Contact />} />
         <Route path='/Login' exact element={<Login />} />
         <Route path='/SignUp' exact element={<SignUp />} />
         <Route path='/ShipAdd'exact element={<ShipAdd />} />
         <Route path="/Payment" exact element={<Payment />} />
         <Route path="/Order" exact element={<Order />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;