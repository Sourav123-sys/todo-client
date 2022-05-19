import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import TodoData from '../TodoData/TodoData';

const ToDoApp = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        const name = data.name;
        const details = data.details;
        const tasks = { name, details }
        fetch('https://blooming-reaches-53709.herokuapp.com/tasks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tasks)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                toast.success('Item added successfully')
            })
        reset()
    }
    return (
        <>
            <div className='flex mt-10 justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl text-pink-700 font-bold">Todo App</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Task Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Task Name"
                                    className="input input-bordered input-secondary w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Task Name is Required'
                                        },
                                        minLength: {
                                            value: 3,
                                            message: 'Must be 3 characters or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Task Description</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Task Description"
                                    className="input input-bordered input-secondary w-full max-w-xs"
                                    {...register("details", {
                                        required: {
                                            value: true,
                                            message: 'Description is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.details?.type === 'required' && <span className="label-text-alt text-red-500">{errors.details.message}</span>}
                                    {errors.details?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.details.message}</span>}
                                </label>
                            </div>


                            <input className='btn w-full max-w-xs btn-secondary' type="submit" value="ADD" />
                        </form>
                    </div>
                </div>
            </div >
            <TodoData></TodoData>
        </>
    );
};

export default ToDoApp;