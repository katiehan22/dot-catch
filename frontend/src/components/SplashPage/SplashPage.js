import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel"
import "./SplashPage.css";


import { Mousewheel, Pagination } from "swiper";
import SignupForm from "../SessionForms/SignupForm";
import img_one from './pexels-blue-bird-7218663.jpg'
import {HiChevronDoubleDown} from 'react-icons/hi'
import { HiArrowRight } from 'react-icons/hi'
import ab from './abigail.jpeg'
import ch from './chris.jpeg'
import pa from './paulo.png'
import ka from './katie.jpeg'
import message from './message.jpg'

export default function SplashPage() {
  const slideFour = useRef(null)

  return (
    <div className="splash-page-container">
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={{thresholdDelta: 40, sensitivity: 0.5}}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper mySwipper-splash"
      >
        <SwiperSlide>
          <div className="slide-one">
            <div className="background-one inner">
              <span>.</span>
              <span>c</span>
              <span>a</span>
              <span>t</span>
              <span>c</span>
              <span>h</span>
            </div>
            <div className="inner slide-one-img-container">
              <img className="slide-one-img" src={img_one}></img>
            </div>
            <div className="slide-one-text inner">
              <h1 id='h1-fast'>DEBUG</h1>
              <h1 id='h1-slow'>YOUR LOVE LIFE.</h1>
            </div>
            <div className="bouncy-down-wrapper inner">
              <div onClick={() => slideFour.current?.scrollIntoView({behavior: 'smooth'})} className="bouncy-down-container">
                <HiChevronDoubleDown className="down-chevron"/>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide-two" style={{ backgroundColor: '#EBEBEB' }}>
            <div className="image-conatiner">
              <img src={ab} className="image-splash slide-two-1"></img>
              <img src={ch} className="image-splash slide-two-2"></img>
              <img src={ka} className="image-splash slide-two-3"></img>
              <img src={pa} className="image-splash slide-two-4"></img>
            </div>
            <div className="text-container">
              <div>
                <h3>.match</h3>
                <p>Swipe through profiles that meet your preferences or switch to likes to see those who have already liked you</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide-three" style={{ backgroundColor: '#77966D' }}>
            <div className="image-conatiner full-image">
              <img className="message-img" src={message}></img>
            </div>
            <div className="text-container">
              <h3>.message</h3>
              <p>Chat with those you have matched with to make sure they are perfect for you</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div ref={slideFour} className="slide slide-four" style={{ backgroundColor: 'white' }}>
            <div className="text-container">
              <h3>.start</h3>
              <p>What are you waiting for? The sign up form is right there 👀</p>
              <HiArrowRight className="right-arrow"></HiArrowRight>
            </div>
            <div className="form-splash">
              <div>
                <SignupForm></SignupForm>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}


