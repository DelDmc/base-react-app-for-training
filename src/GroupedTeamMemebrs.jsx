import { useState} from "react"

const GroupedTeamMembers = ({employees, selectedTeam, setTeam}) => {

  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());
  function groupTeamMembers(){
    let teams = [];
    const team1Memebers = employees.filter((employee) => employee.teamName === "Team 1")
    const team1 = {team:"Team 1", members:team1Memebers, collapsed: selectedTeam === "Team 1"?false:true}
    teams.push(team1)

    const team2Memebers = employees.filter((employee) => employee.teamName === "Team 2")
    const team2 = {team:"Team 2", members:team2Memebers, collapsed: selectedTeam === "Team 2"?false:true}
    teams.push(team2)

    const team3Memebers = employees.filter((employee) => employee.teamName === "Team 3")
    const team3 = {team:"Team 3", members:team3Memebers, collapsed: selectedTeam === "Team 3"?false:true}
    teams.push(team3)
    return teams;
  }
  function handleTeamClick(event){
    const transformedGroupData = groupedEmployees.map((groupedData) => groupedData.team === event.currentTarget.id
                                                               ?{...groupedData, collapsed:!groupedData.collapsed}
                                                               :groupedData);
    setGroupedData(transformedGroupData);
    setTeam(event.currentTarget.id);
  }
  return (
    <main className="container">
      {
        groupedEmployees.map((item) => {
          return(
            <div key={item.team} className="card mt-2" style={{cursor:"pointer"}}>
              <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
                Team Name: {item.team}
              </h4>
              <div id={"colapse_" + item.team} className={item.collapsed === true?"collapse":""}>
              <hr/>
                {
                  item.members.map(member => {
                    return (
                      <div key={member.id} className="mt-2">
                        <h5 className="card-title mt-2">
                          <span className="text-dark">Full Name: {member.fullName}</span>
                        </h5>
                        <p>Occupation: {member.occupation}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </main>
  )
}
export default GroupedTeamMembers