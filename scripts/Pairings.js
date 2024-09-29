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

export const Pairings = () => {
    let html = "<ul>"

    for (const child of children) {
        const matchedCelebrity = findCelebrityMatch(child, celebrities)
        const celebrityName = matchedCelebrity ? matchedCelebrity.name: "no celebrity";
        const celebritySport = matchedCelebrity ? matchedCelebrity.sport: "unknown sport";

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

