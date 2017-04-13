// $(document).ready(function() {
//
//   $("#getquote").on("click", function(){
//     myurl='http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback';
//     var mycallback = function(json){
//       $('#author').text(json);
//     };
// $.ajax({
//   url:myurl,
//   dataType:'jsonp',
//   jsonpCallback:'mycallback',
//   jsonp:false,
// });
//   });
//
//
//     // Only change code above this line.
//   });


/*
  Code by Gabriel Nunes
*/

// function inIframe () { try { return window.self !== window.top; } catch (e) { return true; } }
//
// var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
// var currentQuote = '', currentAuthor = '';
// function openURL(url){
//   window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
// }
// function getQuote() {
//   $.ajax({
//     headers: {
//       "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
//       Accept: "application/json",
//       "Content-Type": "application/x-www-form-urlencoded"
//     },
//     url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
//     success: function(response) {
//       var r = JSON.parse(response);
//       currentQuote = r.quote;
//       currentAuthor = r.author;
//       if(inIframe())
//       {
//         $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
//       }
//       $(".quote-text").animate({
//           opacity: 0
//         }, 500,
//         function() {
//           $(this).animate({
//             opacity: 1
//           }, 500);
//           $('#text').text(r.quote);
//         });
//
//       $(".quote-author").animate({
//           opacity: 0
//         }, 500,
//         function() {
//           $(this).animate({
//             opacity: 1
//           }, 500);
//           $('#author').html(r.author);
//         });
//
//       var color = Math.floor(Math.random() * colors.length);
//       $("html body").animate({
//         backgroundColor: colors[color],
//         color: colors[color]
//       }, 1000);
//       $(".button").animate({
//         backgroundColor: colors[color]
//       }, 1000);
//     }
//   });
// }

var author ='';
var content = '';
$(document).ready(function(){

  $('#getquote').on("click",quotehandler);
  quotehandler();
});
function quotehandler(){
  $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?", function(a) {
author = a[0].title;
content = a[0].content;
$("#tweet-quote").attr("href","https://twitter.com/intent/tweet?text="+encodeURIComponent("Quote: " + content+"----by  " + author));
$(".quotetext").animate({
opacity:0
},500,function(){
$(this).animate({
  opacity:1
},500);
$(".quotetext").html(a[0].content);
});
    // $(".quotetext").html(a[0].content);

    $("#author").animate({
      opacity:0
    },500,function(){
      $(this).animate({
        opacity:1
      },500);
    $("#author").text("---  " + a[0].title);
  });

  });
}
// $(document).ready(function() {
//   getQuote();
//   $('#new-quote').on('click', getQuote);
//   $('#tweet-quote').on('click', function() {
//     if(!inIframe()) {
//       openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
//     }
//   });
// });
