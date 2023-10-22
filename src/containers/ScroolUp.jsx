import React from 'react'
import '../components/Main.css'
import Head from '../components/Head';

export const ScroolUp = () => {
  return (
    <>
    <Head/>
    <div id="ast-scroll-top" tabindex="0" className="ast-scroll-top-icon ast-scroll-to-top-right" data-on-devices="both">
    <span className="ast-icon icon-arrow">
        {/* <svg className="ast-arrow-svg" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enable-background="new 57 35.171 26 16.043" xml: space="preserve">
            <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
        </svg> */}
    </span>
    <span className="screen-reader-text">Scroll to Top</span>
</div>
</>
  )
};

export default ScroolUp;
