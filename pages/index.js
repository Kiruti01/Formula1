import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Landing from "./landingpage";
import Standings from "./standings";
import NewsCard from "./newsCard";
import Comments from "./Comments";
// import Driverhtmllist from "./driverlist";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      
    <Standings/>
    {/* <Driverhtmllist/> */}
    
    <NewsCard/>
    <Comments/>
      <Footer />
      {/* Other components/content goes here */}
    </div>
  );
};

export default Home;
