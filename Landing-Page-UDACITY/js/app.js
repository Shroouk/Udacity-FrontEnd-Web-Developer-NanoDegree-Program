/*Navigation starts as empty UL that will be populated with JS*/

var navlist = document.getElementById('navbar__list');
var arr = document.getElementsByTagName('section');
for (let i = 0; i < arr.length; i++) {
  //navlist.innerHTML += '<li><a class="menu__link">'+listitem[i]+'</a></li>';
var secid = document.getElementsByTagName('section')[i].id;
//navlist.innerHTML += '<li><a class="menu__link" data-section="'+(i+1)+'" href="#'+secid+'">'+secid+'</a></li>';
if (i==0) {
  navlist.innerHTML += '<li><a class="menu__link active" data-section="'+(i+1)+'" id="'+secid+'a" href="#'+secid+'">'+secid+'</a></li>';
}else {
  navlist.innerHTML += '<li><a class="menu__link" data-section="'+(i+1)+'" id="'+secid+'a" href="#'+secid+'">'+secid+'</a></li>';
}
}






(function() {

  const callback = (entries, observer) => {
    entries.forEach(entry => {
      const navItem = document.querySelector('#' + entry.target.id + 'a');
        const secItem = document.querySelector('#' + entry.target.id );
        if (entry.isIntersecting) {
          console.log(navItem.getAttribute('id'));
          navItem.classList.add('active');
          secItem.classList.add('your-active-class');
        } else {
          navItem.classList.remove('active');
          secItem.classList.remove('your-active-class');
        }
    });
  };



  const options = {
    threshold: 0.5
  };
  const observer = new IntersectionObserver(callback, options);
  const container = document.getElementById('content');
  const targetElements = container.querySelectorAll('section');


  targetElements.forEach(element => {
   observer.observe(element);
  });



})()


//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
