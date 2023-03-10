import React, { useEffect, useState } from 'react';
import axios from '../utils/axiosIstance';

export default function TableUsers() {
  const [users, setUsers] = useState([]);

  const handleClick = ({ target }) => {
    const { token } = JSON.parse(localStorage.getItem('user'));

    axios.delete(`admin/user/${target.id}`, { headers: { Authorization: token } });
  };

  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('user'));

    axios.get('admin/user', { headers: { Authorization: token } })
      .then(({ data }) => setUsers(data));
  });

  return (
    <div>
      <h3>Lista de Usuários</h3>
      <table>
        <thead>
          <tr>
            <td>Item</td>
            <td>Nome</td>
            <td>E-mail</td>
            <td>Tipo</td>
            <td>Excluir</td>
          </tr>
        </thead>
        <tbody>
          { users.map(({ id, name, email, role }, index = 1) => (
            <tr key={ `${id} ${name}` }>
              <td
                data-testid={
                  `admin_manage__element-user-table-item-number-${index}`
                }
              >
                { index }
              </td>

              <td
                data-testid={
                  `admin_manage__element-user-table-name-${index}`
                }
              >
                { name }
              </td>

              <td
                data-testid={
                  `admin_manage__element-user-table-email-${index}`
                }
              >
                { email }
              </td>

              <td
                data-testid={
                  `admin_manage__element-user-table-role-${index}`
                }
              >
                { role }
              </td>

              <td>
                <button
                  data-testid={
                    `admin_manage__element-user-table-remove-${index}`
                  }
                  type="button"
                  name="remove"
                  id={ id }
                  onClick={ (e) => handleClick(e) }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
