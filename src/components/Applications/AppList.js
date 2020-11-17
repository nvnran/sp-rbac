import React from 'react';
import { VscTrash } from 'react-icons/vsc';
import swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const AppList = ({ data }) => {
  return (
    <>
      <tr>
        <td>
          <Link
            style={{ color: '#958585' }}
            to={'/application/app?appId=' + data.id}
          >
            {data.application}
          </Link>
        </td>
        <td>{data.description}</td>
        <td>
          <VscTrash size={24} color='#959595' />
        </td>
      </tr>
    </>
  );
};

export default AppList;
