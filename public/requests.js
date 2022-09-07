const getTasks = async () => {
    let data;
    await $.ajax({
        url: "http://localhost/todo/tasks",
        type: 'GET',
        dataType: 'json',
        async: true,
        success: function(response) {
            data = response;
        }
    });
    return data;
}


const deleteTask = async (id) => {
    await $.ajax({
        url: `http://localhost/todo/tasks/delete/${id}`,
        type: 'POST',
        dataType: 'json',
    });
}