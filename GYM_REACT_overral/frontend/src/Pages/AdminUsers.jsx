import { useEffect, useState } from "react";
import api from "../Api/Axios";
import Navbar from "../Components/Navbar";
import AdminSidebar from "../Components/AdminSidebar";
import "../Styles/Layouts.css";

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [trainerData, setTrainerData] = useState({});

  // Load users
  useEffect(() => {
    api.get("/api/admin/users/")
      .then(res => setUsers(res.data.users))
      .catch(() => alert("Failed to load users"));
  }, []);

  // Handle trainer input
  const handleTrainerChange = (userId, field, value) => {
    setTrainerData(prev => ({
      ...prev,
      [userId]: {
        ...prev[userId],
        [field]: value
      }
    }));
  };

  // Create trainer + approve user (ONE STEP)
  const createTrainer = async (user) => {
    const data = trainerData[user.id];

    if (!data?.trainer_id) {
      alert("Enter trainer ID");
      return;
    }

    try {
      const res = await api.post("/api/accounts/trainer/create/", {
        username: user.username,
        trainer_id: data.trainer_id,
      });

      alert(res.data.message);

      // Refresh users list
      const updated = await api.get("/api/admin/users/");
      setUsers(updated.data.users);

    } catch (err) {
      console.log(err.response?.data);
      alert("Trainer creation failed");
    }
  };

  return (
    <div className="app-container">
      <Navbar />

      <div className="main-content">
        <AdminSidebar />

        <div className="page-content">
          <h2>All Users</h2>

          <table border="1" width="100%" cellPadding="10">
            <thead>
              <tr>
                <th>Username</th>
                <th>Goal</th>
                <th>Status</th>
                <th>Trainer ID</th>
                <th>Create Trainer</th>
              </tr>
            </thead>

            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.username}</td>
                  <td>{user.goal}</td>
                  <td>{user.approved ? "Approved" : "Pending"}</td>

                  <td>
                    <input
                      placeholder="T001"
                      onChange={(e) =>
                        handleTrainerChange(user.id, "trainer_id", e.target.value)
                      }
                    />
                  </td>

                  <td>
                    <button onClick={() => createTrainer(user)}>
                      Approve + Create Trainer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="footer">© GymTracker 2026</div>
    </div>
  );
}

export default AdminUsers;
