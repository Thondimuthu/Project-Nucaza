import { useState } from "react";

const ProfileImage = () => {
    const [selectedImage, setSelectedImage] = useState("https://via.placeholder.com/150");

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setSelectedImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="m-4">
            <div className="relative inline-block">
                <img
                    src={selectedImage}
                    alt="Profile"
                    className="rounded-full w-14 h-14 object-cover border-2 border-gray-200"
                />
                {/* <button
                    onClick={() => {
                        const input = document.createElement('input');
                        input.type = 'file';    
                        input.accept = 'image/*';
                        input.onchange = handleImageChange;
                        input.click();
                    }}
                    className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                </button> */}
            </div>
        </div>
    );
};

export default ProfileImage;