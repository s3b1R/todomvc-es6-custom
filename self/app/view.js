
export class View {
    constructor(rootSelector) {
        const newField = document.querySelector(rootSelector + ' .new-todo')
        this.addEventListeners(newField);
    }

    addEventListeners(newField) {
        newField.addEventListener('keypress', (ev) => {
            if (ev.key === 'Enter') {
                const text = ev.target.value

                const newTodoEl = document.createElement('li')
                const label = document.createElement('label')
                label.innerText = text
                newTodoEl.appendChild(label) //<li> <label>text...</label> </li>
                document.querySelector('.todo-list').appendChild(newTodoEl)
            }
        })
    }
}





