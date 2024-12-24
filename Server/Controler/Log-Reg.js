import UserModel from "Schema.js";



    //............register Data type.............j... 
    export async function Register(req, res) {
        let reqBody = req.body;
        if (reqBody['name'] && reqBody['username'] && reqBody['mail'] && reqBody['number'] && reqBody['age'] && reqBody['password']) {
                let Newmodel = new UserModel({
                    name: reqBody['name'],
                    username: reqBody['username'],
                    mail: reqBody['mail'],
                    number: reqBody['number'],
                    age: reqBody['age'],
                    password: reqBody['password']
                })
                try {
                    await Newmodel.save();
                        return res.status(200).json({ message: "Sign Created", success: true });
                } catch (err) {
                    console.error(err);
                    return res.status(500).json({ message: "Error saving data", error: err });
                }
        } else {
            return res.status(400).json({ message: "Missing required fields" });
        }
    }