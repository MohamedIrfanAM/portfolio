import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Autoplay } from 'swiper/modules';
import SkillCard from './SkillCard';
import { skillsGrid } from '@/constants';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Slider() {
  return (
    <div>
      <Swiper pagination={{clickable:true}} modules={[Pagination,Autoplay]} slidesPerView={1} loop={true} autoplay={{delay: 2500,disableOnInteraction: false,}} style={{"--swiper-pagination-color": "#00a7ec"}} className="mySwiper">
        {skillsGrid.map((slides) => (
          <SwiperSlide >
            <div className='grid grid-cols-2 grid-rows-2 gap-8 mt-6 w-ful justify-items-center'>
              {slides.map(({id,title,icon}) => (
                <SkillCard key={id} title={title} icon={icon}/>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
