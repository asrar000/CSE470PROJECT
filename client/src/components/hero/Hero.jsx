import React from 'react'
import classes from './hero.module.css'
import {AiOutlineArrowDown} from 'react-icons/ai'
import manEating from '../../assets/man-having-his-meal.svg'
const Hero = () => {
  return (
  <section id="home" className={classes.container}>
     <div className={classes.wrapper}>
      <div className={classes.left}>
        <h2 className={classes.title}>Do you crave delicious food</h2>
        <p className={classes.firstMsg}> But going out to take <span> food costs time....</span></p>
        <p className={classes.secondMsg}>
          Why not order <span> pizza</span> or something <br /> <span> delicious</span>
          from our resturant
        </p>
        <p className={classes.desc}>
          Our resturant always puts the client above.
          They are our single most important thing for our business.
        </p>
        <div className={classes.button}>
          <button className={classes.buttonOrder}>Order now!</button>
          <button className={classes.buttonsee}> <a href="#foods"> see what's available <AiOutlineArrowDown/> </a></button>
        </div>
      </div>
     <div className={classes.right}>
      <img src={manEating} alt="" className={classes.manEatingImg}/>

     </div>
   </div>

  </section>
    
  )
}

export default Hero