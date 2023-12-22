import {
	IonButton,
	IonCard,
	IonCardContent,
	IonContent,
	IonFooter,
	IonHeader,
	IonIcon,
	IonInput,
	IonPage,
	IonTitle,
	IonToolbar,
	useIonRouter,
} from "@ionic/react";
import React from "react";
import { logInOutline, personCircleOutline } from "ionicons/icons";
import PhoneBook from "../assets/pexels-markus-winkler-13734676.jpg";

const Login: React.FC = () => {
	const router = useIonRouter();
	const doLogin = (event: any) => {
		event.preventDefault();
		console.log("doLogin");
		// router.push ('/home', 'root');
	};
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar color={"success"}>
					<IonTitle>Contact Book</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent scrollY={false}>
				<div className="ion-text-center ion-padding">
					<img src={PhoneBook} alt="Phone book" width={"50%"} />
				</div>

				<IonCard>
					<IonCardContent>
						<form onSubmit={doLogin}>
							<IonInput
								fill="outline"
								labelPlacement="floating"
								label="Email"
								type="email"
								placeholder="example@example.com"
							></IonInput>

							<IonInput
								className="ion-margin-top"
								fill="outline"
								labelPlacement="floating"
								label="Password"
								type="password"
								placeholder="example@example.com"
							></IonInput>

							<IonButton
								type="submit"
								expand="block"
								className="ion-margin-top"
							>
								Login
								<IonIcon icon={logInOutline} slot="end" />
							</IonButton>

							<IonButton
								routerLink="/register"
								color={"secondary"}
								type="button"
								expand="block"
								className="ion-margin-top"
							>
								Register
								<IonIcon icon={personCircleOutline} slot="end" />
							</IonButton>
						</form>
					</IonCardContent>
				</IonCard>
			</IonContent>
		</IonPage>
	);
};

export default Login;
