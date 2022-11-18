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
              <svg id="logo" width="294" height="73" viewBox="0 0 294 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.576 72.768C7.016 72.768 4.808 71.904 2.952 70.176C1.16 68.384 0.264 66.112 0.264 63.36C0.264 60.608 1.16 58.4 2.952 56.736C4.808 55.008 7.016 54.144 9.576 54.144C12.2 54.144 14.408 55.008 16.2 56.736C17.992 58.4 18.888 60.608 18.888 63.36C18.888 66.112 17.992 68.384 16.2 70.176C14.408 71.904 12.2 72.768 9.576 72.768ZM53.4345 72.768C47.8665 72.768 42.9065 71.648 38.5545 69.408C34.2025 67.104 30.7785 63.936 28.2825 59.904C25.8505 55.872 24.6345 51.296 24.6345 46.176C24.6345 40.992 25.8505 36.416 28.2825 32.448C30.7785 28.416 34.2025 25.28 38.5545 23.04C42.9065 20.736 47.8665 19.584 53.4345 19.584C58.8745 19.584 63.6105 20.736 67.6425 23.04C71.6745 25.28 74.6505 28.512 76.5705 32.736L64.9545 38.976C63.6105 36.544 61.9145 34.752 59.8665 33.6C57.8825 32.448 55.7065 31.872 53.3385 31.872C50.7785 31.872 48.4745 32.448 46.4265 33.6C44.3785 34.752 42.7465 36.384 41.5305 38.496C40.3785 40.608 39.8025 43.168 39.8025 46.176C39.8025 49.184 40.3785 51.744 41.5305 53.856C42.7465 55.968 44.3785 57.6 46.4265 58.752C48.4745 59.904 50.7785 60.48 53.3385 60.48C55.7065 60.48 57.8825 59.936 59.8665 58.848C61.9145 57.696 63.6105 55.872 64.9545 53.376L76.5705 59.712C74.6505 63.872 71.6745 67.104 67.6425 69.408C63.6105 71.648 58.8745 72.768 53.4345 72.768ZM116.873 72V61.92L115.913 59.712V41.664C115.913 38.464 114.921 35.968 112.937 34.176C111.017 32.384 108.041 31.488 104.009 31.488C101.257 31.488 98.5373 31.936 95.8493 32.832C93.2253 33.664 90.9853 34.816 89.1293 36.288L83.7533 25.824C86.5693 23.84 89.9613 22.304 93.9293 21.216C97.8973 20.128 101.929 19.584 106.025 19.584C113.897 19.584 120.009 21.44 124.361 25.152C128.713 28.864 130.889 34.656 130.889 42.528V72H116.873ZM101.129 72.768C97.0973 72.768 93.6413 72.096 90.7613 70.752C87.8813 69.344 85.6733 67.456 84.1373 65.088C82.6013 62.72 81.8333 60.064 81.8333 57.12C81.8333 54.048 82.5693 51.36 84.0413 49.056C85.5773 46.752 87.9773 44.96 91.2413 43.68C94.5053 42.336 98.7613 41.664 104.009 41.664H117.737V50.4H105.641C102.121 50.4 99.6893 50.976 98.3453 52.128C97.0653 53.28 96.4253 54.72 96.4253 56.448C96.4253 58.368 97.1613 59.904 98.6333 61.056C100.169 62.144 102.249 62.688 104.873 62.688C107.369 62.688 109.609 62.112 111.593 60.96C113.577 59.744 115.017 57.984 115.913 55.68L118.217 62.592C117.129 65.92 115.145 68.448 112.265 70.176C109.385 71.904 105.673 72.768 101.129 72.768ZM165.563 72.768C159.483 72.768 154.747 71.232 151.355 68.16C147.963 65.024 146.267 60.384 146.267 54.24V8.928H161.243V54.048C161.243 56.224 161.819 57.92 162.971 59.136C164.123 60.288 165.691 60.864 167.675 60.864C170.043 60.864 172.059 60.224 173.723 58.944L177.755 69.504C176.219 70.592 174.363 71.424 172.187 72C170.075 72.512 167.867 72.768 165.563 72.768ZM138.299 33.024V21.504H174.107V33.024H138.299ZM209.528 72.768C203.96 72.768 199 71.648 194.648 69.408C190.296 67.104 186.872 63.936 184.376 59.904C181.944 55.872 180.728 51.296 180.728 46.176C180.728 40.992 181.944 36.416 184.376 32.448C186.872 28.416 190.296 25.28 194.648 23.04C199 20.736 203.96 19.584 209.528 19.584C214.968 19.584 219.704 20.736 223.736 23.04C227.768 25.28 230.744 28.512 232.664 32.736L221.048 38.976C219.704 36.544 218.008 34.752 215.96 33.6C213.976 32.448 211.8 31.872 209.432 31.872C206.872 31.872 204.568 32.448 202.52 33.6C200.472 34.752 198.84 36.384 197.624 38.496C196.472 40.608 195.896 43.168 195.896 46.176C195.896 49.184 196.472 51.744 197.624 53.856C198.84 55.968 200.472 57.6 202.52 58.752C204.568 59.904 206.872 60.48 209.432 60.48C211.8 60.48 213.976 59.936 215.96 58.848C218.008 57.696 219.704 55.872 221.048 53.376L232.664 59.712C230.744 63.872 227.768 67.104 223.736 69.408C219.704 71.648 214.968 72.768 209.528 72.768ZM272.398 19.584C276.494 19.584 280.142 20.416 283.342 22.08C286.606 23.68 289.166 26.176 291.022 29.568C292.878 32.896 293.806 37.184 293.806 42.432V72H278.83V44.736C278.83 40.576 277.902 37.504 276.046 35.52C274.254 33.536 271.694 32.544 268.366 32.544C265.998 32.544 263.854 33.056 261.934 34.08C260.078 35.04 258.606 36.544 257.518 38.592C256.494 40.64 255.982 43.264 255.982 46.464V72H241.006V0.767996H255.982V34.656L252.622 30.336C254.478 26.88 257.134 24.224 260.59 22.368C264.046 20.512 267.982 19.584 272.398 19.584Z" fill="white" />
              </svg>
            </div>
            <div className="inner slide-one-img-container">
              <img className="slide-one-img" src={img_one}></img>
            </div>
            <div className="slide-one-text inner">
              <h1 id='h1-fast'>DEBUG</h1>
              <h1 id='h1-slow'>YOUR LOVE LIFE.</h1>
            </div>
            <div className="bouncy-down-wrapper inner">
              <div className="bouncy-down-container">
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
                <p>Swipe through profiles that meet your prefrences or switch over to likes to see those who have already liked you</p>
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
        <SwiperSlide>
          <div className="slide slide-four" style={{ backgroundColor: 'white' }}>
            <div className="text-container">
              <h3>.start</h3>
            </div>
            <div children="form-splash">
              <SignupForm></SignupForm>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}


