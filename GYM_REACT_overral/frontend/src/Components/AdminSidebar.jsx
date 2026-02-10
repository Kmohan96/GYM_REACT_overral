function AdminSidebar() {
  return (
    <div className="sidebar">
      <h3>Admin Menu</h3>
      <ul>
        <li onClick={() => window.location.href="/admin-dashboard"}>Dashboard</li>
        <li onClick={() => window.location.href="/admin-users"}>Users</li>
        <li onClick={() => window.location.href="/admin-users"}>Trainers</li>
        <li onClick={() => window.location.href="/"}>Logout</li>
      </ul>
    </div>
  );
}

export default AdminSidebar;