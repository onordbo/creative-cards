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
	r_text[ 0] = "Facilitate audience conversations and drive engagement with social currency";
	r_text[ 1] = "Maximise breakthrough by leveraging influencers";
	r_text[ 2] = "Amplify word of mouth by motivating influencers";
	r_text[ 3] = "Humanise the brand by driving the audience conversations";
	r_text[ 4] = "Harness social currency to drive buzz";
	r_text[ 5] = "Drive break through conversations with an engaging viral";
	r_text[ 6] = "Utilise social currency to amplify experiences and drive conversations";
	r_text[ 7] = "Maximise buzz by driving word of mouth from relevant influencers";
	r_text[ 8] = "Increase organic growth by exposing audiences to the brand through breakthrough viral communications";
	r_text[ 9] = "Encourage positive conversations to drive advocacy";
	r_text[10] = "Target influencers with engaging assets to act as platforms for conversation";
	r_text[11] = "Provide brand ambassadors with compelling conversation hooks to enter into communities and fuel advocacy";
	r_text[12] = "Expose new and relevant communities to the brand by providing assets to encourage brand evangelism";
	r_text[13] = "Enhance the customer experience by facilitating authentic conversations";
	r_text[14] = "Expose new users to the brand through organic conversations";
	r_text[15] = "Build loyalty & increased engagement through ongoing conversation and brand experience";
	r_text[16] = "Strengthen the emotional connection with the brand by building relationship";
	r_text[17] = "Maximise the customer experience, driving engagement and bringing the brand alive";
	r_text[18] = "Ignite the existing community and attract new members by amplifying the experience with relevant and engaging content";
	r_text[19] = "Identify relevant and compelling hooks for the audience, create content around the hooks and integrate it into their social repertoires";
	r_text[20] = "Activate audience by giving them compelling social experiences, encouraging advocacy";
	document.getElementById('bigfuckingtext').innerHTML = r_text[index];

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
		if( num < 21 )
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
	var i = Math.floor(21*Math.random());
	setTextValueByIndex(i);
}
