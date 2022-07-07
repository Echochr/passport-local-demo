export async function httpLogout(req, res) {
    req.session.save((err) => {
        if (err) next(err);
        
        req.logout();
        req.session.regenerate((err) => {
            if (err) next(err)
            res.redirect('/v1/login');
        });
    });
}