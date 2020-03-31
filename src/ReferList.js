import React from 'react'
import Refer from './Refer'

export default function TodoList({ lists, toggleTodo }) {
    return (
        lists.map(list => {
            return <Refer key={list.id} toggleTodo={toggleTodo} list={list} />
        })
    )
}
