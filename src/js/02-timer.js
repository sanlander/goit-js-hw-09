import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/material_orange.css';

const refs = {
  btnStart: document.querySelector('[data-start]'),
  daysValue: document.querySelector('[data-days]'),
  hoursValue: document.querySelector('[data-hours]'),
  minutesValue: document.querySelector('[data-minutes]'),
  secondsValue: document.querySelector('[data-seconds]'),
};

refs.btnStart.toggleAttribute('disabled');
let timerPeriod = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  timerId: null,
  // timerPeriod: null,

  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      window.alert('Please choose a date in the future');
      return;
    }
    refs.btnStart.toggleAttribute('disabled');
    
    timerPeriod = Date.parse(selectedDates[0]);
  },

  onStart() {
    this.timerId = setInterval(() => {
      let remainingTime = timerPeriod - Date.now();

      const time = convertMs(remainingTime);

      if (Math.floor(remainingTime / 1000) < 0) {
        clearInterval(this.timerId);
        return;
      }
      updateTimerInterface(time);
    }, 1000);
  },
};
refs.btnStart.addEventListener('click', options.onStart.bind(options));

flatpickr('[id="datetime-picker"]', options);

// * * * function * * *

function updateTimerInterface({ days, hours, minutes, seconds }) {
  refs.daysValue.textContent = days;
  refs.hoursValue.textContent = hours;
  refs.minutesValue.textContent = minutes;
  refs.secondsValue.textContent = seconds;
}

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
