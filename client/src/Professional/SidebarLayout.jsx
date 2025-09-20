import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const SidebarLayout = () => {
  const location = useLocation();

  const links = [
    { to: "/dashboard", label: "🏠 Dashboard" },
    { to: "/post-project", label: "➕ Post Project" },
    { to: "/my-projects", label: "📋 My Projects" },
    { to: "/earnings", label: "💰 Earnings" },
    { to: "/profile", label: "👤 Profile" },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-white">
      {/* Sidebar */}
      <aside className="w-64 p-6 bg-white shadow-md border-r">
        <h2 className="text-2xl font-bold mb-6 text-purple-600">ProjectVerse🔍</h2>
        <nav className="space-y-4">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className={`block p-2 rounded-md ${
                location.pathname === link.to
                  ? "bg-purple-100 text-purple-700 font-semibold"
                  : "text-gray-700 hover:bg-purple-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default SidebarLayout;
