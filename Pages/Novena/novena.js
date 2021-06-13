// @@@@@@@@@@@@@@@@@@@@ Length Selection @@@@@@@@@@@@@@@@@@@@
$(document).ready(function(){
    $('.novena-length-options').on('change', function() {
        let currValue = this.value
        switch (currValue) {
            case "novena-length-extended":
                document.querySelectorAll('.novena-length-extended, .novena-length-notforty').forEach(item => item.style.display = 'block')
                break;

            case "novena-length-abridged":
                // Reset coming from 40th day option, then apply none to specified
                document.querySelectorAll('.novena-length-notforty').forEach(item => item.style.display = 'block')
                document.querySelectorAll('.novena-length-extended').forEach(item => item.style.display = 'none')
                break;

            case "novena-length-fortieth":
                document.querySelectorAll('.novena-length-notforty').forEach(item => item.style.display = 'none')
                break;
        }
    })
})

// @@@@@@@@@@@@@@@@@@@@ Day Selection @@@@@@@@@@@@@@@@@@@@
$(document).ready(function(){
    $('.novena-day-options').on('change', function() {
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

// @@@@@@@@@@@@@@@@@@@@ Glorious Mysteries @@@@@@@@@@@@@@@@@@@@
$(document).ready(function(){
    let day = new Date()
    switch (day.getDay()) {
        case 0:
            $('.glorious-mystery').addClass('selected-mystery')
            break;
        case 1:
            $('.joyful-mystery').addClass('selected-mystery')
            break;
        case 2:
            $('.sorrowful-mystery').addClass('selected-mystery')
            break;
        case 3:
            $('.glorious-mystery').addClass('selected-mystery')
            break;
        case 4:
            $('.luminous-mystery').addClass('selected-mystery')
            break;
        case 5:
            $('.sorrowful-mystery').addClass('selected-mystery')
            break;
        case 6:
            $('.joyful-mystery').addClass('selected-mystery')
            break;
    }
})

// @@@@@@@@@@@@@@@@@@@@ Name Insertion @@@@@@@@@@@@@@@@@@@@
$(document).ready(function(){
    $('#honor-of').on('change', function() {
        let currValue = this.value

        if (currValue.trim() === '' && document.querySelector('.name-change').textContent === 'N. —') return
        else if (currValue.trim() === '') {
            nameChangeSelector.forEach(item => {
                item.textContent = 'N. —'
            })

            trailingSSelector.forEach(item => {
                item.textContent = '(s)'
            })

            // change words within decade if novena-legacy is selected
            if (decadeNameChangeSelector.length > 0) {
                decadeNameChangeSelector.forEach(item => {
                    item.textContent = 'souls in purgatory'
                })

                faithfulNameChangeSelector.forEach(item => {
                    item.textContent = 'souls of the faithful departed'
                })

                deliverNameChangeSelector.forEach(item => {
                    item.textContent = `them`
                })

                themNameChangeSelector.forEach(item => {
                    item.textContent = `them`
                })

                theirSoulsNameChangeSelector.textContent = 'their souls'
            }

            return
        }

        // chop off beginning and ending extra spaces
        let tempNames = currValue.trim().split(' ')
        let names = []
        // chop off extra spaces within middle
        for (let i=0; i < tempNames.length; i++) {
            if (tempNames[i] !== '') names.push(tempNames[i])
        }

        // for complete names to input
        let namesToHonor = ''

        if (names.length === 1) namesToHonor = names
        else if (names.length === 2) namesToHonor = names.join(' and ')
        else {
            namesToHonor = names[0]
            for (let i=1; i < names.length; i++){
                if (i === names.length-1) namesToHonor += `, and ${names[i]}`
                else namesToHonor += `, ${names[i]}`
            }
        }

        nameChangeSelector.forEach(item => {
            item.textContent = namesToHonor
        })

        if (names.length === 1) {
            trailingSSelector.forEach(item => {
                item.textContent = ''
            })
        } else {
            trailingSSelector.forEach(item => {
                item.textContent = 's'
            })
        }

        
        // change words within decade and litany if novena-legacy is selected
        if (decadeNameChangeSelector.length > 0) {
            let soulNamesToHonor = ''

            if (names.length === 1) soulNamesToHonor = `soul of ${namesToHonor}`
            else soulNamesToHonor = `souls of ${namesToHonor}`

            decadeNameChangeSelector.forEach(item => {
                item.textContent = soulNamesToHonor
            })

            faithfulNameChangeSelector.forEach(item => {
                item.textContent = soulNamesToHonor
            })

            deliverNameChangeSelector.forEach(item => {
                item.textContent = `the ${soulNamesToHonor}`
            })

            if (names.length < 3) {
                themNameChangeSelector.forEach(item => {
                    item.textContent = `${namesToHonor}`
                })
            } else {
                themNameChangeSelector.forEach(item => {
                    item.textContent = `them`
                })
            }

            if (names.length < 3) theirSoulsNameChangeSelector.textContent = namesToHonor
            else theirSoulsNameChangeSelector.textContent = 'their souls'
        }
    })
})

let nameChangeSelector = document.querySelectorAll('.name-change')
let trailingSSelector = document.querySelectorAll('.trailing-s')
let decadeNameChangeSelector = document.querySelectorAll('.decade-name-change')
let faithfulNameChangeSelector = document.querySelectorAll('.faithful-name-change')
let deliverNameChangeSelector = document.querySelectorAll('.deliver-name-change')
let themNameChangeSelector = document.querySelectorAll('.them-name-change')
let theirSoulsNameChangeSelector = document.querySelector('.their-souls-name-change')

// @@@@@@@@@@@@@@@@@@@@ Rosary Helper Toggle @@@@@@@@@@@@@@@@@@@@
$(document).ready(function(){
    $(rosaryHelpCheck).on('click', function() {
        if (rosaryHelpCheck.checked === true) {
            $(rosaryHelpOptionButtons).addClass('rosary-help-option-buttons-on')
        } else {
            $(rosaryHelpOptionButtons).removeClass('rosary-help-option-buttons-on')
        }
    })
})

let rosaryHelpCheck = document.querySelector('#rosary-help-check')
let rosaryHelpOptionButtons = document.querySelector('.rosary-help-option-buttons')
let rosaryHelper = document.querySelectorAll('.rosary-helper')

// @@@@@@@@@@@@@@@@@@@@ Rosary Helper Walkthrough @@@@@@@@@@@@@@@@@@@@
// Reset
$(document).ready(function(){
    $('#reset-button').on('click', function() {
        rosaryHelper.forEach(item => {
            $(item).removeClass('rosary-helper-current')
        })
        $(rosaryHelpOptionButtons).find('.next-button').removeClass('hide-button')
        stepNumber = 0
    })
})

// Next Step
$(document).ready(function(){
    $('.next-button').on('click', function() {
        const menuOffset = -50;
        let prayerName
        let nextPrayer
        let nextPrayerContent
        let y

        if (stepNumber === 0) {
            prayerName = 'sign-of-the-cross'
            $(rosaryHelpOptionButtons).find('.next-button').addClass('hide-button')
        } else if (stepNumber === 1) {
            prayerName = 'apostles-creed'
        } else if ([2].includes(stepNumber)) {
            prayerName = 'our-father'
        } else if ([3, 4, 5].includes(stepNumber)) {
            prayerName = 'hail-mary'
        } else if ([6].includes(stepNumber)) {
            prayerName = 'glory-be'
        } else if ([7].includes(stepNumber)) {
            prayerName = 'fatima-prayer'
        } else if ([8].includes(stepNumber)) {
            prayerName = 'eternal-rest'
        }

        nextPrayer = document.getElementById(prayerName)
        nextPrayerContent = document.getElementById(`${prayerName}-content`)
        
        if (stepNumber > 0) $(document.querySelector('.rosary-helper-current')).removeClass('rosary-helper-current')
        $(nextPrayerContent).find('.rosary-helper').addClass('rosary-helper-current')
        
        y = nextPrayer.getBoundingClientRect().top + window.pageYOffset + menuOffset
        
        if (window.innerWidth <= 800) Accordion(nextPrayer, '.rosary-prayers-header')

        window.scrollTo({top: y, behavior: 'smooth'})

        stepNumber++
    })
})

let stepNumber = 0