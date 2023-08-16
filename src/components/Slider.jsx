import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Autoplay } from 'swiper/modules';
import SkillCard from './SkillCard';
import { skills } from '@/constants';
import 'swiper/css';
import 'swiper/css/pagination';
import { getNumberofCols} from '@/lib/utils';
import { WindowWidth } from '@/lib/utils';

const SkillsGrid = ({index,cols,rows}) => {
  return (
    <div className={`flex flex-wrap mt-6 sm:mx-4 gap-10 sm:justify-start justify-center`}>
      {(() => {
        const cards = [];
        for (let i = index; i < Math.min(index+(cols*rows),skills.length); i++) {
          const {id,title,icon} = skills[i]
          cards.push(<SkillCard key={id} title={title} icon={icon}/>);
        }
        return cards;
      })()}
    </div>
  );
}

export default function Slider() {
  const {cols,rows} = getNumberofCols()
  return (
    <div className='md:max-w-[58%] w-full'>
      <Swiper pagination={{clickable:true}} modules={[Pagination,Autoplay]} slidesPerView={1} loop={true} autoplay={{delay: 2500,disableOnInteraction: false,}} style={{"--swiper-pagination-color": "#00a7ec"}} className="mySwiper">
        {(() => {
          const slides = [];
          for (let i = 0; i < skills.length; i+=rows*cols) {
            slides.push(
              <SwiperSlide >
                <SkillsGrid index={i} cols={cols} rows={rows}/>
              </SwiperSlide>
            )
          }
          return slides;
        })()}
      </Swiper>
    </div>
  );
}
