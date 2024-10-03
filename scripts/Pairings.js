import { getChildren, getCelebrities } from "./database.js"

const children = getChildren()
const celebrities = getCelebrities()

const findCelebrityMatch = (childObject, celebrities) => {
    let celebrity = null

    for (const celebrity of celebrities) {
        if (celebrity.id === childObject.celebrityId ) {
            return celebrity
        }
    }

    return celebrity
}

//const findCelebrityMatch = (childObject, celebrities) => {
//    return celebrities.find(celebrity => celebrity.id === childObject.celebrityId) || null;
//};
//This is an arrow function that takes one parameter, celebrity, and checks whether they match
//If no match is found, || null ensures that null is returned instead of undefined

export const Pairings = () => {
    let html = "<ul>"

    for (const child of children) {
        const matchedCelebrity = findCelebrityMatch(child, celebrities)
        const celebrityName = matchedCelebrity ? matchedCelebrity.name: "no celebrity";
        const celebritySport = matchedCelebrity ? matchedCelebrity.sport: "unknown sport";
// ternary operator to conditionally assign values to celebrityName and celebritySport- shorthand for if-else statements- truthy and falsy
//condition ? valueIfTrue : valueIfFalse

        html += `
            <li>
                ${child.name} 
                will be making memories with ${celebrityName},
                 a ${celebritySport} star,
                  by ${child.wish}
            </li>
        `
    }

    html += "</ul>"

    return html
}

