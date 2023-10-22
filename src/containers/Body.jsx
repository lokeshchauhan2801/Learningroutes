import React from 'react'
import ExploreSection from './ExploreSection'
import SectionSecond from './SectionSecond'
import SectionThird from './SectionThird'
import SectionFourth from './SectionFourth'
import SectionFifth from './SectionFifth'
import SectionSixth from './SectionSixth'
import Footer from '../components/Footer'
import ScroolUp from './ScroolUp'
import PopUp from './PopUp'
import '../components/Main.css'
// import InsideBody from './InsideBody'
import Navbar from '../components/Navbar'
export const Body = () => {
    return (
        <>
            <div itemtype="https://schema.org/WebPage" itemscope="itemscope" class="home page-template page-template-elementor_header_footer page page-id-35 wp-custom-logo ast-desktop ast-page-builder-template ast-no-sidebar astra-4.1.3 group-blog ast-single-post ast-inherit-site-logo-transparent ast-hfb-header elementor-default elementor-template-full-width elementor-kit-5 elementor-page elementor-page-35">
                {/* -----------------inside body start here------------------------------------- */}
                {/* <InsideBody />  there are svg tags which are not suppported  */}
                {/* ------------------inside body end here--------------- */}
             
                {/* ---------------------header nav bar ---start here --------------- */}
            
                <Navbar/>
                
                {/* ------------------------------nav bar end here -------------------------- */}
 
                {/* <!-- <---------------Explore college container start here----------------------->  */}
                <div id="content" class="site-content">
                    <div class="ast-container">
                        <div data-elementor-type="wp-page" data-elementor-id="35" class="elementor elementor-35">

                            {/* <!-- -----------------section 1 start here ----------------------- --> */}
                            <ExploreSection />

                            {/* <!-- --------------------section 1 end here ----------------- --> */}

                            {/* -------------------------section 2nd start here -------------------------- */}
                            <SectionSecond />

                            {/* -------------------section 2nd end here  */}
                            {/* -------------------------section third -----start here---------------- */}
                            <SectionThird />
                            {/* -----------------section third end here ------------------ */}

                            {/* ----------section fourth start here --------------------------------- */}

                            <SectionFourth />
                            {/* ---------------section fourth end here ----------------- */}


                            {/* ------------------section fifth start here ---------------------- */}
                            <SectionFifth />

                            {/* ------------------------section fifth end here ----------------------------- */}

                            {/* --------------------section sixth -start here --------------------------------- */}
                            <             SectionSixth />

                            {/* -------------------section sixth end here ----------------------------- */}

                            {/* ---------------section seventh start here------------------ */}

                            {/* ------------------------section seventh end here -------------------------------- */}
                        </div>
                    </div>
                </div>
                {/* ------------------------------explore college section --end here---------------------- */}
                {/* ---------------footer start here ------------------------ */}
                <Footer />
                {/* ----------------footer end here --------------------------------- */}

                {/* ----------------------scroll up ------section  */}
                <ScroolUp />

                {/* ----------------Scroll up end here --------------------------- */}

                {/* --------------------Pop up--form  start here ------------------  */}

                <PopUp />
                {/* -------popup form end here ----------------- */}
            </div >
        </>
    )
};

export default Body;


