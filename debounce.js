function createDebounce(fn, timeInSeconds) {
    let getTimerValue = () => (new Date())/1 + timeInSeconds*1000
    let timer = getTimerValue()
    return function () {
        timer = getTimerValue()
        setTimeout(() => {
            if ((new Date())/1 >= timer) 
                fn()
        }, timeInSeconds*1000)
    }
}