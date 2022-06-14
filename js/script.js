$(document).ready(function () {
  const colorThief = new ColorThief();
  const img = document.querySelector("img");
  var parent = document.getElementsByClassName("wrapper");
  // Make sure image is finished loading
  if (img.complete) {
    colorThief.getColor(img);
    console.log(colorThief.getColor(img));
    var rgbColor0 = colorThief.getColor(img)[0];
    var rgbColor1 = colorThief.getColor(img)[1];
    var rgbColor2 = colorThief.getColor(img)[2];
    var rgba1 = `rgba(${rgbColor0},${rgbColor1},${rgbColor2},1)`;
    var rgba2 = `rgba(${rgbColor0},${rgbColor1},${rgbColor2},1)`;
    document.querySelector('.wrapper').setAttribute('style',`background:${rgba1};`);
    document.querySelector('img').setAttribute('style',`filter:drop-shadow(.5rem .5rem 1rem ${rgba2});`);
    
   // parent.setAttribute('style','color:red;');
  } else {
    image.addEventListener("load", function () {
      colorThief.getColor(img);
      console.log(colorThief.getColor(img));
    });
  }
});
