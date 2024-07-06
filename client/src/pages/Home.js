import React from "react";
import computerPic from '../images/computerPic.png'

const Home = () => {
  return (


    <div className="bg-angled-gradient">
    <div id="home">
      <div className="section">
        <h1 className="font-tech text-6xl text-white">Ryan Erickson</h1>
      </div>
    </div>
    <div id="about">
    <div className="section flex justify-center items-center">
    <div className="section flex justify-center items-center">
          <div className="max-w-7xl bg-black rounded-lg p-20 text-white flex">
            <div className="w-1/3">
              <img src={computerPic} alt="Computer png" className="rounded-lg shadow-md" />
            </div>
            <div className="w-2/3 pl-8">
              <h2 className="font-tech text-2xl mb-4">About Section</h2>
              <p className="font-roboto text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis pulvinar turpis, vitae tempor libero laoreet id. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
              </p>
            </div>
          </div>
        </div>
        </div>
    </div>
    </div>
  );
};

export default Home;
