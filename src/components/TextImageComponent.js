import React from 'react';
import './TextImageComponent.css';
import { Button } from './Button/Button';
import { Link } from 'react-router-dom';
import {Link as Link1} from 'react-scroll';


function TextImageComponent({
  light,
  topLine,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart
}) {
  return (
    <>
      <div
        className={light ? 'home__hero_section' : 'home__her_-section darkBg'}
      >
        <div className='container'>
          <div
            className='row home__hero_row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__hero_text_wrapper'>
                <div className='top_line'>{topLine}</div>
                <h1 className={light ? 'heading dark' : 'heading'}>
                  {headline}
                </h1>
                <p
                  className={
                    light
                      ? 'home__hero_subtitle black'
                      : 'home__hero_subtitle'
                  }
                >
                  {description}
                </p>
                <Link1 to='signup'>
                  <Button buttonStyle='btn--rounded-dark' >
                    {buttonLabel}
                  </Button>
                </Link1>
              </div>
            </div>
            <div className='col'>
              <div className='home__hero_img_wrapper'>
                <img src={img} alt={alt} className='home__hero_img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TextImageComponent;
