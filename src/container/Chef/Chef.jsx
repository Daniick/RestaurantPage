import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>

    <div className='app_wrapper_info'>
      <SubHeading tittle="Chef’s Word" />
      <h1 className='headtext__cormorant'>What we believe in</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />auctor sit . </p>
        </div>
        <p className='p__opensans'>auctor sit iaculis
          in arcu. Vulputate nulla lobortis mauris eget sit.
          Nulla <br /> scelerisque scelerisque congue ac consequat,
          aliquam molestie lectus eu. <br />
          Congue iaculis integer curabitur semper sit nunc.</p>
      </div>

      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="" />
      </div>
    </div>
  </div>
);

export default Chef;
