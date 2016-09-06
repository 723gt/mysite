$(function(){
  $("#about_over").mouseover(function(){
    mouseover_color(this);
  });
  $("#about_over").mouseout(function(){
  	mouseout_color(this);
  });
  $("#link_over").mouseover(function(){
    mouseover_color(this);
  });
  $("#link_over").mouseout(function(){
  	mouseout_color(this);
  });
  $("#work_over").mouseover(function(){
    mouseover_color(this);
  });
  $("#work_over").mouseout(function(){
  	mouseout_color(this);
  });
  function mouseover_color(id){
  	$(id).css("background","#4169e1");
  }
  function mouseout_color(id){
  	$(id).css("background"," #bbbbbb");
  }
});