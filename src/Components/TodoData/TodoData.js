import React from 'react';
import { useState, useEffect } from 'react';
import useTasks from '../Hooks/useTasks';
import TodoSingleCard from '../TodoSingleCard/TodoSingleCard';

const TodoData = () => {
    const [tasks, setTasks] = useTasks();
    return (
        <div className='w-full text-center'>
            {
                tasks.map(task => <TodoSingleCard key={task._id} task={task}></TodoSingleCard>)
            }
        </div>
    );
};

export default TodoData;