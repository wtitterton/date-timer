alert('ddd');
function createBubbles()
{
		//settings
			//set min and max size
			//set min and max number of bubbles
			var minNumBubbles = 30;
			var maxNumBubbles = 70;
			var bubbles = generateRndNum(maxNumBubbles,maxNumBubbles);
			var maxDelay = [];
			var maxSpeed = [];
			for(var i = 0; i < bubbles; i++)
			{
				var bubble = document.createElement('div');
				document.body.appendChild(bubble);
				bubble.classList.add('bubble');

			}

			$('.bubble').each(function(){
				var pos = generateRndNum(0,100);
				var size = generateRndNum(5,30);
				var blur = generateRndNum(0,3);
				var speed = generateRndNum(3,8);
				var delay = generateRndNum(1,3);
				
				if(maxDelay.length == 0)
				{
					maxDelay.push(delay);

				}
				else if(delay > maxDelay[0])
				{
					maxDelay.push(delay);
					maxDelay.shift(maxDelay[0]);
				}
				
				if(maxSpeed.length == 0)
				{
					maxSpeed.push(speed);

				}
				else if(speed > maxSpeed[0])
				{
					maxSpeed.push(delay);
					maxSpeed.shift(maxSpeed[0]);
				}

				var current = $(this);
				current.addClass('bubbleAnimate');
				current.css({
					'position':'absolute',
					'bottom':'-40px',
					'left':pos + '%',
					'width': size,
					'height': size,
					'-webkit-filter' : 'blur(' + blur  + 'px)',
      				'-moz-filter' : 'blur(' + blur  + 'px)',
      				'-ms-filter' : 'blur(' + blur  + 'px)',
      				'filter' : 'blur(' + blur  + 'px)',
      				 '-webkit-animation-duration' : speed + 's',
				      '-moz-animation-duration' : speed + 's',
				      '-ms-animation-duration' : speed + 's',
				      'animation-duration' : speed + 's',
				      
				      '-webkit-animation-delay' : delay + 's',
				      '-moz-animation-delay' : delay + 's',
				      '-ms-animation-delay' : delay + 's',
				      'animation-delay' : delay + 's'

				});
			})

			
	// create a bubble
		// set it at a random postion on x axis position 0 on Y axis;
		// cs.
		//create delay 

		return {
			maxDelay:maxDelay,
			maxSpeed: maxSpeed 
		};

}



function AnimateTimeOut()
{
	var bubble = $('.bubble');
	if($(bubble).hasClass('bubbleAnimate'))
	{
		$(bubble).each(function(){
			$(this).removeClass('bubbleAnimate');
		})
	}
	else
	{
		$(bubble).each(function(){
			$(this).addClass('bubbleAnimate');
		})
	}

	return true;
	
}

	setInterval(function(){
		AnimateTimeOut()
	},timeOut)

	var bubbles = createBubbles();
	var longestDelay = parseInt(bubbles.maxDelay) * 1000;
	var slowestBubble = parseInt(bubbles.maxSpeed) * 1000;
	
	var timeout = 1000;
	var iterationCount = 3;
	var timeOut =  ((slowestBubble + longestDelay) * iterationCount); 