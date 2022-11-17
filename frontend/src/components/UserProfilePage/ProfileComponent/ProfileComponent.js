import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import './ProfileComponent.css';

const ProfileComponent = ({ user }) => {

  return (
    <div className='card'>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={{ thresholdDelta: 40, sensitivity: 0.5 }}
        pagination={{ type: 'progressbar' }}
        modules={[Mousewheel, Pagination]}
        allowTouchMove={false}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='card-content'>
            <div className='user-img left-div uncolored-div' />
            <div className='right-div colored-div'>
              <h1>{user.firstName + ', ' + user.age}</h1>
              <p>{user.location}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card-content'>
            <div className='full-div uncolored-div'>
              <h1>About {user.firstName}</h1>
              <p>{user.bio}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card-content'>
            <div className='left-div colored-div'>
              <h1>const favLang = </h1>
            </div>
            <div className='right-div uncolored-div'>
              <h1>{user.prompt1 ? user.prompt1['favLang'] : 'undefined'}</h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ProfileComponent;
