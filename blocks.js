$(function() { 
    for(let i = 0; i < 16; i++) {
$('.sixteen').append(` <div class="orange" id="${i}"><div id='permanent${i}' class="blocks"></div></div>`);
    };



$('.orange').on('click', function() {
    let id = this.id;
    $('#permanent'+ id).toggleClass('changeInColor');
})
})