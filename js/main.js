$(document).ready(function(){
  var colors=["#9e3535","#73993d","#347f83","#252a71","#385d80","#5e2a73","#cf3bb8","#9e3553","#7399d3","#347f38"];
  $("#newQuote").on('click',function(){

  $.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(a) {
    $("#quote").html('<i class="fa fa-quote-left"></i>&nbsp;&nbsp;'+a.quote );
    $('#author').html("&mdash; " + a.author);
    $('#tweet').on('click',function(){
    window.open('http://twitter.com/home/?status='+a.quote+ '_blank');
    });
    });
var color=colors[Math.floor(Math.random()*11)]
$('body').css('background-color',color);
$('.quote-body').css('color',color);
$('#newQuote , #tweet ').css('background-color',color);



});


$("#newQuote").trigger('click');
});
