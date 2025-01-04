import { useState } from 'react'
import StandardLayout from '../../Layout/StandardLayout.jsx';

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    state: '',
    postalCode: '',
    address: '',
    // employee information
    employeeId: '',
    officeMail: '',
    officePhone: '',
    position: '',
    department: '',
    // education information
    degree: '',
    university: '',
    year: '',
    degrees: [],
    // experience information
    company: '',
    experiencePosition: '',
    experienceYear: '',
    experiences: []
  });

  const handleEdit = () => {
    setIsEditing(prev => !prev);
  };

  const handleSave = async () => {
    try {
      if (!formData.email || !formData.fullName ||
          !formData.employeeId || !formData.officeMail) {
        alert('Please fill in all required fields');
        return;
      }

      setIsSaving(true);
      
      const response = await fetch('http://localhost:8080/api/v1/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to save profile');
      }

      await response.json();
      alert('Profile saved successfully!');
      setIsEditing(false);
    } catch (error) {
      console.error('Error:', error);
      alert('Error saving profile: ' + error.message);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      
      const response = await fetch('http://localhost:8080/api/v1/profile', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to delete profile');
      }

      await response.json();
      alert('Profile deleted successfully');

    } catch (error) {
      console.error('Error:', error);
      alert('Error deleting profile: ' + error.message);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <StandardLayout>
        <div className="container mx-auto p-8 max-h-screen overflow-y-auto">
          {/* Profile Image Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8 relative">
            <div className="mb-6 flex justify-start">
              <div className="relative inline-block">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                  className="rounded-full w-32 h-32 object-cover border-4 border-gray-200"
                />
                <button
                  onClick={() => {
                    const input = document.createElement('input');
                    input.type = 'file';    
                    input.accept = 'image/*';
                    input.onchange = (e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = (e) => {
                          const img = document.querySelector('img');
                          img.src = e.target.result;
                        };
                        reader.readAsDataURL(file);
                      }
                    };
                    input.click();
                  }}
                  className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 ml-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
                
              </div>
              <div className='text-2xl font-semibold text-gray-800 mb-5 pt-5 ml-56'>
                <div className='mb-5'>
                <label htmlFor="fullName">Name :</label>
                <span className='text-gray-600'>{formData.fullName}</span>
                </div>

                    <div>
                    <label htmlFor="employeeId">Employee ID :</label>
                    <span className='text-gray-600'>{formData.employeeId}</span>
                    </div>
              </div>
            </div>
          </div>

          {/* Personal Information Section */}
          <div className="lg:bg-white lg:rounded-lg lg:shadow-md lg:p-6 lg:mb-8 md:bg-white md:rounded-lg md:shadow-md md:p-6 md:mb-8">
            <div className="flex justify-between items-center lg:mb-9 md:mb-9">
              <h2 className="text-2xl font-bold text-gray-800">Personal Information</h2>
              
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-1 ">Full Name :</label>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className=" lg:text-gray-600 lg:outline-none lg:h-9 lg:w-72 lg:rounded-md lg:ml-7 lg:hover:drop-shadow-lg lg:pl-3 md:text-gray-600 md:outline-none md:h-9 md:w-52 md:rounded-md md:ml-7 md:hover:drop-shadow-lg md:pl-3"
                  type="text"
                  placeholder="Full Name"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      document.querySelector('input[name="email"]').focus();
                    }
                  }}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">E-Mail :</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className=" lg:text-gray-600 lg:outline-none lg:h-9 lg:w-72 lg:rounded-md lg:ml-7 lg:hover:drop-shadow-lg lg:pl-3 md:text-gray-600 md:outline-none md:h-9 md:w-52 md:rounded-md md:ml-7 md:hover:drop-shadow-lg md:pl-3"
                  type="email"
                  placeholder="E-mail"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      document.querySelector('input[name="phone"]').focus();
                    }
                  }}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Phone Number :</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className=" lg:text-gray-600 lg:outline-none lg:h-9 lg:w-72 lg:rounded-md lg:ml-7 lg:hover:drop-shadow-lg lg:pl-3 md:text-gray-600 md:outline-none md:h-9 md:w-52 md:rounded-md md:ml-7 md:hover:drop-shadow-lg md:pl-3"
                  type="number"
                  placeholder="Phone Number"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      document.querySelector('select[name="gender"]').focus();
                    }
                  }}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Gender :</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className=" lg:text-gray-600 lg:outline-none lg:h-9 lg:w-52 lg:rounded-md lg:ml-7 lg:hover:drop-shadow-lg lg:pl-3 md:text-gray-600 md:outline-none md:h-9 md:w-52 md:rounded-md md:ml-7 md:hover:drop-shadow-lg md:pl-3"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      document.querySelector('select[name="state"]').focus();
                    }
                  }}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">State :</label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className=" lg:text-gray-600 lg:outline-none lg:h-9 lg:w-52 lg:rounded-md lg:ml-7 lg:hover:drop-shadow-lg lg:pl-3 md:text-gray-600 md:outline-none md:h-9 md:w-52 md:rounded-md md:ml-7 md:hover:drop-shadow-lg md:pl-3"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      document.querySelector('input[name="postalCode"]').focus();
                    }
                  }}
                >
                  <option value="">Select State</option>
                  {[
                    { value: "AP", label: "Andhra Pradesh" },
                    { value: "AR", label: "Arunachal Pradesh" },
                    { value: "AS", label: "Assam" },
                    { value: "BR", label: "Bihar" },
                    { value: "CG", label: "Chhattisgarh" },
                    { value: "GA", label: "Goa" },
                    { value: "GJ", label: "Gujarat" },
                    { value: "HR", label: "Haryana" },
                    { value: "HP", label: "Himachal Pradesh" },
                    { value: "JH", label: "Jharkhand" },
                    { value: "KA", label: "Karnataka" },
                    { value: "KL", label: "Kerala" },
                    { value: "MP", label: "Madhya Pradesh" },
                    { value: "MH", label: "Maharashtra" },
                    { value: "MN", label: "Manipur" },
                    { value: "ML", label: "Meghalaya" },
                    { value: "MZ", label: "Mizoram" },
                    { value: "NL", label: "Nagaland" },
                    { value: "OR", label: "Odisha" },
                    { value: "PB", label: "Punjab" },
                    { value: "RJ", label: "Rajasthan" },
                    { value: "SK", label: "Sikkim" },
                    { value: "TN", label: "Tamil Nadu" },
                    { value: "TG", label: "Telangana" },
                    { value: "TR", label: "Tripura" },
                    { value: "UP", label: "Uttar Pradesh" },
                    { value: "UK", label: "Uttarakhand" },
                    { value: "WB", label: "West Bengal" }
                  ].map(state => (
                    <option key={state.value} value={state.value}>
                      {state.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">PinCode :</label>
                <input
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className=" lg:text-gray-600 lg:outline-none lg:h-9 lg:w-64 lg:rounded-md lg:ml-7 lg:hover:drop-shadow-lg lg:pl-3 md:text-gray-600 md:outline-none md:h-9 md:w-52 md:rounded-md md:ml-7 md:hover:drop-shadow-lg md:pl-3"
                  type="text"
                  placeholder="PinCode"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      document.querySelector('input[name="address"]').focus();
                    }
                  }}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Address :</label>
                <input
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className=" lg:text-gray-600 lg:outline-none lg:h-9 lg:w-64 lg:rounded-md lg:ml-7 lg:hover:drop-shadow-lg lg:pl-3 md:text-gray-600 md:outline-none md:h-9 md:w-52 md:rounded-md md:ml-7 md:hover:drop-shadow-lg md:pl-3"
                  type="text"
                  placeholder="Address"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      document.querySelector('input[name="employeeId"]').focus();
                    }
                  }}
                />
              </div>
            </div>
          </div>

          {/* Employee Information Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Employee Information</h2>
             
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Employee ID :</label>
                <input
                  name="employeeId"
                  value={formData.employeeId}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className=" lg:text-gray-600 lg:outline-none lg:h-9 lg:w-64 lg:rounded-md lg:ml-7 lg:hover:drop-shadow-lg lg:pl-3 md:text-gray-600 md:outline-none md:h-9 md:w-52 md:rounded-md md:ml-7 md:hover:drop-shadow-lg md:pl-3"
                  type="text"
                  placeholder="Employee ID"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      document.querySelector('input[name="officeMail"]').focus();
                    }
                  }}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Office Mail :</label>
                <input
                  name="officeMail"
                  value={formData.officeMail}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className=" lg:text-gray-600 lg:outline-none lg:h-9 lg:w-64 lg:rounded-md lg:ml-7 lg:hover:drop-shadow-lg lg:pl-3 md:text-gray-600 md:outline-none md:h-9 md:w-52 md:rounded-md md:ml-7 md:hover:drop-shadow-lg md:pl-3"
                  type="email"
                  placeholder="Office Mail"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      document.querySelector('input[name="officePhone"]').focus();
                    }
                  }}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Office Number :</label>
                <input
                  name="officePhone"
                  value={formData.officePhone}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className=" lg:text-gray-600 lg:outline-none lg:h-9 lg:w-64 lg:rounded-md lg:ml-7 lg:hover:drop-shadow-lg lg:pl-3 md:text-gray-600 md:outline-none md:h-9 md:w-52 md:rounded-md md:ml-7 md:hover:drop-shadow-lg md:pl-3"
                  type="tel"
                  placeholder="Office Number"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      document.querySelector('select[name="position"]').focus();
                    }
                  }}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Position :</label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className=" lg:text-gray-600 lg:outline-none lg:h-9 lg:w-64 lg:rounded-md lg:ml-7 lg:hover:drop-shadow-lg lg:pl-3 md:text-gray-600 md:outline-none md:h-9 md:w-52 md:rounded-md md:ml-7 md:hover:drop-shadow-lg md:pl-3"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      document.querySelector('input[name="department"]').focus();
                    }
                  }}
                >
                  <option value="">Select Position</option>
                  <option value="web_developer">Web Developer</option>
                  <option value="senior_web_developer">Senior Web Developer</option>
                  <option value="testing">Testing</option>
                  <option value="senior_testing">Senior Testing</option>
                  <option value="app_developer">App Developer</option>
                  <option value="senior_app_developer">Senior App Developer</option>
                  <option value="cloud">Cloud</option>
                  <option value="senior_cloud">Senior Cloud</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Department :</label>
                <input
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className=" lg:text-gray-600 lg:outline-none lg:h-9 lg:w-64 lg:rounded-md lg:ml-7 lg:hover:drop-shadow-lg lg:pl-3 md:text-gray-600 md:outline-none md:h-9 md:w-52 md:rounded-md md:ml-7 md:hover:drop-shadow-lg md:pl-3"
                  type="text"
                  placeholder="Department"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      document.querySelector('input[name="degree"]').focus();
                    }
                  }}
                />
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="space-y-4">
              <div className="flex flex-col">
                <label className="block text-gray-700 text-xl font-semibold mb-1">Education :</label>
                <div className="flex gap-2 pl-20">
                  <input
                    name="degree"
                    value={formData.degree}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="text-gray-600 outline-none h-9 w-64 rounded-md hover:drop-shadow-lg pl-3"
                    type="text"
                    placeholder="Enter your degree"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        document.querySelector('input[name="university"]').focus();
                      }
                    }}
                  />
                  <input
                    name="university" 
                    value={formData.university}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="text-gray-600 outline-none h-9 w-64 rounded-md hover:drop-shadow-lg pl-3"
                    type="text"
                    placeholder="University"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        document.querySelector('input[name="year"]').focus();
                      }
                    }}
                  />
                  <input
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="text-gray-600 outline-none h-9 w-32 rounded-md hover:drop-shadow-lg pl-3"
                    type="text"
                    placeholder="Year"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && formData.degree.trim() !== '' && formData.university.trim() !== '' && formData.year.trim() !== '') {
                        e.preventDefault();
                        setFormData(prev => ({
                          ...prev,
                          degrees: [...(prev.degrees || []), {
                            degree: prev.degree,
                            university: prev.university,
                            year: prev.year
                          }],
                          degree: '',
                          university: '',
                          year: ''
                        }));
                        document.querySelector('input[name="degree"]').focus();
                      }
                    }}
                  />
                  <button
                    disabled={!isEditing}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400"
                    onClick={() => {
                      if (formData.degree.trim() !== '' && formData.university.trim() !== '' && formData.year.trim() !== '') {
                        setFormData(prev => ({
                          ...prev,
                          degrees: [...(prev.degrees || []), {
                            degree: prev.degree,
                            university: prev.university,
                            year: prev.year
                          }],
                          degree: '',
                          university: '',
                          year: ''
                        }));
                        document.querySelector('input[name="degree"]').focus();
                      }
                    }}
                  >
                    Add
                  </button>
                </div>
                {formData.degrees?.length > 0 && (
                  <ul className="mt-4">
                    {formData.degrees.map((degree, index) => (
                      <li key={index} className="text-gray-600 flex justify-between items-center mt-2">
                        <span>
                          <div className='font-semibold'>{degree.degree}</div>
                          {degree.university} ({degree.year})
                        </span>
                        <button
                          disabled={!isEditing}
                          onClick={() => {
                            setFormData(prev => ({
                              ...prev,
                              degrees: prev.degrees.filter((_, i) => i !== index)
                            }));
                          }}
                          className="text-red-500 hover:text-red-700 disabled:text-gray-400"
                        >
                          ✕
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="space-y-4">
              <div className="flex flex-col">
                <label className="block text-gray-700 text-xl font-semibold mb-1">Experience :</label>
                <div className="flex gap-2 pl-20">
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="text-gray-600 outline-none h-9 w-64 rounded-md hover:drop-shadow-lg pl-3"
                    type="text"
                    placeholder="Enter your company"
                  />
                  <input
                    name="experiencePosition" 
                    value={formData.experiencePosition}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="text-gray-600 outline-none h-9 w-64 rounded-md hover:drop-shadow-lg pl-3"
                    type="text"
                    placeholder="Position"
                  />
                  <input
                    name="experienceYear"
                    value={formData.experienceYear}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="text-gray-600 outline-none h-9 w-32 rounded-md hover:drop-shadow-lg pl-3"
                    type="text"
                    placeholder="Year"
                  />
                  <button
                    disabled={!isEditing}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400"
                    onClick={() => {
                      if (formData.company.trim() !== '' && formData.experiencePosition.trim() !== '' && formData.experienceYear.trim() !== '') {
                        setFormData(prev => ({
                          ...prev,
                          experiences: [...(prev.experiences || []), {
                            company: prev.company,
                            position: prev.experiencePosition,
                            year: prev.experienceYear
                          }],
                          company: '',
                          experiencePosition: '',
                          experienceYear: ''
                        }));
                      }
                    }}
                  >
                    Add
                  </button>
                </div>
                {formData.experiences?.length > 0 && (
                  <ul className="mt-4">
                    {formData.experiences.map((experience, index) => (
                      <li key={index} className="text-gray-600 flex justify-between items-center mt-2">
                        <span>
                          <div className='font-semibold'>{experience.company}</div>
                          {experience.position} ({experience.year})
                        </span>
                        <button
                          disabled={!isEditing}
                          onClick={() => {
                            setFormData(prev => ({
                              ...prev,
                              experiences: prev.experiences.filter((_, i) => i !== index)
                            }));
                          }}
                          className="text-red-500 hover:text-red-700 disabled:text-gray-400"
                        >
                          ✕
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div className="fixed bottom-4 right-4 flex gap-4">
            <button 
              onClick={handleSave} 
              disabled={isSaving}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 shadow-lg disabled:bg-gray-400"
            >
              {isSaving ? 'Saving...' : 'Save'}
            </button>  
            <button 
              onClick={handleEdit} 
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 shadow-lg"
            >
              {isEditing ? 'Cancel' : 'Edit'}
            </button>
            <button 
              onClick={() => {
                if (window.confirm('Are you sure you want to delete this information?')) {
                  handleDelete();
                  setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    gender: '',
                    state: '',
                    postalCode: '',
                    address: '',
                    employeeId: '',
                    officeMail: '', 
                    officePhone: '',
                    position: '',
                    department: '',
                    degree: '',
                    university: '',
                    year: '',
                    degrees: [],
                    company: '',
                    experiencePosition: '',
                    experienceYear: '',
                    experiences: []
                  });
                }
              }} 
              disabled={isDeleting}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 shadow-lg disabled:bg-gray-400"
            >
              {isDeleting ? 'Deleting...' : 'Delete'}
            </button>
          </div>
        </div>
      </StandardLayout>
    </>
  )
}

export default Profile
