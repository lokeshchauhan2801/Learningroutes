import React from 'react'
import '../components/Main.css'
import Head from '../components/Head';

export const SectionThird = () => {
  return (
    <>
    <Head/>
    <section className="elementor-section elementor-top-section elementor-element elementor-element-a41f66c elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="a41f66c" data-element_type="section">
    <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-fb7cbcb" data-id="fb7cbcb" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-a6fc365 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-heading" data-id="a6fc365" data-element_type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">Choose the Course that You Like</h2>
                    </div>
                </div>
                <div className="elementor-element elementor-element-eab89e0 elementor-widget elementor-widget-heading" data-id="eab89e0" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;none&quot;,&quot;_animation_delay&quot;:200}" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">
                            Browse by <span style={{color: '#268FCA'}}>Category</span>
                        </h2>
                    </div>
                </div>
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-9901ef0 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="9901ef0" data-element_type="section">
                    <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-00a26ba" data-id="00a26ba" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <div className="elementor-element elementor-element-b371465 elementor-widget__width-initial elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box" data-id="b371465" data-element_type="widget" data-widget_type="icon-box.default">
                                    <div className="elementor-widget-container">
                                        <div className="elementor-icon-box-wrapper">
                                            <div className="elementor-icon-box-icon">
                                                <a className="elementor-icon elementor-animation-" href="https://www.learningroutes.in/online-pg-programmes/">
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100" xml:space="preserve" viewBox="0 0 100 100">
                                                        <image width="100" height="100" xlink:href="data:image/png;base64,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"></image>
                                                    </svg> */}
                                                </a>
                                            </div>
                                            <div className="elementor-icon-box-content">
                                                <h6 className="elementor-icon-box-title">
                                                    <a href="https://www.learningroutes.in/online-pg-programmes/">Online PG Programmes </a>
                                                </h6>
                                                <p className="elementor-icon-box-description">MBA, MCA, MCom... </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-583a0f3" data-id="583a0f3" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <div className="elementor-element elementor-element-598d18c elementor-widget__width-initial elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box" data-id="598d18c" data-element_type="widget" data-widget_type="icon-box.default">
                                    <div className="elementor-widget-container">
                                        <div className="elementor-icon-box-wrapper">
                                            <div className="elementor-icon-box-icon">
                                                <a className="elementor-icon elementor-animation-" href="https://www.learningroutes.in/online-ug-programmes/">
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100" xml:space="preserve" viewBox="0 0 100 100">
                                                        <image width="100" height="100" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABJlJREFUeF7tnc2KFTEQhc+4Fhdu/UEfR30F1woKghufwZ0g+DfgxpfQt1FmdCuiW1GJ0413YnfnJFVJp+897oT8VM5Xqap0980cQf+6UuCoK2tkDASkMycQEAHpTIHOzNEOERBXBS4BeATgPoCfAN4CeA7gu+ssDQfb6g65COAhgCcALkd6/QDwEsBTAN8aauky1daALIGIBdkkmK0AyQGxaTC9AxlzxOOJ0DQK/xXAs+E/TLuuc0yvQJgdERL3qyhXMP26DmW9AWEEnQIRhylmnC7B9AKEEZABsXkwawOpBWKzYNYC0grE5sC0BrIWiM2AaQWkFxDdg6kNpFcQ3YKpBWQrILoD4w1kqyC6AeMFZF9ArA7GCmRfQawGphTIoYBoDiYXyKGCaAaGBSIQ0+8DGV2yHmKmgDATljz0c3nd2dEgjE4UmDkgzAQC8b9HMLotgomB5LyhY9+83QHwBsCVQo/+DOAegPeF/dfoVqzjCKR4AGK1pwCuEu2WmoQxrhvHWKN7tq4BSPDgd8Q7a3ZHxAv/7aREKt85TVNlGBbM3bDIOQ8ePx4oBTGuTED+MU6BOZkC4gViDgjr6TFItl8VF3cedA7MaVjkLQCvAVwYkq91R6RCFivsPgMZNdr9FPZX+CSWFcfiIKXClvYbbbVWd/Gam1R7+wzEo7qLoVSv9tYEchvACwA3hlV/AvBg57xh3SFexUQMpapmVQcfVjIn7AmAa9Fqv+ycWQRkJlF4x+LRCaZCSojTIyRvIKXOZ7UjK/8yRnrH4nHOUN2FkHVzsPjjELI+JHYWu0AvIb3GoexmgHjHYmbOYLxVCGt/6zmKAlCSoATkvGqsQzUDkmtQqafWcoS4uouFS1V7RUIDoM4xjLilglq3fC0gQZjUq4Cl4qIUSOiXPMccIpCpcjsWean8tgAJfRc1P0QgcXUXC5yq9roFMheLUzGYcYJ9qrKyQj4jTs5Je/QejxN31kIm3Nba35oDi/oLSDoAWcFm9bcAmYvFqRjMzKmQteAoWYQdQ8fcvLVzV7yEpnYw3tobkKWy1SN3sUCq2CEg5TlEQAbtaucudodUsWOLOyTt02ctrKG2qGy15lABSeO1gs3qLyACQl9Nm+VZ1lDRS9mvHaIdoh2y5APaIdoh2iHaIWcKMNFgSqumxQVjZFODdhRZa172pJ4OdgUHVAFJy9rUMQREQOhY3tQzdTDszDMFREAmFVAO6cwxBERAlNR1UtdJ/ZwPlJavpf28Xr16jZO1DuUQ5RDlEOUQ5RDlkNKn1pYcYv3GtvQmB+954wjC/r7Faof7Sd36KWXpTQ415o3FYb4RttohIIMC1t8YjlGlOyDWb1tLb3Lwnjf2VPb3LVY73HdIuoIveIVZmgwnjMk6kOnxexqnVVBrf53UI0ZWQa39BURAuG+VvK+4SAer/W7hfpPDfstVf3VmIN4XmNVfcr8zuFw+E+rtY4f72/uVqY1lAUb4owLjjXnF55A25mqWvwowDxclVUMFBKSh2MxUAsKo1LCNgDQUm5lKQBiVGrYRkIZiM1MJCKNSwzYC0lBsZioBYVRq2OYPD+Bd191Vl4cAAAAASUVORK5CYII="></image>
                                                    </svg> */}
                                                </a>
                                            </div>
                                            <div className="elementor-icon-box-content">
                                                <h6 className="elementor-icon-box-title">
                                                    <a href="https://www.learningroutes.in/online-ug-programmes/">Online UG Programmes </a>
                                                </h6>
                                                <p className="elementor-icon-box-description">BBA, BCA, BCom... </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-646455e" data-id="646455e" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <div className="elementor-element elementor-element-dfc18cd elementor-widget__width-initial elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box" data-id="dfc18cd" data-element_type="widget" data-widget_type="icon-box.default">
                                    <div className="elementor-widget-container">
                                        <div className="elementor-icon-box-wrapper">
                                            <div className="elementor-icon-box-icon">
                                                <a className="elementor-icon elementor-animation-" href="https://www.learningroutes.in/executive-mba-programmes/">
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100" xml:space="preserve" viewBox="0 0 100 100">
                                                        <image width="100" height="100" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABBdJREFUeF7tncuuz1AUxn8nQcRlKnGJJ0BcIiKewPUJMCHiFq8hxgwIJngDEt7giGuCuYEgMXSYICH7ZFeq9KS7e+3a6/y/Mzppu1a//f262u62+a859FeVA3NVqZEYBKSyg0BABKQyByqTowoRkMocqEyOKkRAKnOgMjmqEAGpzIHK5KhCBKQyByqTowqpGMgq4AxwHNgGrK1Ma1fOV+A1cAe4HVeeAk4C2x3pvwfcBL6FMTQVsgl4AOyqHEKfvKdxxV6n+l8AR4CPAUiojMeOYThl8Jfs58D+AOQicHW5jMr5OM4HIKE69rUGch84C3yofHCbgeux1NtSPeufD0AWgHWtEW0B3lcOo5EXtL7raPWsfyEA+dkZkLdb4WWlX0D+/6ngjwNKQATE3AGdsswtzUsoIHn+mUcLiLmleQkFJM8/8+iZBXIFuASszrT0LXABeNjJcwi4EZeFp87N+r7lTfhQIC70D73t3Qm8zATRDg9PAsKMuv0XZtzNsvD/1riyb3kKEDf6BWTcUVbsgBoKJMi+HE9Za8aN4XdU3ynrYOeU9ShG9C1PqRA3+lOAZHIoFj70GlJMQGZiPTrJNNA6XECsHc3MJyCZBlqHC4i1o5n5BCTTQOvw0UBczHRbnzZ1jXOhf+htr5uZbg8QN/oFZNwJSDP16Ft46NjM4DVTH3cwFY/STL24xWk7EJA0v4pvLSDFLU7bgYCk+VV8awEpbnHaDmYWSOmZbh8GL+/UTfTXNDHsG5CXd+om+gUk7fTYbP2vmfqkQMLOSr9T7xuQl3fqJvqHVsi442iaqJm9qE9jb/peBCTds6IRAlLU3vTkApLuWdEIASlqb3rymQVSeqZe+uv3dNTTRIz6yMHNO+klPnKYxt70vQhIumdFI0YBmWKmXvrr96KuZiQfDSRjn0VDZ/aiXtTVjOQCkmFeiVABKeFqRk4ByTCvRKiAlHA1I+fMAik9U+9jYvVOPYN50dBRt71TzNT7Rm3xTr2oo5nJBSTTQOvwUUCmmKn3DdTqnbq1kVb5RgOxEmCdZ2Yv6tZGWuUTECsnjfIIiJGRVmkExMpJozwCYmSkVRoBsXLSKI+AGBlplWbZAfkMrG+54+nH7INsz0C6zQQWf4y/264idNoJ7Sq8dEjwCiTACO02DreKYbFdRfiF0GtW5w/lyXLgXNPyaB7YnZVKwbkOhD5aB5peIRuB0JlmT25WxY9y4BlwrGkK1mRYCZyObfN2dLrujNqLgpZ04AvwCrgb2/59D1t766bTjHBDbPPX1ybvCXAU+OTtoPAKJPi8Ilb0idgIMyx7E4+4W8APbzA8V4hHrwdp9lwhgwbobSMBqYyYgAhIZQ5UJkcVIiCVOVCZHFWIgFTmQGVyVCECUpkDlclRhVQG5Bdd3aeD5yP76QAAAABJRU5ErkJggg=="></image>
                                                    </svg> */}
                                                </a>
                                            </div>
                                            <div className="elementor-icon-box-content">
                                                <h6 className="elementor-icon-box-title">
                                                    <a href="https://www.learningroutes.in/executive-mba-programmes/">Executive MBA Programmes </a>
                                                </h6>
                                                <p className="elementor-icon-box-description">Marketing, HR, Finance... </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-95c6701" data-id="95c6701" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <div className="elementor-element elementor-element-68161da elementor-widget__width-initial elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box" data-id="68161da" data-element_type="widget" data-widget_type="icon-box.default">
                                    <div className="elementor-widget-container">
                                        <div className="elementor-icon-box-wrapper">
                                            <div className="elementor-icon-box-icon">
                                                <a className="elementor-icon elementor-animation-" href="https://www.learningroutes.in/online-msc-programmes/">
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100" xml:space="preserve" viewBox="0 0 100 100">
                                                        <image width="100" height="100" xlink:href="data:image/png;base64,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"></image>
                                                    </svg> */}
                                                </a>
                                            </div>
                                            <div className="elementor-icon-box-content">
                                                <h6 className="elementor-icon-box-title">
                                                    <a href="https://www.learningroutes.in/online-msc-programmes/">Online MSc Programmes </a>
                                                </h6>
                                                <p className="elementor-icon-box-description">Data Science, CS, ML & AI... </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-0d52ecb elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="0d52ecb" data-element_type="section">
                    <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-892538d" data-id="892538d" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <div className="elementor-element elementor-element-d66480a elementor-widget__width-initial elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box" data-id="d66480a" data-element_type="widget" data-widget_type="icon-box.default">
                                    <div className="elementor-widget-container">
                                        <div className="elementor-icon-box-wrapper">
                                            <div className="elementor-icon-box-icon">
                                                <a className="elementor-icon elementor-animation-" href="https://www.learningroutes.in/executive-programmes/">
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100" xml:space="preserve" viewBox="0 0 100 100">
                                                        <image width="100" height="100" xlink:href="data:image/png;base64,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"></image>
                                                    </svg> */}
                                                </a>
                                            </div>
                                            <div className="elementor-icon-box-content">
                                                <h6 className="elementor-icon-box-title">
                                                    <a href="https://www.learningroutes.in/executive-programmes/">Executive Programmes </a>
                                                </h6>
                                                <p className="elementor-icon-box-description">PGP in Data Science, ML & AI </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-91404f9" data-id="91404f9" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <div className="elementor-element elementor-element-6ba5c85 elementor-widget__width-initial elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box" data-id="6ba5c85" data-element_type="widget" data-widget_type="icon-box.default">
                                    <div className="elementor-widget-container">
                                        <div className="elementor-icon-box-wrapper">
                                            <div className="elementor-icon-box-icon">
                                                <a className="elementor-icon elementor-animation-" href="https://www.learningroutes.in/certifications-courses/">
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100" xml:space="preserve" viewBox="0 0 100 100">
                                                        <image width="100" height="100" xlink:href="data:image/png;base64,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"></image>
                                                    </svg> */}
                                                </a>
                                            </div>
                                            <div className="elementor-icon-box-content">
                                                <h6 className="elementor-icon-box-title">
                                                    <a href="https://www.learningroutes.in/certifications-courses/">Certifications Courses </a>
                                                </h6>
                                                <p className="elementor-icon-box-description">Python, Angular, React JS.. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-9cd8ac1" data-id="9cd8ac1" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <div className="elementor-element elementor-element-500f7c3 elementor-widget__width-initial elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box" data-id="500f7c3" data-element_type="widget" data-widget_type="icon-box.default">
                                    <div className="elementor-widget-container">
                                        <div className="elementor-icon-box-wrapper">
                                            <div className="elementor-icon-box-icon">
                                                <a className="elementor-icon elementor-animation-" href="https://www.learningroutes.in/online-dba-programmes/">
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100" xml:space="preserve" viewBox="0 0 100 100">
                                                        <image width="100" height="100" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAACERJREFUeF7tnWXoNUUUxn+v3R3YLXZgF36wsOuDhdiiiIldiIHdqKgYIIoKItioX8RWLBS7CzuwW57XWd3/urszuzv33rn3noHL/TD9PHNmzpydOTMJC0khMCmp1lhjMEISGwRGiBESFYG5gIOBPYCpgGuAS4EvotbSx8KGVUIWAY4A9gFmLOD1C3ArcCrwZh+xjFLVsBGyAnA0sDMwtQeBP4F7gFOAZ6Kg1YdChoWQ1YBDgd2AKRri8hdwN3AW8GjDvH1PnjIhatsWwDHABjXIfABc4OI1jS1Uk/Zh4GwnOSIquZAiIZKALYGTgdVrEHvLLeBXAj+7dJrGdnEkLleT90XgPOAm4PeUWEmJkGmBnYATgaVqQHoOuAi4EfijIp36tRVwHLBOTVnvARcCVwM/pkBMCoTMAuzlFuv5a0DR/K/p5s6GwK3vJEZSV9Xfz4HLgUuArxqWHzX5IAmZFzjQLdazVfQq05Skwj7dsecrAUe6KU17lrLwPXAtcC7wYcf6WmUfBCGLOxL2B6araPWvwC3AGcBrrXpWnWkx4DBgP2B6T/1nAq9Err+2uH4SsorbzO0KTFnRqu+A64BzgI96DMTcwEHAIcDsHgnVwHiix+2ZXHw/CMnmcC2yVeEz4ArgYuDrfnQ8V8fMwN7AUcACAWvYXUDPVOZeEZKpricAa9V08h1HwlXAT30moljdNM4CIM1smZq2vOD2PT1RmWMTkkSnOhKbDSap32vWlPW208qiDqZYhMzkDH3SYhYctNh3JCSfvcl0q73RN13r7kpItjDKBD5HKgtjV1BK8jdRSLRX+rhtG9oSsihwOLAvMENqqmNbMALyLeG0sjqVPTP/nw68HlDmhCRNCWmyuZKtSIa/UQw929SGEhJiftBXustSMD/0cQRkZh9ZpOcLWDu9Zp86QjID3bHAujWVJWeg6yMhWVWhhtFnnZpfaRgtI0Rq3+7O2OczYWtHfXNqJuwBEJJVKRuZvmbqq+aKNe142VkjbgBkr/s3lBEi08WeNYU94r6+6fNoz3asAwQ1RtXZxzXNLpruq4IMmToXUEuItARt8PJhqD6DxkA0YhnrASKmzPwvrCcYWMskpDjqJVaaml6K2MhxLCo7oKHloFIoQggJ1cTGEeQ2fS4O+An4GiFtIO2WpzMh3ar/x4ygL4N3dC1owPm3c/usus/MbZrYWELaVFLMo+8d2t0OaxBonwKy3cUOXkJk7qiz2LZpkDqjnewwq8kaVLEJEdYLV67wLmJzQDb+WKToU6ymLK/ZoA3TfcyzrTuZEmvKEhkyUt7nI6Sqj7WLUcnor9LOpI/rcJu+Y38JaOTphIdMMO+7nxr7hovvBeZzurNfOuWoEaqfDnBrEM4DKF7HgQTYvRUNiIVHtQ7s6XmsBjSZEkWW9j/6PekOGuhLXZMgk/na7lOy9gLLO9BDytAAEVFlIRYeAyek6zryiRu10toeAH4ooKXrCZsC2wCafrsoE2pr1eFuI6RkmIoMXdLJDltrrToAmDVk+AekGUtCVgV0eE1fIfW/tJtWmigVvzlwfXdG8hxo6pTVVV/1dPrlXfevs8NZGEtCqhZ/HS+VCVtz/hru0LSO5zQ15QjUV4HH3XHUbE2qOpCQn4qMEM80ooMUWqA3BLYGlq1Ir5GvA20POSKaHL4zQgLm8qokOoRXPOIpwqSRtQ1GSFvkXD6fttO0eCOkKWKF9EaIA6S4uIYCE5oulKdelmeLeigLBdU0n62pFlas0qasFiTks5iE2JQ1GQHfQPDFl47DJuLtq8AXn9/99mqKUblN+lQGik1ZNmX9h0CT0eSTAF+8SUjAyDNC/g+STVkBA6cuSahkhlZjhIQiVZHOCDG119Rem7JKEPBNDb5407IC5mbTskzL8pocAsbRhCShkhlarmlZoUiZljURAd9I9MXbGhIw8mwNsTXE1pA6QTEJMQkxCTEJCVhMc0lM7W2G1/9Sh2p3odWMPSG3uYs5uryjSzK6kyGv1fqFOARrQ4jODeveyJLONbku6OiYqv53LEiLXUfIASIPQ/Jx+Jg7o6tjo8Vzuj5CdFNL3q11xFReFVZ2wIdIzFicy/oWkFujNkEAyaPO7c7pjaSojBCNfDmB2R7QdYcm2mS+XZLQKheyvoHgiy/tf5OG+irwxWcNkKfS0zqAlN/xPwhsUuiZblVtHKn8452jnTLwfP31xSdDiBqiEawLOprL5SJQP41EXdJRnOZ33e2rcgneRrryefQigi6ZSsL0Co8unWoqlEN+/SQZusSj+KrgA9wXnxQhIYDqNpRI0ZwvB2qa/3Vxp+mDLvJHJb/xcuavtUhrksjIbl2FtGXkJaQtCLrAqYs68uclguqC/Hpd7+7H6zZv7OCTAF/80EmID0A99qJnjDYqWUPknbrX7075APfFjxwh6pCUEnlkO8lpW1IW5KWtCIaP3DbxPsB98SNJSBsgY+XxAe6LN0JiMeHK8QHuizdCjJDICCRWnE8CfPGNJUTGNnls3sHtB5p4SUgMuySao32P9j8ypsphf+nd+SrTiRwo3+95cSaJXg5pI+TWY7Oy963KCNFbIM8788WQ9ncomi1/YDJ8TvBmVEaI3GRLpCz0HgE9gHN+vpoyQmT3yT95qlcw9VZI0S9V75s7WjXIj5cePcu7Fn+q+EZXGSF6XDH/RrnsR72wBY0W3GG9EZZywJYFYa1X4v4N5kg5DMiYqWrVYSMkJtRhZXUmJKwaS9UWAa8j5X5YSts2fhTzGSGJsWqEDBshibV3vJrT5BjQeCEzoN4aIQMCvqpaI8QISQyBxJpjEmKEJIZAYs0xCUmMkL8BniZzg48hhP8AAAAASUVORK5CYII="></image>
                                                    </svg> */}
                                                </a>
                                            </div>
                                            <div className="elementor-icon-box-content">
                                                <h6 className="elementor-icon-box-title">
                                                    <a href="https://www.learningroutes.in/online-dba-programmes/">Online DBA Programmes </a>
                                                </h6>
                                                <p className="elementor-icon-box-description">Business Administration... </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-dca0544" data-id="dca0544" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <div className="elementor-element elementor-element-30f9af0 elementor-widget__width-initial elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box" data-id="30f9af0" data-element_type="widget" data-widget_type="icon-box.default">
                                    <div className="elementor-widget-container">
                                        <div className="elementor-icon-box-wrapper">
                                            <div className="elementor-icon-box-icon">
                                                <a className="elementor-icon elementor-animation-" href="https://www.learningroutes.in/job-linked-programs-upgrad/">
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100" xml:space="preserve" viewBox="0 0 100 100">
                                                        <image width="100" height="100" xlink:href="data:image/png;base64,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"></image>
                                                    </svg> */}
                                                </a>
                                            </div>
                                            <div className="elementor-icon-box-content">
                                                <h6 className="elementor-icon-box-title">
                                                    <a href="https://www.learningroutes.in/job-linked-programs-upgrad/">Job Link Programmes </a>
                                                </h6>
                                                <p className="elementor-icon-box-description">Cloud Computing, UX/UI... </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-8124272 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="8124272" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                    <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-50266e8" data-id="50266e8" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <div className="elementor-element elementor-element-464c952 elementor-mobile-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="464c952" data-element_type="widget" data-widget_type="icon-list.default">
                                    <div className="elementor-widget-container">
                                        <ul className="elementor-icon-list-items">
                                            <li className="elementor-icon-list-item">
                                                <span className="elementor-icon-list-icon">
                                                    <i aria-hidden="true" className="fas fa-university"></i>
                                                </span>
                                                <span className="elementor-icon-list-text">Not sure what you like? Talk to our experts.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-fc882ea" data-id="fc882ea" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <div className="elementor-element elementor-element-2bc52d6 elementor-mobile-align-center elementor-widget elementor-widget-button" data-id="2bc52d6" data-element_type="widget" data-widget_type="button.default">
                                    <div className="elementor-widget-container">
                                        <div className="elementor-button-wrapper">
                                            <a href="#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjEyMTM0IiwidG9nZ2xlIjpmYWxzZX0%3D" className="elementor-button-link elementor-button elementor-size-sm" role="button">
                                                <span className="elementor-button-content-wrapper">
                                                    <span className="elementor-button-text">Get Free Career Counselling</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</section>
</>
  )
};

export default SectionThird ;
