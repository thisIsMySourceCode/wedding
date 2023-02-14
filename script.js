    var countDownDate = new Date("Mar 10, 2023 10:00:00").getTime();
    var x = setInterval(function() 
{   var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	if (days > 0)
	{	document.getElementById("time").innerHTML = '<p class="dance-med">Aniversario en</p><div id="contador">'+(days+1)+'<span class="days_text">d&iacute;as</span></div>';		
	}	else
	{	document.getElementById("time").innerHTML = '<p class="dance-med">Aniversario en</p><div id="contador" class="hora">'+hours+'<span class="separator">:</span>'+String(minutes).padStart(2, '0');+'</div>';
	}
    if (distance < 0) 
    {   clearInterval(x);
        document.getElementById("time").innerHTML = "";
    }
}, 500);
(function ($) 
{  "use strict";
$('.sakura-falling').sakura();
})(jQuery);
$(document).on('click', function()
{ document.getElementById("player").play();
});


$(document).ready(function()
{
     $( "#img1" ).hover
    (
        function(e) 
        {
            e.preventDefault();
            $("#img1").attr("src","2.webp");
            setTimeout(function()
            {
                $("#img1").attr("src","1.webp");
            },2000);
        },
        function(e)
        {
            e.preventDefault();
        }
    );
});
