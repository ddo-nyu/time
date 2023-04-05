const colorWheel = [
  '#6a0d83',
  '#eeaf61',
  '#fb9062',
  '#ee5d6c',
  '#ce4993',
  '#6a0d83',
];

setInterval(function() {
  let current = moment();

  const currentHour = current.hour();
  console.log(currentHour);
  let sunColor;
  if (currentHour > 0 && currentHour < 4) {
    sunColor = colorWheel[0];
  } else if (currentHour > 4 && currentHour <= 8) {
    sunColor = colorWheel[1];
  } else if (currentHour > 8 && currentHour <= 12) {
    sunColor = colorWheel[2];
  } else if (currentHour > 12 && currentHour <= 16) {
    sunColor = colorWheel[3];
  } else if (currentHour > 16 && currentHour <= 20) {
    sunColor = colorWheel[4];
  } else if (currentHour > 20 && currentHour <= 24) {
    sunColor = colorWheel[5];
  }

  document.querySelector('.clock_face').style.boxShadow = `0px 0px 98px 0px ${sunColor}`;
}, 1000);
