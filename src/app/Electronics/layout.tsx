"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ElectronicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const pathname = usePathname(); // Reactive pathname hook

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-gray-100">
      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-gray-800 via-gray-900 to-black shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 bg-gray-900 shadow-md">
          <span className="text-2xl font-extrabold tracking-wide">
            Virtual Lab
          </span>
          <button
            onClick={toggleSidebar}
            className="text-gray-400 hover:text-red-400 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="mt-6">
          <ul className="space-y-2">
            {[
              { name: "Aim", href: "/Electronics/aim" },
              { name: "Theory", href: "/Electronics/theory" },
              { name: "Simulation", href: "/Electronics/simulationName" },
              { name: "Pre-test", href: "/Electronics/pretest" },
              { name: "Procedure", href: "/Electronics/procedure" },
              { name: "Post-test", href: "/Electronics/posttest" },
            ].map((link, index) => (
              <li key={index} className="group">
                <Link
                  href={link.href}
                  className={`block px-6 py-3 rounded-md transition-colors duration-200 ${
                    pathname === link.href
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-800 hover:bg-indigo-600 text-gray-300"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-0 transition-all duration-300">
        {/* Header */}
        <header className="flex items-center justify-between bg-gray-800 text-white p-4 shadow-lg">
          <button
            ref={buttonRef}
            onClick={toggleSidebar}
            className="text-gray-400 hover:text-indigo-400 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          <h1 className="text-xl font-bold">Virtual Lab</h1>
        </header>

        {/* Main Content */}
        <main className="p-6 pt-0 flex-1 overflow-auto bg-white shadow-xl">
          {children}
        </main>
      </div>
    </div>
  );
}
