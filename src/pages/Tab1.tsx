import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { useAppContext } from '../AppContext';

const Tab1: React.FC = () => {
  const { sharedData } = useAppContext();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>GLS Check In</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">GLS Cdfdheck In </IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
