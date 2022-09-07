const showTasks = async () => {
    let tasks = await getTasks();
    for (let i = 0; tasks.length; i++) {
        let div = document.createElement('div');
        div.setAttribute('class','taskDiv');
        let p = document.createElement('p');
        p.setAttribute('id', 'taskName');
        let task = document.createTextNode(tasks[i].task);
        let trash = document.createElement('i');
        trash.setAttribute('id', 'trash');
        trash.setAttribute('class', 'fa fa-trash');
        trash.setAttribute('aria-hidden', 'true');
        p.appendChild(task);
        div.appendChild(p);
        div.appendChild(trash);
        document.body.appendChild(div);
        document.body.appendChild(document.createElement('br'));

        trash.addEventListener('click', async () => {
            deleteTask(tasks[i].id);
            alert("Deleted");
            window.location.reload();
        });
    }
} 


showTasks();