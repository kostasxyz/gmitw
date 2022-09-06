import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonLabel, IonItem, IonIcon, IonButtons, IonBackButton  } from '@ionic/react';
import { timeOutline } from "ionicons/icons";
import { useEffect, useRef, useState } from 'react';
import { Virtuoso } from 'react-virtuoso';
import YouTube from 'react-youtube';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation';
import { normalizeGreek } from '../lib/utils';
// import fuzzysort from 'fuzzysort';
import chapters from '../lib/chapters';

const Video = ({match}) => {
  const [ytPlayer, setYtPlayer] = useState();
  const [ytPlayerReady, setYtPlayerReady] = useState(false);
  const [searchQuery, setSearchQuery] = useState(match.params.q !== 'x' ? match.params.q : '');
  const [orientation, setOrientation] = useState(ScreenOrientation.type);
  const [currentTime, setCurrentTime] = useState(0);
  const [filteredChapters, setFilteredChapters] = useState(chapters);
  const [currentChapter, setCurrentChapter] = useState(chapters);

  const ytPlayerOpts = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      frameborder: 0,
      modestbranding: 1,
      rel: 0,
    },
  };

  useEffect(() => {
    if(ytPlayerReady && match.params.time !== 'x') {
      ytPlayer?.target.seekTo(Number(match.params.time));
      ytPlayer?.target.playVideo();
    }
  }, [ytPlayerReady]);

  useEffect(() => {
    timer();

    // ScreenOrientation.lock('portrait');

    function setOrientationListener() {
      setOrientation(() => ScreenOrientation.type);
    }

    if(match.params.q !== 'x') {
      setFilteredChapters(() => chapters.filter(ch => ch.tags.includes(searchQuery)));
    }

    window.addEventListener('orientationchange', setOrientationListener);

    return () => window.removeEventListener('resize', setOrientationListener);
  }, []);


  const timer = () => {
    if(ytPlayer) {
      setCurrentTime(() => ytPlayer.target.getCurrentTime());
    }

    requestAnimationFrame(timer);
  }


  const goToTime = (time) => {
    ytPlayer.target.seekTo(time);
    ytPlayer.target.playVideo();

    let chapter = chapters.find(ch => ch.time === time);
    setCurrentChapter(chapter.name || '');
  }

  const onPlayerReady = (player) => {
    setYtPlayer(() => player);
    setYtPlayerReady(true);
  }

  const handleSearchQuery = (e) => {
    let q = normalizeGreek(e.target.value);

    // let fuzz = fuzzysort.go(q, chapters, {key:'tags'}, {threshold: 1000});

    // let results = fuzz.reduce((acc, res) => {
    //   acc.push(res.obj);
    //   return acc;
    // }, []);

    setSearchQuery(() => q);
    setFilteredChapters(() => chapters.filter(ch => normalizeGreek(ch.tags).includes(q)));
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>{currentChapter || 'GMITW'}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="flex flex-col relative h-full">
          <div className="relative z-10">
            <YouTube
              videoId={'7kZPEEbHoF0'}
              onReady={(player) => onPlayerReady(player)}
              opts={ytPlayerOpts}
              containerClassName="video-wrap"
              className="video-player"
            />
            <div className="border-b border-gray-800">
              <IonItem>
                <IonLabel position="floating">αναζήτηση...</IonLabel>
                <IonInput debounce={200} onIonChange={handleSearchQuery} value={searchQuery}></IonInput>
              </IonItem>
            </div>
          </div>

          <div className="flex-1 mt-5 px-4">
            <Virtuoso
              data={filteredChapters}
              className="py-2"
              style={{height: '98%'}}
              itemContent={(index, ch) =>
                <div>
                  <IonItem className="w-full cursor-pointer" type="button" onClick={() => goToTime(ch.time)}>
                    <IonIcon icon={timeOutline} slot="start" />
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

export default Video;
