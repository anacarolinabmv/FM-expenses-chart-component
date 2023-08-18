const jsonData = [
  { day: 'mon', amount: 17.45 },
  { day: 'tue', amount: 34.91 },
  { day: 'wed', amount: 52.36 },
  { day: 'thu', amount: 31.07 },
  { day: 'fri', amount: 23.39 },
  { day: 'sat', amount: 43.28 },
  { day: 'sun', amount: 25.48 },
];

const initChart = function () {
  const chart = document.querySelector('.chart');

  jsonData.forEach((data) => {
    const html = `<div class="day"><p>${data.day}</p>
    <div class="label">$${data.amount}</div>
    </div>`;
    chart.insertAdjacentHTML('beforeend', html);
  });

  const today = new Date().getDay() - 1;
  const days = Array.from(document.querySelectorAll('.day'));
  const dayToday = days[today];
  dayToday.style.backgroundColor = `rgba(118, 181, 188)`;

  days.forEach((day, i) => {
    day.style.height = `${jsonData[i].amount / 4}rem`;

    const changeBckgColor = function (day, a) {
      const color = day === dayToday ? `rgba(118, 181, 188,${a})` : `rgba(236, 119, 95, ${a})`;

      day.style.backgroundColor = `${color}`;
    };

    day.addEventListener('mouseenter', () => {
      changeBckgColor(day, 0.5);
    });
    day.addEventListener('mouseleave', () => {
      changeBckgColor(day, 1);
    });
  });
};

initChart();
