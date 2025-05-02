$(function () {
  $("#Icon1").draggable({
    grid: [80, 80] });

});
$(function () {
  $("#Chat").draggable({
    grid: [80, 80] });

});
$(function () {
  $("#Drive").draggable({
    grid: [80, 80] });

});
$(function () {
  $("#Taskmanager").draggable({
    grid: [80, 80] });

});
$(function () {
  $("#EmployeeList").draggable({
    grid: [80, 80] });

});
$(function () {
  $("#EmployeeTaskManagement").draggable({
    grid: [80, 80] });

});
$(function () {
  $("#Icon2").draggable({
    grid: [80, 80] });

});
$(function () {
  $("#Icon3").draggable({
    grid: [80, 80] });

});

$("#Icon1").dblclick(function () {
  $('#ComWin').removeClass('hidden');
});
$("#Chat").dblclick(function () {
  $('#MessagingWin').removeClass('hidden');
});
$("#Drive").dblclick(function () {
  $('#drivewin').removeClass('hidden');
});
$("#Taskmanager").dblclick(function () {
  $('#TaskManagerWin').removeClass('hidden');
});
$("#EmployeeList").dblclick(function () {
  $('#EmployeeListWin').removeClass('hidden');
});
$("#EmployeeTaskManagement").dblclick(function () {
  $('#EmployeeTasksWin').removeClass('hidden');
});


$("#ClsBtn").click(function () {
  $('#ComWin').addClass('hidden');
});
$("#ClsBtndrive").click(function () {
  $('#drivewin').addClass('hidden');
});
$("#ClsBtnMessaging").click(function () {
  $('#MessagingWin').addClass('hidden');
});
$("#CloseTaskManager").click(function () {
  $('#TaskManagerWin').addClass('hidden');
});
$("#ClsBtnEmployeeList").click(function () {
  $('#EmployeeListWin').addClass('hidden');
});
$("#ClsBtnTasks").click(function () {
  $('#EmployeeTasksWin').addClass('hidden');
});


$("#Icon2").dblclick(function () {
  $('#NoteWin').removeClass('hidden');
});
$("#Icon3").dblclick(function () {
  $('#NoteWin').removeClass('hidden');
});

$("#ClsBtn1").click(function () {
  $('#NoteWin').addClass('hidden');
});

$(function () {
  $("#ComWin").draggable({
    handle: "#ctrlbar" });

});

$(function () {
  $("#NoteWin").draggable({
    handle: "#ctrlbar2" });

});
$(function () {
  $("#MessagingWin").draggable({
    handle: "#ctrlbarMessaging" });

});
$(function () {
  $("#drivewin").draggable({
    handle: "#ctrlbar2" });

});
$(function () {
  $("#TaskManagerWin").draggable({
    handle: "#ctrlbarTaskManager" });

});
$(function () {
  $("#EmployeeListWin").draggable({
    handle: "#ctrlbar3" });

});
$(function () {
  $("#EmployeeTasksWin").draggable({
    handle: "#ctrlbarTasks" });

});

Materialize.toast('Double click on icons to open', 4000);

$(document).ready(function () {
  $('input#input_text, textarea#textarea1').characterCounter();
});
$(document).ready(function () {
  $('input#input_text, textarea#textarea2').characterCounter();
});

$(document).ready(function () {
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal();
});

function FNA() {
  Materialize.toast('Function not available', 4000);
}

if ($(window).width() <= 1023) {
  $('#ErrorWS').removeClass('hidden');
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//Messaging
let currentChat = 'Person 1'; // Default chat person
let emojiPickerVisible = false;

function selectChat(person) {
  currentChat = person;
  const chatMessages = document.getElementById('chatMessages');
  chatMessages.innerHTML = ''; // Clear previous messages

  // Load messages for the selected person (this is a placeholder)
  const messages = getMessagesForPerson(person); // Implement this function to fetch messages
  messages.forEach(msg => {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = msg;
    chatMessages.appendChild(messageDiv);
  });
}

function getMessagesForPerson(person) {
  const messages = {
    'Person 1': ['Hello!', 'How are you?'],
    'Person 2': ['Hey!', 'What’s up?'],
    'Person 3': ['Hi!', 'Long time no see!'],
  };
  return messages[person] || [];
}

function sendMessage(event) {
  event.preventDefault();
  const input = document.getElementById('chatInput');
  const message = input.value;

  // Append the new message to the chat messages div
  appendMessage(`${currentChat}: ${message}`);

  // Clear the input
  input.value = '';

  // Scroll to the bottom of the chat
  const chatMessages = document.getElementById('chatMessages');
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function appendMessage(message) {
  const chatMessages = document.getElementById('chatMessages');
  const messageDiv = document.createElement('div');
  messageDiv.textContent = message;
  chatMessages.appendChild(messageDiv);
}

function sendFile(event) {
  const file = event.target.files[0];
  if (file) {
    const chatMessage = `${currentChat}: [File: ${file.name}]`;
    appendMessage(chatMessage);
    event.target.value = ''; // Clear the file input
  }
}

// Initialize chat with the default person
selectChat(currentChat);


//TaskManager

$(document).ready(function(){
  let tasks = [];

  // Function to render tasks
  function renderTasks() {
      $('#taskList').empty();
      tasks.forEach((task, index) => {
          $('#taskList').append(`
              <div class="task-item card-panel z-depth-1" >
                  <div class="task-status">
                      <span>${task.name}</span>
                      <div>
                          <select class="browser-default task-status-select" data-index="${index}">
                              <option value="in-progress" ${task.status === 'in-progress' ? 'selected' : ''}>In Progress</option>
                              <option value="paused" ${task.status === 'paused' ? 'selected' : ''}>Paused</option>
                              <option value="completed" ${task.status === 'completed' ? 'selected' : ''}>Completed</option>
                          </select>
                          <a href="#" class="remove-task btn-floating btn-small red" data-index="${index}">
                              <i class="material-icons">delete</i>
                          </a>
                      </div>
                  </div>
              </div>
          `);
      });
  }

  // Add Task
  $('#addTaskButton').click(function(){
      const taskName = $('#taskInput').val().trim();
      if(taskName !== "") {
          tasks.push({name: taskName, status: 'in-progress'});
          $('#taskInput').val('');
          renderTasks();
      }
  });

  // Remove Task
  $(document).on('click', '.remove-task', function(){
      const index = $(this).data('index');
      tasks.splice(index, 1);
      renderTasks();
  });

  // Change Task Status
  $(document).on('change', '.task-status-select', function(){
      const index = $(this).data('index');
      tasks[index].status = $(this).val();
  });

  // Close Task Manager
  $('#CloseTaskManager').click(function(){
      $('#TaskManagerWin').addClass('hidden');
  });

  // Initial Render
  renderTasks();
});

//Table Employee List
// Object to store employee tasks
let tasks = {
emp1: [],
emp2: [],
emp3: []
};

let editMode = false; // Flag to track if we're editing
let editEmployeeId = ''; // Store which employee is being edited
let editTaskIndex = -1; // Store which task index is being edited

// Function to display tasks for the selected employee
function showTasks(employeeId) {
document.getElementById('selectedEmployee').innerText = employeeId;
const taskList = document.getElementById('taskList1');
taskList.innerHTML = ''; // Clear existing task list

// Check if the employee has tasks and render them
if (tasks[employeeId] && tasks[employeeId].length > 0) {
  tasks[employeeId].forEach((task, index) => {
    taskList.innerHTML += `
      <li class="collection-item">
        <span>${task.name}</span>
        <div class="secondary-content">
          <a href="#" onclick="editTask('${employeeId}', ${index})" class="btn-floating btn-small yellow darken-1">
            <i class="material-icons">edit</i>
          </a>
          <a href="#" onclick="deleteTask('${employeeId}', ${index})" class="btn-floating btn-small red">
            <i class="material-icons">delete</i>
          </a>
        </div>
      </li>`;
  });
} else {
  taskList.innerHTML = '<li class="collection-item">No tasks available</li>';
}
}

// Function to open task form modal
function openTaskForm() {
const modal = document.getElementById('taskFormModal');
modal.classList.add('modal-open');
}

// Function to add a new task
function addTask() {
const employeeId = document.getElementById('selectedEmployee').innerText;
const taskName = document.getElementById('taskName').value;
const taskDetails = document.getElementById('taskDetails').value;

// Validate task name and details
if (taskName.trim() === '' || taskDetails.trim() === '') {
  alert('Please enter both task name and details.');
  return;
}

// Check if we are in edit mode
if (editMode) {
  // Update the existing task instead of adding a new one
  tasks[editEmployeeId][editTaskIndex] = { name: taskName, details: taskDetails };
  editMode = false; // Reset the edit mode flag
  editEmployeeId = ''; // Clear stored employee ID
  editTaskIndex = -1; // Clear stored task index
} else {
  // Add a new task to the selected employee's task list
  tasks[employeeId].push({ name: taskName, details: taskDetails });
}

// Refresh the task list display for the employee
showTasks(employeeId);

// Clear the form and close the modal
closeTaskForm();
}


// Function to close task form modal
function closeTaskForm() {
const modal = document.getElementById('taskFormModal');
modal.classList.remove('modal-open');
document.getElementById('taskForm').reset();

// Reset edit mode when closing the form
editMode = false;
editEmployeeId = '';
editTaskIndex = -1;
}

// Function to edit a task
function editTask(employeeId, taskIndex) {
const task = tasks[employeeId][taskIndex];

// Set the form fields with the existing task data
document.getElementById('taskName').value = task.name;
document.getElementById('taskDetails').value = task.details;

// Set the edit mode flag and store the employee ID and task index
editMode = true;
editEmployeeId = employeeId;
editTaskIndex = taskIndex;

// Open the task form modal for editing
openTaskForm();
}

// Function to delete a task
function deleteTask(employeeId, taskIndex) {
tasks[employeeId].splice(taskIndex, 1);
showTasks(employeeId);
}

// Employee List
document.addEventListener('DOMContentLoaded', function() {
const employeeTableBody = document.getElementById('employeeTableBody');
const addEmployeeForm = document.getElementById('addEmployeeForm');
const editEmployeeForm = document.getElementById('editEmployeeForm');
const addEmployeeModal = document.getElementById('addEmployeeModal');
const editEmployeeModal = document.getElementById('editEmployeeModal');

let employees = [];
let editIndex = -1; // To track the index of the employee being edited

function renderEmployees() {
    employeeTableBody.innerHTML = '';
    employees.forEach((employee, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.email}</td>
            <td>${employee.phone}</td>
            <td>${employee.role}</td>
            <td>${employee.date}</td>
            <td>
                <button class="edit-btn" data-index="${index}">Edit</button>
                <button class="delete-btn" data-index="${index}">Delete</button>
            </td>
        `;
        employeeTableBody.appendChild(row);
    });

    // Add event listeners for edit and delete buttons
    document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', handleEdit);
    });
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', handleDelete);
    });
}

function handleAddEmployee(event) {
    event.preventDefault();
    const newEmployee = {
        name: addEmployeeForm.employeeName.value,
        email: addEmployeeForm.employeeEmail.value,
        phone: addEmployeeForm.employeePhone.value,
        role: addEmployeeForm.employeeRole.value,
        date: addEmployeeForm.employeeDate.value
    };

    if (editIndex > -1) {
        // Update existing employee
        employees[editIndex] = newEmployee; 
        editIndex = -1; // Reset edit index after update
    } else {
        employees.push(newEmployee); // Add new employee
    }

    addEmployeeForm.reset();
    renderEmployees();
    addEmployeeModal.style.display = 'none'; // Close add modal
    editEmployeeModal.style.display = 'none'; // Close edit modal
}

function handleEdit(event) {
    editIndex = event.target.getAttribute('data-index');
    const employee = employees[editIndex];

    // Set the input fields to the employee's current values
    document.getElementById('editEmployeeName').value = employee.name;
    document.getElementById('editEmployeeEmail').value = employee.email;
    document.getElementById('editEmployeePhone').value = employee.phone;
    document.getElementById('editEmployeeRole').value = employee.role;
    document.getElementById('editEmployeeDate').value = employee.date;

    editEmployeeModal.style.display = 'block'; // Open edit modal
    addEmployeeModal.style.display = 'none'; // Ensure add modal is closed
}

function handleDelete(event) {
    const index = event.target.getAttribute('data-index');
    employees.splice(index, 1); // Remove employee
    renderEmployees();
}

// Form submit handlers
addEmployeeForm.addEventListener('submit', handleAddEmployee);
editEmployeeForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    handleAddEmployee(event); // Reuse the same function to handle updates
});

// Open Add Employee Modal
document.getElementById('addEmployeeBtn').addEventListener('click', function() {
    addEmployeeModal.style.display = 'block'; // Open add modal
    addEmployeeForm.reset();
    editIndex = -1; // Reset edit index
});

// Close modals
document.getElementById('ClsBtnEmployeeList').addEventListener('click', function() {
    addEmployeeModal.style.display = 'none';
    editEmployeeModal.style.display = 'none';
});
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



var curDate = (new Date()).getDate();
var curMonth = (new Date()).getMonth();
var curYear = (new Date()).getFullYear();
var startDay = (new Date(curYear, curMonth, 1)).getDay();

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var noofdays = ["31", "29", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];
var prevMonth = noofdays[curMonth - 1];
if (curMonth == 11) {
  prevMonth = noofdays[0]
} else if (curMonth == 0) {
  prevMonth = noofdays[11]
};
var totalDays = noofdays[curMonth];
var counter = 0;
var precounter = prevMonth - (startDay - 1);
var rightbox = 6;
var flag = true;

jQuery('.curr-month b').text(months[curMonth]);

for (var i = 0; i < 42; i++) {
  if (i >= startDay) {
    counter++;
    if (counter > totalDays) {
      counter = 1;
      flag = false;
    }
    if (flag == true) {
      jQuery('.all-date ul').append('<li class="monthdate">' + counter + '</li>');
    } else {
      jQuery('.all-date ul').append('<li style="opacity:.8">' + counter + '</li>');
    }
  } else {
    jQuery('.all-date ul').append('<li style="opacity:.8">' + precounter + '</li>');
    precounter++;
  }

  if (i == rightbox) {
    jQuery(jQuery('.all-date ul li')[rightbox]).addClass("b-right");
    rightbox = rightbox + 7;
  }

  if (i > 34) {
    jQuery(jQuery('.all-date ul li')[i]).addClass("b-bottom");
  }

  if ((jQuery(jQuery('.all-date ul li')[i]).text() == curDate) && (jQuery(jQuery('.all-date ul li')[i]).css('opacity') == 1)) {
    jQuery(jQuery('.all-date ul li')[i]).css({
      "background-color": "#02548b",
      "color": "#fff"
    });
  }
}
