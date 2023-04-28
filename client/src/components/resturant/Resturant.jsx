import React from 'react'
import classes from './resturant.module.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Resturant = () => {
    const [title, setTitle] = useState("")
    const [location, setLocation] = useState("")
    const [image, setImage] = useState("")
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [res, setRes] = useState()
    // we get the auth slice from the entire state, which(auth slice) 
    // is the userInfo and the token
    const { token } = useSelector((state) => state.auth)
    const get =  () => {
        fetch("http://localhost:5000/resturant/getresturant", {
            headers: { Authorization: "Bearer " + token },
            method: "GET"
        }).then(async (res) => {
            const rest = await res.json();
            if (!res.ok)
                throw new Error()
            setLoading(false)
            setRes(JSON.stringify(rest))
        }).catch(err=>{
            console.log(err)
        })


    }
    if (loading) {
        get()
        return null

    }
return <h2>
    {res}
</h2>
}


export default Resturant
