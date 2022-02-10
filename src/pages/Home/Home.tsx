import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import Background from '../../components/Background/Background';

import './Home.scss';

const Home: React.FC = (): React.ReactElement => (
    <IonPage>
        <IonContent>
            <Background>
                <div className="home">
                    <p>Here we will put other components...</p>
                    <p>Here we will put other components...</p>
                    <p>Here we will put other components...</p>
                    <p>Here we will put other components...</p>
                    <p>Here we will put other components...</p>
                    <p>Here we will put other components...</p>
                    <h3>Here we will put other components...</h3>
                    <h3>Here we will put other components...</h3>
                    <h3>Here we will put other components...</h3>
                    <h3>Here we will put other components...</h3>
                    <h3>Here we will put other components...</h3>
                    <h3>Here we will put other components...</h3>
                </div>
            </Background>
        </IonContent>
    </IonPage>
);

export default Home;
