export async function httpGetHomePage(req, res) {
    res.write(`<h1>This is Homepage</h1>`);
    res.write(`<p>Welcome back ${req.user.username}</p>`);
    res.write(`<p><a href="/v1/logout">Logout</a></p>`);
    res.end();
}