var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function (req, res, next){
    var rand1 = Math.random().toFixed(2)
    var rand2 = Math.random().toFixed(2)
    var x = req.query.x;
    var y = req.query.y;

    if(y==undefined && x==undefined){
        x = rand1
        y = rand2
    }

    imul = Math.imul(x,y).toFixed(2)
    log= Math.log(x,y).toFixed(2)
    log10= Math.log10(x,y).toFixed(2)
    
    res.send(`Math.imul(${x},${y}): ${imul} Math.log(${x}) is: ${log} Math.log10(${y}) is: ${log10}`);
});
    
module.exports = router;