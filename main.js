window.onload = function()
{
  var deadline = new Date("Febuary 4, 2019 17:15");
  startTimer('clock',deadline);

  
}

function animateClock(span)
{
  span.classList.add('turn');
  setTimeout(function(){
    span.classList.remove('turn');
  },700);
}

function startTimer(id, deadline)
{
  var timerInterval = setInterval(function(){
      var clock = document.getElementById(id);
      var timer = updateTimer(deadline);
      var days = '<span>' + timer.days + '</span>';
      var hours = '<span>' + timer.hours + '</span>';
      var mins = '<span>' + timer.minutes + '</span>';
      var seconds = '<span>' + timer.seconds + '</span>';

      
      if(timer.days < 10)
        {
          days = '<span>' + '0' + timer.days + '</span>'; 
        }
      if(timer.hours < 10)
        {
          hours = '<span>' + '0' + timer.hours + '</span>'
        }
      if(timer.minutes < 10)
        {
          mins = '<span>' + '0' + timer.minutes + '</span>';
        }
        else if(timer.seconds < 10)
        {
            seconds = '<span>' + '0' + timer.seconds + '</span>';
        }
       
      clock.innerHTML =  days + ' ' + hours + ' ' + mins + ' ' + seconds;
     var spans = clock.getElementsByTagName('span');
    
    animateClock(spans[3]);
      
     
      if(timer.seconds == 59)
      {
        animateClock(spans[2])
      }
      if(timer.minutes == 59 && timer.seconds == 59)
        {
          animateClock(spans[1]);
        }
      
        if(timer.hours == 23 && timer.minutes == 59 && timer.seconds == 59)
          {
            animateClock(spans[0]);
          }
      
      if(timer.total < 1)
        {
          clearInterval(timerInterval);
          // set innerHtml spans to zero
        }
  },1000);
}

function updateTimer(deadline)
{
  var time = deadline - new Date(); /* diff in date and time since function was last run in milliseconds*/
   /* takes time and  times 1000 gives seconds then times 60 gives us mins times 60 gives us hours and times 24 gives us days */
 var units = 
  {
   
    'days': Math.floor( time/(1000*60*60*24) ),
    'hours': Math.floor( (time/(1000*60*60)) % 24 ),
    'minutes': Math.floor( (time/1000/60) % 60 ),
    'seconds': Math.floor( (time/1000) % 60),
    'total':time
  };
  return units;
}