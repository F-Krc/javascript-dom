import './styles/main.scss'; // Don't delete :)
// countdown date is year: 2025, month: 2, day: 4, hour: 16
// All of your javascript should go here :)


  const moment = require('moment');

  const countdownElement = document.getElementById('countdown');


  const endDate = moment('2025-02-04T16:00:00');

  function updateCountdown() {
    const now = moment();
    const duration = moment.duration(endDate.diff(now));

    const days = Math.floor(duration.asDays());
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000); 