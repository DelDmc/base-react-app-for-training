import * as React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Employees from './Employees';
import { useState } from "react"

function App() {
  const [selectedTeam, setTeam] = useState("Team 1");
  const [employees, setEmployees] = useState([
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
    <Header selectedTeam={selectedTeam}
            teamMemberCount={employees.filter((employee)=> employee.teamName === selectedTeam).length}
    />
    <Employees employees={employees}
               selectedTeam={selectedTeam}
               handleEmployeeCardClick={handleEmployeeCardClick}
               handleTeamSelectionChange={handleTeamSelectionChange}
    />
    <Footer />
   </div>
  );
}

export default App;
