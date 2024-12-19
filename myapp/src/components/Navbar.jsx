import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
          <AppBar>
              <Toolbar>
                  <Typography variant='h5'>myapp</Typography> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <Link to='/Login'>
                      <Button variant='contained'>Login</Button> 
                  </Link>&nbsp; &nbsp; &nbsp;
                  <Link to='/Signup'>
                      <Button variant='contained'>Signup</Button>
                  </Link>&nbsp; &nbsp; &nbsp;
                  <Link to='/State'>
                      <Button variant='contained'>State</Button>
                  </Link>&nbsp; &nbsp; &nbsp; 
                  <Link to='/Counter'>
                      <Button variant='contained'>Counter</Button>
                  </Link>&nbsp; &nbsp; &nbsp; 
                  <Link to='/Naming'>
                      <Button variant='contained'>Naming</Button>
                  </Link>&nbsp; &nbsp; &nbsp;
                  <Link to='/Api'>
                      <Button variant='contained'>Api</Button>
                  </Link>&nbsp; &nbsp; &nbsp; 
                  <Link to='/Pokemon'>
                      <Button variant='contained'>Pokemon</Button>
                  </Link>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              </Toolbar>
          </AppBar>
          <br /><br /><br />
    </div>
  )
}

export default Navbar
