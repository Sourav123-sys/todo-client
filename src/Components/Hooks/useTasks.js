import { useEffect, useState } from "react";

const useTasks = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('https://rocky-falls-42167.herokuapp.com/tasks')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [tasks])
    return [tasks, setTasks];
};

export default useTasks;