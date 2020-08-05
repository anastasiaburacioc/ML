let containerText;

function Hi() {
    let containerHi = document.getElementById('container__Hi');
    containerHi.setAttribute('class', 'display-none');

    containerText = document.getElementById("container__Text");
    containerText.innerHTML = "<span class='container__text__anim'>L</span><span class='container__text__anim'>i</span><span class='container__text__anim'>d</span><span class='container__text__anim'>i</span><span class='container__text__anim'>a,</span> </br> <span class='container__text__anim'>J</span><span class='container__text__anim'>o</span><span class='container__text__anim'>y</span><span class='container__text__anim'>e</span><span class='container__text__anim'>u</span><span class='container__text__anim'>x</span> </br> <span class='container__text__anim'>A</span><span class='container__text__anim'>n</span><span class='container__text__anim'>n</span><span class='container__text__anim'>i</span><span class='container__text__anim'>v</span><span class='container__text__anim'>e</span><span class='container__text__anim'>r</span><span class='container__text__anim'>s</span><span class='container__text__anim'>a</span><span class='container__text__anim'>i</span><span class='container__text__anim'>r</span><span class='container__text__anim'>e!</span>";
     
}

setTimeout(Hi, 5000);

function appear()  {
   
    containerText.setAttribute('class', 'display-none');

    let container = document.getElementById("Container");
    container.innerHTML = "<p class='container__word container__word__anim'>miracles</p> <p class='container__word'>bonheur</p> <p class='container__word'>prospérité</p> <p class='container__word'>surprises</p> <p class='container__word'>amour</p> <p class='container__word'>harmonie</p>";



}

setTimeout(appear, 13700);

