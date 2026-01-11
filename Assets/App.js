/* Navbar Button Functions */
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
        $('.containers').fadeOut('300');
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
        $('.containers').fadeOut('300');
        $('.chocolatescontainer').fadeIn('300');
    })
}
{
    $('.navbar-cakesbutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.cakescontainer').fadeIn('300');
    })
}
{
    $('.navbar-pastriesesbutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.pastriescontainer').fadeIn('300');
    })
}
{
    $('.navbar-icecreambutton').on('click', function() {
        $('.containers').fadeOut('300');
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
{
    $('.navbar-likebutton').on('click', function() {
        $('.containers').slideUp(100);
        $('.likeditemhide').css('display', 'none');
        $('.likeditemcontainer').slideDown(100);
    })
}
{
    $('.navbar-orderbutton').on('click', function() {
        $('.containers').fadeOut('300');   
        $('.myorderscontainer').fadeIn('300');
    })
}
{
    $('.navbar-cartbutton').on('click', function() {
        $('.containers').slideUp(100);
        $('.cartitemhide').css('display', 'none');
        $('.mycartcontainer').slideDown(100); 
    })
}

/* Main Functions */
{
    $('.chippestdivbuybutton').on('click', function() {
        $('.containers').fadeOut(300);
        $('.chocolatechipcookiedoughlushcontent').fadeIn(300);
    })
}
{
    $('.s1button').on('click', function() {
        $('.containers').fadeOut(300);
        $('.winterflavourcontainer').fadeIn(300);
    })
}
{
    $('.s2button').on('click', function() {
        $('.containers').fadeOut(300);
        $('.wintersalecontainer').fadeIn(300);
    })
}
{
    $('.customcakebutton').on('click', function() {
        $('.containers').fadeOut(300);
        $('.customcakemakercontainer').fadeIn(300);
    })
}
/* Chocolates 'Like Button' Functions */
{ /* Biscoff Bar Container 'Like Button' Function */
    $('.biscoffbarlikebutton1').on('click', function() {
        $('.biscoffbarlikebutton1').addClass('hide');
        $('.biscoffbarlikebutton2').removeClass('hide');
        $('.liked-biscoffbar').removeClass('likeditemhide');
        $('.liked-biscoffbar').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{ /* Biscoff Bar Container 'Like Button' Function */
    $('.biscoffbarlikebutton2').on('click', function() {
        $('.biscoffbarlikebutton2').addClass('hide');
        $('.biscoffbarlikebutton1').removeClass('hide');
        $('.liked-biscoffbar').addClass('likeditemhide');
        $('.liked-biscoffbar').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
        
    })
}
{
    $('.biscoffbarbutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.biscoffbarcontent').removeClass('hide');
        $('.biscoffbarcontent').fadeIn('300');
    })
}
{ /* Milka & LU Chocolate Bar Container 'Like Button' Function */
    $('.mandlbarlikebutton1').on('click', function() {
        $('.mandlbarlikebutton1').addClass('hide');
        $('.mandlbarlikebutton2').removeClass('hide');
        $('.liked-milkaandluchocolatebar').removeClass('likeditemhide');
        $('.liked-milkaandluchocolatebar').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{ /* Milka & LU Chocolate Bar Container 'Like Button' Function */
    $('.mandlbarlikebutton2').on('click', function() {
        $('.mandlbarlikebutton2').addClass('hide');
        $('.mandlbarlikebutton1').removeClass('hide');
        $('.liked-milkaandluchocolatebar').addClass('likeditemhide');
        $('.liked-milkaandluchocolatebar').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
        
    })
}
{
    $('.mandlbarbutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.mandlbarcontent').removeClass('hide');
        $('.mandlbarcontent').fadeIn('300');
    })
}
{ /* Hazelnut Dark Chocolate Container 'Like Button' Function */
    $('.hazelnutdarkchocolatelikebutton1').on('click', function() {
        $('.hazelnutdarkchocolatelikebutton1').addClass('hide');
        $('.hazelnutdarkchocolatelikebutton2').removeClass('hide');
        $('.liked-hazelnutdarkchocolate').removeClass('likeditemhide');
        $('.liked-hazelnutdarkchocolate').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{ /* Hazelnut Dark Chocolate Container 'Like Button' Function */
    $('.hazelnutdarkchocolatelikebutton2').on('click', function() {
        $('.hazelnutdarkchocolatelikebutton2').addClass('hide');
        $('.hazelnutdarkchocolatelikebutton1').removeClass('hide');
        $('.liked-hazelnutdarkchocolate').addClass('likeditemhide');
        $('.liked-hazelnutdarkchocolate').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.hazelnutdarkchocolatebutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.hazelnutdarkchocolatecontent').removeClass('hide');
        $('.hazelnutdarkchocolatecontent').fadeIn('300');
    })
}
{ /* Mixed Seeds Chocolate Bar 'Like Button' Function */
    $('.mixedseedsbarlikebutton1').on('click', function() {
        $('.mixedseedsbarlikebutton1').addClass('hide');
        $('.mixedseedsbarlikebutton2').removeClass('hide');
        $('.liked-mixedseedschocolatebar').removeClass('likeditemhide');
        $('.liked-mixedseedschocolatebar').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{ /* Mixed Seeds Chocolate Bar 'Like Button' Function */
    $('.mixedseedsbarlikebutton2').on('click', function() {
        $('.mixedseedsbarlikebutton2').addClass('hide');
        $('.mixedseedsbarlikebutton1').removeClass('hide');
        $('.liked-mixedseedschocolatebar').addClass('likeditemhide');
        $('.liked-mixedseedschocolatebar').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.mixedseedsbarbutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.mixedseedsbarcontent').removeClass('hide');
        $('.mixedseedsbarcontent').fadeIn('300');
    })
}
{ /* Dark Chocolate with Dried Fruit & Nuts 'Like Button' Function */
    $('.fandnbarlikebutton1').on('click', function() {
        $('.fandnbarlikebutton1').addClass('hide');
        $('.fandnbarlikebutton2').removeClass('hide');
        $('.liked-darkchocolatewithdriedfruitandnuts').removeClass('likeditemhide');
        $('.liked-darkchocolatewithdriedfruitandnuts').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{ /* Dark Chocolate with Dried Fruit & Nuts 'Like Button' Function */
    $('.fandnbarlikebutton2').on('click', function() {
        $('.fandnbarlikebutton2').addClass('hide');
        $('.fandnbarlikebutton1').removeClass('hide');
        $('.liked-darkchocolatewithdriedfruitandnuts').addClass('likeditemhide');
        $('.liked-darkchocolatewithdriedfruitandnuts').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.fandnbarbutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.fandnbarcontent').removeClass('hide');
        $('.fandnbarcontent').fadeIn('300');
    })
}
{ /* Chocolate Bar with Almond & Sea Salt Container 'Like Button' Function */
    $('.aandssaltbarlikebutton1').on('click', function() {
        $('.aandssaltbarlikebutton1').addClass('hide');
        $('.aandssaltbarlikebutton2').removeClass('hide');
        $('.liked-chocolatebarwithalmondandseasalt').removeClass('likeditemhide');
        $('.liked-chocolatebarwithalmondandseasalt').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{ /* Chocolate Bar with Almond & Sea Salt Container 'Like Button' Function */
    $('.aandssaltbarlikebutton2').on('click', function() {
        $('.aandssaltbarlikebutton2').addClass('hide');
        $('.aandssaltbarlikebutton1').removeClass('hide');
        $('.liked-chocolatebarwithalmondandseasalt').addClass('likeditemhide');
        $('.liked-chocolatebarwithalmondandseasalt').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.aandssaltbarbutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.aandssaltbarcontent').removeClass('hide');
        $('.aandssaltbarcontent').fadeIn('300');
    })
}
{ /* Lindt Milk Chocolate Bar Container 'Like Button' Function */
    $('.lindtbarlikebutton1').on('click', function() {
        $('.lindtbarlikebutton1').addClass('hide');
        $('.lindtbarlikebutton2').removeClass('hide');
        $('.liked-lindtmilkchocolatebar').removeClass('likeditemhide');
        $('.liked-lindtmilkchocolatebar').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{ /* Lindt Milk Chocolate Bar Container 'Like Button' Function */
    $('.lindtbarlikebutton2').on('click', function() {
        $('.lindtbarlikebutton2').addClass('hide');
        $('.lindtbarlikebutton1').removeClass('hide');
        $('.liked-lindtmilkchocolatebar').addClass('likeditemhide');
        $('.liked-lindtmilkchocolatebar').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.lindtbarbutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.lindtbarcontent').removeClass('hide');
        $('.lindtbarcontent').fadeIn('300');
    })
}
{ /* Mink Chocolate Bar Container 'Like Button' Function */
    $('.minkbarlikebutton1').on('click', function() {
        $('.minkbarlikebutton1').addClass('hide');
        $('.minkbarlikebutton2').removeClass('hide');
        $('.liked-minkchocolatebar').removeClass('likeditemhide');
        $('.liked-minkchocolatebar').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{ /* Mink Chocolate Bar Container 'Like Button' Function */
    $('.minkbarlikebutton2').on('click', function() {
        $('.minkbarlikebutton2').addClass('hide');
        $('.minkbarlikebutton1').removeClass('hide');
        $('.liked-minkchocolatebar').addClass('likeditemhide');
        $('.liked-minkchocolatebar').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.minkbarbutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.minkbarcontent').removeClass('hide');
        $('.minkbarcontent').fadeIn('300');
    })
}
{ /* Choco Balls Container 'Like Button' Function */
    $('.chocoballslikebutton1').on('click', function() {
        $('.chocoballslikebutton1').addClass('hide');
        $('.chocoballslikebutton2').removeClass('hide');
        $('.liked-chocoballs').removeClass('likeditemhide');
        $('.liked-chocoballs').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{ /* Choco Balls Container 'Like Button' Function */
    $('.chocoballslikebutton2').on('click', function() {
        $('.chocoballslikebutton2').addClass('hide');
        $('.chocoballslikebutton1').removeClass('hide');
        $('.liked-chocoballs').addClass('likeditemhide');
        $('.liked-chocoballs').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.chocoballsbutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.chocoballscontent').removeClass('hide');
        $('.chocoballscontent').fadeIn('300');
    })
}
{ /* White Honeycomb Chocolate Bar 'Like Button' Function */
    $('.whonycombbarlikebutton1').on('click', function() {
        $('.whonycombbarlikebutton1').addClass('hide');
        $('.whonycombbarlikebutton2').removeClass('hide');
        $('.liked-whitehoneycombchocolatebar').removeClass('likeditemhide');
        $('.liked-whitehoneycombchocolatebar').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{ /* White Honeycomb Chocolate Bar 'Like Button' Function */
    $('.whonycombbarlikebutton2').on('click', function() {
        $('.whonycombbarlikebutton2').addClass('hide');
        $('.whonycombbarlikebutton1').removeClass('hide');
        $('.liked-whitehoneycombchocolatebar').addClass('likeditemhide');
        $('.liked-whitehoneycombchocolatebar').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.whoneycombbarbutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.whonycombbarcontent').removeClass('hide');
        $('.whonycombbarcontent').fadeIn('300');
    })
}
{ /* Milk Chocolate Bar 'Like Button' Function */
    $('.milkbarlikebutton1').on('click', function() {
        $('.milkbarlikebutton1').addClass('hide');
        $('.milkbarlikebutton2').removeClass('hide');
        $('.liked-milkchocolatebar').removeClass('likeditemhide');
        $('.liked-milkchocolatebar').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{ /* Milk Chocolate Bar 'Like Button' Function */
    $('.milkbarlikebutton2').on('click', function() {
        $('.milkbarlikebutton2').addClass('hide');
        $('.milkbarlikebutton1').removeClass('hide');
        $('.liked-milkchocolatebar').addClass('likeditemhide');
        $('.liked-milkchocolatebar').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.milkbarbutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.milkbarcontent').removeClass('hide');
        $('.milkbarcontent').fadeIn('300');
    })
}
/* Cakes 'Like Button' Functions */
{
    $('.buttercreamrosettcakelikebutton1').on('click', function() {
        $('.buttercreamrosettcakelikebutton1').addClass('hide');
        $('.buttercreamrosettcakelikebutton2').removeClass('hide');
        $('.liked-buttercreamrosettcake').removeClass('likeditemhide');
        $('.liked-buttercreamrosettcake').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.buttercreamrosettcakelikebutton2').on('click', function() {
        $('.buttercreamrosettcakelikebutton2').addClass('hide');
        $('.buttercreamrosettcakelikebutton1').removeClass('hide');
         $('.liked-buttercreamrosettcake').addClass('likeditemhide');
        $('.liked-buttercreamrosettcake').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.buttercreamrosettcakebutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.buttercreamrosettcakecontent').removeClass('hide');
        $('.buttercreamrosettcakecontent').fadeIn('300');
    })
}
{
    $('.chocolatedripcakelikebutton1').on('click', function() {
        $('.chocolatedripcakelikebutton1').addClass('hide');
        $('.chocolatedripcakelikebutton2').removeClass('hide');
        $('.liked-chocolatedripcake').removeClass('likeditemhide');
        $('.liked-chocolatedripcake').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.chocolatedripcakelikebutton2').on('click', function() {
        $('.chocolatedripcakelikebutton2').addClass('hide');
        $('.chocolatedripcakelikebutton1').removeClass('hide');        
        $('.liked-chocolatedripcake').addClass('likeditemhide');
        $('.liked-chocolatedripcake').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.chocolatedripcakebutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.chocolatedripcakecontent').removeClass('hide');
        $('.chocolatedripcakecontent').fadeIn('300');
    })
}
{
    $('.chocolaterosecakelikebutton1').on('click', function() {
        $('.chocolaterosecakelikebutton1').addClass('hide');
        $('.chocolaterosecakelikebutton2').removeClass('hide');
        $('.liked-chocolaterosecake').removeClass('likeditemhide');
        $('.liked-chocolaterosecake').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.chocolaterosecakelikebutton2').on('click', function() {
        $('.chocolaterosecakelikebutton2').addClass('hide');
        $('.chocolaterosecakelikebutton1').removeClass('hide');
        $('.liked-chocolaterosecake').addClass('likeditemhide');
        $('.liked-chocolaterosecake').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.chocolaterosecakebutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.chocolaterosecakecontent').removeClass('hide');
        $('.chocolaterosecakecontent').fadeIn('300');
    })
}
{
    $('.chocolatestrawberrycakelikebutton1').on('click', function() {
        $('.chocolatestrawberrycakelikebutton1').addClass('hide');
        $('.chocolatestrawberrycakelikebutton2').removeClass('hide');
        $('.liked-chocolatestrawberrycake').removeClass('likeditemhide');
        $('.liked-chocolatestrawberrycake').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.chocolatestrawberrycakelikebutton2').on('click', function() {
        $('.chocolatestrawberrycakelikebutton2').addClass('hide');
        $('.chocolatestrawberrycakelikebutton1').removeClass('hide');
        $('.liked-chocolatestrawberrycake').addClass('likeditemhide');
        $('.liked-chocolatestrawberrycake').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.chocolatestrawberrycakebutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.chocolatestrawberrycakecontent').removeClass('hide');
        $('.chocolatestrawberrycakecontent').fadeIn('300');
    })
}
{
    $('.starwberrycreamcakelikebutton1').on('click', function() {
        $('.starwberrycreamcakelikebutton1').addClass('hide');
        $('.starwberrycreamcakelikebutton2').removeClass('hide');
        $('.liked-strawberrycreamcake').removeClass('likeditemhide');
        $('.liked-strawberrycreamcake').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.starwberrycreamcakelikebutton2').on('click', function() {
        $('.starwberrycreamcakelikebutton2').addClass('hide');
        $('.starwberrycreamcakelikebutton1').removeClass('hide');
        $('.liked-strawberrycreamcake').addClass('likeditemhide');
        $('.liked-strawberrycreamcake').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.strawberrycreamcakebutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.strawberrycreamcakecontent').removeClass('hide');
        $('.strawberrycreamcakecontent').fadeIn('300');
    })
}
{
    $('.floralvintagecakelikebutton1').on('click', function() {
        $('.floralvintagecakelikebutton1').addClass('hide');
        $('.floralvintagecakelikebutton2').removeClass('hide');

        $('.liked-floralvintagecake').removeClass('likeditemhide');
        $('.liked-floralvintagecake').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.floralvintagecakelikebutton2').on('click', function() {
        $('.floralvintagecakelikebutton2').addClass('hide');
        $('.floralvintagecakelikebutton1').removeClass('hide');

        $('.liked-floralvintagecake').addClass('likeditemhide');
        $('.liked-floralvintagecake').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.floralvintagecakebutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.floralvintagecakecontent').removeClass('hide');
        $('.floralvintagecakecontent').fadeIn('300');
    })
}
{
    $('.ganachedripcakelikebutton1').on('click', function() {
        $('.ganachedripcakelikebutton1').addClass('hide');
        $('.ganachedripcakelikebutton2').removeClass('hide');
        $('.liked-ganachedripcake').removeClass('likeditemhide');
        $('.liked-ganachedripcake').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.ganachedripcakelikebutton2').on('click', function() {
        $('.ganachedripcakelikebutton2').addClass('hide');
        $('.ganachedripcakelikebutton1').removeClass('hide');
        $('.liked-ganachedripcake').addClass('likeditemhide');
        $('.liked-ganachedripcake').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.ganachedripcakebutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.ganachedripcakecontent').removeClass('hide');
        $('.ganachedripcakecontent').fadeIn('300');
    })
}
{
    $('.glutenfreebananacakelikebutton1').on('click', function() {
        $('.glutenfreebananacakelikebutton1').addClass('hide');
        $('.glutenfreebananacakelikebutton2').removeClass('hide');
        $('.liked-glutenfreebananacake').removeClass('likeditemhide');
        $('.liked-glutenfreebananacake').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.glutenfreebananacakelikebutton2').on('click', function() {
        $('.glutenfreebananacakelikebutton2').addClass('hide');
        $('.glutenfreebananacakelikebutton1').removeClass('hide');
        $('.liked-glutenfreebananacake').addClass('likeditemhide');
        $('.liked-glutenfreebananacake').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.glutenfreebananacakebutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.glutenfreebananacakecontent').removeClass('hide');
        $('.glutenfreebananacakecontent').fadeIn('300');
    })
}
{
    $('.heavenlyrosecakelikebutton1').on('click', function() {
        $('.heavenlyrosecakelikebutton1').addClass('hide');
        $('.heavenlyrosecakelikebutton2').removeClass('hide');
        $('.liked-heavenlyrosecake').removeClass('likeditemhide');
        $('.liked-heavenlyrosecake').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.heavenlyrosecakelikebutton2').on('click', function() {
        $('.heavenlyrosecakelikebutton2').addClass('hide');
        $('.heavenlyrosecakelikebutton1').removeClass('hide');
        $('.liked-heavenlyrosecake').addClass('likeditemhide');
        $('.liked-heavenlyrosecake').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.heavenlyrosecakebutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.heavenlyrosecakecontent').removeClass('hide');
        $('.heavenlyrosecakecontent').fadeIn('300');
    })
}
{
    $('.kinderbuenocakelikebutton1').on('click', function() {
        $('.kinderbuenocakelikebutton1').addClass('hide');
        $('.kinderbuenocakelikebutton2').removeClass('hide');
        $('.liked-kinderbuenocake').removeClass('likeditemhide');
        $('.liked-kinderbuenocake').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');

    })
}
{
    $('.kinderbuenocakelikebutton2').on('click', function() {
        $('.kinderbuenocakelikebutton2').addClass('hide');
        $('.kinderbuenocakelikebutton1').removeClass('hide');
        $('.liked-kinderbuenocake').addClass('likeditemhide');
        $('.liked-kinderbuenocake').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.kinderbuenocakebutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.kinderbuenocakecontent').removeClass('hide');
        $('.kinderbuenocakecontent').fadeIn('300');
    })
}
{
    $('.ombrerosecakelikebutton1').on('click', function() {
        $('.ombrerosecakelikebutton1').addClass('hide');
        $('.ombrerosecakelikebutton2').removeClass('hide');
        $('.liked-ombrerosecake').removeClass('likeditemhide');
        $('.liked-ombrerosecake').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.ombrerosecakelikebutton2').on('click', function() {
        $('.ombrerosecakelikebutton2').addClass('hide');
        $('.ombrerosecakelikebutton1').removeClass('hide');
        $('.liked-ombrerosecake').addClass('likeditemhide');
        $('.liked-ombrerosecake').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.ombrerosecakebutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.ombrerosecakecontent').removeClass('hide');
        $('.ombrerosecakecontent').fadeIn('300');
    })
}
{
    $('.pinkblushstrawberrycakelikebutton1').on('click', function() {
        $('.pinkblushstrawberrycakelikebutton1').addClass('hide');
        $('.pinkblushstrawberrycakelikebutton2').removeClass('hide');
        $('.liked-pinkblushstrawberrycake').removeClass('likeditemhide');
        $('.liked-pinkblushstrawberrycake').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.pinkblushstrawberrycakelikebutton2').on('click', function() {
        $('.pinkblushstrawberrycakelikebutton2').addClass('hide');
        $('.pinkblushstrawberrycakelikebutton1').removeClass('hide');
        $('.liked-pinkblushstrawberrycake').addClass('likeditemhide');
        $('.liked-pinkblushstrawberrycake').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.pinkblushstrawberrycakebutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.pinkblushstrawberrycakecontent').removeClass('hide');
        $('.pinkblushstrawberrycakecontent').fadeIn('300');
    })
}
{
    $('.pinkrosettecakelikebutton1').on('click', function() {
        $('.pinkrosettecakelikebutton1').addClass('hide');
        $('.pinkrosettecakelikebutton2').removeClass('hide');
        $('.liked-pinkrosettecake').removeClass('likeditemhide');
        $('.liked-pinkrosettecake').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.pinkrosettecakelikebutton2').on('click', function() {
        $('.pinkrosettecakelikebutton2').addClass('hide');
        $('.pinkrosettecakelikebutton1').removeClass('hide');
        $('.liked-pinkrosettecake').addClass('likeditemhide');
        $('.liked-pinkrosettecake').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.pinkrosettecakebutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.pinkrosettecakecontent').removeClass('hide');
        $('.pinkrosettecakecontent').fadeIn('300');
    })
}
{
    $('.pinkrufflecakelikebutton1').on('click', function() {
        $('.pinkrufflecakelikebutton1').addClass('hide');
        $('.pinkrufflecakelikebutton2').removeClass('hide');
        $('.liked-pinkrufflecake').removeClass('likeditemhide');
        $('.liked-pinkrufflecake').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.pinkrufflecakelikebutton2').on('click', function() {
        $('.pinkrufflecakelikebutton2').addClass('hide');
        $('.pinkrufflecakelikebutton1').removeClass('hide');
        $('.liked-pinkrufflecake').addClass('likeditemhide');
        $('.liked-pinkrufflecake').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.pinkrufflecakebutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.pinkrufflecakecontent').removeClass('hide');
        $('.pinkrufflecakecontent').fadeIn('300');
    })
}
{
    $('.rainbowflowercakelikebutton1').on('click', function() {
        $('.rainbowflowercakelikebutton1').addClass('hide');
        $('.rainbowflowercakelikebutton2').removeClass('hide');
        $('.liked-rainbowflowercake').removeClass('likeditemhide');
        $('.liked-rainbowflowercake').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.rainbowflowercakelikebutton2').on('click', function() {
        $('.rainbowflowercakelikebutton2').addClass('hide');
        $('.rainbowflowercakelikebutton1').removeClass('hide');
        $('.liked-rainbowflowercake').addClass('likeditemhide');
        $('.liked-rainbowflowercake').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.rainbowflowercakebutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.raibowflowercakecontent').removeClass('hide');
        $('.raibowflowercakecontent').fadeIn('300');
    })
}
{
    $('.ribboncandycakelikebutton1').on('click', function() {
        $('.ribboncandycakelikebutton1').addClass('hide');
        $('.ribboncandycakelikebutton2').removeClass('hide');
        $('.liked-ribboncandycake').removeClass('likeditemhide');
        $('.liked-ribboncandycake').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.ribboncandycakelikebutton2').on('click', function() {
        $('.ribboncandycakelikebutton2').addClass('hide');
        $('.ribboncandycakelikebutton1').removeClass('hide');
        $('.liked-ribboncandycake').addClass('likeditemhide');
        $('.liked-ribboncandycake').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.ribboncandycakebutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.ribboncandycakecontent').removeClass('hide');
        $('.ribboncandycakecontent').fadeIn('300');
    })
}
{
    $('.rubyandrichescakelikebutton1').on('click', function() {
        $('.rubyandrichescakelikebutton1').addClass('hide');
        $('.rubyandrichescakelikebutton2').removeClass('hide');
        $('.liked-rubyandrichescake').removeClass('likeditemhide');
        $('.liked-rubyandrichescake').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.rubyandrichescakelikebutton2').on('click', function() {
        $('.rubyandrichescakelikebutton2').addClass('hide');
        $('.rubyandrichescakelikebutton1').removeClass('hide');
        $('.liked-rubyandrichescake').addClass('likeditemhide');
        $('.liked-rubyandrichescake').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.rubyandrichescakebutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.rubyandrichescakecontent').removeClass('hide');
        $('.rubyandrichescakecontent').fadeIn('300');
    })
}
{
    $('.sprinklechocolatedripcakelikebutton1').on('click', function() {
        $('.sprinklechocolatedripcakelikebutton1').addClass('hide');
        $('.sprinklechocolatedripcakelikebutton2').removeClass('hide');
        $('.liked-sprinklechocolatedripcake').removeClass('likeditemhide');
        $('.liked-sprinklechocolatedripcake').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.sprinklechocolatedripcakelikebutton2').on('click', function() {
        $('.sprinklechocolatedripcakelikebutton2').addClass('hide');
        $('.sprinklechocolatedripcakelikebutton1').removeClass('hide');
        $('.liked-sprinklechocolatedripcake').addClass('likeditemhide');
        $('.liked-sprinklechocolatedripcake').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.sprinklechocolatedripcakebutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.sprinklechocolatedripcakecontent').removeClass('hide');
        $('.sprinklechocolatedripcakecontent').fadeIn('300');
    })
}
/* Pastries 'Like Button' Functions */
{
    $('.bakedpuffpastrylikebutton1').on('click', function() {
        $('.bakedpuffpastrylikebutton1').addClass('hide');
        $('.bakedpuffpastrylikebutton2').removeClass('hide');
        $('.liked-bakedpuffpastry').removeClass('likeditemhide');
        $('.liked-bakedpuffpastry').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.bakedpuffpastrylikebutton2').on('click', function() {
        $('.bakedpuffpastrylikebutton2').addClass('hide');
        $('.bakedpuffpastrylikebutton1').removeClass('hide');
        $('.liked-bakedpuffpastry').addClass('likeditemhide');
        $('.liked-bakedpuffpastry').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.bakedpuffpastrybutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.bakedpuffpastrycontent').removeClass('hide');
        $('.bakedpuffpastrycontent').fadeIn('300');
    })
}
{
    $('.blackforestpastrylikebutton1').on('click', function() {
        $('.blackforestpastrylikebutton1').addClass('hide');
        $('.blackforestpastrylikebutton2').removeClass('hide');
        $('.liked-blackforestpastry').removeClass('likeditemhide');
        $('.liked-blackforestpastry').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.blackforestpastrylikebutton2').on('click', function() {
        $('.blackforestpastrylikebutton2').addClass('hide');
        $('.blackforestpastrylikebutton1').removeClass('hide');
        $('.liked-blackforestpastry').addClass('likeditemhide');
        $('.liked-blackforestpastry').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.blackforestpastrybutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.blackforestpastrycontent').removeClass('hide');
        $('.blackforestpastrycontent').fadeIn('300');
    })
}
{
    $('.cherryflavouredblackforestpastrylikebutton1').on('click', function() {
        $('.cherryflavouredblackforestpastrylikebutton1').addClass('hide');
        $('.cherryflavouredblackforestpastrylikebutton2').removeClass('hide');
        $('.liked-cherryflavouredblackforestpastry').removeClass('likeditemhide');
        $('.liked-cherryflavouredblackforestpastry').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.cherryflavouredblackforestpastrylikebutton2').on('click', function() {
        $('.cherryflavouredblackforestpastrylikebutton2').addClass('hide');
        $('.cherryflavouredblackforestpastrylikebutton1').removeClass('hide');
        $('.liked-cherryflavouredblackforestpastry').addClass('likeditemhide');
        $('.liked-cherryflavouredblackforestpastry').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.cherryflavouredblackforestpastrybutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.cherryflavouredblackforestpastrycontent').removeClass('hide');
        $('.cherryflavouredblackforestpastrycontent').fadeIn('300');
    })
}
{
    $('.chocochippastrylikebutton1').on('click', function() {
        $('.chocochippastrylikebutton1').addClass('hide');
        $('.chocochippastrylikebutton2').removeClass('hide');
        $('.liked-chocochippastry').removeClass('likeditemhide');
        $('.liked-chocochippastry').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.chocochippastrylikebutton2').on('click', function() {
        $('.chocochippastrylikebutton2').addClass('hide');
        $('.chocochippastrylikebutton1').removeClass('hide');
        $('.liked-chocochippastry').addClass('likeditemhide');
        $('.liked-chocochippastry').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.chocochippastrybutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.chocochippastrycontent').removeClass('hide');
        $('.chocochippastrycontent').fadeIn('300');
    })
}
{
    $('.chocolatechipcookiedoughlushlikebutton1').on('click', function() {
        $('.chocolatechipcookiedoughlushlikebutton1').addClass('hide');
        $('.chocolatechipcookiedoughlushlikebutton2').removeClass('hide');
        $('.liked-chocolatechipcookiedoughlush').removeClass('likeditemhide');
        $('.liked-chocolatechipcookiedoughlush').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.chocolatechipcookiedoughlushlikebutton2').on('click', function() {
        $('.chocolatechipcookiedoughlushlikebutton2').addClass('hide');
        $('.chocolatechipcookiedoughlushlikebutton1').removeClass('hide');
        $('.liked-chocolatechipcookiedoughlush').addClass('likeditemhide');
        $('.liked-chocolatechipcookiedoughlush').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.chocolatechipcookiedoughlushbutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.chocolatechipcookiedoughlushcontent').removeClass('hide');
        $('.chocolatechipcookiedoughlushcontent').fadeIn('300');
    })
}
{
    $('.egglessdutchtufflepastrylikebutton1').on('click', function() {
        $('.egglessdutchtufflepastrylikebutton1').addClass('hide');
        $('.egglessdutchtufflepastrylikebutton2').removeClass('hide');
        $('.liked-egglessdutchtufflepastry').removeClass('likeditemhide');
        $('.liked-egglessdutchtufflepastry').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.egglessdutchtufflepastrylikebutton2').on('click', function() {
        $('.egglessdutchtufflepastrylikebutton2').addClass('hide');
        $('.egglessdutchtufflepastrylikebutton1').removeClass('hide');
        $('.liked-egglessdutchtufflepastry').addClass('likeditemhide');
        $('.liked-egglessdutchtufflepastry').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
        
    })
}
{
    $('.egglessdutchtufflepastrybutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.egglessdutchtufflepastrycontent').removeClass('hide');
        $('.egglessdutchtufflepastrycontent').fadeIn('300');
    })
}
{
    $('.flakypastrylikebutton1').on('click', function() {
        $('.flakypastrylikebutton1').addClass('hide');
        $('.flakypastrylikebutton2').removeClass('hide');
        $('.liked-flakypastry').removeClass('likeditemhide');
        $('.liked-flakypastry').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.flakypastrylikebutton2').on('click', function() {
        $('.flakypastrylikebutton2').addClass('hide');
        $('.flakypastrylikebutton1').removeClass('hide');
        $('.liked-flakypastry').addClass('likeditemhide');
        $('.liked-flakypastry').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
        
    })
}
{
    $('.flakypastrybutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.flakypastrycontent').removeClass('hide');
        $('.flakypastrycontent').fadeIn('300');
    })
}
{
    $('.freshcreampinapplepastrylikebutton1').on('click', function() {
        $('.freshcreampinapplepastrylikebutton1').addClass('hide');
        $('.freshcreampinapplepastrylikebutton2').removeClass('hide');
        $('.liked-freshcreampinapplepastry').removeClass('likeditemhide');
        $('.liked-freshcreampinapplepastry').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.freshcreampinapplepastrylikebutton2').on('click', function() {
        $('.freshcreampinapplepastrylikebutton2').addClass('hide');
        $('.freshcreampinapplepastrylikebutton1').removeClass('hide');
        $('.liked-freshcreampinapplepastry').addClass('likeditemhide');
        $('.liked-freshcreampinapplepastry').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.freshcreampinapplepastrybutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.freshcreampinapplepastrycontent').removeClass('hide');
        $('.freshcreampinapplepastrycontent').fadeIn('300');
    })
}
{
    $('.mochasquarepastrylikebutton1').on('click', function() {
        $('.mochasquarepastrylikebutton1').addClass('hide');
        $('.mochasquarepastrylikebutton2').removeClass('hide');
        $('.liked-mochasquarepastry').removeClass('likeditemhide');
        $('.liked-mochasquarepastry').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.mochasquarepastrylikebutton2').on('click', function() {
        $('.mochasquarepastrylikebutton2').addClass('hide');
        $('.mochasquarepastrylikebutton1').removeClass('hide');
        $('.liked-mochasquarepastry').addClass('likeditemhide');
        $('.liked-mochasquarepastry').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.mochasquarepastrybutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.mochasquarepastrycontent').removeClass('hide');
        $('.mochasquarepastrycontent').fadeIn('300');
    })
}
{
    $('.richchocolatepastrylikebutton1').on('click', function() {
        $('.richchocolatepastrylikebutton1').addClass('hide');
        $('.richchocolatepastrylikebutton2').removeClass('hide');
        $('.liked-richchocolatepastry').removeClass('likeditemhide');
        $('.liked-richchocolatepastry').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.richchocolatepastrylikebutton2').on('click', function() {
        $('.richchocolatepastrylikebutton2').addClass('hide');
        $('.richchocolatepastrylikebutton1').removeClass('hide');
        $('.liked-richchocolatepastry').addClass('likeditemhide');
        $('.liked-richchocolatepastry').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.richchocolatepastrybutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.richchocolatepastrycontent').removeClass('hide');
        $('.richchocolatepastrycontent').fadeIn('300');
    })
}
{
    $('.chocolatepuffpastryrolllikebutton1').on('click', function() {
        $('.chocolatepuffpastryrolllikebutton1').addClass('hide');
        $('.chocolatepuffpastryrolllikebutton2').removeClass('hide');
        $('.liked-chocolatepuffpastryroll').removeClass('likeditemhide');
        $('.liked-chocolatepuffpastryroll').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.chocolatepuffpastryrolllikebutton2').on('click', function() {
        $('.chocolatepuffpastryrolllikebutton2').addClass('hide');
        $('.chocolatepuffpastryrolllikebutton1').removeClass('hide');
        $('.liked-chocolatepuffpastryroll').addClass('likeditemhide');
        $('.liked-chocolatepuffpastryroll').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.chocolatepuffpastryrollbutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.chocolatepuffpastryrollcontent').removeClass('hide');
        $('.chocolatepuffpastryrollcontent').fadeIn('300');
    })
}
/* Ice Cream 'Like Button' Functions */
{
    $('.chocolateicecreamlikebutton1').on('click', function() {
        $('.chocolateicecreamlikebutton1').addClass('hide');
        $('.chocolateicecreamlikebutton2').removeClass('hide');
        $('.liked-chocolateicecream').removeClass('likeditemhide');
        $('.liked-chocolateicecream').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.chocolateicecreamlikebutton2').on('click', function() {
        $('.chocolateicecreamlikebutton2').addClass('hide');
        $('.chocolateicecreamlikebutton1').removeClass('hide');
       $('.liked-chocolateicecream').addClass('likeditemhide');
        $('.liked-chocolateicecream').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.chocolateicecreambutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.chocolateicecreamcontent').removeClass('hide');
        $('.chocolateicecreamcontent').fadeIn('300');
    })
}
{
    $('.syrupandsprinkelledicecreamlikebutton1').on('click', function() {
        $('.syrupandsprinkelledicecreamlikebutton1').addClass('hide');
        $('.syrupandsprinkelledicecreamlikebutton2').removeClass('hide');
        $('.liked-syrupandsprinkelledicecreamsundae').removeClass('likeditemhide');
        $('.liked-syrupandsprinkelledicecreamsundae').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.syrupandsprinkelledicecreamlikebutton2').on('click', function() {
        $('.syrupandsprinkelledicecreamlikebutton2').addClass('hide');
        $('.syrupandsprinkelledicecreamlikebutton1').removeClass('hide');
        $('.liked-syrupandsprinkelledicecreamsundae').addClass('likeditemhide');
        $('.liked-syrupandsprinkelledicecreamsundae').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.syrupandsprinkelledicecreamsundaebutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.syrupandsprinkelledicecreamsundaecontent').removeClass('hide');
        $('.syrupandsprinkelledicecreamsundaecontent').fadeIn('300');
    })
}
{
    $('.creamyvanillaicecreamlikebutton1').on('click', function() {
        $('.creamyvanillaicecreamlikebutton1').addClass('hide');
        $('.creamyvanillaicecreamlikebutton2').removeClass('hide');
        $('.liked-creamyveganvanillaicecream').removeClass('likeditemhide');
        $('.liked-creamyveganvanillaicecream').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.creamyvanillaicecreamlikebutton2').on('click', function() {
        $('.creamyvanillaicecreamlikebutton2').addClass('hide');
        $('.creamyvanillaicecreamlikebutton1').removeClass('hide');
        $('.liked-creamyveganvanillaicecream').addClass('likeditemhide');
        $('.liked-creamyveganvanillaicecream').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.creamyvanillaicecreambutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.creamyvanillaicecreamcontent').removeClass('hide');
        $('.creamyvanillaicecreamcontent').fadeIn('300');
    })
}
{
    $('.friedicecreamlikebutton1').on('click', function() {
        $('.friedicecreamlikebutton1').addClass('hide');
        $('.friedicecreamlikebutton2').removeClass('hide');
        $('.liked-friedicecream').removeClass('likeditemhide');
        $('.liked-friedicecream').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.friedicecreamlikebutton2').on('click', function() {
        $('.friedicecreamlikebutton2').addClass('hide');
        $('.friedicecreamlikebutton1').removeClass('hide');
        $('.liked-friedicecream').addClass('likeditemhide');
        $('.liked-friedicecream').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.friedicecreambutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.friedicecreamcontent').removeClass('hide');
        $('.friedicecreamcontent').fadeIn('300');
    })
}
{
    $('.icecreamsundaelikebutton1').on('click', function() {
        $('.icecreamsundaelikebutton1').addClass('hide');
        $('.icecreamsundaelikebutton2').removeClass('hide');
        $('.liked-icecreamsundae').removeClass('likeditemhide');
        $('.liked-icecreamsundae').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.icecreamsundaelikebutton2').on('click', function() {
        $('.icecreamsundaelikebutton2').addClass('hide');
        $('.icecreamsundaelikebutton1').removeClass('hide');
        $('.liked-icecreamsundae').addClass('likeditemhide');
        $('.liked-icecreamsundae').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.icecreamsundaebutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.icecreamsundaecontent').removeClass('hide');
        $('.icecreamsundaecontent').fadeIn('300');
    })
}
{
    $('.rainbowicecreamlikebutton1').on('click', function() {
        $('.rainbowicecreamlikebutton1').addClass('hide');
        $('.rainbowicecreamlikebutton2').removeClass('hide');
        $('.liked-rainbowicecream').removeClass('likeditemhide');
        $('.liked-rainbowicecream').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.rainbowicecreamlikebutton2').on('click', function() {
        $('.rainbowicecreamlikebutton2').addClass('hide');
        $('.rainbowicecreamlikebutton1').removeClass('hide');
        $('.liked-rainbowicecream').addClass('likeditemhide');
        $('.liked-rainbowicecream').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.rainbowicecreambutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.rainbowicecreamcontent').removeClass('hide');
        $('.rainbowicecreamcontent').fadeIn('300');
    })
}
{
    $('.rainbowsprinkelledbananaicecreamlikebutton1').on('click', function() {
        $('.rainbowsprinkelledbananaicecreamlikebutton1').addClass('hide');
        $('.rainbowsprinkelledbananaicecreamlikebutton2').removeClass('hide');
        $('.liked-rainbowsprinkelledbananaicecream').removeClass('likeditemhide');
        $('.liked-rainbowsprinkelledbananaicecream').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.rainbowsprinkelledbananaicecreamlikebutton2').on('click', function() {
        $('.rainbowsprinkelledbananaicecreamlikebutton2').addClass('hide');
        $('.rainbowsprinkelledbananaicecreamlikebutton1').removeClass('hide');
        $('.liked-rainbowsprinkelledbananaicecream').addClass('likeditemhide');
        $('.liked-rainbowsprinkelledbananaicecream').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.rainbowsprinkelledbananaicecreambutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.rainbowsprinkelledbananaicecreamcontent').removeClass('hide');
        $('.rainbowsprinkelledbananaicecreamcontent').fadeIn('300');
    })
}
{
    $('.softserveicecreamlikebutton1').on('click', function() {
        $('.softserveicecreamlikebutton1').addClass('hide');
        $('.softserveicecreamlikebutton2').removeClass('hide');
        $('.liked-softserveicecream').removeClass('likeditemhide');
        $('.liked-softserveicecream').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.softserveicecreamlikebutton2').on('click', function() {
        $('.softserveicecreamlikebutton2').addClass('hide');
        $('.softserveicecreamlikebutton1').removeClass('hide');
        $('.liked-softserveicecream').addClass('likeditemhide');
        $('.liked-softserveicecream').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.softserveicecreambutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.softserveicecreamcontent').removeClass('hide');
        $('.softserveicecreamcontent').fadeIn('300');
    })
}
{
    $('.sprinkelledvanillaicecreamlikebutton1').on('click', function() {
        $('.sprinkelledvanillaicecreamlikebutton1').addClass('hide');
        $('.sprinkelledvanillaicecreamlikebutton2').removeClass('hide');
        $('.liked-sprinkelledvanillaicecream').removeClass('likeditemhide');
        $('.liked-sprinkelledvanillaicecream').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.sprinkelledvanillaicecreamlikebutton2').on('click', function() {
        $('.sprinkelledvanillaicecreamlikebutton2').addClass('hide');
        $('.sprinkelledvanillaicecreamlikebutton1').removeClass('hide');
        $('.liked-sprinkelledvanillaicecream').addClass('likeditemhide');
        $('.liked-sprinkelledvanillaicecream').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.sprinkelledvanillaicecreambutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.sprinkelledvanillaicecreamcontent').removeClass('hide');
        $('.sprinkelledvanillaicecreamcontent').fadeIn('300');
    })
}
{
    $('.strawberryicecreamlikebutton1').on('click', function() {
        $('.strawberryicecreamlikebutton1').addClass('hide');
        $('.strawberryicecreamlikebutton2').removeClass('hide');
        $('.liked-strawberryicecream').removeClass('likeditemhide');
        $('.liked-strawberryicecream').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.strawberryicecreamlikebutton2').on('click', function() {
        $('.strawberryicecreamlikebutton2').addClass('hide');
        $('.strawberryicecreamlikebutton1').removeClass('hide');
        $('.liked-strawberryicecream').addClass('likeditemhide');
        $('.liked-strawberryicecream').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.strawberryicecreambutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.strawberryicecreamcontent').removeClass('hide');
        $('.strawberryicecreamcontent').fadeIn('300');
    })
}
{
    $('.supermanicecreamlikebutton1').on('click', function() {
        $('.supermanicecreamlikebutton1').addClass('hide');
        $('.supermanicecreamlikebutton2').removeClass('hide');
        $('.liked-supermanicecream').removeClass('likeditemhide');
        $('.liked-supermanicecream').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.supermanicecreamlikebutton2').on('click', function() {
        $('.supermanicecreamlikebutton2').addClass('hide');
        $('.supermanicecreamlikebutton1').removeClass('hide');
        $('.liked-supermanicecream').addClass('likeditemhide');
        $('.liked-supermanicecream').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.supermanicecreambutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.supermanicecreamcontent').removeClass('hide');
        $('.supermanicecreamcontent').fadeIn('300');
    })
}
{
    $('.waffleconedchocolateicecreamlikebutton1').on('click', function() {
        $('.waffleconedchocolateicecreamlikebutton1').addClass('hide');
        $('.waffleconedchocolateicecreamlikebutton2').removeClass('hide');
        $('.liked-waffleconedchocolateicecream').removeClass('likeditemhide');
        $('.liked-waffleconedchocolateicecream').css('display', 'flex');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.waffleconedchocolateicecreamlikebutton2').on('click', function() {
        $('.waffleconedchocolateicecreamlikebutton2').addClass('hide');
        $('.waffleconedchocolateicecreamlikebutton1').removeClass('hide');
        $('.liked-waffleconedchocolateicecream').addClass('likeditemhide');
        $('.liked-waffleconedchocolateicecream').css('display', 'none');
        $('.likeditemhide').css('display', 'none');
    })
}
{
    $('.waffleconedchocolateicecreambutton').on('click', function() {
        $('.containers').fadeOut('300');
        $('.waffleconedchocolateicecreamcontent').removeClass('hide');
        $('.waffleconedchocolateicecreamcontent').fadeIn(300);
    })
}

/* Chocolates 'Cart Button' Functions */
{
    $('.biscoffbarcartbutton').on('click', function() {
      $('.cart-biscoffbar').removeClass('cartitemhide');
      $('.cart-biscoffbar').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-biscoffbarhider').on('click', function() {
      $('.cart-biscoffbar').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.mandlbarcartbutton').on('click', function() {
      $('.cart-milkaandluchocolatebar').removeClass('cartitemhide');
      $('.cart-milkaandluchocolatebar').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-milkaandluchocolatebarhider').on('click', function() {
      $('.cart-milkaandluchocolatebar').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.hazelnutdarkchocolatecartbutton').on('click', function() {
      $('.cart-hazelnutdarkchocolate').removeClass('cartitemhide');
      $('.cart-hazelnutdarkchocolate').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-hazelnutdarkchocolatehider').on('click', function() {
      $('.cart-hazelnutdarkchocolate').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.mixedseedsbarbuttoncartbutton').on('click', function() {
      $('.cart-mixedseedschocolatebar').removeClass('cartitemhide');
      $('.cart-mixedseedschocolatebar').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-mixedseedschocolatebarhider').on('click', function() {
      $('.cart-mixedseedschocolatebar').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.fandnbarcartbutton').on('click', function() {
      $('.cart-darkchocolatewithdriedfruitandnuts').removeClass('cartitemhide');
      $('.cart-darkchocolatewithdriedfruitandnuts').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-darkchocolatewithdriedfruitandnutshider').on('click', function() {
      $('.cart-darkchocolatewithdriedfruitandnuts').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.aandssaltbarcartbutton').on('click', function() {
      $('.cart-chocolatebarwithalmondandseasalt').removeClass('cartitemhide');
      $('.cart-chocolatebarwithalmondandseasalt').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-chocolatebarwithalmondandseasalthider').on('click', function() {
      $('.cart-chocolatebarwithalmondandseasalt').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.lindtbarcartbutton').on('click', function() {
      $('.cart-lindtmilkchocolatebar').removeClass('cartitemhide');
      $('.cart-lindtmilkchocolatebar').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-lindtmilkchocolatebarhider').on('click', function() {
      $('.cart-lindtmilkchocolatebar').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.minkbarcartbutton').on('click', function() {
      $('.cart-minkchocolatebar').removeClass('cartitemhide');
      $('.cart-minkchocolatebar').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-minkchocolatebarhider').on('click', function() {
      $('.cart-minkchocolatebar').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.chocoballscartbutton').on('click', function() {
      $('.cart-chocoballs').removeClass('cartitemhide');
      $('.cart-chocoballs').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-chocoballshider').on('click', function() {
      $('.cart-chocoballs').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.whoneycombbarcartbutton').on('click', function() {
      $('.cart-whitehoneycombchocolatebar').removeClass('cartitemhide');
      $('.cart-whitehoneycombchocolatebar').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-whitehoneycombchocolatebarhider').on('click', function() {
      $('.cart-whitehoneycombchocolatebar').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.milkbarcartbutton').on('click', function() {
      $('.cart-milkchocolatebar').removeClass('cartitemhide');
      $('.cart-milkchocolatebar').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-milkchocolatebarhider').on('click', function() {
      $('.cart-milkchocolatebar').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}

/* Cakes 'Cart Button' Functions */
{
    $('.buttercreamrosettcakecartbutton').on('click', function() {
      $('.cart-buttercreamrosettcake').removeClass('cartitemhide');
      $('.cart-buttercreamrosettcake').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-buttercreamrosettcakehider').on('click', function() {
      $('.cart-buttercreamrosettcake').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.chocolatedripcakecartbutton').on('click', function() {
      $('.cart-chocolatedripcake').removeClass('cartitemhide');
      $('.cart-chocolatedripcake').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-chocolatedripcakehider').on('click', function() {
      $('.cart-chocolatedripcake').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.chocolaterosecakecartbutton').on('click', function() {
      $('.cart-chocolaterosecake').removeClass('cartitemhide');
      $('.cart-chocolaterosecake').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-chocolaterosecakehider').on('click', function() {
      $('.cart-chocolaterosecake').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.chocolatestrawberrycakecartbutton').on('click', function() {
      $('.cart-chocolatestrawberrycake').removeClass('cartitemhide');
      $('.cart-chocolatestrawberrycake').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-chocolatestrawberrycakehider').on('click', function() {
      $('.cart-chocolatestrawberrycake').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.strawberrycreamcakecartbutton').on('click', function() {
      $('.cart-strawberrycreamcake').removeClass('cartitemhide');
      $('.cart-strawberrycreamcake').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-strawberrycreamcakehider').on('click', function() {
      $('.cart-strawberrycreamcake').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.floralvintagecakecartbutton').on('click', function() {
      $('.cart-floralvintagecake').removeClass('cartitemhide');
      $('.cart-floralvintagecake').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-floralvintagecakehider').on('click', function() {
      $('.cart-floralvintagecake').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.ganachedripcakecartbutton').on('click', function() {
      $('.cart-ganachedripcake').removeClass('cartitemhide');
      $('.cart-ganachedripcake').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-ganachedripcakehider').on('click', function() {
      $('.cart-ganachedripcake').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.glutenfreebananacakecartbutton').on('click', function() {
      $('.cart-glutenfreebananacake').removeClass('cartitemhide');
      $('.cart-glutenfreebananacake').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-glutenfreebananacakehider').on('click', function() {
      $('.cart-glutenfreebananacake').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.heavenlyrosecakecartbutton').on('click', function() {
      $('.cart-heavenlyrosecake').removeClass('cartitemhide');
      $('.cart-heavenlyrosecake').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-heavenlyrosecakehider').on('click', function() {
      $('.cart-heavenlyrosecake').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.kinderbuenocakecartbutton').on('click', function() {
      $('.cart-kinderbuenocake').removeClass('cartitemhide');
      $('.cart-kinderbuenocake').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-kinderbuenocakehider').on('click', function() {
      $('.cart-kinderbuenocake').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.ombrerosecakecartbutton').on('click', function() {
      $('.cart-ombrerosecake').removeClass('cartitemhide');
      $('.cart-ombrerosecake').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-ombrerosecakehider').on('click', function() {
      $('.cart-ombrerosecake').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.pinkblushstrawberrycakecartbutton').on('click', function() {
      $('.cart-pinkblushstrawberrycake').removeClass('cartitemhide');
      $('.cart-pinkblushstrawberrycake').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-pinkblushstrawberrycakehider').on('click', function() {
      $('.cart-pinkblushstrawberrycake').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.pinkrosettecakecartbutton').on('click', function() {
      $('.cart-pinkrosettecake').removeClass('cartitemhide');
      $('.cart-pinkrosettecake').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-pinkrosettecakehider').on('click', function() {
      $('.cart-pinkrosettecake').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.pinkrufflecakecartbutton').on('click', function() {
      $('.cart-pinkrufflecake').removeClass('cartitemhide');
      $('.cart-pinkrufflecake').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-pinkrufflecakehider').on('click', function() {
      $('.cart-pinkrufflecake').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.rainbowflowercakecartbutton').on('click', function() {
      $('.cart-rainbowflowercake').removeClass('cartitemhide');
      $('.cart-rainbowflowercake').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-rainbowflowercakehider').on('click', function() {
      $('.cart-rainbowflowercake').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.ribboncandycakecartbutton').on('click', function() {
      $('.cart-ribboncandycake').removeClass('cartitemhide');
      $('.cart-ribboncandycake').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-ribboncandycakehider').on('click', function() {
      $('.cart-ribboncandycake').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.rubyandrichescakecartbutton').on('click', function() {
      $('.cart-rubyandrichescake').removeClass('cartitemhide');
      $('.cart-rubyandrichescake').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-rubyandrichescakehider').on('click', function() {
      $('.cart-rubyandrichescake').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.sprinklechocolatedripcakecartbutton').on('click', function() {
      $('.cart-sprinklechocolatedripcake').removeClass('cartitemhide');
      $('.cart-sprinklechocolatedripcake').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-sprinklechocolatedripcakehider').on('click', function() {
      $('.cart-sprinklechocolatedripcake').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}

/* Pastries 'Cart Button' Functions */

{
    $('.bakedpuffpastrycartbutton').on('click', function() {
      $('.cart-bakedpuffpastry').removeClass('cartitemhide');
      $('.cart-bakedpuffpastry').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');cart-bakedpuffpastry
    })
}
{
    $('.cart-bakedpuffpastryhider').on('click', function() {
      $('.cart-bakedpuffpastry').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.blackforestpastrycartbutton').on('click', function() {
      $('.cart-blackforestpastry').removeClass('cartitemhide');
      $('.cart-blackforestpastry').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-blackforestpastryhider').on('click', function() {
      $('.cart-blackforestpastry').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.cherryflavouredblackforestcartbutton').on('click', function() {
      $('.cart-cherryflavouredblackforestpastry').removeClass('cartitemhide');
      $('.cart-cherryflavouredblackforestpastry').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-cherryflavouredblackforestpastryhider').on('click', function() {
      $('.cart-cherryflavouredblackforestpastry').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.chochippastrycartbutton').on('click', function() {
      $('.cart-chocochippastry').removeClass('cartitemhide');
      $('.cart-chocochippastry').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-chocochippastryhider').on('click', function() {
      $('.cart-chocochippastry').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.chocolatechipcookiedoughlushcartbutton').on('click', function() {
      $('.cart-chocolatechipcookiedoughlush').removeClass('cartitemhide');
      $('.cart-chocolatechipcookiedoughlush').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-chocolatechipcookiedoughlushider').on('click', function() {
      $('.cart-chocolatechipcookiedoughlush').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.egglessdutchtufflepastrycartbutton').on('click', function() {
      $('.cart-egglessdutchtufflepastry').removeClass('cartitemhide');
      $('.cart-egglessdutchtufflepastry').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-egglessdutchtufflepastryhider').on('click', function() {
      $('.cart-egglessdutchtufflepastry').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.flakypastrycartbutton').on('click', function() {
      $('.cart-flakypastry').removeClass('cartitemhide');
      $('.cart-flakypastry').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-flakypastryhider').on('click', function() {
      $('.cart-flakypastry').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.freshcreampinnaplepastrycartbutton').on('click', function() {
      $('.cart-freshcreampinapplepastry').removeClass('cartitemhide');
      $('.cart-freshcreampinapplepastry').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-freshcreampinapplepastryhider').on('click', function() {
      $('.cart-freshcreampinapplepastry').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.mochasquarepastrycartbutton').on('click', function() {
      $('.cart-mochasquarepastry').removeClass('cartitemhide');
      $('.cart-mochasquarepastry').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-mochasquarepastryhider').on('click', function() {
      $('.cart-mochasquarepastry').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.richchocolatepastrycartbutton').on('click', function() {
      $('.cart-richchocolatepastry').removeClass('cartitemhide');
      $('.cart-richchocolatepastry').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-richchocolatepastryhider').on('click', function() {
      $('.cart-richchocolatepastry').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.chocolatepuffpastryrollcartbutton').on('click', function() {
      $('.cart-chocolatepuffpastryroll').removeClass('cartitemhide');
      $('.cart-chocolatepuffpastryroll').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-chocolatepuffpastryrollhider').on('click', function() {
      $('.cart-chocolatepuffpastryroll').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}

/* Ice Cream 'Cart Button' Functions */

{
    $('.chocolateicecreamcartbutton').on('click', function() {
      $('.cart-chocolateicecream').removeClass('cartitemhide');
      $('.cart-chocolateicecream').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-chocolateicecreamhider').on('click', function() {
      $('.cart-chocolateicecream').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.syrupandsprinkelledicecreamsundaecartbutton').on('click', function() {
      $('.cart-syrupandsprinkelledicecreamsundae').removeClass('cartitemhide');
      $('.cart-syrupandsprinkelledicecreamsundae').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-syrupandsprinkelledicecreamsundaehider').on('click', function() {
      $('.cart-syrupandsprinkelledicecreamsundae').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.creamyvanillaicecreamsundaecartbutton').on('click', function() {
      $('.cart-creamyveganvanillaicecream').removeClass('cartitemhide');
      $('.cart-creamyveganvanillaicecream').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-creamyveganvanillaicecreamhider').on('click', function() {
      $('.cart-creamyveganvanillaicecream').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.friedicecreamsundaecartbutton').on('click', function() {
      $('.cart-friedicecream').removeClass('cartitemhide');
      $('.cart-friedicecream').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-friedicecreamhider').on('click', function() {
      $('.cart-friedicecream').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.icecreamsundaecartbutton').on('click', function() {
      $('.cart-icecreamsundae').removeClass('cartitemhide');
      $('.cart-icecreamsundae').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-icecreamsundaehider').on('click', function() {
      $('.cart-icecreamsundae').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.rainbowicecreamcartbutton').on('click', function() {
      $('.cart-rainbowicecream').removeClass('cartitemhide');
      $('.cart-rainbowicecream').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-rainbowicecreamhider').on('click', function() {
      $('.cart-rainbowicecream').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.rainbowsprinkelledbananaicecreamsundaecartbutton').on('click', function() {
      $('.cart-rainbowsprinkelledbananaicecream').removeClass('cartitemhide');
      $('.cart-rainbowsprinkelledbananaicecream').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-rainbowsprinkelledbananaicecreamhider').on('click', function() {
      $('.cart-rainbowsprinkelledbananaicecream').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.softserveicecreamsundaecartbutton').on('click', function() {
      $('.cart-softserveicecream').removeClass('cartitemhide');
      $('.cart-softserveicecream').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-softserveicecreamhider').on('click', function() {
      $('.cart-softserveicecream').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.sprinkelledvanillaicecreamcartbutton').on('click', function() {
      $('.cart-sprinkelledvanillaicecream').removeClass('cartitemhide');
      $('.cart-sprinkelledvanillaicecream').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-sprinkelledvanillaicecreamhider').on('click', function() {
      $('.cart-sprinkelledvanillaicecream').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.strawberryicecreamcartbutton').on('click', function() {
      $('.cart-strawberryicecream').removeClass('cartitemhide');
      $('.cart-strawberryicecream').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-strawberryicecreamhider').on('click', function() {
      $('.cart-strawberryicecream').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.supermanicecreamcartbutton').on('click', function() {
      $('.cart-supermanicecream').removeClass('cartitemhide');
      $('.cart-supermanicecream').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-supermanicecreamhider').on('click', function() {
      $('.cart-supermanicecream').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}
{
    $('.waffleconedchocolateicecreamcartbutton').on('click', function() {
      $('.cart-waffleconedchocolateicecream').removeClass('cartitemhide');
      $('.cart-waffleconedchocolateicecream').css('display', 'flex');
      /* $('.mycartorderbutton').removeClass('cartitemhide'); */
      $('.cartitemhide').css('display', 'none');  
      alert('Item Added to Cart');
    })
}
{
    $('.cart-waffleconedchocolateicecreamhider').on('click', function() {
      $('.cart-waffleconedchocolateicecream').addClass('cartitemhide');
      $('.cartitemhide').css('display', 'none');  
    })
}

/* {
    let checkboxinput = document.querySelectorAll('.checkboxinput');
    checkboxinput.forEach((checkboxinput) => {
        checkboxinput.addEventListener('change', () => {
            if (checkboxinput.checked) {
                checkboxinput.parentElement.classList.add('checked');
            } else {
                checkboxinput.parentElement.classList.remove('checked');
            }
        });
    });
} */