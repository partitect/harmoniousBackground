const colorThief = new ColorThief();
const img = document.querySelector('img');

var palette = [];
$(window).on("load", function () {
  var sourceImage = $(".card img");
  for (i = 0; i < sourceImage.length; i++) {
      palette.push(colorThief.getPalette(sourceImage[i], 4));
  }
  sourceImage.parent(".card").each(function (index) {
    $(this).children("h1").css("color","rgba(" + palette[index][2] + ", 1)")
    $(this).children("p").css("color","rgba(" + palette[index][2] + ", 1)")
      $(this).css(
          "box-shadow",
          "0 8px 20px -1px rgba(" + palette[index][0] + ", 1)"
      );
      $(this).css(
          "background",
          "rgba(" + palette[index][0] + ", 1)"
      );
  });
});

const fetchImageData = (imageUrl) => {
	fetch(imageUrl)
		.then(function(response) {
			return response.blob();
		})
		.then(function(myBlob) {
			const reader = new FileReader();
			reader.readAsDataURL(myBlob); 
			reader.onloadend = function() {
				const base64data = reader.result;
				getColorAndSet(base64data);
			 }
		});
};

function getBaseUrl ()  {
  var file = document.querySelector('input[type=file]')['files'][0];
  var reader = new FileReader();
  var baseString;
  reader.onloadend = function () {
      baseString = reader.result;
      $("#img").attr("src",baseString);
      var $img = $("#img");
     var palette = colorThief.getPalette($img, 4)
     console.log(palette)
  };
  reader.readAsDataURL(file);
}




const getColorAndSet = async image => {
           
  const colors = await rgbaster(image);
  const color = colors[0].color;
  const rgb = color.replace('rgb(', '').replace(')', '').split(',');
  const [r, g, b] = rgb;
  const vibrant = await Vibrant.from(image).getPalette();
  const accent = vibrant.Vibrant.hex;

  document.querySelector('.rgba-segment').style.backgroundColor = `rgba(${r}, ${g}, ${b}, 1)`;
  document.querySelector('.text').style.color = accent;
  document.querySelector('.image').style.backgroundImage = `url(${image})`;
  document.querySelector('.rgba-segment').style.backgroundColor = color;
  document.querySelector('.image__gradient').style.background = `linear-gradient(to top, ${color} 10%, rgba(${r}, ${g}, ${b},0))`;

};