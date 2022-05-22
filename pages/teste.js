import Image from 'next/image';
import React, { useState } from 'react';


function Teste() {
    const [baseImage, setBaseImage] = useState('')
    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setBaseImage(base64);
        console.log(baseImage);
    };

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    return(
            <div
            style={{textAlign:'center'}}
            >

                <input
                type="file"
                accept="image/*"
                onChange={(e)=>{
                    uploadImage(e);
                }} />

            <br />
            {baseImage.length > 0 && (
            <Image 
            width={600} 
            height={500} 
            alt="Imagem" 
            src={baseImage} />
            )}
        </div>
    )
}
export default Teste