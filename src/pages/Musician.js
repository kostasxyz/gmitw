import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonItem, IonButtons, IonBackButton, IonIcon, IonGrid, IonRow, IonCol, IonCard, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCardContent  } from '@ionic/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import musicians from '../lib/musicians';
import { Virtuoso } from 'react-virtuoso';
import { musicalNotesOutline } from 'ionicons/icons';


const Musician = ({match}) => {
  const [musician, setMusician] = useState(null);

  useEffect(() => {
    setMusician(() => musicians.find(m => m.id === Number(match.params.id)));
  }, []);

  return (
    <IonPage>
      {musician && <>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/" />
            </IonButtons>
            <IonTitle>{musician.name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <div className="flex flex-col relative h-full">
            <img src={`assets/musicians/${musician.image}`} />
            <div className="flex-1 mt-5 px-4">
              <Virtuoso
                data={musician.songs}
                className="py-2"
                style={{height: '98%'}}
                itemContent={(index, song) =>
                  <div>
                  <IonItem className="w-full cursor-pointer" type="button" routerLink={`/video/${song.time}/xxx`}>
                    <IonIcon icon={musicalNotesOutline} slot="start" />
                    <IonLabel>{song.name}</IonLabel>
                  </IonItem>
                  </div>
                }
              />
            </div>
          </div>
        </IonContent>
      </>}
    </IonPage>
  );
};

export default Musician;
