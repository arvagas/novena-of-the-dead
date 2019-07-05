// @@@@@@@@@@@@@@@@@@@@ Length Selection @@@@@@@@@@@@@@@@@@@@
$(document).ready(function(){
    $('.novena-length').on('change', function() {
        let currValue = this.value
        switch (currValue) {
            case "novena-length-extended":
                document.querySelectorAll('.novena-length-extended').forEach(item => item.style.display = 'block')
                break;

            case "novena-length-abridged":
                document.querySelectorAll('.novena-length-extended').forEach(item => item.style.display = 'none')
                break;
        }
    })
})

// @@@@@@@@@@@@@@@@@@@@ Day Selection @@@@@@@@@@@@@@@@@@@@
$(document).ready(function(){
    $('.novena-day').on('change', function() {
        let currValue = this.value
        switch (currValue) {
            case "novena-day-all":
                accPrayerEachDayHeader.forEach(item => {
                    if (window.innerWidth <= 800) $(item).show().removeClass('active-header').next().slideUp()
                    else $(item).show().removeClass('active-header').next().show()
                    $(item).find('.expand-btn').removeClass('hidden-btn')
                    $(item).find('.collapse-btn').addClass('hidden-btn')
                })

                accPopeStGregoryHeader.forEach(item => {
                    if (window.innerWidth <= 800) $(item).show().removeClass('active-header').next().slideUp()
                    else $(item).show().removeClass('active-header').next().show()
                    $(item).find('.expand-btn').removeClass('hidden-btn')
                    $(item).find('.collapse-btn').addClass('hidden-btn')
                })
                break;

            case "novena-day-one":
                dayOption(accPrayerEachDayHeader, currValue)
                dayOption(accPopeStGregoryHeader, currValue)
                break;

            case "novena-day-two":
                dayOption(accPrayerEachDayHeader, currValue)
                dayOption(accPopeStGregoryHeader, currValue)
                break;
            
            case "novena-day-three":
                dayOption(accPrayerEachDayHeader, currValue)
                dayOption(accPopeStGregoryHeader, currValue)
                break;

            case "novena-day-four":
                dayOption(accPrayerEachDayHeader, currValue)
                dayOption(accPopeStGregoryHeader, currValue)
                break;
            
            case "novena-day-five":
                dayOption(accPrayerEachDayHeader, currValue)
                dayOption(accPopeStGregoryHeader, currValue)
                break;

            case "novena-day-six":
                dayOption(accPrayerEachDayHeader, currValue)
                dayOption(accPopeStGregoryHeader, currValue)
                break;

            case "novena-day-seven":
                dayOption(accPrayerEachDayHeader, currValue)
                dayOption(accPopeStGregoryHeader, currValue)
                break;

            case "novena-day-eight":
                dayOption(accPrayerEachDayHeader, currValue)
                dayOption(accPopeStGregoryHeader, currValue)
                break;

            case "novena-day-nine":
                dayOption(accPrayerEachDayHeader, currValue)
                dayOption(accPopeStGregoryHeader, currValue)
                break;

        }
    })
})

function dayOption(selection, value){
    selection.forEach(item => {
        if (window.innerWidth <= 800){
            if ((item.getAttribute('value') === value) || (item.getAttribute('value') === 'novena-day-all')) $(item).show()
            else {
                $(item).hide().removeClass('active-header').next().hide()
                $(item).find('.expand-btn').removeClass('hidden-btn')
                $(item).find('.collapse-btn').addClass('hidden-btn')
            }
        } else {
            if ((item.getAttribute('value') === value) || (item.getAttribute('value') === 'novena-day-all')) $(item).show().next().show()
            else {
                $(item).hide().removeClass('active-header').next().hide()
                $(item).find('.expand-btn').removeClass('hidden-btn')
                $(item).find('.collapse-btn').addClass('hidden-btn')
            }
        }
    })
}

let accPrayerEachDayHeader = document.querySelectorAll('.prayer-each-day-header')
let accPopeStGregoryHeader = document.querySelectorAll('.pope-st-gregory-header')