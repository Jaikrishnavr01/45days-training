import React, { useState } from 'react';

const Task5 = () => {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [job, setJob] = useState('');
  const [showForm, setShowForm] = useState("false"); 

  function handleSubmit(e) {
    e.preventDefault();
    setEmployees([...employees, { id: id, name: name, job: job }]);
    alert("Data added successfully")
  }

  function sortEmployeesById() {
    const sortedEmployees = [...employees].sort((a, b) => a.id - b.id);
    setEmployees(sortedEmployees);
  }

  return (
    <div>
      <div>
        {showForm ? (
          <>
          <button onClick={() => setShowForm(false)}>Show Employees</button>
          <button onClick={() => setShowForm(true)}>Add Employee</button>
          </>
        ) : (
          <>
          <button onClick={() => setShowForm(false)}>Show Employees</button>
          <button onClick={() => setShowForm(true)}>Add Employee</button>  
          </>
        )}
      </div>
      {showForm ? (
        <form onSubmit={handleSubmit}>
          <h1>Add employee</h1>
          <div>
            <label>Employee ID:</label>
            <input type="number" value={id} onChange={(e) => setId(e.target.value)} required />
            <br />
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            <br />
            <label>Job:</label>
            <select value={job} onChange={(e) => setJob(e.target.value)} required>
              <option value="">Select Option</option>
              <option value="full-time">Full time</option>
              <option value="part-time">Part time</option>
            </select>
          </div>
          <button type="submit">Add Employee</button>
        </form>
      ) : (
        <div>
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
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.job}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Task5;
