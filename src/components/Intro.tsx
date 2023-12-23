import {
	IonButton,
	IonContent,
	IonHeader,
	IonPage,
	IonText,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Intro.css";
import intro1 from "../assets/intro/pexels-cottonbro-studio-2774183.jpg";
import intro2 from "../assets/intro/pexels-fauxels-3184431.jpg";
import intro3 from "../assets/intro/pexels-polina-tankilevitch-5234855.jpg";

interface ContainerProps {
	onFinish: () => void;
}

const SwiperButtonNext = ({ children }: any) => {
	const swiper = useSwiper();
	return <IonButton onClick={() => swiper.slideNext()}>{children}</IonButton>;
};

const Intro: React.FC<ContainerProps> = ({ onFinish }) => {
	return (
		<Swiper>
			<SwiperSlide>
				<img src={intro1} alt="intro 1" />
				<IonText>
					<h3>Collect all you contacts in the same application</h3>
				</IonText>
				<SwiperButtonNext>Next</SwiperButtonNext>
			</SwiperSlide>
			<SwiperSlide>
				<img src={intro2} alt="intro 2" />
				<IonText>
					<h3>Easy to update the contact information</h3>
				</IonText>
				<SwiperButtonNext>Next</SwiperButtonNext>
			</SwiperSlide>
			<SwiperSlide>
				<img src={intro3} alt="intro 3" />
				<IonText>
					<h3>Keep digital phone book</h3>
				</IonText>
				<IonButton onClick={() => onFinish()}>Let's start</IonButton>
			</SwiperSlide>
		</Swiper>
	);
};

export default Intro;
