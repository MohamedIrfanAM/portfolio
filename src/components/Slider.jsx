import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Autoplay } from 'swiper/modules';
import SkillCard from './SkillCard';
import { skills } from '@/constants';
import 'swiper/css';
import 'swiper/css/pagination';

const SkillsGrid = ({index}) => {
  return (
    <div className='grid grid-cols-2 grid-rows-2 gap-8 mt-6 w-ful justify-items-center'>
      {(() => {
        const cards = [];
        for (let i = index; i < Math.min(index+4,skills.length); i++) {
          const {id,title,icon} = skills[i]
          cards.push(<SkillCard key={id} title={title} icon={icon}/>);
        }
        return cards;
      })()}
    </div>
  );
}

export default function Slider() {
  return (
    <div>
      <Swiper pagination={{clickable:true}} modules={[Pagination,Autoplay]} slidesPerView={1} loop={true} autoplay={{delay: 2500,disableOnInteraction: false,}} style={{"--swiper-pagination-color": "#00a7ec"}} className="mySwiper">
        {(() => {
          const slides = [];
          for (let i = 0; i < skills.length; i+=4) {
            slides.push(
              <SwiperSlide >
                <SkillsGrid index={i}/>
              </SwiperSlide>
            )
          }
          return slides;
        })()}
      </Swiper>
    </div>
  );
}
