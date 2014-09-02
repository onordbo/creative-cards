//Change card
$( "#adviceBTN" ).click(function() {
    document.getElementById("advice").innerHTML = "If this works, you're awesome.";
});


$("adviceBTN").click(function(){
    $.ajax({
        url: "data.json",
        //force to handle it as text
        dataType: "text",
        success: function(data) {

            //data downloaded so we call parseJSON function
            //and pass downloaded data
            var json = $.parseJSON(data);
            //now json variable contains data in json format
            //let's display a few items
            document.getElementById("advice").innerHTML = json;
        }
    });
});


function changeText()
{
    var i = Math.floor(52*Math.random());
    setTextValueByIndex(i);
}