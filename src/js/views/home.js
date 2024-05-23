import React from 'react';
import "../../styles/home.css";
import { Fol } from '../component/fol'; // Adjust the path as necessary
import Hydrogen from '../component/hydrogen';

export const Home = () => {
  return (
    <div className="text-center mt-5">
      <h2>Observe</h2>
      <Fol />
      <Hydrogen />
    </div>
  );
};

export default Home;


