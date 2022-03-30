import React, { useState } from "react";
import { AiOutlineEllipsis } from "react-icons/ai";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const ListUser = () => {
  const [person, setPerson] = useState([]);
  const [idPerson, setIdPerson] = useState(1);

  const getPerson = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${idPerson}`)
      .then((response) => response.json())
      .then((data) => {
        if (Object.keys(data).length !== 0) {
          setIdPerson(idPerson + 1);
          setPerson([...person, data]);
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No more users can be added at the moment!",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <button className="btn-new-user" onClick={getPerson}>
        + Add new user
      </button>
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
            {person.map((person) => (
              <tr key={person.id}>
                <td>{person.name}</td>
                <td>{person.username}</td>
                <td>{person.email}</td>
                <td>{person.address.city}</td>
                <td>{person.company.name}</td>
                <td>
                  <Link to="/view">
                    <span>View all</span>
                  </Link>
                </td>
                <td>
                  <span>delete</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListUser;
