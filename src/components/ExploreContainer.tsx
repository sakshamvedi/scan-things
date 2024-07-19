import './ExploreContainer.css';
import React, { useState } from 'react';
import globalImage from "../pages/global.png";
import { IonButton } from '@ionic/react';
import { useAppContext } from '../AppContext';
import { Capacitor } from '@capacitor/core';
import { Browser } from '@capacitor/browser';
import { IonInput, IonItem, IonList,  IonModal, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const { sharedData } = useAppContext();
  const [url, setUrl] = useState("https://www.youtube.com/");
  const [showModal, setShowModal] = useState(false);


  const openHiddenWebView = async (url: string) => {
    if (Capacitor.isNativePlatform()) {
      await Browser.open({
        url: url,
        presentationStyle: 'popover',
        toolbarColor: '#ffffff',
        windowName: '_self'
      });
    } else {
      // Fallback for web - note that this won't hide the URL
      window.open(url, '_blank');
    }
  };
  
  // Usage
 
  
  // Usage
  

  const openWebView = () => {
    if (url) {
      console.log(url);
      setShowModal(true);
    }
  };
  return (
    <>
    <div className="container">
    <img src={globalImage}></img>
    <IonButton className='qrcode' onClick={()=>{ openHiddenWebView(sharedData);}}>Type In  QR Code </IonButton>

      <IonButton className='scancode'>Scan QR Code</IonButton>
    </div>

    <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Type In Check In</IonTitle>
            <IonButton slot="end" onClick={() => setShowModal(false)}>Close</IonButton>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <iframe src={url} style={{ width: '100%', height: '100%' }} />
        </IonContent>
      </IonModal>
    
    </>
  );
};

export default ExploreContainer;
