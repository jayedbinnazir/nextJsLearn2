import React from "react";

type DashProps = {
  children: React.ReactNode;
  users: React.ReactNode;
  notifications: React.ReactNode;
};

const DashBoardLayout = ({ children, users, notifications }: DashProps) => {
  return (
    <div>
      <header>{children}</header>
      <main style={{ display: "flex", columnGap: "4px" }}>
        {users}
        {notifications}
      </main>
    </div>
  );
};

export default DashBoardLayout;
