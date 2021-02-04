$(document).ready(function () {
  let $menuHome = $('#menu-home-container');
  const $projectImg = $('.project-img').find('img');

  // Tech skills
  const arrIconsTech = [
    { tool : 'javascript' , description : 'Coding lenguaje'},
    { tool : 'Python' , description : 'Coding lenguaje'},
    { tool : 'C' , description : 'Coding lenguaje'},
    { tool : 'HTML' , description : 'Markup language'},
    { tool : 'CSS' , description : 'Style sheet language'},
    { tool : 'flask' , description : 'Web Framework'},
    { tool : 'git' , description : 'Version control software'},
    { tool : 'sass' , description : 'CSS Processor'},
    { tool : 'photoshop' , description : 'Image edition software'},
    { tool : 'Illustrator' , description : 'Vector graphics editor'},
    { tool : 'Experience Design' , description : 'User experience design tool'},

  ]

  $('.modal-info').hide();

  
  // Clon of the menu next to it
  $('#menu-home-container').addClass('original').clone().insertAfter('#menu-home-container').addClass('cloned')
    .css('position', 'fixed').css('top', '0').css('margin-top', '-1px').css('z-index', '500').removeClass('original').hide();
  
  scrollIntervalID = setInterval(stickIt, 100);

  function stickIt() {
    var orgElementPos = $('.original').offset();

    orgElementTop = orgElementPos.top;
    // console.log(orgElementTop)  //700       

    if ($(window).scrollTop() >= (orgElementTop)) {
      // scrolled past the original position; now only show the cloned, sticky element.
      // Cloned element should always have same left position and width as original element.     
      orgElement = $('.original');
      coordsOrgElement = orgElement.offset();
      leftOrgElement = coordsOrgElement.left;

      widthOrgElement = orgElement.css('width');

      $('.cloned').css({'left': leftOrgElement + 'px', 'width': widthOrgElement,'top': 0, 'box-shadow':'0px 0px 4px 1px rgba(0, 0, 0, 0.15)', 'background-color': '#000' })
      .show();
      $('.original').css('visibility', 'hidden');
    } else {
      // not scrolled past the menu; only show the original menu.
      $('.cloned').hide();
      $('.original').css('visibility', 'visible');
    }
  }
// Adding icons
  arrIconsTech.map(index =>
    $('.tech-skills-box').append(
      `<figure class="icon-tech-skill">
          <img src="${'assets/images/' + index.tool + '.png'}" class="img-responsive">
          <p>${index.tool}</p>
          <figcaption>${index.description}</figcaption>
        </figure>`
    )
  );

  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('particles-js', 'js/particles.json', function () {
    // console.log('callback - particles.js config loaded');
  });

  // Whastapp
  $('#wpp').on('click', function(){
    window.open("https://api.whatsapp.com/send?phone=542616360234&text=I'm%20interested%20in%20your%20portfolio");
  })


  console.log($('.modal-info'));

  // Images project
  function showInfo() {
    // console.log($projectImg)
    console.log($(this))
    console.log()
$(this).next().next().append(`

`)
  }


});

