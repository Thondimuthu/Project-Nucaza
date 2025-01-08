import Profile from "../Schema/Profile.js"

async function profileData(req,res) {
  let profile=req.body
  console.log(profile)
  if (profile['fullName'] && profile['email']) {
    const newProfile = new Profile({
      fullName: profile['fullName'],
      email: profile['email']
    });
  
    newProfile.save()
      .then(() => {
        return res.status(201).json({
          message: 'Profile created successfully'
        });
      })
      .catch((error) => {
        return res.status(400).json({
          message: 'Failed to create profile',
          error: error.message
        });
      });
  } else {
    return res.status(400).json({
      message: 'Full Name and Email are required fields'
    });
  }
  
}
export default profileData;