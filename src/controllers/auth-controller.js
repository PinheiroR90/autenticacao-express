const users = [
    {username:'Marco', password:'23'}
]

module.exports = {
    //GET index pag
    index:(req,res) => {
        res.render('index');
    },
    //POST login
    login: (req,res) => {
       const { username, password } = req.body;

       const user = users.find(user => user.username === username);

       if(!user){
        return res.redirect('/');
       }
       if(user.password !== password){
        return res.redirect('/');
       }

       req.session.authenticated = true
       req.session.currentUser = user

       res.redirect('/dashboard')
    },

    //POST register
    register: (req, res) =>{
        const { username, password } = req.body;

        const usernameExists = users.find(user => user.username === username);

        if(usernameExists){
            return res.status(400).redirect('/');
        }

        const newUser = { username, password};

        users.push(newUser, newUser);

        req.session.authenticated = true
        req.session.currentUser = newUser

        res.redirect('/dashboard')
    },

    //GET logout
    logout: (req, res) => {
        req.session.destroy()
       
        res.redirect('/');
    }
}