import {
	IonButton,
	IonCard,
	IonCardContent,
	IonCol,
	IonContent,
	IonFooter,
	IonGrid,
	IonHeader,
	IonIcon,
	IonInput,
	IonPage,
	IonRow,
	IonTitle,
	IonToolbar,
	useIonLoading,
	useIonRouter,
} from "@ionic/react";
import React, { useState } from "react";
import { logInOutline, personCircleOutline } from "ionicons/icons";
import PhoneBook from "../assets/pexels-markus-winkler-13734676.jpg";
import Intro from "../components/Intro";

const Login: React.FC = () => {
	const router = useIonRouter();
	const [introSeen, setIntroSeen] = useState(false);
	const [present, dismiss] = useIonLoading();

	const doLogin = async (event: any) => {
		event.preventDefault();
		await present("Logging in...");
		setTimeout(async () => {
			dismiss();
			router.push("/app", "root");
		}, 2000);
	};

	const finishIntro = async () => {
		console.log("finish");
		setIntroSeen(true);
	};

	return (
		<>
			{!introSeen ? (
				<Intro onFinish={finishIntro} />
			) : (
				<IonPage>
					<IonHeader>
						<IonToolbar color={"success"}>
							<IonTitle>Contact Book</IonTitle>
						</IonToolbar>
					</IonHeader>
					<IonContent scrollY={false} className="ion-padding">
						<IonGrid fixed>
							<IonRow class="ion-justify-content-center">
								<IonCol size="12" sizeMd="8" sizeXl="4">
									<div className="ion-text-center ion-padding">
										<img src={PhoneBook} alt="Phone book" width={"50%"} />
									</div>
								</IonCol>
							</IonRow>

							<IonRow class="ion-justify-content-center">
								<IonCol size="12" sizeMd="8" sizeXl="4">
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
								</IonCol>
							</IonRow>
						</IonGrid>
					</IonContent>
				</IonPage>
			)}
		</>
	);
};

export default Login;
