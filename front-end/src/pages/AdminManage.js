import React from 'react';
import AdminForm from '../components/AdminForm';

function AdminManage() {
  return (
    <div>
      <h1> Cadastrar novo usuário </h1>
      <AdminForm />
      <span
        id="invalid-message"
        style={ { visibility: 'hidden' } }
        data-testid="admin_manage__element-invalid-register"
      />
    </div>
  );
}
export default AdminManage;
