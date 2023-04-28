import React from 'react'
import classes from './resturant.module.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Restaurant = () => {
    const [title, setTitle] = useState("")
    const [location, setLocation] = useState("")
    const [image, setImage] = useState("")
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [res, setRes] = useState([])
    // we get the auth slice from the entire state, which(auth slice) 
    // is the userInfo and the token
    const { token } = useSelector((state) => state.auth)
    const get = () => {
        fetch("http://localhost:5000/resturant/getresturant", {
            headers: { Authorization: "Bearer " + token },
            method: "GET"
        }).then(async (res) => {
            const rest = await res.json();
            if (!res.ok)
                throw new Error()
            setLoading(false)
            console.log(rest)
            setRes(rest)
        }).catch(err => {
            console.log(err)
        })
    }
    if (loading) {
        get()
        return null
    }

    return (
        <section id="restaurants" className={classes.container}>
            <div className={classes.wrapper}>
                <h4 className={classes.subtitle}>Restaurants</h4>
                <h2 className={classes.title}>Best restaurants in the city</h2>
                <div className={classes.foods}>
                    {res.map((r) => (
                        <Link to={`/restaurant/${r._id}`} key={r._id} className={classes.food}>
                            <h4>{r.name}</h4>
                            <div className={classes.imgContainer}>
                                <img src={`http://localhost:5000/images/${r.pic}`} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )

}


export default Restaurant
