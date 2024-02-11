'use strict';
// Даны картинки. Привяжите к каждой картинке событие, чтобы по клику на 
//картинку console.log выводился ее src.
// let elems = document.getElementsByTagName(`img`);
// for(let i=0; i<elems.length; i++){
//    elems[i].onclick = func;
// }
// function func() {
//    console.log(this.getAttribute(`src`))
// }

//Даны ссылки. Привяжите всем ссылкам событие - по наведению на ссылку в 
//атрибут title запишется ее текст
// let elems = document.getElementsByTagName(`a`);
// for(let i=0; i<elems.length; i++){
//       elems[i].addEventListener(`mouseover`, func);
//    }
// function func() {
//    this.title = this.innerHTML;
// }


//Привяжите всем ссылкам событие - по наведению на ссылку в конец ее 
//текста дописывается ее href в круглых скобках
// let elems = document.querySelectorAll(`a`);
// for(let i = 0; i<elems.length; i++) {
//    elems[i].addEventListener(`mouseover`, func);
//    }
// function func() {
//    this.innerHTML = `${this.innerHTML} (${this.getAttribute(`href`)})`
//    this.removeEventListener(`mouseover`, func);
// }

//Домашнее задание

// Задание №1
//Привяжите всем инпутам следующее событие - по потери фокуса каждый 
//инпут выводит свое value в абзац с id="test"
// let elems = document.querySelectorAll(`input`);
// let elemP = document.querySelector(`p#test`);
// for(let i =0; i<elems.length; i++) {
//    elems[i].addEventListener(`mouseout`, mOut)
// }
// function mOut() {
// elemP.innerHTML = this.getAttribute(`value`);
//    }

// Задание №2
// Для всех инпутов сделайте так, чтобы они выводили свой value алертом 
//при нажатии на любой из них, но только по первому нажатию. Повторное 
//нажатие на инпут не должно вызывать реакции.

// let elems = document.querySelectorAll(`input`);
// for(let i=0; i<elems.length; i++){
//    elems[i].addEventListener(`click`, mouseClick);
//    }
// function mouseClick() {
//    alert(this.value);
//    this.removeEventListener(`click`, mouseClick);
// }

// Задание №3
// Даны абзацы с числами. По нажатию на абзац в нем должен появится 
//квадрат числа, которое он содержит.
// let nums = document.querySelectorAll(`p`);
// for(let i=0; i<nums.length; i++){
//    nums[i].addEventListener(`click`, sqr);
// } 
// function sqr (){
//    this.innerHTML =this.innerHTML*this.innerHTML
// }

// Задание №4
// Даны инпуты. Сделайте так, чтобы все инпуты по потери фокуса проверяли 
//свое содержимое на правильное количество символов. Сколько символов 
//должно быть в инпуте, указывается в атрибуте data-length. Если вбито 
//правильное количество, то граница инпута становится зеленой, если 
//неправильное - красной.
let elems = document.querySelectorAll(`input`);
for(let i=0; i<elems.length; i++){
   elems[i].addEventListener(`mouseout`, func);
}
function func() {
   if (+this.dataset.length===this.value.length){
      this.style.backgroundColor = `green`;
   } else {
      this.style.backgroundColor = `red`;
   }
}