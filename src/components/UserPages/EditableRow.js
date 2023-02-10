import React from 'react'

function EditableRow() {
  return (
    <>
      <tr>
        <td>
        <input 
            type="text" 
            name="Date" 
            required="required"
            placeholder="Date"
          />
        </td>
        <td>
        <input 
            type="text" 
            name="Activity" 
            required="required"
            placeholder="Activity"
          />
        </td>
        <td>
        <input 
            type="text" 
            name="Time" 
            required="required"
            placeholder="Time"
          />
        </td>
        <td>
        <input 
          type = 'text' 
          name = "Notes" 
          required = "required"
          placeholder ="Additional Notes"
          />
        </td>
      </tr>
    </>
  )
}
<tr>
    <td></td>
</tr>
export default EditableRow