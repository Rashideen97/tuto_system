import React from 'react'

function AddStudent() {
  return (
    <div className='addstudent-box'>
    <h3> Add New Student </h3>
    <form> Student Details <br/>

    <label> Student Name: </label><input type='text' id='stu_name' name='stu_name'/><br/>
    <label> Student Gender: </label><input type='text' id='stu_gen' name='stu_gen'/><br/>
    <label> Parent Name: </label><input type='text' id='stu_par' name='stu_par'/><br/>
    <label> Parent Phone: </label><input type='text' id='phone' name='phone'/><br/>
    <label> Address: </label><input type='text' id='address' name='address'/><br/>
    <label> Level: </label><input type='text' id='level' name='level'/><br/>
    <label> Subject: </label><input type='text' id='subject' name='subject'/><br/>
    <label> Mode: </label><input type='text' id='mode' name='mode'/><br/>
    <label> Package: </label><input type='text' id='package' name='package'/><br/>
    <label> Date & Time: </label><input type='text' id='dateTime' name='dateTime'/><br/>
    <br/>
    <br/>
    <br/>
    <input type='submit' value="Submit" className='submit-button'/>
    </form>
    
    </div>
  )
}

export default AddStudent