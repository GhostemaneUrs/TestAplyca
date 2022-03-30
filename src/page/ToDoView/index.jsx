import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { AiOutlineEllipsis } from "react-icons/ai";

const TodoView = () => {
  const [personsAll, setPersonsAll] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setPersonsAll(data));
  });
  return (
    <div className="container-bg-todo">
      <div className="container-sider">
        <Sidebar />
        <div className="container-content">
          <Navbar />
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
                </tr>
              </thead>
              <tbody>
                {personsAll.map((person) => (
                  <tr key={person.id}>
                    <td>{person.name}</td>
                    <td>{person.username}</td>
                    <td>{person.email}</td>
                    <td>{person.address.city}</td>
                    <td>{person.company.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoView;
