import React from 'react';
import TextImageComponent from '../TextImageComponent';
import {homeObjOne} from './Data';
import Alumni from '../MentorComp/Mentor';
import WhatWeDo from '../WhatWeDo/WhatWeDo';

const Home = (props) => {
    const mentor = [
        {
            img:'Images/iitblogo.svg',
            text:'IIT Bombay'
        },
        {
            img:'Images/iitglogo.svg',
            text:'IIT Guwahati'
        }
    ];
    const wwd=[
        {
            img:'Images/puzzle.svg',
            title:'Solve Puzzle',
            desc:'Solve puzzle for sdfh sdklf jlsdkf ldfkj '
        },
        {
            img:'Images/math.svg',
            title:'Solve Math',
            desc:'Solve MAth for sdfh sdklf jlsdkf ldfkj dslfk dfjkdf dkfoer euryap eoqd  dfl'
        },
        {
            img:'Images/puzzle.svg',
            title:'Solve Puzzle',
            desc:'Solve puzzle for sdfh sdklf jlsdkf ldfkj '
        },
        {
            img:'Images/math.svg',
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
            {/* <section id='services'>
                <TextImageComponent {...homeObjTwo}/>
            </section> */}
        </div>
    )
}
export default Home;