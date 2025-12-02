import { Outlet, Link } from "react-router-dom";

const layout = () => {
  return (
    <div className="min-h-screen">
      <header className="p-4 border-b flex gap-4">
        <Link to="/"></Link>
        <Link to="/therapists">Therapists</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/profile">Profile</Link>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default layout;
