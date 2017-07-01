var express = require("express");

var router = express.Router();
var Burger = require("../models/burger");

// get route -> index

router.get("/", function(req, res) {
  res.redirect("burgers");
});

router.get("/burgers", function(req, res) {

  Burger.findAll({}).then(function(data) {
    // Wrapping the array of returned burgers in a object so it can be referenced inside our handlebars
    var burgerList = { burgers: data };
    res.render("index", burgerList);
  });

});

// post route -> back to index
router.post("/burgers/create", function(req, res) {

    console.log("Burger Data:");
    console.log(req.body);

    Burger.create({
      burger_name: req.body.burger_name
    }).then(function(results) {
      res.redirect("/");
    });
});

// put route -> back to index
router.put("/burgers/update", function(req, res) {

    Burger.update({
      devoured: true
    },
    {
      where: {
        id: req.body.burger_id
      },
    }).then(function(results) {
      res.redirect("/");
    });
  });

module.exports = router;
