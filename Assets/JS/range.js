/* range */
window.onload = function(){
    slideOne();
    slideTwo();
  };
  
  let first = document.getElementById("slider-1");
  let second = document.getElementById("slider-2");
  let min = document.getElementById("range-1");
  let max = document.getElementById("range-2");
  let minGap = 0;
  
  function slideOne(){
    if(parseInt(second.value) - parseInt(first.value) <= minGap){
        first.value = parseInt(second.value) - minGap;
    }
    min.value = first.value;
    min.dataset.from = first.value;
    fillColor();    
  }
  function slideTwo(){
    if(parseInt(second.value) - parseInt(first.value) <= minGap){
        second.value = parseInt(first.value) + minGap;
    }
    max.value = second.value;
    max.dataset.before = second.value;
    fillColor();
  }
  