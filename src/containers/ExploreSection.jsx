import React from 'react'
// import '../components/Main.css'
import '../components/Main.css'
import Head from '../components/Head';
import BannerImage from '../Images/banner.webp'
export const ExploreSection = () => {
    return (
        <>  <Head/>
            <section className="elementor-section elementor-top-section elementor-element elementor-element-5886cfb elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="5886cfb" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
                <div className="elementor-background-overlay"></div>
                <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-eb3a772" data-id="eb3a772" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-e82c10b elementor-widget__width-initial elementor-widget elementor-widget-heading" data-id="e82c10b" data-element_type="widget" data-widget_type="heading.default">
                                <div className="elementor-widget-container">

                                    <h6 className="elementor-heading-title elementor-size-default">Leading Career Counsellors</h6>
                                </div>
                            </div>
                            <div className="elementor-element elementor-element-5220cd5 elementor-headline--style-rotate elementor-widget elementor-widget-animated-headline" data-id="5220cd5" data-element_type="widget" data-settings="{&quot;headline_style&quot;:&quot;rotate&quot;,&quot;rotating_text&quot;:&quot;Career Advancement\nPersonal Development\nProfessional Growth\n&quot;,&quot;rotate_iteration_delay&quot;:1500,&quot;animation_type&quot;:&quot;typing&quot;,&quot;loop&quot;:&quot;yes&quot;}" data-widget_type="animated-headline.default">
                                <div className="elementor-widget-container">
                                    <h2 className="elementor-headline elementor-headline-animation-type-typing elementor-headline-letters">
                                        <span className="elementor-headline-plain-text elementor-headline-text-wrapper">
                                            Explore India’s Top Distance Colleges for<br/>
                                        </span>
                                        <span className="elementor-headline-dynamic-wrapper elementor-headline-text-wrapper">
                                            <span className="elementor-headline-dynamic-text elementor-headline-text-active">Career &nbsp;Advancement </span>
                                            <span className="elementor-headline-dynamic-text">Personal &nbsp;Development </span>
                                            <span className="elementor-headline-dynamic-text">Professional &nbsp;Growth </span>
                                            <span className="elementor-headline-dynamic-text"></span>
                                        </span>
                                    </h2>
                                </div>
                            </div>
                            <div className="elementor-element elementor-element-6c0d911 elementor-invisible elementor-widget elementor-widget-heading" data-id="6c0d911" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:300}" data-widget_type="heading.default">
                                <div className="elementor-widget-container">
                                    <div className="elementor-heading-title elementor-size-default">Unleash Your Hidden Potential</div>
                                </div>
                            </div>
                            <div className="elementor-element elementor-element-f0dbc72 elementor-search-form--skin-minimal elementor-widget__width-initial elementor-widget elementor-widget-search-form" data-id="f0dbc72" data-element_type="widget" data-settings="{&quot;skin&quot;:&quot;minimal&quot;}" data-widget_type="search-form.default">
                                <div className="elementor-widget-container">
                                    <form className="elementor-search-form" role="search" action="https://www.learningroutes.in" method="get">
                                        <div className="elementor-search-form__container">
                                            <div className="elementor-search-form__icon">
                                                <i aria-hidden="true" className="fas fa-search"></i>
                                                <span className="elementor-screen-only">Search</span>
                                            </div>
                                            <input placeholder="Search Courses &amp; Colleges" className="elementor-search-form__input" type="search" name="s" title="Search" value/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-cf17aca" data-id="cf17aca" data-element_type="column" data-settings="{&quot;animation&quot;:&quot;none&quot;}">
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-dff325c elementor-widget elementor-widget-image" data-id="dff325c" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="image.default">
                                <div className="elementor-widget-container">
                                    <img decoding="async" width="1060" height="777" src={BannerImage} className="attachment-full size-full wp-image-17527" alt="Banner image loading"/>
                                    <noscript>
                                        <img decoding="async" width="1060" height="777" src={BannerImage} className="attachment-full size-full wp-image-17527" alt="Banner image loading"  sizes="(max-width: 1060px) 100vw, 1060px" />
                                    </noscript>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default ExploreSection;
