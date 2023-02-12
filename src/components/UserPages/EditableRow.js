import React from 'react'

function EditableRow({editFormData, handleEditFormChange, handleCancelClick} ) {
  return (
    <>
      <tr>
        <td>
        <input 
            type="text" 
            name="Date" 
            required="required"
            placeholder="Date"
            value={editFormData.Date}
            onChange ={handleEditFormChange}
          />
        </td>

        <td>
        <input 
            type="text" 
            name="Activity" 
            required="required"
            placeholder="Activity"
            value={editFormData.Activity}
            onChange ={handleEditFormChange}
          />
        </td>

        <td>
        <input 
            type="text" 
            name="Time" 
            required="required"
            placeholder="Time"
            value={editFormData.Time}
            onChange ={handleEditFormChange}
          />
        </td>

        <td>
        <input 
          type = 'text' 
          name = "Notes" 
          required = "required"
          placeholder ="Additional Notes"
          value={editFormData.Notes}
          onChange ={handleEditFormChange}
          />
        </td>

        <td>
          <button type ='submit'>Save</button>
          <button type ='button' onClick ={handleCancelClick}>Cancel</button>
        </td>
      </tr>
    </>
  )
}
<tr>
    <td></td>
</tr>
export default EditableRow