// This file represents what you can do with the province and path data template

// combine all province objects so they can be accessed in a single array
var provinces = [CANT,CANU,CAYT,CABC,CAAB,CAMB,CASK,CAON,CAQC,CAPE,CANS,CANL,CANB];
var colour = ['#FDDC4E','#F9F4F0','#A46084','#E18B74','#D48F57','#E25854','#709191','#BEC8B6','#662722','#64CAD7','#E64431','#F4B38F','#BEDDE3'];

// add events for each province to add province name and additional data
provinces.forEach(function(e){
  e.mouseover(function(){
    // associate a colour with each province
    var pos = provinces.indexOf(e);
    e.animate({
        fill: colour[pos]
    }, 100);
    // add province data when hovering
    $('#province').text(e.info.name);
    $('#population').text(e.info.population);
    $('#premier').text(e.info.premier);
  });
  e.mouseout(function(){
    e.animate({
        fill: 'rgb(211, 211, 211)'
    }, 400);
    $('#province').text('...province');
    $('#population').text('...population');
    $('#premier').text('...premier');
  });
});