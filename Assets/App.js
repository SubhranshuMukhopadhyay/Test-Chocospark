{
    $('.darkmodebutton').on('click', function() {
        $('body').removeClass('lightmodebody');
        $('body').addClass('darkmodebody');
        $('.darkmodebutton').addClass('mediumscreenhide');
        $('.lightmodebutton').removeClass('mediumscreenhide');
        $('.mainheadings').css('color', 'yellow');
        $('.whydescriptions').css('color', 'yellow');
    })
}
{
    $('.lightmodebutton').on('click', function() {
        $('body').removeClass('darkmodebody');
        $('body').addClass('lightmodebody');
        $('.darkmodebutton').removeClass('mediumscreenhide');
        $('.lightmodebutton').addClass('mediumscreenhide');
        $('.mainheadings').css('color', 'red');
        $('.whydescriptions').css('color', 'red');
    })
}
{
    $('.reloadbutton').on('click', function() {
        window.location.href = 'index.html';
    })
}
{
    $('.homebutton').on('click', function() {
        $('.chocolatescontainer').fadeOut('300');
        $('.cakescontainer').fadeOut('300');
        $('.pastriescontainer').fadeOut('300');
        $('.icecreamcontainer').fadeOut('300');
        $('.homecontainer').slideDown('300');
    })
}
{
    $('.logoutbutton').on('click', function() {
        window.location.href = 'Log In.html';
    })
}
{
    $('.navigationbuttonviewer').on('click', function() {
        $('.navigationbuttons').removeClass('mediumscreenhide');
        $('.navigationbuttonhider').removeClass('mediumscreenhide');
        $('.navigationbuttonviewer').addClass('mediumscreenhide');

        $('.orderbuttons').addClass('mediumscreenhide');   
        $('.orderbuttonviewer').addClass('mediumscreenhide');
        $('.orderbuttonhider').addClass('mediumscreenhide');
    })
}
{
    $('.navigationbuttonhider').on('click', function() {
        $('.navigationbuttons').addClass('mediumscreenhide');
        $('.navigationbuttonviewer').removeClass('mediumscreenhide');
        $('.navigationbuttonhider').addClass('mediumscreenhide');

        $('.orderbuttonviewer').removeClass('mediumscreenhide');
    })
}
{
    $('.itembuttonviewer').on('click', function() {
        $('.itembuttonhider').removeClass('mediumscreenhide');
        $('.itembuttons').removeClass('mediumscreenhide');
        $('.itembuttonviewer').addClass('mediumscreenhide');
    })
}
{
     $('.itembuttonhider').on('click', function() {
        $('.itembuttons').addClass('mediumscreenhide');   
        $('.itembuttonviewer').removeClass('mediumscreenhide');
        $('.itembuttonhider').addClass('mediumscreenhide');
    })
}
{
    $('.navbar-chocolatesbutton').on('click', function() {
        $('.homecontainer').fadeOut('300');
        $('.cakescontainer').fadeOut('300');
        $('.pastriescontainer').fadeOut('300');
        $('.icecreamcontainer').fadeOut('300');
        $('.chocolatescontainer').fadeIn('300');
    })
}
{
    $('.navbar-cakesbutton').on('click', function() {
        $('.homecontainer').fadeOut('300');
        $('.chocolatescontainer').fadeOut('300');
        $('.pastriescontainer').fadeOut('300');
        $('.icecreamcontainer').fadeOut('300');
        $('.cakescontainer').fadeIn('300');
    })
}
{
    $('.navbar-pastriesesbutton').on('click', function() {
        $('.homecontainer').fadeOut('300');
        $('.chocolatescontainer').fadeOut('300');
        $('.cakescontainer').fadeOut('300');
        $('.icecreamcontainer').fadeOut('300');
        $('.pastriescontainer').fadeIn('300');
    })
}
{
    $('.navbar-icecreambutton').on('click', function() {
        $('.homecontainer').fadeOut('300');
        $('.chocolatescontainer').fadeOut('300');
        $('.cakescontainer').fadeOut('300');
        $('.pastriescontainer').fadeOut('300');
        $('.icecreamcontainer').fadeIn('300');
    })
}
{
    $('.orderbuttonviewer').on('click', function() {
        $('.orderbuttonhider').removeClass('mediumscreenhide');
        $('.orderbuttons').removeClass('mediumscreenhide');
        $('.orderbuttonviewer').addClass('mediumscreenhide');

        $('.navigationbuttons').addClass('mediumscreenhide');
        $('.navigationbuttonviewer').removeClass('mediumscreenhide');
        $('.navigationbuttonhider').addClass('mediumscreenhide');
    })
}
{
     $('.orderbuttonhider').on('click', function() {
        $('.orderbuttons').addClass('mediumscreenhide');   
        $('.orderbuttonviewer').removeClass('mediumscreenhide');
        $('.orderbuttonhider').addClass('mediumscreenhide');
    })
}
/* Chocolates 'Like Button' Functions */
{ /* Biscoff Bar Container 'Like Button' Function */
    $('.biscoffbarlikebutton1').on('click', function() {
        $('.biscoffbarlikebutton1').addClass('hide');
        $('.biscoffbarlikebutton2').removeClass('hide');
    })
}
{ /* Biscoff Bar Container 'Like Button' Function */
    $('.biscoffbarlikebutton2').on('click', function() {
        $('.biscoffbarlikebutton2').addClass('hide');
        $('.biscoffbarlikebutton1').removeClass('hide');
    })
}
{ /* Milka & LU Chocolate Bar Container 'Like Button' Function */
    $('.mandlbarlikebutton1').on('click', function() {
        $('.mandlbarlikebutton1').addClass('hide');
        $('.mandlbarlikebutton2').removeClass('hide');
    })
}
{ /* Milka & LU Chocolate Bar Container 'Like Button' Function */
    $('.mandlbarlikebutton2').on('click', function() {
        $('.mandlbarlikebutton2').addClass('hide');
        $('.mandlbarlikebutton1').removeClass('hide');
    })
}
{ /* Lesa Natural Dark Chocolate Bar Container 'Like Button' Function */
    $('.lesabarlikebutton1').on('click', function() {
        $('.lesabarlikebutton1').addClass('hide');
        $('.lesabarlikebutton2').removeClass('hide');
    })
}
{ /* Lesa Natural Dark Chocolate Bar Container 'Like Button' Function */
    $('.lesabarlikebutton2').on('click', function() {
        $('.lesabarlikebutton2').addClass('hide');
        $('.lesabarlikebutton1').removeClass('hide');
    })
}
{ /* Mixed Seeds Chocolate Bar 'Like Button' Function */
    $('.mixedseedsbarlikebutton1').on('click', function() {
        $('.mixedseedsbarlikebutton1').addClass('hide');
        $('.mixedseedsbarlikebutton2').removeClass('hide');
    })
}
{ /* Mixed Seeds Chocolate Bar 'Like Button' Function */
    $('.mixedseedsbarlikebutton2').on('click', function() {
        $('.mixedseedsbarlikebutton2').addClass('hide');
        $('.mixedseedsbarlikebutton1').removeClass('hide');
    })
}
{ /* Dark Chocolate with Dried Fruit & Nuts 'Like Button' Function */
    $('.fandnbarlikebutton1').on('click', function() {
        $('.fandnbarlikebutton1').addClass('hide');
        $('.fandnbarlikebutton2').removeClass('hide');
    })
}
{ /* Dark Chocolate with Dried Fruit & Nuts 'Like Button' Function */
    $('.fandnbarlikebutton2').on('click', function() {
        $('.fandnbarlikebutton2').addClass('hide');
        $('.fandnbarlikebutton1').removeClass('hide');
    })
}
{ /* Chocolate Bar with Almond & Sea Salt Container 'Like Button' Function */
    $('.aandssaltbarlikebutton1').on('click', function() {
        $('.aandssaltbarlikebutton1').addClass('hide');
        $('.aandssaltbarlikebutton2').removeClass('hide');
    })
}
{ /* Chocolate Bar with Almond & Sea Salt Container 'Like Button' Function */
    $('.aandssaltbarlikebutton2').on('click', function() {
        $('.aandssaltbarlikebutton2').addClass('hide');
        $('.aandssaltbarlikebutton1').removeClass('hide');
    })
}
{ /* Lindt Milk Chocolate Bar Container 'Like Button' Function */
    $('.lindtbarlikebutton1').on('click', function() {
        $('.lindtbarlikebutton1').addClass('hide');
        $('.lindtbarlikebutton2').removeClass('hide');
    })
}
{ /* Lindt Milk Chocolate Bar Container 'Like Button' Function */
    $('.lindtbarlikebutton2').on('click', function() {
        $('.lindtbarlikebutton2').addClass('hide');
        $('.lindtbarlikebutton1').removeClass('hide');
    })
}
{ /* Mink Chocolate Bar Container 'Like Button' Function */
    $('.minkbarlikebutton1').on('click', function() {
        $('.minkbarlikebutton1').addClass('hide');
        $('.minkbarlikebutton2').removeClass('hide');
    })
}
{ /* Mink Chocolate Bar Container 'Like Button' Function */
    $('.minkbarlikebutton2').on('click', function() {
        $('.minkbarlikebutton2').addClass('hide');
        $('.minkbarlikebutton1').removeClass('hide');
    })
}
{ /* Choco Balls Container 'Like Button' Function */
    $('.chocoballslikebutton1').on('click', function() {
        $('.chocoballslikebutton1').addClass('hide');
        $('.chocoballslikebutton2').removeClass('hide');
    })
}
{ /* Choco Balls Container 'Like Button' Function */
    $('.chocoballslikebutton2').on('click', function() {
        $('.chocoballslikebutton2').addClass('hide');
        $('.chocoballslikebutton1').removeClass('hide');
    })
}
{ /* White Honeycomb Chocolate Bar 'Like Button' Function */
    $('.whonycombbarlikebutton1').on('click', function() {
        $('.whonycombbarlikebutton1').addClass('hide');
        $('.whonycombbarlikebutton2').removeClass('hide');
    })
}
{ /* White Honeycomb Chocolate Bar 'Like Button' Function */
    $('.whonycombbarlikebutton2').on('click', function() {
        $('.whonycombbarlikebutton2').addClass('hide');
        $('.whonycombbarlikebutton1').removeClass('hide');
    })
}
{ /* Milk Chocolate Bar 'Like Button' Function */
    $('.milkbarlikebutton1').on('click', function() {
        $('.milkbarlikebutton1').addClass('hide');
        $('.milkbarlikebutton2').removeClass('hide');
    })
}
{ /* Milk Chocolate Bar 'Like Button' Function */
    $('.milkbarlikebutton2').on('click', function() {
        $('.milkbarlikebutton2').addClass('hide');
        $('.milkbarlikebutton1').removeClass('hide');
    })
}
/* Cakes 'Like Button' Functions */
{
    $('.buttercreamrosettcakelikebutton1').on('click', function() {
        $('.buttercreamrosettcakelikebutton1').addClass('hide');
        $('.buttercreamrosettcakelikebutton2').removeClass('hide');
    })
}
{
    $('.buttercreamrosettcakelikebutton2').on('click', function() {
        $('.buttercreamrosettcakelikebutton2').addClass('hide');
        $('.buttercreamrosettcakelikebutton1').removeClass('hide');
    })
}
{
    $('.chocolatedripcakelikebutton1').on('click', function() {
        $('.chocolatedripcakelikebutton1').addClass('hide');
        $('.chocolatedripcakelikebutton2').removeClass('hide');
    })
}
{
    $('.chocolatedripcakelikebutton2').on('click', function() {
        $('.chocolatedripcakelikebutton2').addClass('hide');
        $('.chocolatedripcakelikebutton1').removeClass('hide');
    })
}
{
    $('.chocolaterosecakelikebutton1').on('click', function() {
        $('.chocolaterosecakelikebutton1').addClass('hide');
        $('.chocolaterosecakelikebutton2').removeClass('hide');
    })
}
{
    $('.chocolaterosecakelikebutton2').on('click', function() {
        $('.chocolaterosecakelikebutton2').addClass('hide');
        $('.chocolaterosecakelikebutton1').removeClass('hide');
    })
}
{
    $('.chocolatestrawberrycakelikebutton1').on('click', function() {
        $('.chocolatestrawberrycakelikebutton1').addClass('hide');
        $('.chocolatestrawberrycakelikebutton2').removeClass('hide');
    })
}
{
    $('.chocolatestrawberrycakelikebutton2').on('click', function() {
        $('.chocolatestrawberrycakelikebutton2').addClass('hide');
        $('.chocolatestrawberrycakelikebutton1').removeClass('hide');
    })
}
{
    $('.starwberrycreamcakelikebutton1').on('click', function() {
        $('.starwberrycreamcakelikebutton1').addClass('hide');
        $('.starwberrycreamcakelikebutton2').removeClass('hide');
    })
}
{
    $('.starwberrycreamcakelikebutton2').on('click', function() {
        $('.starwberrycreamcakelikebutton2').addClass('hide');
        $('.starwberrycreamcakelikebutton1').removeClass('hide');
    })
}
{
    $('.floralvintagecakelikebutton1').on('click', function() {
        $('.floralvintagecakelikebutton1').addClass('hide');
        $('.floralvintagecakelikebutton2').removeClass('hide');
    })
}
{
    $('.floralvintagecakelikebutton2').on('click', function() {
        $('.floralvintagecakelikebutton2').addClass('hide');
        $('.floralvintagecakelikebutton1').removeClass('hide');
    })
}
{
    $('.ganachedripcakelikebutton1').on('click', function() {
        $('.ganachedripcakelikebutton1').addClass('hide');
        $('.ganachedripcakelikebutton2').removeClass('hide');
    })
}
{
    $('.ganachedripcakelikebutton2').on('click', function() {
        $('.ganachedripcakelikebutton2').addClass('hide');
        $('.ganachedripcakelikebutton1').removeClass('hide');
    })
}
{
    $('.glutenfreebananacakelikebutton1').on('click', function() {
        $('.glutenfreebananacakelikebutton1').addClass('hide');
        $('.glutenfreebananacakelikebutton2').removeClass('hide');
    })
}
{
    $('.glutenfreebananacakelikebutton2').on('click', function() {
        $('.glutenfreebananacakelikebutton2').addClass('hide');
        $('.glutenfreebananacakelikebutton1').removeClass('hide');
    })
}
{
    $('.heavenlyrosecakelikebutton1').on('click', function() {
        $('.heavenlyrosecakelikebutton1').addClass('hide');
        $('.heavenlyrosecakelikebutton2').removeClass('hide');
    })
}
{
    $('.heavenlyrosecakelikebutton2').on('click', function() {
        $('.heavenlyrosecakelikebutton2').addClass('hide');
        $('.heavenlyrosecakelikebutton1').removeClass('hide');
    })
}
{
    $('.kinderbuenocakelikebutton1').on('click', function() {
        $('.kinderbuenocakelikebutton1').addClass('hide');
        $('.kinderbuenocakelikebutton2').removeClass('hide');
    })
}
{
    $('.kinderbuenocakelikebutton2').on('click', function() {
        $('.kinderbuenocakelikebutton2').addClass('hide');
        $('.kinderbuenocakelikebutton1').removeClass('hide');
    })
}
{
    $('.ombrerosecakelikebutton1').on('click', function() {
        $('.ombrerosecakelikebutton1').addClass('hide');
        $('.ombrerosecakelikebutton2').removeClass('hide');
    })
}
{
    $('.ombrerosecakelikebutton2').on('click', function() {
        $('.ombrerosecakelikebutton2').addClass('hide');
        $('.ombrerosecakelikebutton1').removeClass('hide');
    })
}
{
    $('.pinkblushstrawberrycakelikebutton1').on('click', function() {
        $('.pinkblushstrawberrycakelikebutton1').addClass('hide');
        $('.pinkblushstrawberrycakelikebutton2').removeClass('hide');
    })
}
{
    $('.pinkblushstrawberrycakelikebutton2').on('click', function() {
        $('.pinkblushstrawberrycakelikebutton2').addClass('hide');
        $('.pinkblushstrawberrycakelikebutton1').removeClass('hide');
    })
}
{
    $('.pinkrosettecakelikebutton1').on('click', function() {
        $('.pinkrosettecakelikebutton1').addClass('hide');
        $('.pinkrosettecakelikebutton2').removeClass('hide');
    })
}
{
    $('.pinkrosettecakelikebutton2').on('click', function() {
        $('.pinkrosettecakelikebutton2').addClass('hide');
        $('.pinkrosettecakelikebutton1').removeClass('hide');
    })
}
{
    $('.pinkrufflecakelikebutton1').on('click', function() {
        $('.pinkrufflecakelikebutton1').addClass('hide');
        $('.pinkrufflecakelikebutton2').removeClass('hide');
    })
}
{
    $('.pinkrufflecakelikebutton2').on('click', function() {
        $('.pinkrufflecakelikebutton2').addClass('hide');
        $('.pinkrufflecakelikebutton1').removeClass('hide');
    })
}
{
    $('.rainbowflowercakelikebutton1').on('click', function() {
        $('.rainbowflowercakelikebutton1').addClass('hide');
        $('.rainbowflowercakelikebutton2').removeClass('hide');
    })
}
{
    $('.rainbowflowercakelikebutton2').on('click', function() {
        $('.rainbowflowercakelikebutton2').addClass('hide');
        $('.rainbowflowercakelikebutton1').removeClass('hide');
    })
}
{
    $('.ribboncandycakelikebutton1').on('click', function() {
        $('.ribboncandycakelikebutton1').addClass('hide');
        $('.ribboncandycakelikebutton2').removeClass('hide');
    })
}
{
    $('.ribboncandycakelikebutton2').on('click', function() {
        $('.ribboncandycakelikebutton2').addClass('hide');
        $('.ribboncandycakelikebutton1').removeClass('hide');
    })
}
{
    $('.rubyandrichescakelikebutton1').on('click', function() {
        $('.rubyandrichescakelikebutton1').addClass('hide');
        $('.rubyandrichescakelikebutton2').removeClass('hide');
    })
}
{
    $('.rubyandrichescakelikebutton2').on('click', function() {
        $('.rubyandrichescakelikebutton2').addClass('hide');
        $('.rubyandrichescakelikebutton1').removeClass('hide');
    })
}
{
    $('.sprinklechocolatedripcakelikebutton1').on('click', function() {
        $('.sprinklechocolatedripcakelikebutton1').addClass('hide');
        $('.sprinklechocolatedripcakelikebutton2').removeClass('hide');
    })
}
{
    $('.sprinklechocolatedripcakelikebutton2').on('click', function() {
        $('.sprinklechocolatedripcakelikebutton2').addClass('hide');
        $('.sprinklechocolatedripcakelikebutton1').removeClass('hide');
    })
}
/* Pastries 'Like Button' Functions */
{

}