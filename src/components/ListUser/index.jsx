import React from "react";
import { AiOutlineEllipsis } from "react-icons/ai";

const ListUser = () => {
  return (
    <div>
      <button className="btn-new-user">+ Add new user</button>
      <div className="container-table">
        <div className="container-icons">
          <p>Users</p>
          <AiOutlineEllipsis className="table-icon" />
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>UserName</th>
              <th>Email</th>
              <th>Address</th>
              <th>Company</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lorem ip</td>
              <td>Lorem ip</td>
              <td>Lorem ip</td>
              <td>Lorem ip</td>
              <td>Lorem ip</td>
              <td>
                <a>View todos</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListUser;
