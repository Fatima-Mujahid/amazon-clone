import React, { useEffect } from 'react';
import './Home.css';
import Product from './Product';
import { products } from './sample';

function Home() {
  useEffect(() => {
    //AXIOS REQUEST
  }, []);

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Home"
        />

        <div className="home__row">
          <Product product={products[0]} />
          <Product product={products[1]} />
        </div>

        <div className="home__row">
          <Product product={products[2]} />
          <Product product={products[3]} />
          <Product product={products[4]} />
        </div>

        <div className="home__row">
          <Product product={products[5]} />
        </div>
      </div>
    </div>
  );
}

export default Home;
