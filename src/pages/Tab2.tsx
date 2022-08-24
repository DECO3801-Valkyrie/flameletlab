import './Tab2.css';
import React, { useState } from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonItemDivider,
    IonButton
} from '@ionic/react';

export const Tab2: React.FC = () => {

    const [email, setEmail] = useState<string>();
    const [FullName, setFullName] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [confirm, confirmPassword] = useState<string>();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Sign Up</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItem>
                        <IonInput name="email" value={email} placeholder="Enter your Email" onIonChange={e => setEmail(e.detail.value!)} clearInput></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonInput name="FullName" value={FullName} placeholder="Enter your Full Name" onIonChange={e => setFullName(e.detail.value!)} clearInput></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonInput name="password" type="password" value={password} placeholder="Enter Password" onIonChange={e1 => setPassword(e1.detail.value!)} clearInput></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonInput name="confirm" type="password" value={confirm} placeholder="Confirm Password" onIonChange={e2 => confirmPassword(e2.detail.value!)} clearInput></IonInput>
                    </IonItem>
                    <IonButton shape="round" fill="outline">Get Started!</IonButton>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Tab2;
