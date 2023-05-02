import styles from './AboutUs.module.scss';

import cn from "classnames";
import Card from "@/components/AboutUs/Card/Card";

import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {EffectCoverflow} from "swiper";
import 'swiper/swiper.css';

SwiperCore.use(EffectCoverflow);

const AboutUs = () => {
	return (
		<div className={styles['about-us']}>
			<div className={styles.background}>
				<img className={styles.lines} src="/img/about-us/lines.png" alt=""/>
			</div>
			<div className={cn('container', styles.container)}>
				<div className={styles.heading}>
					<h3 className={styles.title}>Наша формула идеального результата</h3>
					<div className={styles.line}></div>
				</div>
				<div className={styles.body}>
					<div className={styles.offer}>
						<div className={styles.animation}>
							<img className={styles.sphere} src="/img/about-us/sphere-1.png" alt=""/>
							<img className={styles.sphere} src="/img/about-us/sphere-2.png" alt=""/>
							<img className={styles.sphere} src="/img/about-us/sphere-3.png" alt=""/>
							<img className={styles.sphere} src="/img/about-us/sphere-4.png" alt=""/>
						</div>
					</div>
					<div className={styles.cards}>
						<Card title='команда' text='Талантливые вовлеченные профессионалы'/>
						<Card title='Технологии' text='Используем ИИ, Нейросети, Webflow, Miro'/>
						<Card title='Процессы' text='Соблюдаем этапы и завершаем проекты в срок'/>
					</div>
					<Swiper
						className={styles.slider}
						effect='coverflow'
						coverflowEffect={{
							rotate: 0,
							stretch: 0,
							depth: 100,
							modifier: 1,
							slideShadows: false
						}}
						slidesPerView={2}
						initialSlide={1}
						centeredSlides={true}
					>
						<SwiperSlide className={styles.slide}>
							<Card title='команда' text='Талантливые вовлеченные профессионалы'/>
						</SwiperSlide>
						<SwiperSlide className={styles.slide}>
							<Card title='Технологии' text='Используем ИИ, Нейросети, Webflow, Miro'/>
						</SwiperSlide>
						<SwiperSlide className={styles.slide}>
							<Card title='Процессы' text='Соблюдаем этапы и завершаем проекты в срок'/>
						</SwiperSlide>
					</Swiper>

				</div>
			</div>
		</div>
	);
};

export default AboutUs;