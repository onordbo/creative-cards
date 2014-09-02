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

function setTextValueByIndex(index)
{
	var r_text = new Array ();
	r_text[ 0] = "Look at things that inspire you.";
	r_text[ 1] = "Combine two or more things and create a new invention.";
	r_text[ 2] = "Eavesdrop on people and write a story about their life.";
	r_text[ 3] = "Pick five random sentences from two books, write a story about them.";
	r_text[ 4] = "Make a scrapbook with photos that inspires you.";
	r_text[ 5] = "Create a list of music that inspires you.";
	r_text[ 6] = "Write ten variations of the same question. ";
	r_text[ 7] = "Pick a children’s movie and figure out how the characters would be as real humans.";
	r_text[ 8] = "Find twenty new ways to use an object. ";
	r_text[ 9] = "Create the dumbest idea ever.";
	r_text[10] = "Create your ultimate animal.";
	r_text[11] = "Convince someone to change their diet.";
	r_text[12] = "Dance with a random stranger on the street.";
	r_text[13] = "Answer questions with song lyrics.";
	r_text[14] = "Visit Human Brain Cloud and play.";
	r_text[15] = "Buy food that people don’t usually combine and make it taste good.";
	r_text[16] = "Find an inspiring TED-talk. ";
	r_text[17] = "Listen to inspiring podcasts.";
	r_text[18] = "Play with Lego.";
	r_text[19] = "Pick a random object and try to sell it.";
	r_text[20] = "Try to find animal shapes in popcorn.";
    r_text[21] = "Go outside (leave the phone at home), and look at stuff.";
    r_text[22] = "Create a new font.";
    r_text[23] = "Visit Khan Academy and learn something new. ";
    r_text[24] = "Play video games.";
    r_text[25] = "Pick the first five objects you see. Figure out how to use them to survive on a desert island. ";
    r_text[26] = "Read a book for one hour.";
    r_text[27] = "Talk to strangers.";
    r_text[28] = "Create a new word that doesn’t sound silly.";
    r_text[29] = "Carry a notebook and a pen.";
    r_text[30] = "Meditate for one minute.";
    r_text[31] = "Google “energizer” and pick one.";
    r_text[32] = "Write a manuscript that contains 1000 words.";
    r_text[33] = "Visit a museum.";
    r_text[34] = "Play board games.";
    r_text[35] = "Say the first thing that comes to your mind all day long.";
    r_text[36] = "Use a photo and write a story about it.";
    r_text[37] = "Decide what you would do with one million dollars.";
    r_text[38] = "Come up with five different palindromes.";
    r_text[39] = "Come up with different oxymorons. ";
    r_text[40] = "Create a new language.";
    r_text[41] = "Try to explain something by only using sign language.";
    r_text[42] = "Think about ten things that will happen in ten years.";
    r_text[43] = "Draw a picture with your foot.";
    r_text[44] = "Create a new card game.";
    r_text[45] = "Design a t-shirt. ";
    r_text[46] = "Make a song.";
    r_text[47] = "Create an alter ego.";
    r_text[48] = "Create a new furniture.";
    r_text[49] = "Redefine the name of ten different countries.";
    r_text[50] = "Create a new country and come up with a flag, language and name for it.";
    r_text[51] = "Stargaze and name the stars.";
	document.getElementById('advice').innerHTML = r_text[index];

}

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

function changeText()
{
	var i = Math.floor(52*Math.random());
	setTextValueByIndex(i);
}
