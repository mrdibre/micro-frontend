import React from "react";

const Header = ({ app }) => (
  <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
    Fidget Spinner World | {app.name}
  </div>
);

export default Header;
