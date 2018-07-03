 $(document).ready(function(){
      
$("#gototop").on("click",function(event){
      console.log("bb");
      event.preventDefault();
      $(" html, body").animate({scrollTop:0},1500);
      return false;
    });
   
$('#subscriptionForm').submit(function(event)
{
                event.preventDefault();
                alert("You have successfully subscribed to our updates!"); 
            var formData = $("#subscriptionForm").serialize();
          $.ajax({
    type: 'POST',
    url: $("#subscriptionForm").attr('action'),
    email: formData
}).done(function()
{
  alert("You have subscribed");
});
            }); 
    });

document.getElementsByClassName('top')[0].addEventListener('mousemove', function (event) {
      if (window.event) { // IE fix
          event = window.event;
      }

    var mousex = event.clientX;
      var mousey = event.clientY;
      var bgheader = document.getElementsByClassName('top');
      if(document.width>768) bgheader[0].style.backgroundPosition = mousex/30 + 'px ' + mousey/40 + 'px';
  });
    
  //window.onscroll = menuBar;
  window.addEventListener('scroll',function() {
  var menubar = document.getElementById('bar');
  var sticky = menubar.offsetTop;
  sticky = 400;
  var content = document.getElementById("content");
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