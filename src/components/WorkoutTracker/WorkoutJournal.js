import React, {Fragment, useState} from 'react';
import {NavLink} from 'react-router-dom'
import {nanoid} from 'nanoid';
import data from "./mock-data.json";
import './noSurvey.css';
import ReadOnlyRow from '../../ReadOnlyRow';
import EditableRow from '../../EditableRow';

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

  const handleCancelClick = () => {
    setEditWorkoutId(null);
  }

  const handleDeleteClick = (workoutId) => {
    const newWorkoutData = [...workoutData]

    const index = workoutData.findIndex((workout)=> workout.id === workoutId);

    newWorkoutData.splice(index, 1);

    setWorkoutData(newWorkoutData);
  }

  return (
    <>
      <h1>Example workout Journal</h1>
      <p> When starting your workout Journey, keeping track of every activity, whether it be an actual workout, yard work, 
        or playing with your children etc. it is always important to take not of what you have done. Remember, the primary goal is to raise 
        your heartbeat and in my own personal terms "break a sweat" 
      </p>
      <p>We prefer the tried and true pen and paper method of keeping track of your workout, but we openly welcome you to keep track of your 
        workout through this table, that way you can look back at all your workouts! 
      </p>
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
                  handleEditFormChange={handleEditFormChange}
                  handleCancelClick = {handleCancelClick}/>
                  ) : (
                     <ReadOnlyRow 
                     workout ={workout} 
                     handleEditClick ={handleEditClick}
                     handleDeleteClick = {handleDeleteClick} /> 
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

      <NavLink to="/noSurvey">
            <button>Back</button>
            </NavLink>
    </>
  )
}

export default WorkoutJournal
