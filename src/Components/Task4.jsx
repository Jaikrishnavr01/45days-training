import React, { useState } from 'react';

function Task4() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [job, setJob] = useState("Select Option");

  function handleSubmit(e) {
    e.preventDefault();
      // setEmployees([...employees, { id, name, job }]);
      setEmployees([...employees, { id:id, name:name, job:job }]);
      setName("");
      setId("");
      setJob("");
  }
  function sortEmployeesById() {
    const sortedEmployees = [...employees].sort((a, b) => a.id - b.id);
    setEmployees(sortedEmployees);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Add employee</h1>
        <div>
          <label>Employee ID:</label>
          <input type="number" value={id} onChange={(e) => setId(e.target.value)}/>
          <br />
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label>Job:</label>
          <select
            value={job}
            onChange={(e) => setJob(e.target.value)}
          >
            <option value="">Select Option</option>
            <option value="full-time">Full time</option>
            <option value="part-time">Part time</option>
          </select>
        </div>
        <button type='submit'>Add Employee</button>
  </form>
  <button onClick={sortEmployeesById}>Sort Employee</button>
      <table border={2}>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Job Role</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.job}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Task4;
