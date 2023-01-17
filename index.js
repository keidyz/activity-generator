const SMALL_NUMBER_MAX = 5
const SMALL_NUMBER_MIN = 2
const MEDIUM_NUMBER_MAX = 10
const MEDIUM_NUMBER_MIN = 3
const LARGE_NUMBER_MAX = 30
const LARGE_NUMBER_MIN = 20
const ANIMALS = ["dog", "cat", "butterfly", "bat", "grasshopper", "chicken", "pig", "cow", "snake", "eagle",
                "lion", "puma", "hippo", "monkey", "ant", "rat", "alligator"]

const expressions = {
    smallNumber: {
        text: 'small-number',
        fn: () => Math.floor(Math.random() * ((SMALL_NUMBER_MAX - SMALL_NUMBER_MIN) + 1)) + SMALL_NUMBER_MIN,
    },
    mediumNumber: {
        text: 'medium-number',
        fn: () => Math.floor(Math.random() * ((MEDIUM_NUMBER_MAX - MEDIUM_NUMBER_MIN) + 1)) + MEDIUM_NUMBER_MIN,
    },
    largeNumber: {
        text: 'large-number',
        fn: () => Math.floor(Math.random() * ((LARGE_NUMBER_MAX - LARGE_NUMBER_MIN) + 1)) + LARGE_NUMBER_MIN,
    },
    randomCapitalLetter: {
        text: 'random-capital-letter',
        fn: () => String.fromCharCode(65+Math.floor(Math.random() * 26)),
    },
    randomAnimal: {
        text: 'random-animal',
        fn: () => {
            const animalIndex = Math.floor(Math.random() * ANIMALS.length)
            return ANIMALS[animalIndex]
        }
    }
};

// NOTE: Activities must take a maximum of 5 minutes to accomplish
const activities = [
    `Run around for ${expressions.smallNumber.text} minutes`,
    `Jog for ${expressions.smallNumber.text} minutes`,
    `Walk around for ${expressions.smallNumber.text} minutes`,
    `Name ${expressions.mediumNumber.text} yogurt flavors`,
    `Jump ${expressions.mediumNumber.text} times`,
    `Name ${expressions.mediumNumber.text} countries that start with the letter ${expressions.randomCapitalLetter.text}`,
    `Remember the weather ${expressions.smallNumber.text} days ago`,
    `Name ${expressions.smallNumber.text} people you've most recently interacted with`,
    `Roll on the floor for ${expressions.smallNumber.text} minutes`,
    `Gather all your laundry and place them in the laundry basket`,
    `Picture an animal that's ${expressions.randomAnimal.text}-${expressions.randomAnimal.text}`,
    `Say "${expressions.randomAnimal.text}" ${expressions.largeNumber.text} times`,
]

let activityIndex = -1

const generateButtonElement = document.querySelector(".container__main__generate-button")
const activityTextElement = document.querySelector(".container__activity")

const hideActivityText = () => {
    activityTextElement.classList.remove("container__activity--visible")
    activityTextElement.classList.add("container__activity--hidden")
}

const showActivityText = () => {
    activityTextElement.classList.remove("container__activity--hidden")
    activityTextElement.classList.add("container__activity--visible")
}

const generateActivity = () => {
    let newActivityIndex = Math.floor(Math.random() * activities.length)
    while(newActivityIndex === activityIndex) {
        newActivityIndex = Math.floor(Math.random() * activities.length)
    }
    activityIndex = newActivityIndex
    return Object.values(expressions).reduce((acc, {text: activityKey, fn: activityFn}) => {
        return acc.replaceAll(activityKey, activityFn)
    }, activities[activityIndex])
}

const handleGenerateButtonClick = () => {
    hideActivityText()
    window.setTimeout(() => {
        activityTextElement.textContent = generateActivity()
        showActivityText()
    }, 200)
}

generateButtonElement.addEventListener("click", handleGenerateButtonClick)
