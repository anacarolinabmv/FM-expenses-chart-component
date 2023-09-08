const changeBckgColor = function (day, dayToday, alpha) {
  const color = day === dayToday ? `rgba(118, 181, 188,${alpha})` : `rgba(236, 119, 95, ${alpha})`;
  day.style.backgroundColor = `${color}`;
};

const renderChartBars = function (data) {
  const days = Array.from(document.querySelectorAll('.day'));

  const today = new Date().getDay() - 1;
  const dayToday = days[today];
  dayToday.style.backgroundColor = `rgba(118, 181, 188)`;

  days.forEach((day, i) => {
    day.style.height = `${data[i].amount / 4}rem`;

    day.addEventListener('mouseenter', () => {
      changeBckgColor(day, dayToday, 0.5);
    });

    day.addEventListener('mouseleave', () => {
      changeBckgColor(day, dayToday, 1);
    });
  });
};

const initChart = async function () {
  const chart = document.querySelector('.chart');
  const response = await fetch('data.json');
  const data = await response.json();

  data.forEach((data) => {
    const html = `<div class="day"><p>${data.day}</p>
    <div class="label">$${data.amount}</div>
    </div>`;
    chart.insertAdjacentHTML('beforeend', html);
  });

  renderChartBars(data);
};

initChart();
