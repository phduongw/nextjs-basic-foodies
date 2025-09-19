'use client';

import React, {useRef, useState} from 'react';

import classes from './image-picker.module.css'
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
    const inputRef = useRef();
    const [pickImage, setPickImage] = useState()
    function handlePickClick() {
        inputRef.current.click();
    }

    function handleImageChange(e) {
        const file = e.target.files[0];
        if (!file) {
            setPickImage(null);
            return;
        }

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickImage(fileReader.result);
        }

        fileReader.readAsDataURL(file);
    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickImage && (<p>No Image Picked yet</p>)}
                    {pickImage && <Image src={pickImage} alt={'The image selected by user'} fill/>}
                </div>
                <input
                    onChange={handleImageChange}
                    className={classes.input}
                    type="file"
                    id={name}
                    accept={'image/png, image/jpeg'}
                    name={name}
                    ref={inputRef}
                    required
                />
                <button className={classes.button} type={'button'} onClick={handlePickClick}>Pick an Image</button>
            </div>
        </div>
    );
};

export default ImagePicker;