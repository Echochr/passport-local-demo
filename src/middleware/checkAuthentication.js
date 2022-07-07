export default function checkAuthentication(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.write('<p>Please login to view this page.</p>');
        res.write('<p><a href="/v1/login">Login</a></p>');
        res.end();
    }
}