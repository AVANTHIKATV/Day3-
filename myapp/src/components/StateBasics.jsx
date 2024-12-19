import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [fname, setfname] = useState("Avanthika")
    var[val,setval]=useState()
    const handleinput = (e) => {
        console.log(e.target.value)
        setfname(e.target.value)
    }
    const submithandler = () => {
        setval(fname)
    }
  return (
    <div>
          <Typography variant='h6'>Welcome {val}</Typography>
          <br /><br />
          <TextField variant='outlined' label="Enter name" onChange={handleinput} /><br /><br />
          <Button variant='contained' onClick={submithandler}>Submit</Button>
    </div>
  )
}

export default StateBasics
