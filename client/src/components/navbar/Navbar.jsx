import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import classes from './navbar.module.css'
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/authSlice'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { products } = useSelector((state) => state.cart)
  const isAdmin = useSelector(state => state.auth?.user?.isAdmin || false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null)
  }

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
  }

  return (
    <div className={`${classes.container} ${isScrolled && classes.scrolled}`}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Link to='/' className={classes.title}>
            CSE470 PROJECT
          </Link>
        </div>
        <div className={classes.center}>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <a href="/">Home</a>
            </li>
            <li className={classes.listItem}>
              <a href="#contacts">Contacts</a>
            </li>
            <li className={classes.listItem}>
              <a href="#foods">Foods</a>
            </li>
            <li className={classes.listItem}>
              <a href="#restaurants">RESTAURANTS</a>
            </li>
            {isAdmin && (
              <>
                <li className={classes.listItem}>
                  <Link to='/create'>Add Food</Link>
                </li>
                <li className={classes.listItem}>
                  <Link to='/create_restaurant'>Add Restaurant</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className={classes.right}>
          <AiOutlineUser className={classes.userIcon} />
          <Link to='/cart' className={classes.cartContainer}>
            <AiOutlineShoppingCart className={classes.cartIcon} />
            <div className={classes.cartQuantity}>{products.length}</div>
          </Link>
          <button onClick={handleLogout} className={classes.logout}>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar