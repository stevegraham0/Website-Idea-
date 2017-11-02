var header = document.querySelector("header"),
	SliderOne = document.querySelector("#one"),
	SliderTow = document.querySelector("#tow"),
	SliderTree = document.querySelector("#tree");

SliderOne.addEventListener("click", function() {
	header.style.background="url(./img/1.jpg)";
});

SliderTow.addEventListener("click", function() {
	header.style.background="url(./img/2.jpg)";
});

SliderTree.addEventListener("click", function() {
	header.style.background="url(./img/3.jpg)";
});

document.addEventListener('DOMContentLoaded', function(){
  let wrapper = document.getElementById('wrapper');
  let topLayer = wrapper.querySelector('.top');
  let handle = wrapper.querySelector('.handle');
  let skew = 0;
  let delta = 0;

  if(wrapper.className.indexOf('skewed') != -1){
    skew = 1000;
  }
  
  wrapper.addEventListener('mousemove', function(e){
    delta = (e.clientX - window.innerWidth / 2) * 0.5;
  
    handle.style.left = e.clientX + delta + 'px';

    topLayer.style.width= e.clientX + skew + delta + 'px';
  });
});


