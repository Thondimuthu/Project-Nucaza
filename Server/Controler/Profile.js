import Profile from "../Schema/Profile.js";


// Create new profile
// exports createProfile = async (req, res) => {
//   try {
//     const profile = new Profile(req.body);
//     await profile.save();
//     res.status(201).json(profile);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// Get all profiles
export async function getProfiles(req, res) {
    try {
        const profiles = await Profile.find();
        res.status(200).json(profiles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get profile by ID
// exports const getProfileById = async (req, res) => {
//   try {
//     const profile = await Profile.findById(req.params.id);
//     if (!profile) {
//       return res.status(404).json({ message: 'Profile not found' });
//     }
//     res.json(profile);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Update profile
// exports.updateProfile = async (req, res) => {
//   try {
//     const profile = await Profile.findById(req.params.id);
//     if (!profile) {
//       return res.status(404).json({ message: 'Profile not found' });
//     }

//     Object.assign(profile, req.body);
//     await profile.save();
//     res.json(profile);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Delete profile
// exports.deleteProfile = async (req, res) => {
//   try {
//     const profile = await Profile.findById(req.params.id);
//     if (!profile) {
//       return res.status(404).json({ message: 'Profile not found' });
//     }

//     await profile.remove();
//     res.json({ message: 'Profile deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
