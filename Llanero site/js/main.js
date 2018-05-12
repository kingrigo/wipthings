function dropDownMenu(){
    //Funcion cuando la pantalla es menor a 680px (celulares)
    //transforme el navbar en una lista
    var x = document.getElementById('dropDownClick');
    if(x.className === 'topnav'){
        x.className += ' responsive';
        /*Cambia la clase topnav -> topnav.responsive*/
    } else {
        x.className = 'topnav';
    }
}