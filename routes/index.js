/*
贴文相关的models
*/

var Articles = require("../models/Articles.js");

module.exports = function(app){

    /*获取主页*/
    app.get('/', function(req,res){
        res.render('index', {title : 'Q站:)可爱的小站'});
    });

    /* 处理事务 */
    app.post('/', function(req, res){
        if(req.body.action == "readList"){
            Articles.findSome({
                type : req.body.type,
                number : req.body.number,
                start : req.body.start
            }, function (err, JSONdata) {
                if(err){
                    console.error("this is :" + err);
                    res.json({
                            status : false,
                            statusText : "抱歉!服务器发生错误!"
                    });
                }else {
                    res.json({
                        status : true,
                        articleData : JSON.stringify(JSONdata)
                    });
                }
            });
        }
    });

    /* 更新热门内容 */
    app.post('/updateHot', function(req, res) {
       var actionType = req.body.actionType;
        Articles.updateHot({type : actionType}, function(err, jsonData) {
           if(err){
               res.json(JSON.stringify({
                   err : err,
                   statusText : "抱歉,数据库发生错误!"
               }));
           }else {
               res.json(JSON.stringify({
                  err : null,
                   hotList : jsonData
               }));
           }
        });
    });

};
