import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [counts, setCounts] = useState(0)
    const plushandler = () => {
        setCounts(counts + 1)
    }
    const minushandler = () => {
        setCounts(counts - 1) 
    }
  return (
      <div>
          <Typography variant="h3">Count:{counts}</Typography><br /><br />
          <Button variant='contained' onClick={plushandler}>Plus</Button> &nbsp;&nbsp;
          <Button variant='contained' onClick={minushandler}>Minus</Button>
    </div>
  )
}

export default Counter
