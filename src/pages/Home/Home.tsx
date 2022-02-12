import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import Background from '../../components/Background/Background';

import './Home.scss';
import useDeliveryDeatils from '../../hooks/useDeliveryDetails';
import DeliveryDetails from '../../components/DeliveryDetails/DeliveryDetails';

const Home: React.FC = (): React.ReactElement => {
    const { deliveryDetails } = useDeliveryDeatils();

    return (
        <IonPage>
            <IonContent>
                <Background>
                    <h3>Here will go the search bar component</h3>
                    <h3>Here will go the header component</h3>
                    <DeliveryDetails deliveryDetails={deliveryDetails} />
                </Background>
            </IonContent>
        </IonPage>
    );
};

export default Home;
