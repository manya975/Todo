document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const taskInput = document.getElementById('task');
    const prioritySelect = document.getElementById('priority');
    const tbody = document.querySelector('tbody');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const taskName = taskInput.value.trim();
      const priority = prioritySelect.value;
  
      if (taskName === '' || priority === '') {
        alert('Please enter a task name and select a priority.');
        return;
      }
  
      const tr = document.createElement('tr');
      const taskTd = document.createElement('td');
      const priorityTd = document.createElement('td');
      const favouriteTd = document.createElement('td');
  
      taskTd.textContent = taskName;
      priorityTd.textContent = priority;
      favouriteTd.innerHTML = '<button>Favourite</button>';
  
      if (priority === 'High') {
        priorityTd.style.backgroundColor = 'red';
      } else {
        priorityTd.style.backgroundColor = 'green';
      }
  
      tr.appendChild(taskTd);
      tr.appendChild(priorityTd);
      tr.appendChild(favouriteTd);
  
      tbody.appendChild(tr);
  
      taskInput.value = '';
      prioritySelect.value = '';
    });
  });
  