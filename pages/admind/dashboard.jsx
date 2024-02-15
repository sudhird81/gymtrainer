// pages/admin/index.js

import React from "react";
import AdminDashboard from "../../components/Admin/AdminDashboard";
import AdminLayout from "../../components/Layout/layout";

const AdminIndexPage = () => {
  return (
    <AdminLayout>
      <AdminDashboard />
    </AdminLayout>
  );
};

export default AdminIndexPage;
