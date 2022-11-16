import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel"
import "./SplashPage.css";

import { Mousewheel, Pagination } from "swiper";
import SignupForm from "../SessionForms/SignupForm";
import NavBar from "../NavBar/NavBar";

export default function SplashPage() {
  return (
    <div className="splash-page-container">
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={{thresholdDelta: 40, sensitivity: 0.5}}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide slide-one" style={{ backgroundColor: 'white' }}>
            <div className="slide-text" >

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide-two" style={{ backgroundColor: '#77966D' }}>
            <div className="slide-text">

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide-three" style={{ backgroundColor: '#EBEBEB' }}>
            <div className="slide-text">

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide-four" style={{ backgroundColor: '#77966D' }}>
            <div className="slide-text">

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide-five" style={{ backgroundColor: 'white' }}>
            <div className="slide-text">
              <h2>.start()</h2>
            </div>
            <div children="wrap-center">
              <SignupForm></SignupForm>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}


