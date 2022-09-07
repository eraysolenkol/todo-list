const validateForm = () => {
    var task = document.forms["form"]["task"].value;
    if (!task) {
        alert("Task can not be null");
        return false;
    }
    return true;
}