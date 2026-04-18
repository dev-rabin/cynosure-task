const events = [
  {
    date: "03",
    month: "July",
    title: "Project Kickoff",
    time: "12:00 PM",
    color: "primary",
  },
  {
    date: "05",
    month: "July",
    title: "Client Meeting",
    time: "02:00 PM",
    color: "warning",
  },
  {
    date: "08",
    month: "July",
    title: "Design Review",
    time: "11:00 AM",
    color: "success",
  },
  {
    date: "10",
    month: "July",
    title: "Sprint Planning",
    time: "04:00 PM",
    color: "danger",
  },
];

const todos = [
  {
    title: "Design Task Management",
    subtext: "Task Module",
    type: "Daily",
    color: "primary",
  },
  {
    title: "Wireframe Design",
    subtext: "UI Planning",
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
    title: "Client Feedback",
    subtext: "Review Comments",
    type: "Urgent",
    color: "danger",
  },
  {
    title: "Wireframe Design",
    subtext: "UI Planning",
    type: "Weekly",
    color: "success",
  },
];

const reviewTasks = [
  {
    title: "Design Task",
    subtext: "Submitted Yesterday",
    type: "Submitted",
    color: "success",
  },
  {
    title: "Wireframe",
    subtext: "In Review",
    type: "Review",
    color: "warning",
  },
  {
    title: "Scope Document",
    subtext: "Pending Approval",
    type: "Pending",
    color: "danger",
  },
  {
    title: "Prototype",
    subtext: "Approved by Team",
    type: "Approved",
    color: "primary",
  },
  {
    title: "Design Task",
    subtext: "Submitted Yesterday",
    type: "Submitted",
    color: "success",
  },
  {
    title: "Wireframe",
    subtext: "In Review",
    type: "Review",
    color: "warning",
  },
  {
    title: "Scope Document",
    subtext: "Pending Approval",
    type: "Pending",
    color: "danger",
  },
];

const meetings = [
  { title: "Standup Meeting", time: "09:15 AM - 09:45 AM", duration: "30 min" },
  {
    title: "Client Discussion",
    time: "10:30 AM - 11:15 AM",
    duration: "45 min",
  },
  {
    title: "Interview (Frontend)",
    time: "11:30 AM - 01:00 PM",
    duration: "90 min",
  },
  { title: "Team Sync", time: "03:00 PM - 03:30 PM", duration: "30 min" },
];

const feeds = [
  {
    title: "New Task Assigned",
    desc: "Assigned by Ramesh Pandey",
    user: "Ramesh",
    time: "12:32",
    date: "Today",
    unread: true,
  },
  {
    title: "Task Approved",
    desc: "Your task has been approved",
    user: "Manager",
    time: "01:10",
    date: "Today",
    unread: false,
  },
  {
    title: "Milestone Achieved 🎉",
    desc: "Project milestone completed",
    user: "System",
    time: "02:45",
    date: "Yesterday",
    unread: false,
  },
  {
    title: "New Comment",
    desc: "Client added a comment",
    user: "Client",
    time: "03:15",
    date: "Yesterday",
    unread: true,
  },
];

const projects = [
  {
    title: "Update Employee Contact",
    desc: "Ensure all employee contact details are up-to-date in the ESS portal.",
    time: "09:30 PM - 10:00 AM",
    progress: 62,
    status: "Progress",
    color: "primary",
    tasks: 12,
    activities: 86,
  },
  {
    title: "Approve Leave Requests",
    desc: "Review and approve pending leave applications submitted via the ESS portal.",
    time: "09:30 PM - 10:00 AM",
    progress: 100,
    status: "Complete",
    color: "success",
    tasks: 12,
    activities: 86,
  },
];

$(function () {
  init();
});

function init() {
  bindEvents();
  renderAll();
}


function renderEvents() {
  const container = $("#eventsScroll");
  container.empty();

  events.forEach((event) => {
    container.append(`
      <div class="event d-flex gap-2 p-2 rounded-4 border" style="min-width: 250px;">
        <div class="date bg-${event.color}-subtle rounded p-2 text-center">
          ${event.date} <br> ${event.month}
        </div>
        <div>
          <strong>${event.title}</strong>
          <p class="mb-0 small text-muted">${event.time}</p>
        </div>
      </div>
    `);
  });

  updateEventButtons();
}

function updateEventButtons() {
  const el = $("#eventsScroll")[0];
  const maxScroll = el.scrollWidth - el.clientWidth;

  if (maxScroll <= 0) {
    setBtn("#prevEvent", false);
    setBtn("#nextEvent", false);
    return;
  }

  setBtn("#prevEvent", el.scrollLeft > 0);
  setBtn("#nextEvent", el.scrollLeft < maxScroll);
}

function scrollEvents(dir) {
  const el = $("#eventsScroll")[0];
  el.scrollLeft += dir === "next" ? 200 : -200;
  setTimeout(updateEventButtons, 150);
}

function renderTodos() {
  const container = $("#todoList");
  container.empty();

  todos.forEach((todo) => {
    container.append(`
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
    `);
  });
}


function renderMeetings() {
  const container = $("#meetingList");
  container.empty();

  meetings.forEach((m) => {
    container.append(`
      <div class="d-flex justify-content-between align-items-center p-2 rounded-4 border">
        <div>
          <div class="meeting-title">${m.title}</div>
          <div class="text-muted small d-flex align-items-center gap-1 mt-1">
            <i class="ri-time-line watch"></i>
            ${m.time}
          </div>
        </div>
        <div class="badge rounded-pill bg-light text-dark border p-2">
          <i class="ri-time-line me-1"></i>
          ${m.duration}
        </div>
      </div>
    `);
  });
}

function renderFeeds(type = "all") {
  const container = $("#feedList");
  container.empty();

  const filtered = type === "unread" ? feeds.filter((f) => f.unread) : feeds;

  let lastDate = "";

  filtered.forEach((feed) => {
    if (feed.date !== lastDate) {
      container.append(`<div class="feed-date">${feed.date}</div>`);
      lastDate = feed.date;
    }

    container.append(`
      <div class="feed-item ${feed.unread ? "unread" : ""}">
        <div class="d-flex justify-content-between">
          <div class="feed-title">${feed.title}</div>
          ${feed.unread ? `<span class="text-primary small">Unread</span>` : ""}
        </div>
        <div class="feed-sub">${feed.desc}</div>
        <div class="feed-meta mt-1">
          By : ${feed.user} | ${feed.time}
        </div>
      </div>
    `);
  });

  $("#feedCount").text(filtered.length);
}


function renderReviewTasks() {
  const container = $("#reviewList");
  container.empty();

  reviewTasks.forEach((task) => {
    container.append(`
      <div class="d-flex justify-content-between align-items-center p-2 rounded-3 border">
        <div>
          <div class="todo-title">${task.title}</div>
          <div class="todo-subtext">${task.subtext}</div>
        </div>
        <span class="badge bg-${task.color}-subtle text-${task.color}">
          ${task.type}
        </span>
      </div>
    `);
  });
}

function renderProjects() {
  const container = $("#projectList");
  container.empty();

  projects.forEach((project) => {
    container.append(`
      <div class="p-3 rounded-4 border">
        <div class="fw-semibold">${project.title} ..</div>
        <div class="mt-1 project-desc">${project.desc}</div>
        <div class="d-flex align-items-center gap-2 text-muted small mt-2">
          <i class="ri-time-line watch"></i>
          ${project.time}
        </div>
        <div class="d-flex justify-content-between mt-2 small">
          <span class="project-status">${project.status}</span>
          <span class="text-${project.color}">${project.progress}%</span>
        </div>
        <div class="progress mt-1" style="height:6px;">
          <div class="progress-bar bg-${project.color}" style="width:${project.progress}%"></div>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-3">
          <div class="d-flex">
            <img src="https://i.pravatar.cc/30?img=1" class="rounded-circle me-1">
            <img src="https://i.pravatar.cc/30?img=2" class="rounded-circle me-1">
            <img src="https://i.pravatar.cc/30?img=3" class="rounded-circle">
          </div>
          <div class="text-muted small d-flex gap-3">
            <span><i class="ri-file-list-line"></i> ${project.tasks} tasks</span>
            <span><i class="ri-bar-chart-line"></i> ${project.activities} Activities</span>
          </div>
        </div>
      </div>
    `);
  });
}

function bindEvents() {
  $("#toggleBtn").on("click", () => {
    $("#sidebar").toggleClass("collapsed");
  });

  $("#dropdownBtn").on("click", function (e) {
    e.stopPropagation();
    $("#dropdownMenu").toggleClass("d-none");
  });

  $(document).on("click", () => {
    $("#dropdownMenu").addClass("d-none");
  });

  $(".dropdown-item").on("click", function () {
    $("#dropdownBtn").text($(this).text());
    $("#dropdownMenu").addClass("d-none");
  });

  $("#nextEvent").on("click", () => scrollEvents("next"));
  $("#prevEvent").on("click", () => scrollEvents("prev"));

  $("#eventsScroll").on("scroll", updateEventButtons);

  $("input[name='feedFilter']").on("change", function () {
    renderFeeds(this.id);
  });

  $("#markAll").on("click", () => {
    feeds.forEach((f) => (f.unread = false));
    renderFeeds();
  });
}

function renderAll() {
  renderEvents();
  renderTodos();
  renderMeetings();
  renderFeeds();
  renderReviewTasks();
  renderProjects();
}

function setBtn(id, active) {
  $(id).toggleClass("btn-primary", active).toggleClass("btn-light", !active);
}
