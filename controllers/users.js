// logic, calculations, main code, functions
const UserModel = require("./../models/users");

// get all users data
exports.getAllUsers = async (req, res) => {
    res.json(await UserModel.find());
};


// get single user data
exports.getSingleUser = async (req, res) => {
    try {
        res.json(await UserModel.find({ _id: req.params.userId }));
    } catch (err) {
        res.send(
            "<h1> No Data Found For User With Id - " + req.params.userId
        );
    }
};

// to create new user!
exports.saveUser = async (req, res) => {

    const newUser = new UserModel(req.body);

    res.send(await newUser.save());
};

//uppdate user
exports.updateUser = async (req, res) => {
    const data = await UserModel.findOneAndUpdate(
        { _id: req.params.userId },
        req.body,
        { new: true }
    );
    res.send(data);
};


// delete user
exports.deleteUser = async (req, res) => {
    const deletedUser = await UserModel.findOneAndDelete({
        _id: req.params.userId,
    });
    res.send(deletedUser);
};

