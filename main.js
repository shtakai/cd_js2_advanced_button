//
Element.prototype.addClass = function(className){
    var classArray = this.className.split(' ');
    if(classArray.indexOf(className) < 0){
        classArray.push(className);
        this.className = classArray.join(' ');
    }
    return this;
}
Element.prototype.removeClass = function(className){
    var classArray = this.className.split(' ');
    var index = classArray.indexOf(className);
    if(index >= 0){
        classArray.splice(index, 1);
        this.className = classArray.join(' ');
    }
    return this;
}
console.log('test');
var button = document.querySelector('button');
button.addEventListener('click',function(e){
  console.log('event',e);
  if(button.classList.contains('blue')){
    button.removeClass('blue');
    button.addClass('red');

  }else{
    button.removeClass('red');
    button.addClass('blue');
  }
});

button.addEventListener('mouseenter', function(e){
   console.log(e);
   button.addClass('green');
});

button.addEventListener('mouseleave', function(e){
   console.log(e);
   button.removeClass('green');
});
