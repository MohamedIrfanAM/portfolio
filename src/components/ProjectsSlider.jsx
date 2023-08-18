'use client'
import { projects } from "@/constants"
import ProjectCard from "./ProjectCard"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Mousewheel, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { getNumberofSlides } from "@/lib/utils";

const ProjectsSlider = () => {
  const slides = getNumberofSlides()
  return (
      <Swiper
        effect={'coverflow'}
        initialSlide={0}
        grabCursor={true}
        mousewheel={{releaseOnEdges:true,sensitivity:0.5}}
        centeredSlides={true}
        slidesPerView={slides}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows:true
        }}
        pagination={{clickable: true }}
        style={{"--swiper-pagination-color": "#00a7ec", "--swiper-pagination-bullet-inactive-color": "#0384b9","--swiper-pagination-bullet-inactive-opacity": "0.6",}}
        modules={[EffectCoverflow, Pagination,Mousewheel]}
        className="mySwiper"
      >
      {projects.map(({id,title,discription,image,icon,link}) => (
        <SwiperSlide>
          <div className="mb-12">
            <ProjectCard key={id} title={title} discription={discription} image={image} icon={icon} link={link}/>
          </div>
        </SwiperSlide>
      ))}
      </Swiper>
  )
}

export default ProjectsSlider