import React from 'react'
import { Link } from 'react-router-dom'
import classes from './navbar.module.css'
import {AiOutlineUser,AiOutlineShoppingCart} from 'react-icons/ai'
function Navbar() {
  return (
    <div className={classes.container}>
       <div className={classes.wrapper}>
        <div className={classes.left}>
        <Link to='/' className={classes.title}>
          CSE470PROJECT
        </Link>
        </div>
        <div className={classes.center}>
          <ul className={classes.list}>
          <li classname={classes.listItem}>
              <a href="#">Home </a> 
            </li>
            <li classname={classes.listItem}>
              <a href="#contacts">Contacts </a> 
            </li>
            <li classname={classes.listItem}>
              <a href="#foods">Foods </a> 
            </li>
            <li classname={classes.listItem}>
              <a href="#faq">FAQ </a> 
            </li>
            <li classname={classes.listItem}>
              <Link to='/create'>Create</Link>
            </li>
          
          </ul>
        </div>
        <div className={classes.right}>
          <AiOutlineUser className={classes.userIcon}/>
          <Link to='/cart' className={classes.cartContainer}>
            <AiOutlineShoppingCart classname={classes.carticon}/>
            <div className={classes.cartQuantity}>0</div>

          </Link>
          <button className={classes.logout}>Logout</button>
        </div>
       </div>
    </div>
  );
}

export default Navbar;