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
                accPrayerEachDayHeader.forEach(item => {
                    if (window.innerWidth <= 800){
                        if (item.getAttribute('value') === currValue) $(item).show()
                        else {
                            $(item).hide().removeClass('active-header').next().hide()
                            $(item).find('.expand-btn').removeClass('hidden-btn')
                            $(item).find('.collapse-btn').addClass('hidden-btn')
                        }
                    } else {
                        if (item.getAttribute('value') === currValue) $(item).show().next().show()
                        else {
                            $(item).hide().removeClass('active-header').next().hide()
                            $(item).find('.expand-btn').removeClass('hidden-btn')
                            $(item).find('.collapse-btn').addClass('hidden-btn')
                        }
                    }
                })

                accPopeStGregoryHeader.forEach(item => {
                    if (window.innerWidth <= 800){
                        if ((item.getAttribute('value') === currValue) || (item.getAttribute('value') === 'novena-day-all')) $(item).show()
                        else {
                            $(item).hide().removeClass('active-header').next().hide()
                            $(item).find('.expand-btn').removeClass('hidden-btn')
                            $(item).find('.collapse-btn').addClass('hidden-btn')
                        }
                    } else {
                        if ((item.getAttribute('value') === currValue) || (item.getAttribute('value') === 'novena-day-all')) $(item).show().next().show()
                        else {
                            $(item).hide().removeClass('active-header').next().hide()
                            $(item).find('.expand-btn').removeClass('hidden-btn')
                            $(item).find('.collapse-btn').addClass('hidden-btn')
                        }
                    }
                })
                break;

            case "novena-day-two":
                accPrayerEachDayHeader.forEach(item => {
                    if (window.innerWidth <= 800){
                        if (item.getAttribute('value') === currValue) $(item).show()
                        else {
                            $(item).hide().removeClass('active-header').next().hide()
                            $(item).find('.expand-btn').removeClass('hidden-btn')
                            $(item).find('.collapse-btn').addClass('hidden-btn')
                        }
                    } else {
                        if (item.getAttribute('value') === currValue) $(item).show().next().show()
                        else {
                            $(item).hide().removeClass('active-header').next().hide()
                            $(item).find('.expand-btn').removeClass('hidden-btn')
                            $(item).find('.collapse-btn').addClass('hidden-btn')
                        }
                    }
                })

                accPopeStGregoryHeader.forEach(item => {
                    if (window.innerWidth <= 800){
                        if ((item.getAttribute('value') === currValue) || (item.getAttribute('value') === 'novena-day-all')) $(item).show()
                        else {
                            $(item).hide().removeClass('active-header').next().hide()
                            $(item).find('.expand-btn').removeClass('hidden-btn')
                            $(item).find('.collapse-btn').addClass('hidden-btn')
                        }
                    } else {
                        if ((item.getAttribute('value') === currValue) || (item.getAttribute('value') === 'novena-day-all')) $(item).show().next().show()
                        else {
                            $(item).hide().removeClass('active-header').next().hide()
                            $(item).find('.expand-btn').removeClass('hidden-btn')
                            $(item).find('.collapse-btn').addClass('hidden-btn')
                        }
                    }
                })
                break;
            
            case "novena-day-three":
                accPrayerEachDayHeader.forEach(item => {
                    if (window.innerWidth <= 800){
                        if (item.getAttribute('value') === currValue) $(item).show()
                        else {
                            $(item).hide().removeClass('active-header').next().hide()
                            $(item).find('.expand-btn').removeClass('hidden-btn')
                            $(item).find('.collapse-btn').addClass('hidden-btn')
                        }
                    } else {
                        if (item.getAttribute('value') === currValue) $(item).show().next().show()
                        else {
                            $(item).hide().removeClass('active-header').next().hide()
                            $(item).find('.expand-btn').removeClass('hidden-btn')
                            $(item).find('.collapse-btn').addClass('hidden-btn')
                        }
                    }
                })

                accPopeStGregoryHeader.forEach(item => {
                    if (window.innerWidth <= 800){
                        if ((item.getAttribute('value') === currValue) || (item.getAttribute('value') === 'novena-day-all')) $(item).show()
                        else {
                            $(item).hide().removeClass('active-header').next().hide()
                            $(item).find('.expand-btn').removeClass('hidden-btn')
                            $(item).find('.collapse-btn').addClass('hidden-btn')
                        }
                    } else {
                        if ((item.getAttribute('value') === currValue) || (item.getAttribute('value') === 'novena-day-all')) $(item).show().next().show()
                        else {
                            $(item).hide().removeClass('active-header').next().hide()
                            $(item).find('.expand-btn').removeClass('hidden-btn')
                            $(item).find('.collapse-btn').addClass('hidden-btn')
                        }
                    }
                })
                break;

            case "novena-day-four":
                accPrayerEachDayHeader.forEach(item => {
                    if (window.innerWidth <= 800){
                        if (item.getAttribute('value') === currValue) $(item).show()
                        else {
                            $(item).hide().removeClass('active-header').next().hide()
                            $(item).find('.expand-btn').removeClass('hidden-btn')
                            $(item).find('.collapse-btn').addClass('hidden-btn')
                        }
                    } else {
                        if (item.getAttribute('value') === currValue) $(item).show().next().show()
                        else {
                            $(item).hide().removeClass('active-header').next().hide()
                            $(item).find('.expand-btn').removeClass('hidden-btn')
                            $(item).find('.collapse-btn').addClass('hidden-btn')
                        }
                    }
                })

                accPopeStGregoryHeader.forEach(item => {
                    if (window.innerWidth <= 800){
                        if ((item.getAttribute('value') === currValue) || (item.getAttribute('value') === 'novena-day-all')) $(item).show()
                        else {
                            $(item).hide().removeClass('active-header').next().hide()
                            $(item).find('.expand-btn').removeClass('hidden-btn')
                            $(item).find('.collapse-btn').addClass('hidden-btn')
                        }
                    } else {
                        if ((item.getAttribute('value') === currValue) || (item.getAttribute('value') === 'novena-day-all')) $(item).show().next().show()
                        else {
                            $(item).hide().removeClass('active-header').next().hide()
                            $(item).find('.expand-btn').removeClass('hidden-btn')
                            $(item).find('.collapse-btn').addClass('hidden-btn')
                        }
                    }
                })
                break;
            
            case "novena-day-five":
                accPrayerEachDayHeader.forEach(item => {
                    if (window.innerWidth <= 800){
                        if (item.getAttribute('value') === currValue) $(item).show()
                        else {
                            $(item).hide().removeClass('active-header').next().hide()
                            $(item).find('.expand-btn').removeClass('hidden-btn')
                            $(item).find('.collapse-btn').addClass('hidden-btn')
                        }
                    } else {
                        if (item.getAttribute('value') === currValue) $(item).show().next().show()
                        else {
                            $(item).hide().removeClass('active-header').next().hide()
                            $(item).find('.expand-btn').removeClass('hidden-btn')
                            $(item).find('.collapse-btn').addClass('hidden-btn')
                        }
                    }
                })

                accPopeStGregoryHeader.forEach(item => {
                    if (window.innerWidth <= 800){
                        if ((item.getAttribute('value') === currValue) || (item.getAttribute('value') === 'novena-day-all')) $(item).show()
                        else {
                            $(item).hide().removeClass('active-header').next().hide()
                            $(item).find('.expand-btn').removeClass('hidden-btn')
                            $(item).find('.collapse-btn').addClass('hidden-btn')
                        }
                    } else {
                        if ((item.getAttribute('value') === currValue) || (item.getAttribute('value') === 'novena-day-all')) $(item).show().next().show()
                        else {
                            $(item).hide().removeClass('active-header').next().hide()
                            $(item).find('.expand-btn').removeClass('hidden-btn')
                            $(item).find('.collapse-btn').addClass('hidden-btn')
                        }
                    }
                })
                break;

            case "novena-day-six":
                accPrayerEachDayHeader.forEach(item => {
                    if (window.innerWidth <= 800){
                        if (item.getAttribute('value') === currValue) $(item).show()
                        else {
                            $(item).hide().removeClass('active-header').next().hide()
                            $(item).find('.expand-btn').removeClass('hidden-btn')
                            $(item).find('.collapse-btn').addClass('hidden-btn')
                        }
                    } else {
                        if (item.getAttribute('value') === currValue) $(item).show().next().show()
                        else {
                            $(item).hide().removeClass('active-header').next().hide()
                            $(item).find('.expand-btn').removeClass('hidden-btn')
                            $(item).find('.collapse-btn').addClass('hidden-btn')
                        }
                    }
                })

                accPopeStGregoryHeader.forEach(item => {
                    if (window.innerWidth <= 800){
                        if ((item.getAttribute('value') === currValue) || (item.getAttribute('value') === 'novena-day-all')) $(item).show()
                        else {
                            $(item).hide().removeClass('active-header').next().hide()
                            $(item).find('.expand-btn').removeClass('hidden-btn')
                            $(item).find('.collapse-btn').addClass('hidden-btn')
                        }
                    } else {
                        if ((item.getAttribute('value') === currValue) || (item.getAttribute('value') === 'novena-day-all')) $(item).show().next().show()
                        else {
                            $(item).hide().removeClass('active-header').next().hide()
                            $(item).find('.expand-btn').removeClass('hidden-btn')
                            $(item).find('.collapse-btn').addClass('hidden-btn')
                        }
                    }
                })
                break;

            case "novena-day-seven":
                accPrayerEachDayHeader.forEach(item => {
                    if (window.innerWidth <= 800){
                        if (item.getAttribute('value') === currValue) $(item).show()
                        else {
                            $(item).hide().removeClass('active-header').next().hide()
                            $(item).find('.expand-btn').removeClass('hidden-btn')
                            $(item).find('.collapse-btn').addClass('hidden-btn')
                        }
                    } else {
                        if (item.getAttribute('value') === currValue) $(item).show().next().show()
                        else {
                            $(item).hide().removeClass('active-header').next().hide()
                            $(item).find('.expand-btn').removeClass('hidden-btn')
                            $(item).find('.collapse-btn').addClass('hidden-btn')
                        }
                    }
                })

                accPopeStGregoryHeader.forEach(item => {
                    if (window.innerWidth <= 800){
                        if ((item.getAttribute('value') === currValue) || (item.getAttribute('value') === 'novena-day-all')) $(item).show()
                        else {
                            $(item).hide().removeClass('active-header').next().hide()
                            $(item).find('.expand-btn').removeClass('hidden-btn')
                            $(item).find('.collapse-btn').addClass('hidden-btn')
                        }
                    } else {
                        if ((item.getAttribute('value') === currValue) || (item.getAttribute('value') === 'novena-day-all')) $(item).show().next().show()
                        else {
                            $(item).hide().removeClass('active-header').next().hide()
                            $(item).find('.expand-btn').removeClass('hidden-btn')
                            $(item).find('.collapse-btn').addClass('hidden-btn')
                        }
                    }
                })
                break;

            case "novena-day-eight":
                accPrayerEachDayHeader.forEach(item => {
                    if (window.innerWidth <= 800){
                        if (item.getAttribute('value') === currValue) $(item).show()
                        else {
                            $(item).hide().removeClass('active-header').next().hide()
                            $(item).find('.expand-btn').removeClass('hidden-btn')
                            $(item).find('.collapse-btn').addClass('hidden-btn')
                        }
                    } else {
                        if (item.getAttribute('value') === currValue) $(item).show().next().show()
                        else {
                            $(item).hide().removeClass('active-header').next().hide()
                            $(item).find('.expand-btn').removeClass('hidden-btn')
                            $(item).find('.collapse-btn').addClass('hidden-btn')
                        }
                    }
                })

                accPopeStGregoryHeader.forEach(item => {
                    if (window.innerWidth <= 800){
                        if ((item.getAttribute('value') === currValue) || (item.getAttribute('value') === 'novena-day-all')) $(item).show()
                        else {
                            $(item).hide().removeClass('active-header').next().hide()
                            $(item).find('.expand-btn').removeClass('hidden-btn')
                            $(item).find('.collapse-btn').addClass('hidden-btn')
                        }
                    } else {
                        if ((item.getAttribute('value') === currValue) || (item.getAttribute('value') === 'novena-day-all')) $(item).show().next().show()
                        else {
                            $(item).hide().removeClass('active-header').next().hide()
                            $(item).find('.expand-btn').removeClass('hidden-btn')
                            $(item).find('.collapse-btn').addClass('hidden-btn')
                        }
                    }
                })
                break;

            case "novena-day-nine":
                accPrayerEachDayHeader.forEach(item => {
                    if (window.innerWidth <= 800){
                        if (item.getAttribute('value') === currValue) $(item).show()
                        else {
                            $(item).hide().removeClass('active-header').next().hide()
                            $(item).find('.expand-btn').removeClass('hidden-btn')
                            $(item).find('.collapse-btn').addClass('hidden-btn')
                        }
                    } else {
                        if (item.getAttribute('value') === currValue) $(item).show().next().show()
                        else {
                            $(item).hide().removeClass('active-header').next().hide()
                            $(item).find('.expand-btn').removeClass('hidden-btn')
                            $(item).find('.collapse-btn').addClass('hidden-btn')
                        }
                    }
                })

                accPopeStGregoryHeader.forEach(item => {
                    if (window.innerWidth <= 800){
                        if ((item.getAttribute('value') === currValue) || (item.getAttribute('value') === 'novena-day-all')) $(item).show()
                        else {
                            $(item).hide().removeClass('active-header').next().hide()
                            $(item).find('.expand-btn').removeClass('hidden-btn')
                            $(item).find('.collapse-btn').addClass('hidden-btn')
                        }
                    } else {
                        if ((item.getAttribute('value') === currValue) || (item.getAttribute('value') === 'novena-day-all')) $(item).show().next().show()
                        else {
                            $(item).hide().removeClass('active-header').next().hide()
                            $(item).find('.expand-btn').removeClass('hidden-btn')
                            $(item).find('.collapse-btn').addClass('hidden-btn')
                        }
                    }
                })
                break;
                
        }
    })
})

let accPrayerEachDayHeader = document.querySelectorAll('.prayer-each-day-header')
let accPopeStGregoryHeader = document.querySelectorAll('.pope-st-gregory-header')