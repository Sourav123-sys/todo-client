import { useEffect, useState } from "react";

const useTasks = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('https://blooming-reaches-53709.herokuapp.com/tasks')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [tasks])
    return [tasks, setTasks];
};

export default useTasks;