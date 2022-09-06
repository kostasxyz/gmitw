import { IonModal, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonItem, IonButtons, IonBackButton, IonGrid, IonRow, IonCol, IonCard, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCardContent  } from '@ionic/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import musicians from '../lib/musicians';
import { Virtuoso } from 'react-virtuoso';


const Profiles = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>MUSICIANS</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid>
          <IonRow>
            {musicians.map(mu =>
              <IonCol key={mu.id}>
                <IonCard>
                  <img src={`assets/musicians/${mu.image}`} />
                  <IonCardHeader>
                    <IonCardTitle>{mu.name}</IonCardTitle>
                    <IonCardSubtitle>{mu.desc}</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <Link className="text-white py-1 px-6 rounded-sm bg-green-700 border-2 border-green-600 shadow-lg" to={`/musician/${mu.id}`}>Πληροφορίες</Link>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            )}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Profiles;
