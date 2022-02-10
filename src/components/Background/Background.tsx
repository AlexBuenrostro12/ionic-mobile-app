import { IonImg } from '@ionic/react';
import React from 'react';
import logo from '../../assets/LOGO.jpeg';

import './Background.scss';

interface Props {
    children: React.ReactNode
}

const Background: React.FC<Props> = ({ children }): React.ReactElement => {
  const CSSprefix = 'background';

  return (
    <div className={CSSprefix}>
        <IonImg className={`${CSSprefix}-image`} src={logo} />
      {children}
    </div>
  );
};

export default Background;
