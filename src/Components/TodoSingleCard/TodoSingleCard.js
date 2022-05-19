import React from 'react';
import { toast } from 'react-toastify';
import useTasks from '../Hooks/useTasks';

const TodoSingleCard = ({ task }) => {
    const { name, details, _id, selected } = task;
    const [tasks, setTasks] = useTasks();
    const handleDelete = id => {
        const confirm = window.confirm('Are you sure?');
        if (confirm) {
            fetch(`https://blooming-reaches-53709.herokuapp.com/tasks/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const matched = tasks.filter(e => e._id !== id);
                        setTasks(matched)
                    } else {
                        alert('nothing')
                    }
                })
        }

    }

    const handleComplete = id => {
        const newSelected = !selected;
        const newSelectedObj = { newSelected };
        fetch(`https://blooming-reaches-53709.herokuapp.com/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newSelectedObj)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Item Restok successfully')
            })
    }

    return (
        <div className='shadow-md w-1/2 mx-auto py-10 my-10'>
            <div className=''>
                <h1 className={selected ? "line-through text-2xl" : "text-2xl"}>{name}</h1>
                <p className='text-md mb-5'>{details}</p>
            </div>
            <button onClick={() => handleComplete(_id)} className='btn btn-info mr-10 text-white'>COMPLETE</button>
            <button onClick={() => handleDelete(_id)} className='btn btn-secondary ml-10'>DELETE</button>
        </div>
    );
};

export default TodoSingleCard;