
// Cattify: Copy and paste this line into a bookmark to change certain words and turn every current image into a cat! Photo credit Von.grzanka, Wikimedia Commons //
// Seems to be working slightly differently as of May 2021, (the CSS seems to go away) but still gets the job done. //


javascript:(function(){ var content = document.body.innerHTML;   var new_content = content.replace(/the/g, "whale"); new_content = new_content.replace(/a/g, "cat"); new_content = new_content.replace(/and/g, "twinkie");  document.body.innerHTML = new_content;     var images = document.getElementsByTagName("img");  for (var x = 0; x < images.length; x++) {     images[x].setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Felis_catus-cat_on_snow.jpg/1200px-Felis_catus-cat_on_snow.jpg");   };      })();