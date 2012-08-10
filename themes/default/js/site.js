// default site js

$(function(){
  // DOM ready

  // Mark the current page showing as active in sitenav
  $("#sitenav a[href='"+window.location.pathname+"']")
    .addClass('active');

});
