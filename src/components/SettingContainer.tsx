import React from 'react';
import { IonInput, IonItem, IonList } from '@ionic/react';
import { useAppContext } from '../AppContext';

interface ContainerProps {
  name: string;
}

const SettingContainer: React.FC<ContainerProps> = ({ name }) => {
  const { setSharedData } = useAppContext();

  const handleChange = (event: CustomEvent) => {
    const value = (event.target as HTMLIonInputElement).value as string;
    setSharedData(value);
    console.log(value);
  }

  return (
    <IonList>
      <IonItem>
        <IonInput
          placeholder="Enter Here ...."
          onIonChange={handleChange}
        />
      </IonItem>
    </IonList>
  );
}

export default SettingContainer;
