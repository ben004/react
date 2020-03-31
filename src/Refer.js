import React from 'react'

export default function Refer({ list , toggleTodo}) {
    function handleTodoClick() {
        toggleTodo(list.id)
    }

    return (
        <div >
            <label>
                Entered values is: {list.name} <input type="checkbox" checked={list.complete} onChange={handleTodoClick} />
                (for select and clear)
            </label>
        </div>
    )
}
