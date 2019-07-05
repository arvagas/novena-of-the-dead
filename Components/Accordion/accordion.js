function Accordion(headerName, reset) {
    // if border is highlighted when clicked, close the panel and do nothing else
    if ($(headerName).hasClass('active-header')) {
        $(headerName).toggleClass('active-header').next().slideToggle()
        $(headerName).find('.expand-icon').toggleClass('flip')
    } else { // otherwise, reset the other panels (collapse all) and then open clicked panel
        // resets all panels
        $(reset).removeClass('active-header').next().slideUp()
        $(reset).find('.expand-icon').removeClass('flip')
        // turn on panel
        $(headerName).toggleClass('active-header').next().slideToggle()
        $(headerName).find('.expand-icon').toggleClass('flip')
    }
}

let accRosaryPrayers = '.rosary-prayers-header'
$('.rosary-prayers').on('click', '.rosary-prayers-header', function(){
    if (window.innerWidth <= 800) Accordion(this, accRosaryPrayers)
})

let accPrayerForEachDay = '.prayer-each-day-header'
$('.prayer-each-day').on('click', '.prayer-each-day-header', function(){
    if (window.innerWidth <= 800) Accordion(this, accPrayerForEachDay)
})

let accPopeStGregory = '.pope-st-gregory-header'
$('.pope-st-gregory').on('click', '.pope-st-gregory-header', function(){
    if (window.innerWidth <= 800) Accordion(this, accPopeStGregory)
})