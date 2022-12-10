import React from "react";
import { Link } from "react-router-dom";
import pizza from "../assets/pizza.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${pizza})`,width:'86.6%',height:'100%'}}>
        
      <div className="headerContainer">
        <h1> BELLARO'S PIZZA </h1>
        <p>  GENUINELY ITALIAN </p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;