const storeItems = [
    {
        name: 'TV',
        price: 800.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Phone',
        price: 700.00,
        inStock: false,
        details: '5G'
    },
    {
        name: 'Game Console',
        price: 300.00,
        inStock: true,
        details: 'The latest and greatest'
    },
    {
        name: 'Laptop',
        price: 1200.00,
        inStock: true,
        details: '16GB RAM 1TB SSD'
    },
    {
        name: 'Smart Watch',
        price: 200.00,
        inStock: false,
        details: 'Counts your steps'
    },
    {
        name: 'Headphones',
        price: 100.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Keyboard',
        price: 100.00,
        inStock: true,
        details: 'Types for you'
    },
    {
        name: 'HDMI Cord',
        price: 100.00,
        inStock: true,
        details: 'HDMI to USB type C'
    },
    {
        name: 'Monitor',
        price: 300.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Speaker',
        price: 200.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Video Game',
        price: 60.00,
        inStock: true,
        details: 'Enjoy for hours'
    },
];
for(let i = 0; i < storeItems.length; i++) {
if(storeItems[i].inStock === false) {
    storeItems.splice(i,1);
}}

for(let i = 0; i < storeItems.length; i++) {
    $('#all').append(`<div class="row">`);
    
    $('#all').append(`</div>`);
    }
for(let i = 0; i < $('.row').length; i++) {
    //$('.row')[i].append(`<div>$${storeItems[i].price}</div>`);
    
    $('.row')[i].innerHTML = `<div class='cell'>${storeItems[i].price}</div>`;
    $('.row')[i].innerHTML += `<div class='cell'>${storeItems[i].name}</div>`;
    $('.row')[i].innerHTML += `<div class='cell'>${storeItems[i].details}</div>`;
    //$('.row')[i].append(`${storeItems[i].inStock} `);
    //$('.row')[i].append("<div>" + storeItems[i].details+ "</div>");
}
    

$('.columnn').css('display', 'flex');
$('.columnn').css('flex-direction', 'column');
$('.row').css('flex-direction', 'row');
$('.row').css('display', 'flex');
$('.row').css('justify-content', 'center');
$('.row').css('margin', 'auto');
$('.row').css('margin-bottom', '10px');
$('.row').css('width', '80%');
$('.row').css('padding', '17px');
$('.cell').css('width', '33%');

$('#button').click(function() {
    $('html').toggleClass('darkk');
    $('.row').toggleClass('dark');
    $('#button').toggleClass('dark');
})