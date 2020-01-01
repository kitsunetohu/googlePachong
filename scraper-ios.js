var store = require('app-store-scraper');
var fs = require('fs');
var fso;
var id = 1164388317//要爬的app的ID，ID可以网页地址栏里看见


console.log("准备删除文件！");
fs.unlink("./result/" + id + ".json", function (err) {
    if (err) {
        return console.error(err);
    }
    console.log("文件删除成功！");
});


var arr = [];
var cont = 1;

store.reviews({
    id: id,
    country: 'jp',
    sort: store.sort.RECENT,
    page: 1
}).then((x) => {
    console.log(x);
    arr=arr.concat(x);
    loop(1);
}).catch(console.log);




function loop(num) {
    console.log(num)
    num++;
    store.reviews({
        id: id,
        country: 'jp',
        sort: store.sort.HELPFUL,
        page: num
    }).then((x) => {
        if (num < 10) {
            console.log(x[0]);
            arr=arr.concat(x);
            console.log(arr);
            loop(num)
        }
        else {
            let str = JSON.stringify(arr, "", "\t")
            fs.writeFile("./result/" + id + ".json", str, 'utf-8',//开始写入文件，这里是要写入文件的路径
                error => {
                    if (error) return console.log("写入文件失败,原因是" + error.message);
                    console.log("写入成功");
                });
        }
    }).catch(console.log);

}
