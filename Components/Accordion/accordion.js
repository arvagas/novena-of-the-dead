function Accordion(headerName, reset) {
    // if border is highlighted when clicked, close the panel and do nothing else
    if ($(headerName).hasClass('active-header')) {
        $(headerName).toggleClass('active-header').next().slideToggle()
        $(headerName).find('.expand-btn').toggleClass('hidden-btn')
        $(headerName).find('.collapse-btn').toggleClass('hidden-btn')
    } else { // otherwise, reset the other panels (collapse all) and then open clicked panel
        // resets all panels
        $(reset).removeClass('active-header').next().slideUp()
        $(reset).find('.expand-btn').removeClass('hidden-btn')
        $(reset).find('.collapse-btn').addClass('hidden-btn')
        // turn on panel
        $(headerName).toggleClass('active-header').next().slideToggle()
        $(headerName).find('.expand-btn').toggleClass('hidden-btn')
        $(headerName).find('.collapse-btn').toggleClass('hidden-btn')
    }
}

let prayerAccHeader = '.accordion-header'
$('.accordion').on('click', '.accordion-header', function(){
    Accordion(this, prayerAccHeader)
})

let accPrayerForEachDay = '.prayer-each-day-header'
$('.prayer-each-day').on('click', '.prayer-each-day-header', function(){
    Accordion(this, accPrayerForEachDay)
})