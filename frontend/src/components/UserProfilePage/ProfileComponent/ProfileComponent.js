import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import './ProfileComponent.css';

const ProfileComponent = ({ user, swipe }) => {

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
          {/* <div className="card-content-container"> */}
            <div className={swipe ? 'card-content grab' : 'card-content'}>
              <div className='user-img left-div uncolored-div'>
                {/* {console.log(user)} */}
              <img draggable='false' className="user-img-style-left" src={user.photos[1] ? user.photos[1] : 'https://exoffender.org/wp-content/uploads/2016/09/empty-profile.png'} />
              </div>
              <div className='right-div colored-div'>
                <h1 className="user-name-age">{user.firstName + ', ' + user.age}</h1>
                <p>{user.location}</p>
              </div>
            </div>
          {/* </div> */}
        </SwiperSlide>
        <SwiperSlide>
          <div className={swipe ? 'card-content grab' : 'card-content'}>
            <div className='left-div colored-div'>
              <h1>About {user.firstName}</h1>
              <p>{user.bio}</p>
            </div>
            <div className='user-img right-div uncolored-div'>
              <img draggable='false' className="user-img-style-right" src={user.photos[2] ? user.photos[2] : 'https://exoffender.org/wp-content/uploads/2016/09/empty-profile.png'} />
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className='card-content'>
            <div className='full-div uncolored-div'>
              <h1>About {user.firstName}</h1>
              <p>{user.bio}</p>
            </div>
          </div>
        </SwiperSlide> */}
        <SwiperSlide>
          <div className={swipe ? 'card-content grab' : 'card-content'}>
            <div className='left-div uncolored-div prompts-text'>
              <h1>const favLanguage = </h1>
              <h1>Tabs vs. Spaces:</h1>
              <h1>Mac vs. PC:</h1>
              <h1>Light vs. Dark Theme:</h1>
            </div>
            <div className='right-div colored-div prompts-text'>
              <h1>{user.prompt1 ? user.prompt1['favLang'] : 'undefined'}</h1>
              <h1>{user.prompt2 ? user.prompt2['tabSpace'] : 'undefined'}</h1>
              <h1>{user.prompt3 ? user.prompt3['macPc'] : 'undefined'}</h1>
              <h1>{user.prompt4 ? user.prompt4['lightDark'] : 'undefined'}</h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ProfileComponent;
