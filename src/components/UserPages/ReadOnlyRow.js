import React from 'react'

function ReadOnlyRow({workout, handleEditClick}) {
  return (
    <>
      <tr key={workout.id}>
                  <td>{workout.Date}</td>
                  <td>{workout.Activity}</td>
                  <td>{workout.Time}</td>
                  <td>{workout.Notes}</td>
                  <td>
                    <button type ='button' onClick={(event)=> handleEditClick(event, workout)}>Edit</button>
                  </td>
                </tr>
    </>
  )
}

export default ReadOnlyRow