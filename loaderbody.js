 $(document).ready(function(){
      if(screen.width<550){
        $("#loader").hide();
        $("#website").show();
        $("#icon-bar").hide();
      }
      else
      {
        $("#loader").show();

  //      $("#website").hide();

//        $("#website").delay(8000).fadeIn(700);
      }
    });

 /*     setTimeout(function(){
  $('#loader').remove();
}, 8000);*/


      ////////facebook res

      /*function setupFBframe(frame) {
  var container = frame.parentNode;

  var containerWidth = container.offsetWidth;
  var containerHeight = container.offsetHeight;

  var src =
    "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FIndianRoverChallenge&tabs=timeline&width=240&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=187120771934670" +
    "?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook" +
    "&tabs=timeline" +
    "&width=" +
    containerWidth +
    "&height=" +
    containerHeight +
    "&small_header=false" +
    "&adapt_container_width=false" +
    "&hide_cover=true" +
    "&hide_cta=true" +
    "&show_facepile=true" +
    "&appId";

  frame.width = containerWidth;
  frame.height = containerHeight;
  frame.src = src;
}

/* begin Document Ready                                     
############################################ */

//document.addEventListener('DOMContentLoaded', function() {
 // var facebookIframe = document.querySelector('#facebook_iframe');
 // setupFBframe(facebookIframe);
 
  /* begin Window Resize                                    
  ############################################ */
  
  // Why resizeThrottler? See more : https://developer.mozilla.org/ru/docs/Web/Events/resize
  /*(function() {
    window.addEventListener("resize", resizeThrottler, false);

    var resizeTimeout;

    function resizeThrottler() {
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(function() {
          resizeTimeout = null;
          actualResizeHandler();
        }, 66);
      }
    }

    function actualResizeHandler() {
      document.querySelector('#facebook_iframe').removeAttribute('src');
      setupFBframe(facebookIframe);
    }
  })();
  /* end Window Resize
  ############################################ */
//});*/
/* end Document Ready                                     
############################################ */


// animation for header
    document.getElementsByClassName('top')[0].addEventListener('mousemove', function (event) {
      if (window.event) { // IE fix
          event = window.event;
      }

    var mousex = event.clientX;
      var mousey = event.clientY;
      var bgheader = document.getElementsByClassName('top');
      if(document.width()>768) bgheader[0].style.backgroundPosition = mousex/30 + 'px ' + mousey/40 + 'px';
  });
    
  //window.onscroll = menuBar;
  window.addEventListener('scroll',function() {
  var menubar = document.getElementById('bar');
  var sticky = menubar.offsetTop;
  sticky = 400;
  console.log(pageYOffset);
   if (window.pageYOffset >= sticky) {
      console.log("running if");
      menubar.classList.add('sticky');
      content.style.marginTop = 90;
    } 
    else {
      console.log("else");
      menubar.classList.remove('sticky');
        content.style.marginTop = 0;
    }
    if(window.pageYOffset >= 800)
    {
      console.log("bulllll");
      document.getElementById('gototop').classList.add('showarrow');
      document.getElementById('icon-bar').style.display="block";
    //  document.getElementById('icons').classList.add('showarrow');

    }
    else
    {
document.getElementById('gototop').classList.remove('showarrow');
document.getElementById('icon-bar').style.display="none";
//document.getElementById('icons').classList.remove('showarrow');

    }
  
  
  });

  var f = 0;
  //icon function
  var iconfunction = function()
  {
    if(f==0)
    {
      f=1;
    document.getElementById('icons').classList.add('moveout');
    document.getElementById('icons').classList.remove('movein');

    document.getElementById('icon-arrow').innerHTML = "&#9654;";
    }
    else
    {
      f=0;
    document.getElementById('icons').classList.add('movein');
    document.getElementById('icons').classList.remove('moveout');
    document.getElementById('icon-arrow').innerHTML = "&#9664;";
    }

  }