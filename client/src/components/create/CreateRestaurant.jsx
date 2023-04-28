import React from 'react'
import classes from './create.module.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const CreateRestaurant = () => {
    const [name, setName] = useState("")
    const [addr, setAddress] = useState("")
    const [contact, setContact] = useState("")
    const [image, setImage] = useState("")
    const navigate = useNavigate()
    // we get the auth slice from the entire state, which(auth slice) 
    // is the userInfo and the token
    const { token } = useSelector((state) => state.auth)


    // type="file", e.target.files[0]
    const onChangeFile = (e) => {
        setImage(e.target.files[0])
    }

    const handleCloseImg = () => {
        setImage('')
    }

    const handleCreateProduct = async (e) => {
        e.preventDefault()

        try {
            const formData = new FormData()
            let filename = null

            if (image) {
                filename = Date.now() + image.name
                formData.append("filename", filename)
                formData.append("image", image)

                await fetch(`http://localhost:5000/upload/image`, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    },
                    method: "POST",
                    body: formData
                })
            }

            // uploading product 
            const res = await fetch(`http://localhost:5000/resturant/create`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                method: 'POST',
                body: JSON.stringify({
                    name,
                    location:addr,
                    contact,
                    pic:filename
                })
            })

            const rest = await res.json()
            navigate(`/res/${rest.created._id}`)

        } catch (error) {
            console.error(error.message)
        }
    }



    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <h2 className={classes.title}>ADD RESTAURANT</h2>
                <form onSubmit={handleCreateProduct} encType="multipart/form-data">
                    <div className={classes.inputWrapper}>
                        <label>Name: </label>
                        <input type="text"
                            placeholder='Restaurant Name...'
                            className={classes.input}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className={classes.inputWrapper}>
                        <label>Location: </label>
                        <input type="text"
                            placeholder='Address...'
                            className={classes.input}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div className={classes.inputWrapper}>
                        <label>Contact: </label>
                        <input type="text"
                            placeholder='Contact number...'
                            className={classes.input}
                            onChange={(e) => setContact(e.target.value)}
                        />
                    </div>
                    <div className={classes.inputWrapperImage}>
                        <label htmlFor="image" className={classes.labelFileInput}>Image: <span>Upload here</span></label>
                        <input type="file"
                            id="image"
                            placeholder='Image...'
                            className={classes.input}
                            onChange={onChangeFile}
                            style={{ display: 'none' }}
                        />
                        {image && <p className={classes.imageName}>{image.name} <AiOutlineCloseCircle onClick={handleCloseImg} className={classes.closeIcon} /></p>}
                    </div>
                    <div className={classes.buttonWrapper}>
                        <button type="submit" className={classes.submitBtn}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateRestaurant