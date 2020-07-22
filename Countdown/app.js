const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const deadline = document.querySelector('.deadline');
  const vacations = document.querySelector('.vacations');
  const items = document.querySelectorAll('.deadline-format h4');

 let futureDate = new Date(2020,8,1,0,00,00,0);

 
 const year = futureDate.getFullYear();
 const hours = futureDate.getHours();
 const minutes = futureDate.getMinutes();

 let month=futureDate.getMonth();
 let day = futureDate.getDay();
 day = weekdays[day];
 month = months[month];
vacations.textContent=`Vacations ends on ${day} ${month} ${year} 0${hours}:0${minutes}am`;

//future time in ms 
const futureTime=futureDate.getTime();


function getRemainingTime(){
    const today= new Date().getTime(); 
    const t = futureTime - today;
    
    
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute= 60*1000;
    const oneSecound =1000;
    let days =t/oneDay;
    let hours = (t%oneDay)/oneHour;
    let minutes = (t%oneHour)/oneMinute;
    let secounds = (t%oneMinute)/oneSecound;

    days = Math.floor(days);
    hours = Math.floor(hours);
    minutes = Math.floor(minutes);
    secounds = Math.floor(secounds);

    function format(item){
      if(item<10){
        return item =`0${item}`
      }
      return item
    }
    const values = [days,hours,minutes,secounds];

    items.forEach(function(item,index){
        item.innerHTML = format(values[index]);
    });
    if(t<0){
      clearInterval(countdown);
      deadline.innerHTML = `<h4 class="expired">sorry, vacations in 2020 are over  :( </h4>`;
    }
}
//countdown 
let countdown = setInterval(getRemainingTime,1000)
getRemainingTime();