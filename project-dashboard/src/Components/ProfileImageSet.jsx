import React, { useState } from "react";

const ProfileImage = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        setSelectedImage(null);
    };

    return (
        <div className="m-10">

            <div className="  border border-red-400 w-40 ">
                {selectedImage ? (
                    <div className=" ">
                        <img src={selectedImage} alt="Round image" className="w-32 h-32 border-4 rounded-full" />
                        <button onClick={removeImage} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
                            Remove
                        </button>
                    </div>
                ) : (
                    <label className="w-12 h-12  bg-red-700 text-white text-center rounded-l-3xl cursor-pointer flex items-center justify-center">
                        Upload Image
                        <input className="rounded-ful"
                            type="file"
                            onChange={handleImageChange}
                            accept="image/*"
                            style={{display: "none"}}
                        />
                    </label>
                )}
            </div>
        </div>
    );
};

export default ProfileImage;