import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Container } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  btn:{
    fontSize:150,
    backgroundColor:'red'
  },
  title:{
    color:'yellow'
  }
})

const Create = () => {

  const st = useStyles()

  return (
    <Container>
      <Typography variant='h6' component='h2' color="textSecondary" gutterBottom className={st.title}>
       Create a new Note
      </Typography>
      <Button 
        className={st.btn}
        variant="contained" 
        type="submit"
        onClick={()=>{
          console.log({st})
        }}
        endIcon = {<KeyboardArrowRightIcon/>}
      >
        Submit
      </Button>
    </Container>
  )
}

export default Create

