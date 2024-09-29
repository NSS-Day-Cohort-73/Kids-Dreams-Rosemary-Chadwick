import { getChildren } from "./database.js"

const children = getChildren()

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li 
                    data-id="${child.id}" 
                    data-type="child" 
                    data-wish="${child.wish}"
                    data-name="${child.name}">
                    ${child.name}
                    </li>`
    }

    html += "</ol>"
    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const kidTarget = clickEvent.target
        if (kidTarget.dataset.type === "child")

            window.alert(`${kidTarget.dataset.name}'s wish is to "${kidTarget.dataset.wish}" `)
    }
)