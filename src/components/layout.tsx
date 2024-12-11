import * as React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

type LayoutProps = {
  children: any;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-900 font-sans px-4">
      <Navbar />
      <div className="flex-1">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;