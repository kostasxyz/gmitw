import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonItem  } from '@ionic/react';
import { Link } from 'react-router-dom';


const Home = () => {


  return (
    <IonPage>
      <IonContent>
      <div className="px-8 w-full h-full flex flex-col items-center justify-center" style={{background: 'url(assets/main-bg.jpg) center center no-repeat', backgorundSize: 'cover'}}>
        <img className="w-full block mb-12" src="assets/gmitw.png" />
        <Link className="mb-10  text-white py-3 px-14 rounded-full bg-green-700 border-2 border-green-600 shadow-lg" to="/video/x/x">ΔΕΣ ΤΟ ΒΙΝΤΕΟ</Link>
        <Link className="mb-10  text-white py-3 px-14 rounded-full bg-green-700 border-2 border-green-600 shadow-lg" to="/musicians">ΟΙ ΜΟΥΣΙΚΟΙ</Link>
      </div>

      </IonContent>
    </IonPage>
  );
};

export default Home;
