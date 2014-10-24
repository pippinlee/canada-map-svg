var provinces = [CANT,CANU,CAYT,CABC,CAAB,CAMB,CASK,CAON,CAQC,CAPE,CANS,CANL,CANB];
var colour = ['#FDDC4E','#F9F4F0','#A46084','#E18B74','#D48F57','#E25854','#709191','#BEC8B6','#662722','#64CAD7','#E64431','#F4B38F','#BEDDE3'];


provinces.forEach(function(e){
  e.mouseover(function(){
    var pos = provinces.indexOf(e);
    e.animate({
        fill: colour[pos]
    }, 100);
    $('#province').text(e.name);
  });
  e.mouseout(function(){
    e.animate({
        fill: 'rgb(211, 211, 211)'
    }, 400);
    $('#province').text('');
  });
});