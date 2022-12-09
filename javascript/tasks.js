document.addEventListener('DOMContentLoaded', function() {
    
    // By default submit button must be disabled
    document.querySelector('#submit').disabled = true;
    
    document.querySelector('#task').onkeyup = () => {
        if (document.querySelector('#task').value.length > 0) {
            document.querySelector('#submit').disabled = false;
        } else {
            document.querySelector('#submit').disabled = true;
        }
    }
    
    document.querySelector('form').onsubmit = function() {
        const task = document.querySelector('#task').value;
        const li = document.createElement('li')
        li.innerHTML = task;
        document.querySelector('#tasks').append(li);
        // Clear Placeholer after submit
        document.querySelector('#task').value = '';
        document.querySelector('#submit').disabled = true;
        // Pervent the form to submit
        return false;
    }
});