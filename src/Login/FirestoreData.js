import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import UserDataService from "../AllOpeartions";

const FirestoreData = ({ getUserId }) => {

  const [books, setBooks] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await UserDataService.getAllUsers();
    console.log(data.docs);
    setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await UserDataService.deleteUser(id);
    getUsers();
  };
  return (
    <div className="table-responsive mt-5 w-100 m-auto">
      <div className="mb-2">
        <Button variant="dark edit" onClick={getUsers}>
          Refresh List
        </Button>
      </div>

      {/* <pre>{JSON.stringify(books, undefined, 2)}</pre> */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>DOB</th>
            <th>RollNo</th>
            <th>Branch</th>
            <th>Email</th>
            <th>PhNumber</th>
            <th>Action</th>
            <th>Courses</th>
            <th>Internships</th>
            <th>Placements</th>
            <th>Trainings</th>
          </tr>
        </thead>
        <tbody>
          {books.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.name}</td>
                <td>{doc.Dt}</td>
                <td>{doc.rollno}</td>
                <td>{doc.branch}</td>
                <td>{doc.email}</td>
                <td>{doc.number}</td>
                
                
                <td>
                  <Button
                    variant="secondary"
                    className="edit"
                    onClick={(e) => getUserId(doc.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </Button>
                </td>
                {/* <td>{doc.courses}</td>
                <td>{doc.interns}</td>
                <td>{doc.placed}</td>
                <td>{doc.trainings}</td> */}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default FirestoreData;