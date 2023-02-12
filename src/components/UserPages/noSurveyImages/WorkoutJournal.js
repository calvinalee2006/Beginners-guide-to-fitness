import React, {Fragment, useState} from 'react';
import {nanoid} from 'nanoid';
import data from "./mock-data.json";
import './noSurvey.css';
import ReadOnlyRow from '../ReadOnlyRow';
import EditableRow from '../EditableRow';

function WorkoutJournal() {
  const [workoutData, setWorkoutData] = useState(data);
  const [addFormData, setAddFormData] = useState({
    Date: "", 
    Activity: "",
    Time: "",
    Notes: ""
  });

  const [editFormData, setEditFormData] = useState({
    Date: "", 
    Activity: "",
    Time: "",
    Notes: ""
  })

  const [editWorkoutId, setEditWorkoutId] = useState(null)

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  }; 

  const handleEditFormSubmit = (event) =>{
    event.preventDefault();
  
    const editedWorkout = {
      id: editWorkoutId,
      Date: editFormData.Date, 
      Activity: editFormData.Activity,
      Time: editFormData.Time,
      Notes: editFormData.Notes
    };
  
    const newWorkoutData = [...workoutData];
  
    const index = workoutData.findIndex((workout)=> workout.id === editWorkoutId);
  
    newWorkoutData[index] = editedWorkout;
    setWorkoutData(newWorkoutData);
    setEditWorkoutId(null)
  }
  

  
  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName= event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = {...editFormData};
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
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

  const handleEditClick = (event, workout) =>{
    event.preventDefault();
    setEditWorkoutId(workout.id);

    const formValues = {
    Date: workout.Date, 
    Activity: workout.Activity,
    Time: workout.Time,
    Notes: workout.Notes 
    }

    setEditFormData(formValues)
  };

  return (
    <>
      <h1>My workout Journal</h1>
      <div className = 'app-container'>
        <form onSubmit ={handleEditFormSubmit}>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Activity</th>
                    <th>Time</th>
                    <th>Notes</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
              {workoutData.map((workout) => (
                <Fragment>
                  {editWorkoutId === workout.id ? (
                  <EditableRow editFormData={editFormData}  
                  handleEditFormChange={handleEditFormChange}/>
                  ) : (
                     <ReadOnlyRow 
                     workout ={workout} 
                     handleEditClick ={handleEditClick} /> 
                     )}
                  
                </Fragment>
               
              ))}
            </tbody>
        </table>
        </form>

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
