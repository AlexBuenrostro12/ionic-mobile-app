import React from 'react';
import { IonCard, IonCardSubtitle, IonIcon, IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';
import { bicycle, timeOutline } from 'ionicons/icons';
import { DeliveryDetailsModel } from '../../models/DeliveryDetailsModel';

import './DeliveryDetails.scss';

interface Props {
  deliveryDetails: DeliveryDetailsModel | undefined;
}

const DeliveryDetails: React.FC<Props> = ({ deliveryDetails }): React.ReactElement => {
  const CSSprefix = 'delivery-details';

  return (
    <IonCard className={CSSprefix}>
      <div className={`${CSSprefix}-delivery-container-item margin-bottom-extra`}>
        <IonIcon icon={timeOutline} className={`${CSSprefix}-icon`} />
        <IonCardSubtitle
          className={`${CSSprefix}-delivery-text`}
        >
          {`Entrega en: ${deliveryDetails?.delivery.deliveryIn} ${deliveryDetails?.delivery.format}`}
        </IonCardSubtitle>
      </div>
      <div className={`${CSSprefix}-delivery-container-item margin-bottom-extra`}>
        <IonIcon icon={bicycle} className={`${CSSprefix}-icon`} />
        <IonCardSubtitle
          className={`${CSSprefix}-delivery-text`}
        >
          {`Costo de envío: $${deliveryDetails?.costShipping}`}
        </IonCardSubtitle>
      </div>
      <IonSegment
        onIonChange={e => console.log('Segment selected', e.detail.value)}
        className={`${CSSprefix}-segment`}
      >
        <IonSegmentButton value="domicilio">
          <IonLabel>Entrega a domicilio</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="local">
          <IonLabel>Recoger en puesto</IonLabel>
        </IonSegmentButton>
      </IonSegment>
    </IonCard>
  );
};

export default DeliveryDetails;
