import React from 'react';

export const UserRow = ({ row }) => {
  return (
    <tr>
      <td>
        <a href={row.edit_path}>{row.name1}</a>
        <br />
        <small>{row.email}</small>
      </td>
    </tr>
  );
};
