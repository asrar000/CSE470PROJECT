import React from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import classes from './restaurantDetails.module.css'
import { useEffect } from 'react'

const RestaurantDetails = () => {
    const [filteredFoods, setFilteredFoods] = useState([])
    const [loading,setLoading] = useState(true)
    const [rest, setRes] = useState({})
    const {id} = useParams()
    const { token } = useSelector((state) => state.auth)

    useEffect(() => {
        const fetchFoodType = async () => {
            const res = await fetch(`http://localhost:5000/resturant/${id}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            const data = await res.json()
            setFilteredFoods(data)
            setLoading(false)
        }
        const getR = async () => {
            try {
                const res = await fetch(`http://localhost:5000/resturant/getresturant/${id}`, {
                    headers: { Authorization: "Bearer " + token }
                })
                const rst = await res.json()
                setRes(rst)
            } catch (err) {
                console.log(err)
                return { name: 'Error' }
            }
        }
        getR()
        fetchFoodType()
    }, [])


    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                {
                !loading && (<>
                    <h2 className={classes.title}>{rest?.name?.toUpperCase()||null}</h2>
                    <h5 className={classes.subtitle}>{rest.location}</h5>
                    <h4 className={classes.subtitle}>{rest.contact}</h4>
                </>)}
                <div className={classes.foods}>
                    {filteredFoods.length !== 0 ? filteredFoods.map((f) => (
                        <Link to={`/food/${f._id}`} key={f._id} className={classes.food}>
                            <div className={classes.imgContainer}>
                                <img src={`http://localhost:5000/images/${f?.img}`} className={classes.foodImg} />
                            </div>
                            <div className={classes.foodDetails}>
                                <h4 className={classes.foodTitle}>{f?.title}</h4>
                                <span className={classes.price}><span>$</span> {f?.price}</span>
                            </div>
                        </Link>
                    ))
                    :
                    <h1 className={classes.noQuantity}>{loading?'Loading':'Nothing available right now'}</h1>}
                </div>
            </div>
        </div>
    )
}

export default RestaurantDetails