$(document).ready(function(){
  var colors=["#9e3535","#73993d","#347f83","#252a71","#385d80","#5e2a73","#cf3bb8","#9e3553","#7399d3","#347f38"];
  $("#newQuote").on('click',function(){

  var quote=quotes[Math.floor(Math.random()*43)];
    $("#quote").html('<i class="fa fa-quote-left"></i>&nbsp;&nbsp;'+quote.quote );
    $('#author').html("&mdash; " + quote.author);
    $('#tweet').on('click',function(){
    window.open('http://twitter.com/home/?status='+quote.quote+ '_blank');
    });

var color=colors[Math.floor(Math.random()*11)]
$('body').css('background-color',color);
$('.quote-body').css('color',color);
$('#newQuote , #tweet ').css('background-color',color);



});


$("#newQuote").trigger('click');
});

var quotes=[
{"quote" : "If Java had true garbage collection, most programs would delete themselves upon execution.",

"author" : "Robert Sewell"},
{
"quote" : "XML is like violence – if it doesn’t solve your problems, you are not using enough of it.",

"author" : "Unknown"},
{
"quote" : "Documentation is like sex; when it's good, it's very, very good, and when it's bad, it's better than nothing.",

"author" : "Dick Brandon"},
{
"quote" : "I love deadlines. I like the whooshing sound they make as they fly by.",

"author" : "Douglas Adams"},
{
"quote" : "Linux is only free if your time has no value.",

"author" : "Jamie Zawinski"},
{
"quote" : "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",

"author" : "Rick Osborne"},
{
"quote" : "There are only two kinds of programming languages: those people always bitch about and those nobody uses.",

"author" : "Bjarne Stroustrup"},
{
"quote" : "Saying that Java is good because it works on all platforms is like saying anal sex is good because it works on all genders.",

"author" : "Unknown"},
{
"quote" : "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",

"author" : "Brian Kernighan"},
{
"quote" : "It always takes longer than you expect, even when you take into account Hofstadter’s Law.",

"author" : "Hofstadter’s Law"},
{
"quote" : "Walking on water and developing software from a specification are easy if both are frozen.",

"author" : "Edward V Berard"},
{
"quote" : "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",

"author" : "Rich Cook"},
{
"quote" : "I have always wished for my computer to be as easy to use as my telephone; my wish has come true because I can no longer figure out how to use my telephone.",

"author" : "Bjarne Stroustrup"},
{
"quote" : "Perl – The only language that looks the same before and after RSA encryption.",

"author" : "Keith Bostic"},
{
"quote" : "You should name a variable using the same care with which you name a first-born child.",

"author" : "James O. Coplien"},
{
"quote" : "The most amazing achievement of the computer software industry is its continuing cancellation of the steady and staggering gains made by the computer hardware industry.",

"author" : "Henry Petroski"},
{
"quote" : "Writing the first 90 percent of a computer program takes 90 percent of the time. The remaining ten percent also takes 90 percent of the time and the final touches also take 90 percent of the time.",

"author" : "N.J. Rubenking"},
{
"quote" : "Two things are infinite: the universe and human stupidity; and I’m not sure about the universe.",

"author" : "Albert Einstein"},
{
"quote" : "In C++ it’s harder to shoot yourself in the foot, but when you do, you blow off your whole leg.",

"author" : "Bjarne Stroustrup"},
{
"quote" : "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",

"author" : "Bill Gates"},
{
"quote" : "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",

"author" : "E. W. Dijkstra"},
{
"quote" : "There are two major products that come out of Berkeley: LSD and UNIX. We don’t believe this to be a coincidence.",

"author" : "Jeremy S. Anderson"},
{
"quote" : "I don’t care if it works on your machine! We are not shipping your machine!",

"author" : "Ovidiu Platon"},
{
"quote" : "On two occasions I have been asked, ‘Pray, Mr. Babbage, if you put into the machine wrong figures, will the right answers come out?’ I am not able rightly to apprehend the kind of confusion of ideas that could provoke such a question.",

"author" : "Charles Babbage"},
{
"quote" : "A computer lets you make more mistakes faster than any other invention in human history, with the possible exceptions of handguns and tequila.",

"author" : "Mitch Ratcliffe"},
{
"quote" : "In theory, theory and practice are the same. In practice, they\’re not.",

"author" : "Yogi Berra"},
{
"quote" : "No matter how slick the demo is in rehearsal, when you do it in front of a live audience, the probability of a flawless presentation is inversely proportional to the number of people watching, raised to the power of the amount of money involved.",

"author" : "Mark Gibbs"},
{
"quote" : "We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil.",

"author" : "C. A. R. Hoare"},
{
"quote" : "Programming is like sex: one mistake and you’re providing support for a lifetime.",

"author" : "Michael Sinz"},
{
"quote" : "Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves.",

"author" : "Alan Kay"},
{
"quote" : "Einstein argued that there must be simplified explanations of nature, because God is not capricious or arbitrary. No such faith comforts the software engineer.",

"author" : "Fred Brooks"},
{
"quote" : "C++ : Where friends have access to your private members.",

"author" : "Gavin Russell Baker"},
{
"quote" : "PHP is a minor evil perpetrated and created by incompetent amateurs, whereas Perl is a great and insidious evil, perpetrated by skilled but perverted professionals.",

"author" : "Jon Ribbens"},
{
"quote" : "There are two ways of constructing a software design; one way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult.",

"author" : "C. A. R. Hoare"},
{
"quote" : "Computers are like bikinis. They save people a lot of guesswork.",

"author" : "Sam Ewing"},
{
"quote" : "Beware of bugs in the above code; I have only proved it correct, not tried it.",

"author" : "Donald Knuth"},
{
"quote" : "I’ve noticed lately that the paranoid fear of computers becoming intelligent and taking over the world has almost entirely disappeared from the common culture. Near as I can tell, this coincides with the release of MS-DOS.",

"author" : "Larry DeLuca"},
{
"quote" : "QA Engineer walks into a bar. Orders a beer. Orders 0 beers. Orders 999999999 beers. Orders a lizard. Orders -1 beers. Orders a sfdeljknesv.",

"author" : "Bill Sempf"},
{
"quote" : "In software, we rarely have meaningful requirements. Even if we do, the only measure of success that matters is whether our solution solves the customer’s shifting idea of what their problem is.",

"author" : "Jeff Atwood"},
{
"quote" : "There are only two hard things in Computer Science: cache invalidation, naming things and off-by-one errors.",

"author" : "Phil Karlton"},
{
"quote" : "The difference between theory and practice is that in theory, there is no difference between theory and practice.",

"author" : "Richard Moore"},
{
"quote" : "It is practically impossible to teach good programming style to students that have had prior exposure to BASIC. As potential programmers, they are mentally mutilated beyond hope of regeneration.",

"author" : "E. W. Dijkstra"}
] ;
