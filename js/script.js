const colorThief = new ColorThief();
const img = document.querySelector('img');

var palette = [];
$(window).on("load", function () {
  var sourceImage = $("img");
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