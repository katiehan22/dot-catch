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
            <div className='user-img'>
              <h3>{user.firstName}</h3>
            </div>
            <div className='user-prof'>
              <h3>bio</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card-content'>
            <div className='user-img'>
              <h3>{user.firstName}</h3>
            </div>
            <div className='user-prof'>
              <h3>bio</h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ProfileComponent;
