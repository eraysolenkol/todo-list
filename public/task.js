const isMobile = () => {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    return toMatch.some((item) => {
        return navigator.userAgent.match(item);
    });
}

const task = document.getElementById('task');

task.addEventListener('input', () => {
    if (isMobile()) {
        if (task.value.length < 11) {
            task.style.fontSize = '30px';
        } else if (task.value.length < 20) {
            task.style.fontSize = '20px';
        } else if (task.value.length < 30) {
            task.style.fontSize = '16px';
        } else if (task.value.length < 36) {
            task.style.fontSize = '10px';
        } else if (task.value.length < 44) {
            task.style.fontSize = '8px';
        }
    } else {
        if (task.value.length < 50) {
            task.style.fontSize = '30px';
        } else if (task.value.length < 60) {
            task.style.fontSize = '26px';
        } else if (task.value.length < 78) {
            task.style.fontSize = '20px';
        } else if (task.value.length < 98) {
            task.style.fontSize = '16px';
        }
    }
});