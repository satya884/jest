const userData = require('../data')

const getuserbyId = (req,res) => {
    const {id} = req;
    const user = userData.filter(a => a["id"]==id).map(a => a.name); //getting users using id
    if(user.length > 0) res.send(user);
    else res.sendStatus(404) 
}

module.exports = getuserbyId