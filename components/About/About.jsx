import React from 'react'
import { aboutData } from './AboutData';
import Link from 'next/link';

const About = () => {
    return (
        <div className="section-xs">
            <div className="container-fluid">
                <div className="row g-4">
                    <div className="col-12 col-lg-9">
                        <div data-hover-img={aboutData.mainData.src}>
                            <h1 className="display-2 fw-medium mb-0">{aboutData.mainData.title}</h1>
                            <h1 className="display-3 fw-normal mb-0 text-black-02 fst-italic">{aboutData.mainData.biography}</h1>
                        </div>
                        <Link className="button button-lg button-outline mt-4" href={aboutData.mainData.button.url}>{aboutData.mainData.button.title}</Link>
                    </div>
                </div> {/* end row */}
            </div> {/* end container-fluid */}
        </div>
    )
}

export default About