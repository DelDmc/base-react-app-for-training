import * as React from 'react';
import './App.css';
import Employees from './Employees';
import Footer from './Footer';
import GroupedTeamMembers from './GroupedTeamMemebrs';
import Header from './Header';
import Nav from './Nav';
import NotFound from './NotFound';
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem("selectedTeam")) || "Team 1");
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem("employeeList")) || [
    {
      id: 1,
      fullName: "John Doe",
      occupation: "Developer",
      gender: "Male",
      teamName: "Team 1"
    },
    {
      id: 2,
      fullName: "Joahna Doe",
      occupation: "Java Developer 2",
      gender: "Female",
      teamName: "Team 2"
    },
    {
      id: 3,
      fullName: "Cristopher Lambert",
      occupation: "Python Developer 3",
      gender: "Male",
      teamName: "Team 1"
    },
    {
      id: 4,
      fullName: "Robert Zemekkis",
      occupation: "Occupation 4",
      gender: "Female",
      teamName: "Team 3"
    },
    {
      id: 5,
      fullName: "Employee 5",
      occupation: "Occupation 5",
      gender: "Male",
      teamName: "Team 2"
    },
    {
      id: 6,
      fullName: "Employee 6",
      occupation: "Occupation 6",
      gender: "Female",
      teamName: "Team 1"
    },
    {
      id: 7,
      fullName: "Employee 7",
      occupation: "Occupation 7",
      gender: "Male",
      teamName: "Team 3"
    },
    {
      id: 8,
      fullName: "Employee 8",
      occupation: "Occupation 8",
      gender: "Female",
      teamName: "Team 2"
    },
    {
      id: 9,
      fullName: "Employee 9",
      occupation: "Occupation 9",
      gender: "Male",
      teamName: "Team 1"
    },
    {
      id: 10,
      fullName: "Employee 10",
      occupation: "Occupation 10",
      gender: "Female",
      teamName: "Team 3"
    },
    {
      id: 11,
      fullName: "Employee 11",
      occupation: "Occupation 11",
      gender: "Male",
      teamName: "Team 2"
    },
    {
      id: 12,
      fullName: "Employee 12",
      occupation: "Occupation 12",
      gender: "Female",
      teamName: "Team 1"
    },
    {
      id: 13,
      fullName: "Employee 13",
      occupation: "Occupation 13",
      gender: "Male",
      teamName: "Team 3"
    },
    {
      id: 14,
      fullName: "Employee 14",
      occupation: "Occupation 14",
      gender: "Female",
      teamName: "Team 2"
    },
    {
      id: 15,
      fullName: "Employee 15",
      occupation: "Occupation 15",
      gender: "Male",
      teamName: "Team 1"
    }
  ]);

  useEffect(() => {
    localStorage.setItem('employeeList', JSON.stringify(employees))
  }, [employees]);

  useEffect(() => {
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam))
  }, [selectedTeam]);

  function handleTeamSelectionChange(event){
    setTeam(event.target.value)
  }

  function handleEmployeeCardClick(event){
    const transformedEmployees = employees.map(
      (employee) => employee.id === parseInt(event.currentTarget.id)
      ?(employee.teamName === selectedTeam)
      ?{...employee, teamName:''}:{...employee,teamName:selectedTeam}
      :employee
    );
    setEmployees(transformedEmployees)
  }
  return (
   <div>
    <Router>
      <Nav />
      <Header selectedTeam={selectedTeam}
              teamMemberCount={employees.filter((employee)=> employee.teamName === selectedTeam).length}
      />
      <Routes>
        <Route path='/'
               element = {
                <Employees employees={employees}
                           selectedTeam={selectedTeam}
                           handleEmployeeCardClick={handleEmployeeCardClick}
                           handleTeamSelectionChange={handleTeamSelectionChange}/>}
        >
        </Route>
        <Route path='/GroupedTeamMembers'
               element = {<GroupedTeamMembers employees = {employees}
                                              selectedTeam={selectedTeam} 
                                              setTeam={setTeam}/>}
        >
        </Route>
        <Route path='*'
               element = {<NotFound />}>
        </Route>
      </Routes>
      <Footer />
    </Router>
   </div>
  );
}

export default App;
