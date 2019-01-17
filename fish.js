
var startingFish = 30;
var sea = $('.sea');
var seaWidth = sea.width();
var seaHeight = sea.height();

function generateRndNum(max)
{
	  return Math.random() * max;
}

function spawnStartFish()
{
	for(var i = 0; i < startingFish; i++)
	{
		var index = i;
		spawnFish(generateRndNum(seaWidth), generateRndNum(seaHeight), index);	

	}
}

function spawnFish(x,y, index)
{
	 var fish = $('<div class="fish"><div class="fish-bob"><div class="fish-direction"><div class="fish-body"></div></div></div></div>');
	sea.append(fish);
	  positionFish(fish,x,y);

	  if(index % 2 === 0)
	  {
	  	fish.addClass('fish-flip');
	  }

	   fish.find('.fish-bob').css('animation-delay', '-' + generateRndNum(8) + 's');
	    setTimeout(handleFishBehaviour.bind(this, fish), generateRndNum(3000))
}




function positionFish(fish, x, y) {
  fish
    .css('transform', 'translate(' + x + 'px, ' + y + 'px)')
    .data('x', x)
    .data('y', y); 
    
}

function moveFish(fish)
{
	var x = generateRndNum(seaWidth);
  	var y = generateRndNum(seaHeight);

  	if (x < fish.data('x')) {
    fish.addClass('fish-flip');
  } else {
    fish.removeClass('fish-flip');
  }

   positionFish(fish, x, y);
}


function handleFishBehaviour(fish)
{
	moveFish(fish);

	var timeout = fish.data('timeout');
  	clearTimeout(timeout);
  timeout = setTimeout(handleFishBehaviour.bind(this, fish), 10000 + generateRndNum(6000));
  fish.data('timeout', timeout);
}



function createBubbles()
{
		//settings
			//set min and max size
			//set min and max number of bubbles
			
			var maxNumBubbles = 70;
			var bubbles = generateRndNum(maxNumBubbles);
			var maxDelay = [];
			var maxSpeed = [];
			for(var i = 0; i < bubbles; i++)
			{
				var bubble = document.createElement('div');
				document.body.appendChild(bubble);
				bubble.classList.add('bubble');

			}

			$('.bubble').each(function(){
				var pos = generateRndNum(100);
				var size = generateRndNum(30);
				var blur = generateRndNum(3);
				var speed = generateRndNum(8);
				var delay = generateRndNum(3);
				
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
					'bottom':'-120px',
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

		$(bubble).each(function(){
			$(this).addClass('bubbleAnimate');
		})
	
	
}

	
	
	
	var bubbles = createBubbles();
	var longestDelay = parseInt(bubbles.maxDelay) * 1000;
	var slowestBubble = parseInt(bubbles.maxSpeed) * 1000;
	
	var timeout = 1000;
	var iterationCount = 3;
	var timeOut =  ((slowestBubble + longestDelay) * iterationCount + timeout); 
	
	

	

	

	
		
		spawnStartFish();
	AnimateTimeOut();		

	


	

	

// move fish
	// add transform to fishbody.
	// target three random fish every 2s and set a random position for each
		// if destination is behind them then flip fish

//bubbles
	// ake fish that have be targeted to move blow a bubble

// when fish are not moving make them float