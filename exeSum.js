/* First animation */
gsap.to('.sum', {
    yPercent: 20,
    xPercent: 0,
    opacity: 1,
    duration: 1
})

const reload = () => location.reload()/* reload page */

const firstItem = document.querySelector('#first').value = Math.floor(Math.random() * 100) /* First input */
const secondItem = document.querySelector('#second').value = Math.floor(Math.random() * 100)/* Second input */
const resultInput = document.querySelector('#equals') /* Equals input */

setFocus = () => resultInput.focus() /* Always focus on equals input */

const button = document.querySelector('#result')
const resultNum = firstItem + secondItem

console.log(resultNum)/* Equals on example */

/* Check input, if he is '' button disabled */
checkInput = () => {
    resultInput.value.length != 0 ?
        button.removeAttribute('disabled') :
        button.setAttribute('disabled', 'disabled')
}

let count = localStorage.getItem('numResult')/* Counter true examples */


/* When you write true equals input will be green color, page reload,
    second animation, local storage counter +1
     you see new example, if you write wrong answer equals input will be red color */
inputValue = () => {
    if (resultInput.value == resultNum) {
        resultInput.style.backgroundColor = 'green'
        let newCount = JSON.parse(count)
        newCount++
        localStorage.setItem('numResult', JSON.stringify(newCount))
        gsap.to('.sum', {xPercent: 20, opacity: 0, duration: 1})
        setTimeout(() => reload(), 1500)
    } else {
        resultInput.style.backgroundColor = 'red'
        button.setAttribute('disabled', 'disabled')
        setTimeout(() => {
            return gsap.to('#equals', {duration: 0.5, backgroundColor: 'white'}), resultInput.value = ''
        }, 1000)
    }
}

/* When you give 10 true answer you sees alert
* and page reload */
(checkCount = () => {
    if (count == 10) {
        alert(`Поздравляю, вы решили ${count} правильных примеров, так держать`)
        reload()
    }
    localStorage.clear()
})()
// console.log(localStorage)
// console.log(count)


/* If you like keyboard you can used Enter */
resultInput.addEventListener("keyup", function (target) {
    if (target.code === 'Enter' && resultInput.value.length > 0) {
        button.onclick(inputValue())
    }
})





