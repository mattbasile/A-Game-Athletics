//Basketballs


$('.grow-link').click(
     function(){
        var key = $(this).attr("id");
        $('#teach-header').text(key);
        $('#teach-header').removeClass('hidden');
       
     });

const CarouselClicker = (ev) =>{
   ev.preventDefault();
   const image_stage = document.getElementById('image_stage');
   console.log(image_stage);
   // Cutting the last two items from the str
   let src = ev.target.id.slice(0, -2);
   // image_stage.fadeOut();
   image_stage.setAttribute('src', `./img/${src}.png`);
   // image_stage.fadeIn();
}