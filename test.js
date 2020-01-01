var gplay = require('google-play-scraper');
var fs = require('fs');
var fso;
var id='com.netease.onmyoji.na'//要爬的app的ID，ID可以网页地址栏里看见

gplay.reviews({
    appId: id,
    lang: 'ja',//评论的语言
    //country: 'JA',
    sort: gplay.sort.NEWEST,
    num: '3000'//要多少条评论
}).then((x) => {
    console.log(x[0]);
    let str = JSON.stringify(x, "", "\t")
    fs.writeFile("./result/"+id+".json", str,'utf-8',//开始写入文件，这里是要写入文件的路径
        error => {
            if (error) return console.log("写入文件失败,原因是" + error.message);
            console.log("写入成功");
        });
}, (y) => {

});

