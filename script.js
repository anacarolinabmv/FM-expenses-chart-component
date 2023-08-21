const jsonData = [
  { day: 'mon', amount: 17.45 },
  { day: 'tue', amount: 34.91 },
  { day: 'wed', amount: 52.36 },
  { day: 'thu', amount: 31.07 },
  { day: 'fri', amount: 23.39 },
  { day: 'sat', amount: 43.28 },
  { day: 'sun', amount: 25.48 },
];

const changeBckgColor = function (day, dayToday, alpha) {
  const color = day === dayToday ? `rgba(118, 181, 188,${alpha})` : `rgba(236, 119, 95, ${alpha})`;
  day.style.backgroundColor = `${color}`;
};

const renderChartBars = function () {
  const days = Array.from(document.querySelectorAll('.day'));

  const today = new Date().getDay() - 1;
  const dayToday = days[today];
  dayToday.style.backgroundColor = `rgba(118, 181, 188)`;

  days.forEach((day, i) => {
    day.style.height = `${jsonData[i].amount / 4}rem`;

    day.addEventListener('mouseenter', () => {
      changeBckgColor(day, dayToday, 0.5);
    });

    day.addEventListener('mouseleave', () => {
      changeBckgColor(day, dayToday, 1);
    });
  });
};

const initChart = function () {
  const chart = document.querySelector('.chart');

  jsonData.forEach((data) => {
    const html = `<div class="day"><p>${data.day}</p>
    <div class="label">$${data.amount}</div>
    </div>`;
    chart.insertAdjacentHTML('beforeend', html);
  });

  renderChartBars();
};

initChart();
