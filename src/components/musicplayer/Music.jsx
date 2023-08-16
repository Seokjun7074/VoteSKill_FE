import { useEffect, useState } from 'react';
import useSound from 'use-sound'; // for handling the sound
import qala from '../assets/qala.mp3'; // importing the music
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai'; // icons for play and pause
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi'; // icons for next and previous track
import { IconContext } from 'react-icons'; // for customazing the icons

function Music() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause, duration, sound }] = useSound(qala);
  const playingButton = () => {
    if (isPlaying) {
      pause(); // this will pause the audio
      setIsPlaying(false);
    } else {
      play(); // this will play the audio
      setIsPlaying(true);
    }
    const [currTime, setCurrTime] = useState({
      min: '',
      sec: '',
    }); // current position of the audio in minutes and seconds

    const [seconds, setSeconds] = useState(); // current position of the audio in seconds
    useEffect(() => {
      const interval = setInterval(() => {
        if (sound) {
          setSeconds(sound.seek([])); // setting the seconds state with the current state
          const min = Math.floor(sound.seek([]) / 60);
          const sec = Math.floor(sound.seek([]) % 60);
          setCurrTime({
            min,
            sec,
          });
        }
      }, 1000);
      return () => clearInterval(interval);
    }, [sound]);
  };
  return (
    <div className="component">
      <h2>Playing Now</h2>
      <img className="musicCover" src="https://picsum.photos/200/200" />
      <div>
        <h3 className="title">Rubaiyyan</h3>
        <p className="subTitle">Qala</p>
      </div>
      <div>
        <button className="playButton">
          <IconContext.Provider value={{ size: '3em', color: '#27AE60' }}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>
        {!isPlaying ? (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: '3em', color: '#27AE60' }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </button>
        ) : (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: '3em', color: '#27AE60' }}>
              <AiFillPauseCircle />
            </IconContext.Provider>
          </button>
        )}
        <button className="playButton">
          <IconContext.Provider value={{ size: '3em', color: '#27AE60' }}>
            <BiSkipNext />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
}

export default Music;
