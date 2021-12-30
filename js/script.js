const daily = document.getElementById('daily')
const weekly = document.getElementById('weekly')
const monthly = document.getElementById('monthly')
const timeContainer = document.querySelector('.time-container')

const timeWork = document.getElementById('timeWork')
const timePlay = document.getElementById('timePlay')
const timeStudy = document.getElementById('timeStudy')
const timeExercise = document.getElementById('timeExercise')
const timeSocial = document.getElementById('timeSocial')
const timeSelfcare = document.getElementById('timeSelfcare')


daily.addEventListener('click', switchIt)
weekly.addEventListener('click', switchIt)
monthly.addEventListener('click', switchIt)


let dataJson = `[
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]`

let data = JSON.parse(dataJson)

console.log(data)

function switchIt() {
    addActiveTag(event)
    checkTimeName()
}

function addActiveTag(event) {
    timeContainer.children[0].classList.remove('activeTime')
    timeContainer.children[1].classList.remove('activeTime')
    timeContainer.children[2].classList.remove('activeTime')

    event.target.classList.add('activeTime')
}

function checkTimeName() {
    if (event.target.id === 'daily') {
        console.log('daily')
        switchDaily()

    } else if (event.target.id === 'weekly') {
        console.log('weekly')
        switchWeekly()
    } else {
        console.log('monthly')
        switchMonthly()
    }
}

function switchDaily() {
    timeWork.children[0].children[0].textContent = data[0].timeframes.daily.current
    timeWork.children[1].children[0].textContent = data[0].timeframes.daily.previous

    timePlay.children[0].children[0].textContent = data[1].timeframes.daily.current
    timePlay.children[1].children[0].textContent = data[1].timeframes.daily.previous

    timeStudy.children[0].children[0].textContent = data[2].timeframes.daily.current
    timeStudy.children[1].children[0].textContent = data[2].timeframes.daily.previous

    timeExercise.children[0].children[0].textContent = data[3].timeframes.daily.current
    timeExercise.children[1].children[0].textContent = data[3].timeframes.daily.previous

    timeSocial.children[0].children[0].textContent = data[4].timeframes.daily.current
    timeSocial.children[1].children[0].textContent = data[4].timeframes.daily.previous

    timeSelfcare.children[0].children[0].textContent = data[5].timeframes.daily.current
    timeSelfcare.children[1].children[0].textContent = data[5].timeframes.daily.previous
}

function switchWeekly() {
    timeWork.children[0].children[0].textContent = data[0].timeframes.weekly.current
    timeWork.children[1].children[0].textContent = data[0].timeframes.weekly.previous

    timePlay.children[0].children[0].textContent = data[1].timeframes.weekly.current
    timePlay.children[1].children[0].textContent = data[1].timeframes.weekly.previous

    timeStudy.children[0].children[0].textContent = data[2].timeframes.weekly.current
    timeStudy.children[1].children[0].textContent = data[2].timeframes.weekly.previous

    timeExercise.children[0].children[0].textContent = data[3].timeframes.weekly.current
    timeExercise.children[1].children[0].textContent = data[3].timeframes.weekly.previous

    timeSocial.children[0].children[0].textContent = data[4].timeframes.weekly.current
    timeSocial.children[1].children[0].textContent = data[4].timeframes.weekly.previous

    timeSelfcare.children[0].children[0].textContent = data[5].timeframes.weekly.current
    timeSelfcare.children[1].children[0].textContent = data[5].timeframes.weekly.previous
}

function switchMonthly() {
    timeWork.children[0].children[0].textContent = data[0].timeframes.monthly.current
    timeWork.children[1].children[0].textContent = data[0].timeframes.monthly.previous

    timePlay.children[0].children[0].textContent = data[1].timeframes.monthly.current
    timePlay.children[1].children[0].textContent = data[1].timeframes.monthly.previous

    timeStudy.children[0].children[0].textContent = data[2].timeframes.monthly.current
    timeStudy.children[1].children[0].textContent = data[2].timeframes.monthly.previous

    timeExercise.children[0].children[0].textContent = data[3].timeframes.monthly.current
    timeExercise.children[1].children[0].textContent = data[3].timeframes.monthly.previous

    timeSocial.children[0].children[0].textContent = data[4].timeframes.monthly.current
    timeSocial.children[1].children[0].textContent = data[4].timeframes.monthly.previous

    timeSelfcare.children[0].children[0].textContent = data[5].timeframes.monthly.current
    timeSelfcare.children[1].children[0].textContent = data[5].timeframes.monthly.previous
}