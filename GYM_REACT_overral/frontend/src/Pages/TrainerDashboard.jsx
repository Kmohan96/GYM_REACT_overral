import { useEffect, useState } from "react";
import api from "../Api/Axios";
import NavbarTrainer from "../Components/NavbarTrainer";
import "../Styles/TrainerDashboard.css";
import Footer from "../Components/Footer";

function TrainerDashboard() {
  const [users, setUsers] = useState([]);

  // 🔹 NEW: daily update form state
  const [form, setForm] = useState({
    username: "",
    date: "",
    diet: "",
    attendance: false,
    description: ""
  });

  // 🔹 NEW: stats / extra data (you can later fetch from backend)
  const [stats, setStats] = useState({
    totalUsers: 0,
    presentToday: 0,
    sessionsToday: 0
  });

  // 🔹 NEW: today’s sessions mock (or fetch from API later)
  const [sessions, setSessions] = useState([
    { time: "08:00", client: "Rahul", type: "Strength", status: "upcoming" },
    { time: "10:00", client: "Priya", type: "Cardio", status: "completed" },
    { time: "16:00", client: "Vikas", type: "HIIT", status: "upcoming" }
  ]);

  // 🔹 NEW: recent updates feed (mock; later from API)
  const [updatesFeed, setUpdatesFeed] = useState([
    { username: "Rahul", date: "2026-02-05", diet: "High protein", attendance: true, notes: "Good effort today" },
    { username: "Priya", date: "2026-02-05", diet: "Balanced", attendance: false, notes: "Rest day" },
    { username: "Vikas", date: "2026-02-04", diet: "Low carb", attendance: true, notes: "Heavy lifting" }
  ]);

  useEffect(() => {
    const trainerId = localStorage.getItem("trainer_id");

    if (!trainerId) {
      alert("Trainer not logged in");
      return;
    }

    api
      .get(`/api/accounts/trainer/dashboard/?trainer_id=${trainerId}`)
      .then((res) => {
        setUsers(res.data.users || []);
        // Example: fake stats from user list
        setStats({
          totalUsers: res.data.users?.length || 0,
          presentToday: Math.floor((res.data.users?.length || 0) * 0.7),
          sessionsToday: Math.floor((res.data.users?.length || 0) * 0.5)
        });
      })
      .catch(() => alert("Failed to load users"));
  }, []);

  // 🔹 NEW: handle form change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  };

  // 🔹 NEW: submit daily update
  const handleSubmit = async (e) => {
    e.preventDefault();

    const trainerId = localStorage.getItem("trainer_id");

    const formData = new FormData();
    formData.append("trainer_id", trainerId);
    formData.append("username", form.username);
    formData.append("date", form.date);
    formData.append("diet", form.diet);
    formData.append("attendance", form.attendance);
    formData.append("description", form.description);

    try {
      await api.post("/api/accounts/trainer/add-update/", formData);
      alert("Daily update added");

      // reset form
      setForm({
        username: "",
        date: "",
        diet: "",
        attendance: false,
        description: ""
      });
    } catch {
      alert("Failed to add update");
    }
  };

  return (
    <div className="trainer-page">
      <NavbarTrainer />

      <div className="trainer-content">

        {/* Main trainer card (your existing code) */}
        <div className="trainer-card">

          <h2>Trainer Dashboard</h2>

          {/* ✅ EXISTING USER LIST (UNCHANGED) */}
          {users.length === 0 ? (
            <p className="no-users">No users assigned</p>
          ) : (
            <ul className="trainer-user-list">
              {users.map((u, i) => (
                <li key={i}>
                  <b>User:</b> {u.username} <br />
                  <b>Goal:</b> {u.goal}
                </li>
              ))}
            </ul>
          )}

          <hr />

          {/* 🔹 NEW SECTION: DAILY UPDATE FORM */}
          <h3>Add Daily Update</h3>

          <form onSubmit={handleSubmit} className="trainer-update-form">
            <input
              name="username"
              placeholder="User username"
              value={form.username}
              onChange={handleChange}
              required
            />

            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
            />

            <input
              name="diet"
              placeholder="Diet (e.g. High protein)"
              value={form.diet}
              onChange={handleChange}
            />

            <label>
              <input
                type="checkbox"
                name="attendance"
                checked={form.attendance}
                onChange={handleChange}
              />
              Present
            </label>

            <textarea
              name="description"
              placeholder="Workout / notes"
              value={form.description}
              onChange={handleChange}
            />

            <button type="submit">Add Update</button>
          </form>

        </div>

        {/* 🔹 NEW SECTION: STATS CARDS */}
        <div className="stats-grid">
          <div className="stat-card">
            <h4>Total Clients</h4>
            <span className="stat-number">{stats.totalUsers}</span>
          </div>
          <div className="stat-card">
            <h4>Present Today</h4>
            <span className="stat-number">{stats.presentToday}</span>
          </div>
          <div className="stat-card">
            <h4>Sessions Today</h4>
            <span className="stat-number">{stats.sessionsToday}</span>
          </div>
        </div>

        {/* 🔹 NEW SECTION: TODAY’S SESSIONS */}
        <div className="card sessions-card">
          <h3>Today’s Sessions</h3>
          <ul className="sessions-list">
            {sessions.map((s, i) => (
              <li key={i} className={`session-item status-${s.status}`}>
                <span className="session-time">{s.time}</span>
                <span className="session-client">{s.client}</span>
                <span className="session-type">{s.type}</span>
                <span className="session-status">{s.status}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 🔹 NEW SECTION: CLIENT UPDATES FEED */}
        <div className="card updates-feed-card">
          <h3>Client Updates</h3>
          <div className="updates-feed">
            {updatesFeed.map((u, i) => (
              <div key={i} className="update-item">
                <p><b>{u.username}</b> – {u.date}</p>
                <p><b>Diet:</b> {u.diet}</p>
                <p><b>Attendance:</b> {u.attendance ? "Present" : "Absent"}</p>
                <p><b>Notes:</b> {u.notes}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 🔹 NEW SECTION: QUICK ACTIONS */}
        <div className="card actions-card">
          <h3>Quick Actions</h3>
          <div className="actions-grid">
            <button className="action-btn">Add New Client</button>
            <button className="action-btn">Assign Workout</button>
            <button className="action-btn">Send Reminder</button>
            <button className="action-btn">View Reports</button>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default TrainerDashboard;
