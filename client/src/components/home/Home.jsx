import React from 'react'
import Hero from '../hero/Hero'
import classes from './home.module.css'

const Home= () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
      <Hero />
      </div>
    </div>
  )
}

export default Home
