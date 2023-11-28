export const timer = (id, deadline) => {
  const getTimeRemainig = endtime => {
    const t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24),
      days = Math.floor((t / (1000 * 60 * 60 * 24)));
    return {
      'total': t,
      'seconds': seconds,
      'minutes': minutes,
      'hours': hours,
      'days': days,
    };
  };

  const addZero = num => {
    return (num <= 9) ? ('0' + num) : num;
  };

  const setClock = (selector, endtime) => {
    const timer = document.querySelector('#timer'),
      seconds = timer.querySelector('#seconds'),
      minutes = timer.querySelector('#minutes'),
      hours = timer.querySelector('#hours'),
      days = timer.querySelector('#days'),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemainig(endtime);

      seconds.textContent = addZero(t.seconds);
      minutes.textContent = addZero(t.minutes);
      hours.textContent = addZero(t.hours);
      days.textContent = addZero(t.days);

      if (t.total <= 0) {
        seconds.textContent = '00';
        minutes.textContent = '00';
        hours.textContent = '00';
        days.textContent = '00';

        clearInterval(timeInterval);
      }
    }
  };
  setClock(id, deadline);
};
