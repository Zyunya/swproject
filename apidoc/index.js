/**
 * @api {get} /user/:id Request User information
 * @apiSampleRequest http://localhost:4444/api/:id
 * @apiName GetUser
 * @apiGroup User
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Accept-Encoding": "Accept-Encoding: gzip, deflate"
 *     }
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *     }
 */
var express = require('express');
var app = express();
//sudo apidoc -i apidoc/ -o apidoc/
app.use(express.static(__dirname));


app.get('/api',(req,res)=>{

     res.set({Auth:'token'}).send({custom_reponse :'GET_OK'})
})

app.get('/api/:id',(req,res)=>{
    res.set({Auth:'token'}).send(req.params.id)
})


app.listen(4444,()=>{console.log('listen 4444')})