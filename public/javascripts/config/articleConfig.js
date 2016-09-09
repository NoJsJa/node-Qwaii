/**
 * Created by yangw on 2016/9/9.
 */
//RequireJs配置文件
requirejs.config({
    baseUrl:'/javascripts/lib',
    //会自动下载依赖
    paths:{
        jquery: './jquery-3.1.0.min',
        bootstrap:'./bootstrap.min',
        header:'../header',
        article:'../article'
    },
    shim:{
        bootstrap:{deps:['jquery']},
    }
});

requirejs(['article','header','bootstrap'], function (article,header) {
    //初始化页面
    //三个函数是异步执行的,互相不影响
    article.articleInit();
    //得到文章内容
    article.getContent();
    //更新阅读量
    article.updateReadNumber();
    article.getBackgroundImg();

    header.headerInit();
});