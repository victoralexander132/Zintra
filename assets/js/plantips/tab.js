/* Se añadio todo ******************************* */
'use strict'

const $li = document.querySelectorAll('.liT3');
const $bloque = document.querySelectorAll('.bloqueT3');


$li.forEach((cadaLi, i) => {
    $li[i].addEventListener('click', () =>{

        $li.forEach((cadaLi, i) =>{
            $li[i].classList.remove('activo')
            $bloque[i].classList.remove('activo')
        })

        $li[i].classList.add('activo')
        $bloque[i].classList.add('activo')
    })
})