import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Panner.css';
import first from '../assets/blue/20210609_172157.jpg';
import second from '../assets/gray/20210612_154438.jpg';
import third from '../assets/pink/20210511_174415.jpg';
import CarouselItemChild from './CarouselItem/CarouselItemChild';
const Panner = () => {
	return (
		<Carousel className="panner">
			<CarouselItemChild
				src={first}
				label={'blue silk scarf'}
				description={
					'description blue silk scarf description blue silk scarf description blue silk scarf'
				}
			/>
			<CarouselItemChild
				src={second}
				label={'blue silk scarf'}
				description={
					'description blue silk scarf description blue silk scarf description blue silk scarf'
				}
			/>
			<CarouselItemChild
				src={third}
				label={'blue silk scarf'}
				description={
					'description blue silk scarf description blue silk scarf description blue silk scarf'
				}
			/>
		</Carousel>
	);
};

export default Panner;
