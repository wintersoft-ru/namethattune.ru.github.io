var song = new Array();
var isCreated = false;
var PlayButton = document.getElementById('Play');
var i;
song[1] = 'Poets of The Fall - Delicious';
song[2] = 'System of a Down - Spiders';
song[3] = 'Thousand Foot Krutch - Down';
song[4] = 'Thousand Foot Krutch - Puppet';
song[5] = 'Thousand Foot Krutch - We Are';

function RandSong () {
		var audio = document.getElementById('Player');
	  	i = randomInt(1,5);
	  audio.src = 'resourses/music/'+i+'.mp3';
	  audio.autoplay = true;

  if(isCreated == false)
 	{
	  	var parent = document.getElementsByTagName('BODY')[0]; //получаем ссылку на элемент body
		var but = document.createElement('button');
		var butText = document.createTextNode('Угадать!');
		but.appendChild(butText); 
		parent.appendChild(but);
		parent.removeChild(PlayButton);
		isCreated = true;

		 but.onclick = function () {

  	var result = prompt('?');
		  	if (result == song[i])
		  			{
					alert("Correct!");
					//parent.removeChild(but);
					Player.pause();
					RandSong();
				}
				else
					{ 
					alert("Wrong!");
					//parent.removeChild(but);
					Player.pause();
					RandSong();
					}
  }
	} 
}


function soundClick() {

   RandSong();
  
 	



    

}

function randomInt(xmin,xmax) {
    // random integer in range {min, max}, including min and max
    return Math.floor( Math.random() * (xmax + 1 - xmin) + xmin );
}