
//АНИМАЦИЯ

let mas = ['👾','🤖','😁'];




let myInterval = setInterval(myTimer, 1000);



function myTimer() {

    let ai3 = Math.floor(Math.random()*3)+0;

    console.log(ai3);
  
    let timer1 = document.getElementById("timer1").innerHTML = mas[`${ai3}`];

    console.log(timer1);
  
};

//ОСНОВНАЯ ЧАСТЬ


let div1 = document.getElementById("div1");

div1.innerHTML = `<div>
    <button id = "but1">НАЖМИ МЕНЯ</button>  
    </div>`;

let but1 = document.getElementById("but1");

but1.onclick = function () {

    let div1 = document.getElementById("div1");

    div1.innerHTML =  `<div><p>Привет уважаемый друг! Вы на сайте проекта Берлина Андрея! Если хотите продолжить, то нажмите: "ДАЛЕЕ..."</p>

   <button  id = "dalee">ДАЛЕЕ...</button>
   <!--button  id = "net">НЕТ</button--> 
  
   </div>`;

window.speechSynthesis.cancel();

const text = `Привет уважаемый друг! Вы на сайте проекта Бйэрлина Андрея! Если хотите продолжить, то нажмите: "ДАЛЕЕ...`; //textEl.value;

  const utterance = new SpeechSynthesisUtterance(text);

  window.speechSynthesis.speak(utterance);


let dalee = document.getElementById("dalee");

dalee.onclick = function () {

 let div1 = document.getElementById("div1");
 div1.innerHTML =`<p>На этом сайте вы найдете бесплатные обучающие ресурсы по веб - программированию, информацию о редакторах кода и примеры программ Берлина А. Если вы хотите обучаться, то нажмите: "Хочу..."</p>
    
     <button  id = "obRes">Хочу...</button>
    <!--button  id = "redCoda">Редакторы <br> коды</button> 
  
    <button  id = "roboty">Программы <br>  Берлина А.</button--> 
    
    `;
 
 const text = `На этом сайте вы найдете бесплатные обучающие ресурсы по веб - программированию, информацию о редакторах кода и примеры программ Бйэрлина А. Если вы хотите обучаться, то нажмите: "Хочу..."`; //textEl.value;



  const utterance = new SpeechSynthesisUtterance(text);

  window.speechSynthesis.speak(utterance);
  
let obRes = document.getElementById("obRes");

obRes.onclick = function () {

  
  let div1 = document.getElementById("div1");
 div1.innerHTML =`<p>Берлин Андрей обучается программированию самостоятельно. 
    Он использует для обучения бесплатные обучающие ресурсы, редакторы кода и у него есть уже готовые примеры программ. Если хотите со всем этим ознакомиться, то нажмите соответствующие кнопки:</p>
 
<!--div class="radio_playlist"-->



<div id="ul">

<button id ="1">▶️ Обучающие <br> ресурсы </button>

<button id ="2">▶️ Редакторы <br> кода </button>
            
<button id ="3">▶️ Примеры <br> программ </button>  

</div>

<!--/div-->





<!--h2></h2-->
<hr>
   
        <div id = "p">
        
</div>
`;

/*------------------------------------------ */

let mas =['1','2','3','4','5','6','7','8','9',

          '10','11','12','13','14','15','16','17',

          '18','19','20','21','22','23','24',
          '25','26','27','28'] //27 ячеек

let section = document.getElementById("section");

let click = section.getElementsByTagName('button');

for (let i = 0; i < click.length; i ++) {
  
  
  click[i].onclick = function(){


         let id = this.getAttribute("id");

         if(id == mas[0]) {

          document.getElementById('p').innerHTML = 

   `<div class="radio_playlist1">
<ul>Есть много бесплатных обучающих ресурсов по веб-программированию. Но вот на какие можно обратить свое внимание: 

<li><a href = "https://www.w3schools.com/js/default.asp" target="_blank">w3schools</a></li>
<li><a href = "https://developer.mozilla.org/ru/" target="_blank">MDN</a></li>
</ul>
    </div>`


    const text = `Есть много бесплатных обучающих ресурсов по веб-программированию. Но вот на какие можно обратить свое внимание: `; //textEl.value;
    
      const utterance = new SpeechSynthesisUtterance(text);
    
      window.speechSynthesis.speak(utterance); 


}else if (id == mas[1]) {

document.getElementById('p').innerHTML = 

`<div class="radio_playlist1">

 <ul>Есть много бесплатных редакторов кода. Но вот на какие можно обратить свое внимание: 



<li><a href = "https://code.visualstudio.com/"target="_blank">Visual Studio code</a></li>
<li><a href = "https://visualstudio.microsoft.com/ru/" target="_blank">Microsoft Visual Studio</a></li>
</ul>

</div> `

const text = `Есть много бесплатных редакторов кода. Но вот на какие можно обратить свое внимание:`; //textEl.value;
    
      const utterance = new SpeechSynthesisUtterance(text);
    
      window.speechSynthesis.speak(utterance); 


}else if(id == mas[2]){
                  
 document.getElementById("p").innerHTML = 

 `<div class = "radio_playlist1">
  
 <p>Этот интерактивный сайт - один из многих примеров идеи Берлина А. Будут ещё...</p>

  </div>`  
  
  const text = `Этот интерактивный сайт - один из многих примеров идей Берлина А. Будут ещё.`; //textEl.value;
    
      const utterance = new SpeechSynthesisUtterance(text);
    
      window.speechSynthesis.speak(utterance); 
                  
   }
  }
 }

/*-------------- */
 
 const text = `Бйэрлин Андрей обучается программированию самостоятельно. 
        Он использует для обучения бесплатные обучающие ресурсы, редакторы кода и у него есть уже готовые примеры программ. Если хотите со всем этим ознакомиться, то нажмите соответствующие кнопки:`; //textEl.value;



  const utterance = new SpeechSynthesisUtterance(text);

  window.speechSynthesis.speak(utterance);
  
};
  
  
  
};

};



//ЧАСЫ

function timer() {

  

  const interval_time = setInterval(clock, 1000);
  
  function clock() {
    
    const clock = new Date ();
    
   let date = document.getElementById("date");
   date.innerHTML = clock.toLocaleDateString();
   let timer = document.getElementById('timer');
   timer.innerHTML = 
    clock.toLocaleTimeString();
    
    
  }
  
}
timer();




  
