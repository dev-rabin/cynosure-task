$(document).ready(function () {
  $("#toggleBtn").click(function () {
    $(".sidebar").toggle();
  });
});

$(document).ready(function () {
  $("#dropdownBtn").click(function (e) {
    e.stopPropagation();
    $("#dropdownMenu").toggleClass("d-none");
  });

  $(document).click(function () {
    $("#dropdownMenu").addClass("d-none");
  });

  $(".dropdown-item").click(function () {
    $("#dropdownBtn").text($(this).text());
    $("#dropdownMenu").addClass("d-none");
  });
});

const todos = [
  {
    title: "Design Task Management",
    subtext: "Task Management Module",
    type: "Daily",
    color: "primary",
  },
  {
    title: "Design Wireframe",
    subtext: "UI/UX Planning",
    type: "Weekly",
    color: "success",
  },
  {
    title: "Scope Document",
    subtext: "Requirement Analysis",
    type: "Monthly",
    color: "warning",
  },
  {
    title: "Client Review",
    subtext: "Project Feedback",
    type: "Urgent",
    color: "danger",
  },
];

$(document).ready(function () {
  todos.forEach((todo) => {
    const item = `
      <div class="d-flex justify-content-between align-items-center p-2 rounded-3 border">
        <div class="d-flex gap-2">
          <i class="ri-star-fill text-warning"></i>
          <div>
            <div class="todo-title">${todo.title} ...</div>
            <div class="todo-subtext">${todo.subtext}</div>
          </div>
        </div>
        <span class="badge bg-${todo.color}-subtle text-${todo.color}">
          ${todo.type}
        </span>
      </div>
    `;
    $("#todoList").append(item);
  });
});

const meetings = [
  {
    title: "Team Stand-up Meeting",
    time: "09:15 AM - 09:45 AM",
    duration: "70 min",
  },
  {
    title: "Discussion with Client",
    time: "10:30 AM - 11:15 AM",
    duration: "70 min",
  },
  {
    title: "Interview Front end Developer",
    time: "11:30 AM - 01:00 PM",
    duration: "70 min",
  },
];

$(document).ready(function () {
  meetings.forEach((meeting) => {
    const item = `
      <div class="d-flex justify-content-between align-items-center p-3 rounded-4 border">
        <div>
          <div class="meeting-title">${meeting.title}</div>
          <div class="text-muted small d-flex align-items-center gap-1 mt-1">
            <i class="ri-time-line"></i>
            ${meeting.time}
          </div>
        </div>
        <div class="badge rounded-pill bg-light text-dark border p-2">
          <i class="ri-time-line me-1"></i>
          ${meeting.duration}
        </div>
      </div>
    `;

    $("#meetingList").append(item);
  });
});
