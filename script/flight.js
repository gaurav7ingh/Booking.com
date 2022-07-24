import nav from "../component/nav.js"
import footer from "../component/footer.js"
    document.querySelector("nav").innerHTML = nav()
    document.querySelector('footer').innerHTML = footer();
var data = [
    { img: "https://q-xx.bstatic.com/xdata/images/city/square210/620027.jpg?k=3e415bb694a1a0145529dad3242573d0d52364bc57bae824b5990bf9c2fabc04&o=", name: "Kolkata to Bangkok", wdate: "Jul 24 - Jul 31 ", wh: "Round trip" },
    { img: "https://q-xx.bstatic.com/xdata/images/city/square210/674773.jpg?k=f65fb36a6b12a3f09a07232ef7946deb46871c0d5a308d3e16ff127d61233f41&o=", name: "Kolkata to Male City", wdate: "Jul 26 - Aug 2 ", wh: "Round trip" },
    { img: "https://q-xx.bstatic.com/xdata/images/city/square210/619923.jpg?k=4fb13225390240a51ee5aa1d76318d03dc0de8a046ddc06e4598f17b287bdcc9&o=", name: "Kolkata to Dubai", wdate: "Jul 21 - Jul 28  ", wh: "Round trip" },
    { img: "https://q-xx.bstatic.com/xdata/images/city/square210/613087.jpg?k=68ce65e52a527819c35c13c3d0e8a925263a71aab15a89577b4083c021855481&o=", name: "Kolkata to Paris", wdate: "Jul 26 - Aug 2 ", wh: "Round trip" },

];
var data2 = [
    { img: "https://q-xx.bstatic.com/xdata/images/city/square210/684542.jpg?k=355729edb3038d43ad8d7d8b0fc778dd7f23778660260577598e38ea613dffec&o=", name: "Kolkata to Bhubaneshwar", wdate: "Jul 23 - Jul 30 ", wh: "Round trip" },
    { img: "https://q-xx.bstatic.com/xdata/images/city/square210/909002.jpg?k=5816490ef7fea179a4cf4a61b1a9e018557047e79e77226e3efd2bb291efd1f5&o=", name: "Kolkata to Siliguri", wdate: "Jul 26 - Aug 2", wh: "Round trip" },
    { img: "https://q-xx.bstatic.com/xdata/images/city/square210/691672.jpg?k=e7f7b47277ce907e51a151125702b777ba08f9b8321f8adaf805c87df5661bd8&o=", name: "Kolkata to Guwahati", wdate: "Jul 21 - Jul 28", wh: "Round trip" },
    { img: "https://q-xx.bstatic.com/xdata/images/city/square210/684764.jpg?k=6c3c9e920a39ca4f9eddcdfaa916999ea5d2765844610dd59349f4271f7596b3&o=", name: "Kolkata to New Delhi", wdate: "Jul 24 - Jul 31", wh: "Round trip" },

];
var data3 = [
    { img: "https://q-xx.bstatic.com/xdata/images/city/square210/684533.jpg?k=efaef4796fa555481ddabf686c3fc66433b50ba69c936d6f702b1125b1d06748&o=", name: "Siliguri, India", wdate: "Jul 24 - Jul 31", wh: "Round trip", flight: "Flights from Netaji Subhash Chandra Bose" },
    { img: "https://q-xx.bstatic.com/xdata/images/city/square210/620027.jpg?k=3e415bb694a1a0145529dad3242573d0d52364bc57bae824b5990bf9c2fabc04&o=", name: "Bangalore, India", wdate: "Jul 24 - Jul 31 ", wh: "Round trip", flight: "Flights from Netaji Subhash Chandra Bose" },
    { img: "https://q-xx.bstatic.com/xdata/images/city/square210/684764.jpg?k=6c3c9e920a39ca4f9eddcdfaa916999ea5d2765844610dd59349f4271f7596b3&o=", name: "Bangkok, Thailand", wdate: "Jul 24 - Jul 31", wh: "Round trip", flight: "Flights from Netaji Subhash Chandra Bose" },
    { img: "https://q-xx.bstatic.com/xdata/images/city/square210/909002.jpg?k=5816490ef7fea179a4cf4a61b1a9e018557047e79e77226e3efd2bb291efd1f5&o=", name: "New Delhi, India", wdate: "Jul 26 - Aug 2", wh: "Round trip", flight: "Flights from Netaji Subhash Chandra Bose" },

];
let data4 = [{ image: "https://q-xx.bstatic.com/xdata/images/city/square210/856674.jpg?k=70a9589c2f7d2fc175c3ac02c55702c2e433f588866756a394cddfe215170f38&o=", h1: "Kolkata to New York", p: "Shortest flight time: 16h 26m" },

{ image: "https://q-xx.bstatic.com/xdata/images/city/square210/971989.jpg?k=1e02f419fe4a28344bb98db67c4153ba6c9fb5b4837e2e038612cff9ea419c65&o=", h1: "Kolkata to New York", p: "Shortest flight time: 16h 26m" },

{ image: "https://q-xx.bstatic.com/xdata/images/city/square210/689394.jpg?k=23b0050a839e18850cc6b64186787bdd846385ae280f2bdff2ced0a438f72112&o=", h1: "Kolkata to Chicago", p: "Shortest flight time: 16h 33m" },

{ image: "https://q-xx.bstatic.com/xdata/images/city/square210/620034.jpg?k=57be46c03c63ddade3e509013855574fe00e8b23e30dc19cd6cc232b4da7eb7e&o=", h1: "Kolkata to Los Angeles ", p: "Shortest flight time: 12h 26m" },

{ image: "https://q-xx.bstatic.com/xdata/images/city/square210/689490.jpg?k=1d5bd50555dd3c8fbd622bad7493375d6ee52e4c258e3cff5c64ded847efdf76&o=", h1: "Kolkata to Washington", p: "Shortest flight time: 10h 26m" },

{ image: "https://q-xx.bstatic.com/xdata/images/city/square210/690566.jpg?k=ce21853027cc5aa928c0e261e5c567a935d613995c2c365958cbf5ccbaeff9bb&o=", h1: "Kolkata to New York", p: "Shortest flight time: 19h 26m" },

{ image: "https://q-xx.bstatic.com/xdata/images/city/square210/653280.jpg?k=22d48ac39a830a7f37538454fdb0857980fe22cda6ac1afd46d31db9453c0893&o=", h1: "Kolkata to New York", p: "Shortest flight time: 21h 26m" },

{ image: "https://q-xx.bstatic.com/xdata/images/city/square210/689802.jpg?k=9b1b6e8f18bb474657e01465a6479d7d97def881d2e7610e8eb4f77719d5ed5f&o=", h1: "Kolkata to russia", p: "Shortest flight time: 26h 26m" },
{image: "https://q-xx.bstatic.com/xdata/images/city/square210/856674.jpg?k=70a9589c2f7d2fc175c3ac02c55702c2e433f588866756a394cddfe215170f38&o=", h1: "Kolkata to New York", p: "Shortest flight time: 16h 26m" },
];


let data5 = [{ image: "https://q-xx.bstatic.com/xdata/images/city/square210/690566.jpg?k=ce21853027cc5aa928c0e261e5c567a935d613995c2c365958cbf5ccbaeff9bb&o=", h1: "Kolkata to New York", p: "Shortest flight time: 19h 26m" },

{ image: "https://q-xx.bstatic.com/xdata/images/city/square210/653280.jpg?k=22d48ac39a830a7f37538454fdb0857980fe22cda6ac1afd46d31db9453c0893&o=", h1: "Kolkata to New York", p: "Shortest flight time: 21h 26m" },

{image: "https://q-xx.bstatic.com/xdata/images/city/square210/856674.jpg?k=70a9589c2f7d2fc175c3ac02c55702c2e433f588866756a394cddfe215170f38&o=", h1: "Kolkata to New York", p: "Shortest flight time: 16h 26m" },

{ image: "https://q-xx.bstatic.com/xdata/images/city/square210/689802.jpg?k=9b1b6e8f18bb474657e01465a6479d7d97def881d2e7610e8eb4f77719d5ed5f&o=", h1: "Kolkata to russia", p: "Shortest flight time: 26h 26m" },
{ image: "https://q-xx.bstatic.com/xdata/images/city/square210/856674.jpg?k=70a9589c2f7d2fc175c3ac02c55702c2e433f588866756a394cddfe215170f38&o=", h1: "Kolkata to New York", p: "Shortest flight time: 16h 26m" },

{ image: "https://q-xx.bstatic.com/xdata/images/city/square210/971989.jpg?k=1e02f419fe4a28344bb98db67c4153ba6c9fb5b4837e2e038612cff9ea419c65&o=", h1: "Kolkata to New York", p: "Shortest flight time: 16h 26m" },

{ image: "https://q-xx.bstatic.com/xdata/images/city/square210/689394.jpg?k=23b0050a839e18850cc6b64186787bdd846385ae280f2bdff2ced0a438f72112&o=", h1: "Kolkata to Chicago", p: "Shortest flight time: 16h 33m" },

{ image: "https://q-xx.bstatic.com/xdata/images/city/square210/620034.jpg?k=57be46c03c63ddade3e509013855574fe00e8b23e30dc19cd6cc232b4da7eb7e&o=", h1: "Kolkata to Los Angeles ", p: "Shortest flight time: 12h 26m" },

{ image: "https://q-xx.bstatic.com/xdata/images/city/square210/689490.jpg?k=1d5bd50555dd3c8fbd622bad7493375d6ee52e4c258e3cff5c64ded847efdf76&o=", h1: "Kolkata to Washington", p: "Shortest flight time: 10h 26m" },


];
let data6 = [{ image: "https://q-xx.bstatic.com/xdata/images/city/square210/856674.jpg?k=70a9589c2f7d2fc175c3ac02c55702c2e433f588866756a394cddfe215170f38&o=", h1: "Kolkata to New York", p: "Shortest flight time: 16h 26m" },

{ image: "https://q-xx.bstatic.com/xdata/images/city/square210/971989.jpg?k=1e02f419fe4a28344bb98db67c4153ba6c9fb5b4837e2e038612cff9ea419c65&o=", h1: "Kolkata to New York", p: "Shortest flight time: 16h 26m" },

{ image: "https://q-xx.bstatic.com/xdata/images/city/square210/689394.jpg?k=23b0050a839e18850cc6b64186787bdd846385ae280f2bdff2ced0a438f72112&o=", h1: "Kolkata to Chicago", p: "Shortest flight time: 16h 33m" },

{ image: "https://q-xx.bstatic.com/xdata/images/city/square210/620034.jpg?k=57be46c03c63ddade3e509013855574fe00e8b23e30dc19cd6cc232b4da7eb7e&o=", h1: "Kolkata to Los Angeles ", p: "Shortest flight time: 12h 26m" },
{ image: "https://q-xx.bstatic.com/xdata/images/city/square210/971989.jpg?k=1e02f419fe4a28344bb98db67c4153ba6c9fb5b4837e2e038612cff9ea419c65&o=", h1: "Kolkata to New York", p: "Shortest flight time: 16h 26m" },

{ image: "https://q-xx.bstatic.com/xdata/images/city/square210/689394.jpg?k=23b0050a839e18850cc6b64186787bdd846385ae280f2bdff2ced0a438f72112&o=", h1: "Kolkata to Chicago", p: "Shortest flight time: 16h 33m" },


{ image: "https://q-xx.bstatic.com/xdata/images/city/square210/689490.jpg?k=1d5bd50555dd3c8fbd622bad7493375d6ee52e4c258e3cff5c64ded847efdf76&o=", h1: "Kolkata to Washington", p: "Shortest flight time: 10h 26m" },


];
let data7 = [{
    image: "https://q-xx.bstatic.com/xdata/images/city/square210/689394.jpg?k=23b0050a839e18850cc6b64186787bdd846385ae280f2bdff2ced0a438f72112&o=", h1: "Kolkata to Chicago", p: "Shortest flight time: 16h 33m"
},

{ image: "https://q-xx.bstatic.com/xdata/images/city/square210/620034.jpg?k=57be46c03c63ddade3e509013855574fe00e8b23e30dc19cd6cc232b4da7eb7e&o=", h1: "Kolkata to Los Angeles ", p: "Shortest flight time: 12h 26m" },
{ image: "https://q-xx.bstatic.com/xdata/images/city/square210/971989.jpg?k=1e02f419fe4a28344bb98db67c4153ba6c9fb5b4837e2e038612cff9ea419c65&o=", h1: "Kolkata to New York", p: "Shortest flight time: 16h 26m" },

{ image: "https://q-xx.bstatic.com/xdata/images/city/square210/689394.jpg?k=23b0050a839e18850cc6b64186787bdd846385ae280f2bdff2ced0a438f72112&o=", h1: "Kolkata to Chicago", p: "Shortest flight time: 16h 33m" },


{ image: "https://q-xx.bstatic.com/xdata/images/city/square210/689490.jpg?k=1d5bd50555dd3c8fbd622bad7493375d6ee52e4c258e3cff5c64ded847efdf76&o=", h1: "Kolkata to Washington", p: "Shortest flight time: 10h 26m" },


];


let but = (id) => {
    if (id == "on") {
        call(data)
    }
    else {
        call(data2);
    }

}

function call(data) {
    let con = document.getElementById
        ("hotels");
    con.innerHTML = null;
    data.forEach(e => {
        let div = document.createElement("div");
        let im = document.createElement("img");
        im.src = e.img;
        let h3 = document.createElement("h3");
        h3.innerText = e.name;
        let p = document.createElement("p");
        p.innerText = e.wdate + "." + e.wh;
        div.append(im, h3, p);
        con.append(div);
        div.onclick = () => {
            alert(e.name);
        }

    });
}
call(data);
function Trending() {
    let con = document.getElementById
        ("trending");
    con.innerHTML = null;
    data3.forEach(e => {
        let div = document.createElement("div");
        let im = document.createElement("img");
        im.src = e.img;
        let h3 = document.createElement("h3");
        h3.innerText = e.name;
        let p = document.createElement("p");
        let p1 = document.createElement("p");
        p1.innerText = e.flight;
        p.innerText = e.wdate + "." + e.wh;
        div.append(im, h3, p1, p);
        con.append(div);
        div.onclick = () => {
            alert(e.name);
        }

    });
}
Trending();


let cut = (id) => {
    if (id == "one") {
        inter(data4)
    }
    else if (id == "two") {
        inter(data5);
    }
    else if (id == "three") {
        inter(data6)
    } else {
        inter(data7);
    }

}


function inter(dt) {
    let con = document.getElementById
        ("motels");
    con.innerHTML = null;
    dt.forEach(e => {
        let div = document.createElement("div");
        div.setAttribute("class", "part")
        let div2 = document.createElement("div");
        let im = document.createElement("img");
        im.src = e.image;
        div2.append(im)
        div.append(div2);

        let div3 = document.createElement("div");
        let h3 = document.createElement("h3");
        h3.innerText = e.h1;
        let p7 = document.createElement("p");
        p7.innerText = e.p;
        div3.append(h3, p7);
        div.append(div3);
        con.append(div);
        div.onclick = () => {
            alert(e.h1);
        }

    });
}
inter(data5);


