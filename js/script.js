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

const timeActivities = [timeWork, timePlay, timeStudy, timeExercise, timeSocial, timeSelfcare]

daily.addEventListener('click', switchIt)
weekly.addEventListener('click', switchIt)
monthly.addEventListener('click', switchIt)


let dataJson = [
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
]

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
        switchDaily()
    } else if (event.target.id === 'weekly') {
        switchWeekly()
    } else {
        switchMonthly()
    }
}

function switchDaily() {
  for (let i = 0; i < timeActivities.length; i++) {
    timeActivities[i].children[0].children[0].textContent = dataJson[i].timeframes.daily.current
    timeActivities[i].children[1].children[0].textContent = dataJson[i].timeframes.daily.previous
  }
} 

function switchWeekly() {
  for (let i = 0; i < timeActivities.length; i++) {
    timeActivities[i].children[0].children[0].textContent = dataJson[i].timeframes.weekly.current
    timeActivities[i].children[1].children[0].textContent = dataJson[i].timeframes.weekly.previous
  }
}

function switchMonthly() {
  for (let i = 0; i < timeActivities.length; i++) {
    timeActivities[i].children[0].children[0].textContent = dataJson[i].timeframes.monthly.current
    timeActivities[i].children[1].children[0].textContent = dataJson[i].timeframes.monthly.previous
  }
}