import React, {Fragment, useState} from 'react'
import {NavLink,useNavigate} from 'react-router-dom';
import {nanoid} from 'nanoid';
import data from "./mock-data.json";
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';

const endPage = () => {
    const navigate = useNavigate()

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
    
    <h1 className = "docAndLearn">Documentation & learning</h1>
    
<div className ="endContainer">
    <p>
        Congratulations!! You now have a small introduction to developing a healthy lifestyle and beginning your workout journey. You have 
        learned a couple ways to perform stretches, an introduction to cardio, strength training and a small start in learning about what eating 
        healthy is all about.   
    </p>
    <p>One last piece of this puzzle is documentation. As you go through your journey it is always important to document your healthy activities, the foods you consume, 
        your goals and how you feel about them. Before and after pictures are great, but it does not really tell how you got from point A to point B. 
    </p>
    <p>Documentation will give you a look back of what you could not do at the time, to what you can do at that moment and how you got there. A small example of documentation is a workout log.
        when exercising writing out your exercises and what you did gives a person the motivation to keep going. 
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
              {workoutData.map((workout, pos) => (
                <Fragment key={pos}> {/* added key for fix */}
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
          <input className="date"
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
          <input className="time"
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
    <p>One thing about developing a healthy lifestyle is to <b>ALWAYS</b> learn more. As th saying goes "knowledge is power" and the more you learn the more you know, the more you learn. 
    Learning from sources like books and the internet can help you reach your goal. Remember, once you reach your goal aim for another goal and keep that cycle going! The sky's the limit!!</p>
    </div>
      
      <div>
        <button className="btn-left" onClick ={() => navigate(-1)}>Previous</button>
        <NavLink to="/">
            <button className="btn-right">Next</button>
            </NavLink>
            </div>
            
    </>
  )
}

export default endPage
