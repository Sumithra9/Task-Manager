import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
  const {todos}=props
  const tab='Open'
  const filterTodosList= tab ==='All' ? todos :
  tab === 'Completed' ? todos.filter(val=>val.complete) :
  todos.filter(val=>!val.complete)

  return (
    <>
      {filterTodosList.map((todo,todoIndex)=>{
        return(
          <TodoCard 
            key={todoIndex} 
            todo={todo} />
        )
      })}
    </>
  )
}
