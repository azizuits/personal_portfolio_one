window.onscroll = function() {
    scrollFunction()
  }
  
  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("header_section").style.backgroundColor = "#ecf0f1";
      document.getElementById("header_section").style.padding = "10px 0";
      document.getElementById("header_section").style.transition = "1s linear";
    //   document.getElementById("logo").style.fontSize = "25px";
    } else {
    //   document.getElementById("logo").style.fontSize = "35px";
    document.getElementById("header_section").style.padding = "20px 0";
    document.getElementById("header_section").style.backgroundColor = "white";
    }
  }