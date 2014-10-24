
// Ontario
onMouseOverON = function () {CAON.animate({fill: '#FDDC4E'}, 200); $('#province').text('Ontario')};
onMouseOutON = function () {CAON.animate({fill: 'rgb(211, 211, 211)'}, 200); $('#province').text(' ')};
CAON.hover(onMouseOverON, onMouseOutON);

// Alberta
onMouseOverAB = function () {CAAB.animate({fill: '#F9F4F0'}, 200); $('#province').text('Alberta')};
onMouseOutAB = function () {CAAB.animate({fill: 'rgb(211, 211, 211)'}, 200); $('#province').text(' ')};
CAAB.hover(onMouseOverAB, onMouseOutAB);

// Manitoba
onMouseOverMB = function () {CAMB.animate({fill: '#A46084'}, 200); $('#province').text('Manitoba')};
onMouseOutMB = function () {CAMB.animate({fill: 'rgb(211, 211, 211)'}, 200); $('#province').text(' ')};
CAMB.hover(onMouseOverMB, onMouseOutMB);

// New Brunswick
onMouseOverNB = function () {CANB.animate({fill: '#FDDC4E'}, 200); $('#province').text('New Brunswick')};
onMouseOutNB = function () {CANB.animate({fill: 'rgb(211, 211, 211)'}, 200); $('#province').text(' ')};
CANB.hover(onMouseOverNB, onMouseOutNB);

// Prince Edward Island
onMouseOverPE = function () {CAPE.animate({fill: '#D48F57'}, 200); $('#province').text('Prince Edward Island')};
onMouseOutPE = function () {CAPE.animate({fill: 'rgb(211, 211, 211)'}, 200); $('#province').text(' ')};
CAPE.hover(onMouseOverPE, onMouseOutPE);

// Saskatchewan
onMouseOverSK = function () {CASK.animate({fill: '#E25854'}, 200); $('#province').text('Saskatchewan')};
onMouseOutSK = function () {CASK.animate({fill: 'rgb(211, 211, 211)'}, 200); $('#province').text(' ')};
CASK.hover(onMouseOverSK, onMouseOutSK);

// Yukon Territory
onMouseOverYT = function () {CAYT.animate({fill: '#709191'}, 200); $('#province').text('Yukon Territory')};
onMouseOutYT = function () {CAYT.animate({fill: 'rgb(211, 211, 211)'}, 200); $('#province').text(' ')};
CAYT.hover(onMouseOverYT, onMouseOutYT);


// Nunavut
mouseOutNU = function () {
  CANU.forEach(function(e){
    e.animate ({ 
      fill: 'rgb(211, 211, 211)'
    }, 200)});
  $('#province').text(' ');
};

mouseOverNU = function () {
  CANU.forEach(function(e){
    e.animate ({
      fill: '#BEC8B6'
    }, 200)});
  $('#province').text('Nunavut');
};

CANU.hover(mouseOverNU, mouseOutNU);



// Northwest Territories
mouseOutNT = function () {
  CANT.forEach(function(e){
    e.animate ({ 
      fill: 'rgb(211, 211, 211)'
    }, 200)});
  $('#province').text(' ');
};

mouseOverNT = function () {
  CANT.forEach(function(e){
    e.animate ({ 
      fill: '#F9F4F0'
    }, 200)});
  $('#province').text('Northwest Territories');
};

CANT.hover(mouseOverNT, mouseOutNT);


// British Columbia
mouseOutBC = function () {
  CABC.forEach(function(e){
    e.animate ({ 
      fill: 'rgb(211, 211, 211)'
    }, 200)});
  $('#province').text(' ');
};

mouseOverBC = function () {
  CABC.forEach(function(e){
    e.animate ({ 
      fill: '#A46084'
    }, 200)});
  $('#province').text('British Columbia');
};

CABC.hover(mouseOverBC, mouseOutBC);



// Quebec
mouseOutQC = function () {
  CAQC.forEach(function(e){
    e.animate ({ 
      fill: 'rgb(211, 211, 211)'
    }, 200)});
  $('#province').text(' ');
};

mouseOverQC = function () {
  CAQC.forEach(function(e){
    e.animate ({ 
      fill: '#81B8C1'
    }, 200)});
  $('#province').text('Quebec');
};

CAQC.hover(mouseOverQC, mouseOutQC);



// Newfoundland and Labrador
mouseOutNL = function () {
  CANL.forEach(function(e){
    e.animate ({ 
      fill: 'rgb(211, 211, 211)'
    }, 200)});
  $('#province').text(' ');
};

mouseOverNL = function () {
  CANL.forEach(function(e){
    e.animate ({ 
      fill: '#FDDC4E'
    }, 200)});
  $('#province').text('Newfoundland and Labrador');
};

CANL.hover(mouseOverNL, mouseOutNL);


// Nova Scotia
mouseOutNS = function () {
  CANS.forEach(function(e){
    e.animate ({ 
      fill: 'rgb(211, 211, 211)'
    }, 200)});
  $('#province').text(' ');
};

mouseOverNS = function () {
  CANS.forEach(function(e){
    e.animate ({ 
      fill: '#D48F57'
    }, 200)});
  $('#province').text('Nova Scotia');
};

CANS.hover(mouseOverNS, mouseOutNS);






onMouseOver = function () {
    CANU.forEach(function(e){e.animate ({ fill: 'red'}, 200)})
};
onMouseOut = function () {
    Canada.animate({
        fill: 'rgb(211, 211, 211)'
    }, 200);
};

Canada.hover(onMouseOver, onMouseOut);

onMouseOut = function () {
    CANU.forEach(function(e){e.animate ({ fill: 'rgb(211, 211, 211)'}, 200)})
    CABC.forEach(function(e){e.animate ({ fill: 'rgb(211, 211, 211)'}, 200)})
    CANL.forEach(function(e){e.animate ({ fill: 'rgb(211, 211, 211)'}, 200)})
    CANS.forEach(function(e){e.animate ({ fill: 'rgb(211, 211, 211)'}, 200)})
    CANT.forEach(function(e){e.animate ({ fill: 'rgb(211, 211, 211)'}, 200)})
    CAQC.forEach(function(e){e.animate ({ fill: 'rgb(211, 211, 211)'}, 200)})
    CAON.forEach(function(e){e.animate ({ fill: 'rgb(211, 211, 211)'}, 200)})
};

onMouseOver = function () {
    CANU.forEach(function(e){e.animate ({ fill: 'green'}, 200)})
    CABC.forEach(function(e){e.animate ({ fill: 'red'}, 200)})
    CANL.forEach(function(e){e.animate ({ fill: 'blue'}, 200)})
    CANS.forEach(function(e){e.animate ({ fill: 'orange'}, 200)})
    CANT.forEach(function(e){e.animate ({ fill: 'pink'}, 200)})
    CAQC.forEach(function(e){e.animate ({ fill: 'yellow'}, 200)})
    CAON.forEach(function(e){e.animate ({ fill: 'purple'}, 200)})
};

Canada.hover(onMouseOver, onMouseOut);


