import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonButton, IonItem, IonLabel,  } from '@ionic/react';
import { useEffect, useRef, useState } from 'react';
import { Virtuoso } from 'react-virtuoso';
import './Home.css';
import YouTube from 'react-youtube';

const chapters = [
  { name: 'Intro', time: 1,},
  { name: 'Υποφέρω', time: 62,},
  { name: 'Enter Sandman Riff 1', time: 90,},
  { name: 'Είναι μια καμήλα', time: 105, },
  { name: 'Enter Sandman Riff 2', time: 120, },
  { name: 'Αμάρτησε μαζί μου', time: 128, },
  { name: 'Dimitris Dragon (guitar solo)', time: 158, },
  { name: 'Enter Sandman Riff 3', time: 175, },
  { name: 'Βρε μελαχρινάκι', time: 183, },
  { name: 'Enter Sandman Riff 4', time: 199, },
  { name: 'Καταιγίδα', time: 206, },
  { name: 'Enter Sandman Riff 5', time: 246, },
  { name: 'Γυμνός μεσ\'την Ελλάδα', time: 254, },
  { name: 'Enter Sandman Riff 6', time: 270, },
  { name: 'Κατάλληλες προϋποθέσεις', time: 277, },
  { name: 'Nikos Nikolaou (guitar solo)', time: 303.6, },
  { name: 'Enter Sandman Riff 7', time: 330.4, },
  { name: 'Ρίξε στο κορμί μου σπίρτο', time: 338, },
  { name: 'Enter Sandman Riff 8', time: 330.5, },
  { name: 'Το κάτι που θέλω', time: 359, },
  { name: 'Enter Sandman Riff 9', time: 375.4, },
  { name: 'Gucci φόρεμα', time: 383, },
  { name: 'Crazy train Riff', time: 414, },
  { name: 'Ψίθυροι καρδιάς', time: 429, },
  { name: 'Enter Sandman Riff 10', time: 459, },
  { name: 'Τα μαύρα εσώρουχα', time: 468, },
  { name: 'Enter Sandman Riff 11', time: 492.8, },
  { name: 'Αχ κορίτσι μου', time: 407.4, },
  { name: 'Skapator (guitar solo)', time: 536, },
  { name: 'Τσάι με λεμόνι', time: 566, },
  { name: 'Smoke on the water Μπουζούκι Riff', time: 581.4, },
  { name: 'Μωρό μου σόρρυ', time: 588, },
  { name: 'Enter Sandman Riff 12', time: 622, },
  { name: 'Ξέρω τι ζητάω', time: 629.3, },
  { name: 'Νεκροπεθαμένος (guitar solo)', time: 661, },
  { name: 'Enter Sandman Riff 12', time: 701, },
  { name: 'Gigi', time: 708.4, },
  { name: 'Enter Sandman Riff 13', time: 724, },
  { name: 'Η αγάπη βλάπτει σοβαρά', time: 739, },
  { name: 'Jens Ludwig (guitar solo)', time: 761.2, },
  { name: 'Έλα μου', time: 793, },
  { name: 'Έλα μου', time: 793, },
  { name: 'Enter Sandman Riff 14', time: 809, },
  { name: 'Mε λένε Πόπη/Painkiller/Σαϊτιά', time: 824, },
  { name: 'Enter Sandman Riff 15', time: 850.1, },
  { name: 'Δεν γίνετε', time: 864.7, },
  { name: 'Enter Sandman Riff 15', time: 881, },
  { name: 'Κορίτσι του Μάη', time: 894.6, },
  { name: 'Enter Sandman Riff 16', time: 918, },
  { name: 'Πίπα της Ειρήνης', time: 931, },
  { name: 'Iron man (Μπουζουκι riff)', time: 962, },
  { name: 'Ποιά θυσία', time: 978, },
  { name: 'Enter Sandman Riff 17', time: 1001, },
  { name: 'Σαν να μπαίνει η Άνοιξη', time: 1017, },
  { name: 'Lightnin Boy (guitar solo)', time: 1033, },
  { name: 'Enter Sandman Riff 18', time: 1049, },
  { name: 'Μην παραχαράσετε την ιστορία', time: 1063, },
  { name: 'Enter Sandman Riff 19', time: 1079, },
  { name: 'Η καρδιά μου χτυπά', time: 1095, },
  { name: 'Enter Sandman Riff 20', time: 1118, },
  { name: 'Δοκιμασέ με', time: 1133, },
  { name: 'Enter Sandman Riff 21', time: 1149, },
  { name: 'Ζιγκολό', time: 1164, },
  { name: 'Μάριος Μπουνίκας (guitar solo)', time: 1185.8, },
  { name: 'Killing in the name (Μπουζουκι solo)', time: 1208, },
  { name: 'Σοκολάτα', time: 1231, },
  { name: 'Αντώνης Χριστοδουλάκης (Κeys solo)', time: 1246, },
  { name: 'Enter Sandman Riff 22', time: 1263, },
  { name: 'Mαγικά χαλιά', time: 1277, },
  { name: 'Enter Sandman Riff 23', time: 1293, },
  { name: 'Καγκέλια', time: 1306.6, },
  { name: 'The final countdown (with μπουζούκι)', time: 1323.8, },
  { name: 'Outro', time: 1377, },
]

const Home = () => {
  const videoRef = useRef();
  const chapterCount = useRef(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [video, setVideo] = useState();
  const [playingChapter, setPlayingChapter] = useState({name: '', time: 0});

  const ytPlayerOpts = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      frameborder: 0,
      modestbranding: 1,
    },
  };

  useEffect(() => {
    timer();
  }, []);

  useEffect(() => {
    if(videoRef.current) {
      console.log(4)
      setVideo({
        height: videoRef.current.clientHeight
      });
    }
  }, [videoRef.current]);

  const timer = () => {
    setCurrentTime(videoRef.current.currentTime);
    requestAnimationFrame(timer);
  }

  const isBetween = (from, to) => {
    return videoRef.current.currentTime > from && videoRef.current.currentTime < to;
  }

  const goToTime = (time) => {
    videoRef.current.currentTime = time;
    videoRef.current.play();
  }

  const onPlayerReady = (player) => {
    setTimeout(() => {
      player.target.seekTo(700)
    }, 5000)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Greatest medley in the world</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <YouTube 
        videoId={'7kZPEEbHoF0'}
        onReady={(player) => onPlayerReady(player)} 
        opts={ytPlayerOpts}
        containerClassName="video-wrap"
        className="video-playet"
      />

          <div className="flex flex-col relative">
            <div className="flex-0 relative z-10">
              <div className="video-wrap">
                <video className="video-player" ref={videoRef} playsInline controls preload="metadata" width="100%" height="100%" poster="/assets/cat.jpg">
                  <source src="/assets/gmitw.mp4" type="video/mp4"></source>
                </video>
              </div>
            </div>

            <div className="flex-1 mt-2">
              <Virtuoso
                style={{ height: (window.innerHeight * .6) + 'px' }}
                data={chapters}
                className="flex-1 h-full"
                itemContent={(index, ch) =>
                  <div style={{height: '52px'}}>
                    <IonItem className="w-full cursor-pointer" type="button" onClick={() => goToTime(ch.time)}>
                      <IonLabel>{ch.name}</IonLabel>
                    </IonItem>
                  </div>
                }
              />
            </div>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
