//Basketballs


$('.grow-link').click(
     function(){
        var key = $(this).attr("id");
        $('#teach-header').text(key);
        $('#teach-header').removeClass('hidden');
       
     });

        
//         $('#teach-header').attr('h1', link.h1);
//         $('#js-nav-text').text(link.content);
//         $('#js-nav-text').css('color', '#E5D4ED');
//          $('.title').css('color', '#E5D4ED');
//      },
//      function(){
//          $('#js-nav-text').css('color', '#fff');
//          $('.title').css('color', '#fff');
//         $('#js-nav-text').text('Junior Front End Developer');
//          $('#pro-pic img').attr('src', navLinks.img);
         
//      }
// );