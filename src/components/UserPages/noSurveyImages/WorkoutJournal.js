import React, {useState} from 'react';
import {nanoid} from 'nanoid';
import data from "./mock-data.json";
import './noSurvey.css';
function WorkoutJournal() {

  const [workoutData, setWorkoutData] = useState(data);
  const [addFormData, setAddFormData] = useState({
    Date: "", 
    Activity: "",
    Time: "",
    Notes: ""
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  }; 

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newEntry = {
      id: nanoid(),
      Date: addFormData.Date, 
      Activity: addFormData.Activity,
      Time: addFormData.Time,
      Notes: addFormData.Notes
    }; 

    const newWorkOutData = [...workoutData, newEntry];
    setWorkoutData(newWorkOutData);
  }; 

  return (
    <>
      <h1>My workout Journal</h1>
      <div className = 'app-container'>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Activity</th>
                    <th>Time</th>
                    <th>Notes</th>
                </tr>
            </thead>
            <tbody>
              {workoutData.map((workout) => (
                <tr key={workout.id}>
                  <td>{workout.Date}</td>
                  <td>{workout.Activity}</td>
                  <td>{workout.Time}</td>
                  <td>{workout.Notes}</td>
                </tr>
              ))}
            </tbody>
        </table>
        <h2>Add your exercise</h2>
        <form onSubmit={handleAddFormSubmit}>
          <input 
            type="text" 
            name="Date" 
            required="required"
            placeholder="Date"
            onChange={handleAddFormChange}
          />
          <input 
            type="text" 
            name="Activity" 
            required="required"
            placeholder="Activity"
            onChange={handleAddFormChange}
          />
          <input 
            type="text" 
            name="Time" 
            required="required"
            placeholder="Time"
          onChange = {handleAddFormChange}
          />
           <input 
          type = 'text' 
          name = "Notes" 
          required = "required"
          placeholder ="Additional Notes"
          onChange = {handleAddFormChange}
          />
          <button type ="submit">Add</button>
        </form>
      </div>
    </>
  )
}

export default WorkoutJournal
