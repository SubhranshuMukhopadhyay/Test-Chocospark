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

