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
    let day = new Date().getDay()

    if ([0, 3].includes(day)) {
        $('.glorious-mystery').addClass('selected-mystery')
        mysteryName = 'Glorious'
    } else if ([1, 6].includes(day)) {
        $('.joyful-mystery').addClass('selected-mystery')
        mysteryName = 'Joyful'
    } else if ([2, 5].includes(day)) {
        $('.sorrowful-mystery').addClass('selected-mystery')
        mysteryName = 'Sorrowful'
    } else if (day === 4) {
        $('.luminous-mystery').addClass('selected-mystery')
        mysteryName = 'Luminous'
    }
})

let mysteryName = ''
let setMystery = document.querySelector('#set-mystery')

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
// ======================================== Reset ========================================
$(document).ready(function(){
    $('#reset-button').on('click', function() {
        rosaryHelper.forEach(item => {
            $(item).removeClass('rosary-helper-current')
        })
        $(rosaryHelpOptionButtons).find('.next-button').removeClass('hide-button')
        stepNumber = 0
        hailMaryCounter = 0
    })
})

// ======================================== Next Step ========================================
$(document).ready(function(){
    $('.next-button').on('click', function() {
        // console.log(`[NEXT] Current step no: ${stepNumber}`)
        let prayerName
        let nextPrayer
        let nextPrayerContent
        let y

        if (stepNumber === 0) {
            prayerName = 'sign-of-the-cross'
            $(rosaryHelpOptionButtons).find('.next-button').addClass('hide-button')
        } else if (stepNumber === 1) {
            prayerName = 'apostles-creed'
        } else if ([2, 10, 25, 40, 55, 70].includes(stepNumber)) {
            prayerName = 'our-father'

            if (stepNumber === 2) ourFatherPrevButton.textContent = `<< Apostle's Creed`
            else if (stepNumber === 10) ourFatherPrevButton.textContent = `<< 1st ${mysteryName} Mystery`
            else if (stepNumber === 25) ourFatherPrevButton.textContent = `<< 2nd ${mysteryName} Mystery`
            else if (stepNumber === 40) ourFatherPrevButton.textContent = `<< 3rd ${mysteryName} Mystery`
            else if (stepNumber === 55) ourFatherPrevButton.textContent = `<< 4th ${mysteryName} Mystery`
            else if (stepNumber === 70) ourFatherPrevButton.textContent = `<< 5th ${mysteryName} Mystery`
        } else if ([3, 4, 5, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80].includes(stepNumber)) {
            prayerName = 'hail-mary'

            hailMaryCounter++

            hailMaryHelperCounter.textContent = hailMaryCounter

            if (hailMaryCounter === 1) hailMaryPrevButton.textContent = '<< Our Father'
            else hailMaryPrevButton.textContent = `<< Hail Mary (x${hailMaryCounter-1})`
            
            if ([5, 20, 35, 50, 65, 80].includes(stepNumber)) {
                hailMaryNextButton.textContent = 'Glory Be >>'
                gloryHolyMary.textContent = 'Glory '
            } else {
                hailMaryNextButton.textContent = `Hail Mary (x${hailMaryCounter+1}) >>`
                gloryHolyMary.textContent = ''
            }
            
            // console.log(`Current Counter: ${hailMaryCounter}`)
        } else if ([6, 21, 36, 51, 66, 81].includes(stepNumber)) {
            prayerName = 'glory-be'
            hailMaryCounter = 0

            if (stepNumber === 6) gloryBePrevButton.textContent = '<< Hail Mary (x3)'
            else gloryBePrevButton.textContent = '<< Hail Mary (x10)'
        } else if ([7, 22, 37, 52, 67, 82].includes(stepNumber)) {
            prayerName = 'fatima-prayer'
        } else if ([8, 23, 38, 53, 68, 83].includes(stepNumber)) {
            prayerName = 'eternal-rest'

            if (stepNumber === 8) eternalRestNextButton.textContent = `1st ${mysteryName} Mystery >>`
            else if (stepNumber === 23) eternalRestNextButton.textContent = `2nd ${mysteryName} Mystery >>`
            else if (stepNumber === 38) eternalRestNextButton.textContent = `3rd ${mysteryName} Mystery >>`
            else if (stepNumber === 53) eternalRestNextButton.textContent = `4th ${mysteryName} Mystery >>`
            else if (stepNumber === 68) eternalRestNextButton.textContent = `5th ${mysteryName} Mystery >>`
            else eternalRestNextButton.textContent = 'Hail Holy Queen >>'
        } else if ([9, 24, 39, 54, 69].includes(stepNumber)) {
            if (stepNumber === 9) prayerName = `${mysteryName.toLowerCase()}-first-mystery`
            else if (stepNumber === 24) prayerName = `${mysteryName.toLowerCase()}-second-mystery`
            else if (stepNumber === 39) prayerName = `${mysteryName.toLowerCase()}-third-mystery`
            else if (stepNumber === 54) prayerName = `${mysteryName.toLowerCase()}-fourth-mystery`
            else if (stepNumber === 69) prayerName = `${mysteryName.toLowerCase()}-fifth-mystery`
        } else if (stepNumber === 84) {
            prayerName = 'hail-holy-queen'
        }

        nextPrayer = document.getElementById(prayerName)
        nextPrayerContent = document.getElementById(`${prayerName}-content`)
        
        if (stepNumber > 0) $(document.querySelector('.rosary-helper-current')).removeClass('rosary-helper-current')

        if ([9, 24, 39, 54, 69].includes(stepNumber) === true) $(nextPrayerContent).addClass('rosary-helper-current')
        else $(nextPrayerContent).find('.rosary-helper').addClass('rosary-helper-current')
        
        if (window.innerWidth <= 800) {
            if ($(nextPrayer).hasClass('active-header') === false && prayerName.includes(mysteryName.toLowerCase()) === false) {
                Accordion(nextPrayer, '.rosary-prayers-header')
            }
        }
        
        y = nextPrayer.getBoundingClientRect().top + window.pageYOffset + menuOffset

        if (window.innerWidth <= 800){
            if ($(nextPrayerContent).parent().is('li') === false && prayerName !== 'hail-mary' && !currentPrayerContentHeight) {
                currentPrayerContentHeight = $(nextPrayerContent).height()
            } else if ($(nextPrayerContent).parent().is('li') === false && prayerName !== 'hail-mary') {
                y -= currentPrayerContentHeight
                currentPrayerContentHeight = $(nextPrayerContent).height()
            } else {
                currentPrayerContentHeight = null
            }
        }

        // console.log(currentPrayerContentHeight)

        window.scrollTo({top: y, behavior: 'smooth'})

        stepNumber++
    })
})

// ======================================== Previous step ========================================
$(document).ready(function(){
    $('.prev-button').on('click', function() {
        // console.log(`[PREV] Current step no: ${stepNumber}`)
        
        let prayerName
        let nextPrayer
        let nextPrayerContent
        let y

        if (stepNumber === 2) {
            prayerName = 'sign-of-the-cross'
        } else if (stepNumber === 3) {
            prayerName = 'apostles-creed'
        } else if ([4, 12, 27, 42, 57, 72].includes(stepNumber)) {
            prayerName = 'our-father'
            hailMaryCounter = 0

            if (stepNumber === 4) ourFatherPrevButton.textContent = `<< Apostle's Creed`
            else if (stepNumber === 12) ourFatherPrevButton.textContent = `<< 1st ${mysteryName} Mystery`
            else if (stepNumber === 27) ourFatherPrevButton.textContent = `<< 2nd ${mysteryName} Mystery`
            else if (stepNumber === 42) ourFatherPrevButton.textContent = `<< 3rd ${mysteryName} Mystery`
            else if (stepNumber === 57) ourFatherPrevButton.textContent = `<< 4th ${mysteryName} Mystery`
            else if (stepNumber === 72) ourFatherPrevButton.textContent = `<< 5th ${mysteryName} Mystery`
        } else if ([5, 6, 7, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82].includes(stepNumber)) {
            prayerName = 'hail-mary'

            if (stepNumber === 7) hailMaryCounter = 4
            else if ([22, 37, 52, 67, 82].includes(stepNumber)) hailMaryCounter = 11

            hailMaryCounter--

            hailMaryHelperCounter.textContent = hailMaryCounter

            if ([7, 22, 37, 52, 67, 82].includes(stepNumber)) {
                hailMaryNextButton.textContent = 'Glory Be >>'
                gloryHolyMary.textContent = 'Glory '
            }
            else {
                hailMaryNextButton.textContent = `Hail Mary (x${hailMaryCounter+1}) >>`
                gloryHolyMary.textContent = ''
            }

            if (hailMaryCounter === 1) hailMaryPrevButton.textContent = '<< Our Father'
            else hailMaryPrevButton.textContent = `<< Hail Mary (x${hailMaryCounter-1})`

            // console.log(`Current Counter: ${hailMaryCounter}`)
        } else if ([8, 23, 38, 53, 68, 83].includes(stepNumber)) {
            prayerName = 'glory-be'

            if (stepNumber === 8) gloryBePrevButton.textContent = '<< Hail Mary (x3)'
            else gloryBePrevButton.textContent = '<< Hail Mary (x10)'
        } else if ([9, 24, 39, 54, 69, 84].includes(stepNumber)) {
            prayerName = 'fatima-prayer'
        } else if ([10, 25, 40, 55, 70, 85].includes(stepNumber)) {
            prayerName = 'eternal-rest'

            if (stepNumber === 10) eternalRestNextButton.textContent = `1st ${mysteryName} Mystery >>`
            else if (stepNumber === 25) eternalRestNextButton.textContent = `2nd ${mysteryName} Mystery >>`
            else if (stepNumber === 40) eternalRestNextButton.textContent = `3rd ${mysteryName} Mystery >>`
            else if (stepNumber === 55) eternalRestNextButton.textContent = `4th ${mysteryName} Mystery >>`
            else if (stepNumber === 70) eternalRestNextButton.textContent = `5th ${mysteryName} Mystery >>`
            else eternalRestNextButton.textContent = 'Hail Holy Queen >>'
        } else if ([11, 26, 41, 56, 71].includes(stepNumber)) {
            if (stepNumber === 11) prayerName = `${mysteryName.toLowerCase()}-first-mystery`
            else if (stepNumber === 26) prayerName = `${mysteryName.toLowerCase()}-second-mystery`
            else if (stepNumber === 41) prayerName = `${mysteryName.toLowerCase()}-third-mystery`
            else if (stepNumber === 56) prayerName = `${mysteryName.toLowerCase()}-fourth-mystery`
            else if (stepNumber === 71) prayerName = `${mysteryName.toLowerCase()}-fifth-mystery`
        }

        nextPrayer = document.getElementById(prayerName)
        nextPrayerContent = document.getElementById(`${prayerName}-content`)
        
        if (stepNumber > 0) $(document.querySelector('.rosary-helper-current')).removeClass('rosary-helper-current')

        if ([11, 26, 41, 56, 71].includes(stepNumber) === true) $(nextPrayerContent).addClass('rosary-helper-current')
        else $(nextPrayerContent).find('.rosary-helper').addClass('rosary-helper-current')

        if (window.innerWidth <= 800) {
            if ($(nextPrayer).hasClass('active-header') === false && prayerName.includes(mysteryName.toLowerCase()) === false) {
                Accordion(nextPrayer, '.rosary-prayers-header')
            }
        }

        y = nextPrayer.getBoundingClientRect().top + window.pageYOffset + menuOffset

        window.scrollTo({top: y, behavior: 'smooth'})

        stepNumber--
    })
})

const menuOffset = -50
let currentPrayerContentHeight = 0
let stepNumber = 0
let hailMaryCounter = 0
let hailMaryHelperCounter = document.querySelector('#hail-mary-helper-counter')
let gloryHolyMary = document.querySelector('#glory-holy-mary')
let hailMaryNextButton = document.querySelector('#hail-mary-next-button')
let hailMaryPrevButton = document.querySelector('#hail-mary-prev-button')
let ourFatherPrevButton = document.querySelector('#our-father-prev-button')
let gloryBePrevButton = document.querySelector('#glory-be-prev-button')
let eternalRestNextButton = document.querySelector('#eternal-rest-next-button')