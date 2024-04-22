const StaffModel = require('../model/staff')
const createHttpError = require('http-errors')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.StaffLogin = async (req, res, next) => {
    const { UserName, Password } = req.body;
    const testUserName = 'testuser'; // Set your test username
    const testPassword = 'testpassword'; // Set your test password

    try {
        // Check if provided credentials match test username and password
        if (UserName === testUserName && Password === testPassword) {
            // Generate JWT token
            const token = jwt.sign(
                { UserName: testUserName },
                process.env.JWT_SECRET,
                { expiresIn: '4h' }
            );
            
            return res.status(200).json({ token });
        }

        // If provided credentials do not match, check against database
        const staff = await StaffModel.findOne({ UserName }).exec();
        if (!staff) {
            throw createHttpError(401, 'Invalid username or password');
        }

        const isPasswordValid = await bcrypt.compare(Password, staff.Password);
        if (!isPasswordValid) {
            throw createHttpError(401, 'Invalid username or password');
        }

        // Generate JWT token
        const token = jwt.sign(
            { staff_id: staff._id, UserName: staff.UserName },
            process.env.JWT_SECRET,
            { expiresIn: '4h' }
        );

        res.status(200).json({ token });
    } catch (error) {
        next(error);
    }
};

exports.StaffRegister = async (req,res,next) => {
  
    const {
        FirstName,
        LastName,
        Contact_No,
        Email,
        //Employee_No,
        UserName,
        Password
      } = req.body;
    try{
        if(!FirstName || !LastName || !Contact_No || !Email   || !UserName || !Password){
            throw createHttpError(400, 'Missing required Details')
        }

        const isStaffAvailable =await StaffModel.findOne({Email: Email}).exec();
            if(isStaffAvailable){
                throw createHttpError(400,'Staff already exists')
            }
        
            const hashedPassword = await bcrypt.hash(Password,12);
            const newstaff = new StaffModel({
               FirstName,
               LastName,
               Contact_No,
               Email,
               //Employee_No,
               UserName,
               Password: hashedPassword
            });

            const result = await newstaff.save();
            res.status(201).send(result);

    }catch (error){
        next(error)

    }
}