import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel"
import "./SplashPage.css";


import { Mousewheel, Pagination } from "swiper";
import SignupForm from "../SessionForms/SignupForm";
import NavBar from "../NavBar/NavBar";
import img_one from './pexels-blue-bird-7218663.jpg'
import {HiChevronDoubleDown} from 'react-icons/hi'


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
              <img src='https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=' className="image-splash"></img>
              <img src='https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=' className="image-splash"></img>
              <img src='https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=' className="image-splash"></img>
              <img src='https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=' className="image-splash"></img>
              <img src='https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=' className="image-splash"></img>

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
            <div className="image-conatiner">

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


