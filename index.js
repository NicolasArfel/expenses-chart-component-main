/*  Datas */
const days = [{
    "day": "mon",
    "amount": 17.45
  },
  {
    "day": "tue",
    "amount": 34.91
  },
  {
    "day": "wed",
    "amount": 52.36
  },
  {
    "day": "thu",
    "amount": 31.07
  },
  {
    "day": "fri",
    "amount": 23.39
  },
  {
    "day": "sat",
    "amount": 43.28
  },
  {
    "day": "sun",
    "amount": 25.48
  } ]

  /* find the name of the weekday */
  function today() {
    const date = new Date();
    var day = days[(date.getDay()) -1]
    return day;
  }
  
  function createCharts () {
    /* Select the div were it will be charts */
    const chartsWeekEl = document.querySelector('.charts__week');
    
    /* Make a loop for each day of the week */
    days.forEach(day => {
      /* size of charts */
      const heightValue = (day.amount * 300)/100;
      
      /* create elements for the charts */
      const chartsDaysEl = document.createElement('div');
      const blockEl = document.createElement('div');
      const dayEl = document.createElement('p');
      const amountEl = document.createElement('span');
      
      /* create class and style for the charts elements */
      chartsDaysEl.classList.add('charts__days');
      blockEl.classList.add('block', `${day.day}`);
      blockEl.style.height = (heightValue) + 'px'
      dayEl.innerHTML = `${day.day}`;
      amountEl.classList.add('charts__amount');
      amountEl.innerHTML= `$.${day.amount}`;
      
      /* add cyan color on the daily chart */
      if (dayEl.innerHTML === today().day) {
        blockEl.style.background = 'var(--cyan)';
      }

      /* Add elements into the div for creating the charts */
      chartsWeekEl.appendChild(chartsDaysEl);
      blockEl.appendChild(amountEl);
      chartsDaysEl.appendChild(blockEl);
      chartsDaysEl.appendChild(dayEl);        

    });
  }

  
  
createCharts();

