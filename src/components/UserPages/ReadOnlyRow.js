import React from 'react'

function ReadOnlyRow({workout}) {
  return (
    <>
      <tr key={workout.id}>
                  <td>{workout.Date}</td>
                  <td>{workout.Activity}</td>
                  <td>{workout.Time}</td>
                  <td>{workout.Notes}</td>
                </tr>
    </>
  )
}

export default ReadOnlyRow