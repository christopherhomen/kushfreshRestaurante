import React from 'react';
import './BannerStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="banner-text align-items-center">
              <h1>"People who loves to eat are always Best People"</h1>
            </div>
            <p className="text-right">Julia Child</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="banner-image">
              <img src="/images/banner.png" alt="Banner Image" className="img-fluid" />
              <div className="col-md-6 banner-text align-items-center">
                <h1 className="text-into">
                  Encuentra Las Mejores <br />
                  Recetas Para Ti Y <br />
                  Tu Familia
                </h1>
              </div>
              <div className="download-icons">
                <img className="icon" src="/images/appstore.png" alt="Appstore Icon" />
                <img className="icon" src="/images/playstore.png" alt="Playstore Icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
