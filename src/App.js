import React from "react";
import Navbar from "./components/Navbar";
import Head from "./components/Head";
import Body from "./containers/Body";
import { AllInOne } from "./MainHtml/AllInOne";
import ExploreSection from "./containers/ExploreSection";
import SectionSecond from "./containers/SectionSecond";
import SectionThird from "./containers/SectionThird";
import SectionFourth from "./containers/SectionFourth";
import SectionFifth from "./containers/SectionFifth";
import SectionSixth from "./containers/SectionSixth";
import Footer from "./components/Footer";
import ScroolUp from "./containers/ScroolUp";
import PopUp from "./containers/PopUp";
import SectionSeventh from "./containers/SectionSeventh";
import AllinOne from "./MainHtml/AllInOne";
import DropDownCourses from "./components/OurCoursesDropDown";


function App() {
  return (
      <>
       
       {/* <Head/>
      <Navbar/>
      <ExploreSection/> 
      <SectionSecond/>  
      <SectionThird/>
      <SectionFourth/>
      <SectionFifth/>
      <SectionSixth/>
      <SectionSeventh/>
      <PopUp/>
  <ScroolUp/>
      <Footer/>   */}
       <AllinOne/> 
     </>
  );
}

export default App;
