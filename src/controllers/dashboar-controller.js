module.exports = {
    dashboard: (req,res) => {
        if(! req.session.authenticated){
            console.log("Pagina requer exigencias");
            res.redirect('/')
        }

    res.render('dashboard', { user: req.session.currentUser })
    }
}