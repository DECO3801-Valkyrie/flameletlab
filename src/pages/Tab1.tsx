import './Tab1.css';
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

export const Tab1: React.FC = () => {

    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItem>
                        <IonInput name="email" value={email} placeholder="Enter Email" onIonChange={e => setEmail(e.detail.value!)} clearInput></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonInput name="password" type="password" value={password} placeholder="Enter Password" onIonChange={e => setPassword(e.detail.value!)} clearInput></IonInput>
                    </IonItem>
                    <IonButton shape="round" fill="outline">Login</IonButton>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
