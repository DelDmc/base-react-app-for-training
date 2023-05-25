import femaleProfile from './images/femaleProfile.jpg'
import maleProfile from './images/maleProfile.jpg'

const Employees = ({employees,selectedTeam,handleEmployeeCardClick,handleTeamSelectionChange}) => {
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
            <option value="Team 1">Team 1</option>
            <option value="Team 2">Team 2</option>
            <option value="Team 3">Team 3</option>
          </select>
        </div>
      </div>

      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
          {
            employees.map((employee) => (
              <div key={employee.id} 
                   id={employee.id} 
                   className={(employee.teamName === selectedTeam ?'card m-2 standout':'card m-2')} 
                   style={{ cursor: "pointer" }} 
                   onClick={handleEmployeeCardClick}>
                {(employee.gender === 'Male')
                ?<img src={maleProfile} className="card-img-top" alt="Ouups..."/>
                : <img src={femaleProfile} className="card-img-top" alt="Ouups..."/>}

                <div className="card-body">
                  <h5 className="card-title">Full Name: {employee.fullName}</h5>
                  <p className="card-text"><b>Occupation: </b>{employee.occupation}</p>
                </div>
              </div>))
          }
          </div>
        </div>
      </div>
    </main>
  )

}
export default Employees