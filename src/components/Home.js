import React from "react";
import "./Home.css";
import resturants from "../Resturants";
import sresturants from "../SpecialDeal";
import Cards from "./Cards";
function Home() {
  return (
    <>
      <div
        className="find__resturant"
        style={{ backgroundImage: `url("/images/banner-img.jpg")` }}
      >
        <h2 className="title">
          Order food from the widest range of resturants.
        </h2>
        <div className="search__bar">
          <input
            className="search__input"
            type="text"
            placeholder="Resturant or Cusine (leave it blank to browse all)"
          />
          <button className="search__btn">Find Resturant</button>
        </div>
      </div>
      <div className="advertisement">
        <div>
          {" "}
          <h3>FOODMANDU FRESH</h3>
          <img src="/images/AD.JPG" alt="advertisement" />
        </div>
      </div>
      <div className="resturants">
        <div className="header__resturants">
          <h3>FEATURED RESTURANTS</h3>
          <p>View All →</p>
        </div>

        <div className="featured__resturants">
          {resturants.map((restro) => (
            <Cards key={restro.id} name={restro.name} image={restro.image} />
          ))}
        </div>
      </div>
      <div className="resturants">
        <div className="header__resturants">
          <h3>Special Deal</h3>
          <p>View All →</p>
        </div>
        <div className="featured__resturants">
          {sresturants.map((restro) => (
            <Cards key={restro.id} name={restro.name} image={restro.image} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
