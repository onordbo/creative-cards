function gup( name )
{
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null )
    return "";
  else
    return results[1];
}

//Array of HTML data
function setTextValueByIndex(index)
{
	var r_text = new Array ();
	r_text[ 0] = "Include five kitchen tools in a poem.";
	r_text[ 1] = "Combine two or more things and create a new invention.";
	r_text[ 2] = "Choose five choirs and make a new song.";
	r_text[ 3] = "Pick five random sentences from two books, write a story about them.";
	r_text[ 4] = "Create a new sport and play it.";
	r_text[ 5] = "Paint something in less than one minute using ketchup, mustard and jam.";
	r_text[ 6] = "Sign up for Codecademy.";
	r_text[ 7] = "Pick a children’s movie and figure out how the characters would be as real humans.";
	r_text[ 8] = "Find twenty new ways to use an object. ";
	r_text[ 9] = "Create the dumbest idea ever.";
	r_text[10] = "Create your ultimate animal.";
	r_text[11] = "Come up with ten new ways to sit on a chair.";
	r_text[12] = "Create a new superhero.";
	r_text[13] = "Answer questions with song lyrics.";
	r_text[14] = "Visit Human Brain Cloud and play.";
	r_text[15] = "Buy food that people don’t usually combine and make it taste good.";
	r_text[16] = "Photograph shapes outside that looks like letters and create the entire alphabet.";
	r_text[17] = "Choose an artist, and visualize something that you associate with that person.";
	r_text[18] = "Build an object of your choice with Lego.";
	r_text[19] = "Pick a random object, you have 30 seconds to sell it.";
	r_text[20] = "Try to find animal shapes in popcorn.";
    r_text[21] = "Create music with vegetables.";
    r_text[22] = "Create a new font.";
    r_text[23] = "Visit Khan Academy and learn something new. ";
    r_text[24] = "Do the marshmallow challenge.";
    r_text[25] = "Pick the first five objects you see. Figure out how to use them to survive on a desert island. ";
    r_text[26] = "Build a house with matches and glue.";
    r_text[27] = "Bake a cake that looks like you.";
    r_text[28] = "Create a new word that doesn’t sound silly.";
    r_text[29] = "Create the most annoying sound.";
    r_text[30] = "Create a new accent and try it out.";
    r_text[31] = "Discover anagrams.";
    r_text[32] = "Write a story that contains at least 1000 words.";
    r_text[33] = "Predict a future design trend.";
    r_text[34] = "Create a new board game.";
    r_text[35] = "Say the first thing that comes to your mind all day long.";
    r_text[36] = "Find a photo and write a story about it.";
    r_text[37] = "Decide what you would do with one million dollars.";
    r_text[38] = "Come up with five different palindromes.";
    r_text[39] = "Come up with different oxymorons. ";
    r_text[40] = "Create a new language and write five sentences with it.";
    r_text[41] = "Try to explain something by only using sign language.";
    r_text[42] = "Think about ten things that will happen with technology in ten years.";
    r_text[43] = "Draw a picture using your foot to hold the pen.";
    r_text[44] = "Create a new card game.";
    r_text[45] = "Design a t-shirt. ";
    r_text[46] = "Create an app for money transfer without using letters or numbers.";
    r_text[47] = "Create an alter ego for yourself.";
    r_text[48] = "Create a new furniture and decide how it’s going to be used.";
    r_text[49] = "Redefine the name of ten different countries.";
    r_text[50] = "Create a new country and come up with a flag, currency, language and a name for it.";
    r_text[51] = "Write a resume for an alien.";
	document.getElementById('advice').innerHTML = r_text[index];
}

//Index and load content from textArray
function loadText()
{
	var index = gup("p");

	if( index == "" )
	{
		changeText();
	}
	else
	{
		var num = parseInt(index);
		if( num < 52 )
		{
			setTextValueByIndex(num);
		}
		else
		{
			changeText();
		}
	}
}

//Inject new HTML content
function changeText()
{
	var i = Math.floor(52*Math.random());
	setTextValueByIndex(i);
}

//Change background color
var backgrounds = ["#69af27", "#009DE0", "#EAD301", "#D11278"];
    function setColor(el) {
        el.colorIdx = el.colorIdx || 0;
        el.style.backgroundColor = backgrounds[el.colorIdx++ % backgrounds.length];
}

//Timeout function, loads new tip and change background color
window.setInterval("setColor(body)", 30000);
window.setInterval("changeText()", 30000);