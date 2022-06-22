const getColorAndSet = async image => {
           
  const colors = await rgbaster(image);
  const color = colors[0].color;
  const rgb = color.replace('rgb(', '').replace(')', '').split(',');
  const [r, g, b] = rgb;
  const vibrant = await Vibrant.from(image).getPalette();
  const accent = vibrant.Vibrant.hex;

  document.querySelector('.rgba-segment').style.backgroundColor = `rgba(${r}, ${g}, ${b}, 1)`;
  document.querySelector('.bg_wrapper').style.backgroundColor = `rgba(${r}, ${g}, ${b}, 1)`;
  document.querySelector('.text').style.color = accent;
  document.querySelector('.image').style.backgroundImage = `url(${image})`;
  document.querySelector('.rgba-segment').style.backgroundColor = color;
  document.querySelector('.image__gradient').style.background = `linear-gradient(to top, ${color} 10%, rgba(${r}, ${g}, ${b},0))`;

};
let fetchImageData = (imageUrl) => {
 // var imgg = document.querySelector('.aa').src;
  fetch(imageUrl).
      then(function(response) {
          return response.blob();
      }).
      then(function(myBlob) {
          const reader = new FileReader();
          reader.readAsDataURL(myBlob);
          reader.onloadend = function() {
              const base64data = reader.result;
              getColorAndSet(base64data);
          };
      });
};
const imgs = [];
$(".aa").each(function(index, element) {
 imgs.push(element.src)
});
let i = 0;
console.log(imgs)
fetchImageData(imgs[i]);
