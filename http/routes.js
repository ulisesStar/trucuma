var express = require('express');
var router = express.Router();

router.get("/", function(req, res) {
    res.render("main/layout");
})

router.get("/admin", function(req, res) {
    res.render("admin/layout");
})

router.get("/admin/:url", function(req, res) {
    var page = req.params.url
    res.render("admin/frags/" + page);
})

router.all('/:action', function(req, res){
})

router.get("/main/:url", function(req, res) {
    var page = req.params.url
    res.render("main/frags/" + page);
})

router.get("/:url", function(req, res) {
    var page = req.params.url
    res.render(page);
})

router.get("/catalogo/personas", function(req, res) {
    res.render("main/frags/personas/personas");
})

router.get("/catalogo/persona", function(req, res) {
    res.render("main/frags/personas/persona");
})

router.get("/colors/:url", function(req, res) {
    var page = req.params.url
    res.render("main/frags/colors/" + page);
})

router.get("/user/:url", function(req, res) {
	var page = req.params.url
    res.render("main/frags/user/" + page);
})

router.get("/partials/:part", function(req, res) {
	var partial = req.params.part
    res.render("partials/" + partial );
    let error_message = req.flash('error')[0];
    res.locals.error_message = error_message;
})

module.exports = router;
