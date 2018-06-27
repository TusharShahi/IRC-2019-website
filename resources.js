window.addEventListener('scroll',function() {
    var menubar = document.getElementById('bar');
    var sticky = menubar.offsetTop;
    sticky = 400;
    console.log(pageYOffset);
     if (window.pageYOffset >= sticky) {
        console.log("running if");
        menubar.classList.add('sticky');
        document.getElementById("content").style.marginTop = 90;
      } 
      else {
        console.log("else");
        menubar.classList.remove('sticky');
                  document.getElementById("content").style.marginTop = 0;
      }
      if(window.pageYOffset >= 800)
      {
        console.log("bulllll");
       // //document.getElementById('gototop').classList.add('showarrow');
        document.getElementById('icon-bar').style.display="block";
      //    document.getElementById('icons').classList.add('showarrow');

      }
      else
      {
document.getElementById('gototop').classList.remove('showarrow');
document.getElementById('icon-bar').style.display="none";
//document.getElementById('icons').classList.remove('showarrow');

      }
    
    
    });

//    var f = 0;

/*
    function setupFBframe(frame) {
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
*/
/* begin Document Ready                                     
############################################ */
/*
document.addEventListener('DOMContentLoaded', function() {
  var facebookIframe = document.querySelector('#facebook_iframe');
  setupFBframe(facebookIframe);
 
  /* begin Window Resize                                    
  ############################################ */
  
  // Why resizeThrottler? See more : https://developer.mozilla.org/ru/docs/Web/Events/resize
  /*(function() {
  /*  window.addEventListener("resize", resizeThrottler, false);

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
//});
/* end Document Ready                                     
############################################ */