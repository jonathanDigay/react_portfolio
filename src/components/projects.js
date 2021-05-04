import React from 'react'
import TodoList from "./todolist"
import Wheather from "./wheatherapp.js"

export default function projects() {
    return (
        <div className="projects">
            <div className="title_projects">
                <h3>My Projects</h3>
            </div>
            <TodoList/>
            <Wheather/>
        </div>
    )
}
