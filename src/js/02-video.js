import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const LOCAL_STORAGE_KEY = 'vidoplayer-current-time';
const timeLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY) || 0;

const onPlay = function (data) {
  const currentTime = data.seconds;
  localStorage.setItem(LOCAL_STORAGE_KEY, currentTime);
}

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(timeLocalStorage).catch(function(error) {
  switch (error.name) {
    case 'RangeError':
      break;

    default:
      break;
  }
});