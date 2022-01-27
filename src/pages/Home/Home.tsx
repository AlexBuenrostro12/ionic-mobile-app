import React from 'react';
import { IonContent, IonPage } from '@ionic/react';

import './Home.scss';

const Home: React.FC = (): React.ReactElement => (
    <IonPage>
        <IonContent>
            <div className="home">
                <p>The will go other components...</p>
                <p>The will go other components...</p>
                <p>The will go other components...</p>
                <p>The will go other components...</p>
                <p>The will go other components...</p>
                <p>The will go other components...</p>
            </div>
        </IonContent>
    </IonPage>
);

export default Home;
