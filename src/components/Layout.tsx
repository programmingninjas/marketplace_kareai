// src/components/Layout.tsx
import Sidebar from "./sidebar";
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};

export default Layout;
