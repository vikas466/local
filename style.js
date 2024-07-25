var c=0;
var z=setInterval(nuber,100)
function nuber(){
  c=c+1;
   if(c==18){
  clearInterval(z);
}
 else{
  document.getElementById('pand').innerText=c+"+";
 }
}


var k=0;
var m=setInterval(ber,0)
 function ber(){
  k=k+1;
   if(k==251){
  clearInterval(m);
}
 else{
  document.getElementById('pandk').innerText=k+"+";
 }
}

var p=0;
var v=setInterval(be,50);
 function be(){
  p=p+1;
   if(p==37){
  clearInterval(v);
}
 else{
  document.getElementById('pandg').innerText=p+"+";
 }
}

var e=0;
var h=setInterval(beg,90);
 function beg(){
  e=e+1;
   if(e==19){
  clearInterval(h);
}
 else{
  document.getElementById('pandr').innerText=e+"+";
 }
}






let container = document.querySelector('.banner');
let layer = document.querySelectorAll('.layer');

container.onmousemove=function(e){
  let X=e.pageX;
  let Y=e.pageY;
  layer[0].style.transform='translate('+ X/-100*2 + 'px, '+ Y/-100*2 +'px)';
    layer[1].style.transform='translate('+ X/100*2 + 'px, '+ Y/100*2 +'px)';

}

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

