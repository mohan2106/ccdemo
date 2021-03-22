import React from 'react';
import TextImageComponent from '../TextImageComponent';
import {homeObjOne} from './Data';
import Alumni from '../MentorComp/Mentor';
import WhatWeDo from '../WhatWeDo/WhatWeDo';
import Pricing from '../PricingPage/Pricing';
import RoadMap from '../RoadMap/RoadMap';

const Home = (props) => {
    const mentor = [
        {
            img:process.env.PUBLIC_URL + '/Images/iitblogo.svg',
            text:'IIT Bombay'
        },
        {
            img:process.env.PUBLIC_URL + '/Images/iitglogo.svg',
            text:'IIT Guwahati'
        }
    ];
    const wwd=[
        {
            img:process.env.PUBLIC_URL + '/Images/puzzle.svg',
            title:'Solve Puzzle',
            desc:'Solve puzzle for sdfh sdklf jlsdkf ldfkj '
        },
        {
            img: process.env.PUBLIC_URL + '/Images/math.svg',
            title:'Solve Math',
            desc:'Solve MAth for sdfh sdklf jlsdkf ldfkj dslfk dfjkdf dkfoer euryap eoqd  dfl'
        },
        {
            img: process.env.PUBLIC_URL + '/Images/puzzle.svg',
            title:'Solve Puzzle',
            desc:'Solve puzzle for sdfh sdklf jlsdkf ldfkj '
        },
        {
            img: process.env.PUBLIC_URL + '/Images/math.svg',
            title:'Solve Math',
            desc:'Solve MAth for sdfh sdklf jlsdkf ldfkj dslfk dfjkdf dkfoer euryap eoqd  dfl'
        },
        
    ];
    return (
        <div>
            <section id='home'>
                <TextImageComponent {...homeObjOne}/>
            </section>
            <section id='mentor'>
                <Alumni alumni={mentor}/>
            </section>
            <section id='whatwedo'>
                <WhatWeDo wwd={wwd}/>
            </section>
            <section id='pricing'>
                <Pricing/>
            </section>
            {/* <section id='services'>
                <TextImageComponent {...homeObjTwo}/>
            </section> */}
            <section id='roadmap'>
                <RoadMap/>
            </section>
        </div>
    )
}
export default Home;