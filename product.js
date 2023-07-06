let allData = [
    {
        id: 0,
        img: 'images/p1.png',
        name: "Men's Shirt",
        price: 56,
        u_price: 56,
        quty: 1
    },
    {
        id: 1,
        img: 'images/p2.png',
        name: "Men's Shirt",
        price: 75,
        u_price: 75,
        quty: 1
    },
    {
        id: 2,
        img: 'images/p3.png',
        name: "Women's Dress",
        price: 60,
        u_price: 60,
        quty: 1
    },
    {
        id: 3,
        img: 'images/p4.png',
        name: "Women's Dress",
        price: 40,
        u_price: 40,
        quty: 1
    },
    {
        id: 4,
        img: 'images/p5.png',
        name: "Women's Dress",
        price: 10,
        u_price: 10,
        quty: 1
    },
    {
        id: 5,
        img: 'images/p6.png',
        name: "Women's Dress",
        price: 105,
        u_price: 105,
        quty: 1
    },
    {
        id: 6,
        img: 'images/p7.png',
        name: "Women's Dress",
        price: 79,
        u_price: 79,
        quty: 1
    },
    {
        id: 7,
        img: 'images/p8.png',
        name: "Men's Shirt",
        price: 44,
        u_price: 44,
        quty: 1
    },
    {
        id: 8,
        img: 'images/p9.png',
        name: "Men's Shirt",
        price: 75,
        u_price: 75,
        quty: 1
    },
    {
        id: 9,
        img: 'images/p10.png',
        name: "Men's Shirt",
        price: 99,
        u_price: 99,
        quty: 1
    },
    {
        id: 10,
        img: 'images/p11.png',
        name: "Men's Shirt",
        price: 18,
        u_price: 18,
        quty: 1
    },
    {
        id: 11,
        img: 'images/p12.png',
        name: "Women's Dress",
        price: 94,
        u_price: 94,
        quty: 1
    }
]
localStorage.setItem('productListing', JSON.stringify(allData));
const viewData = () => {
    let tbl = "";
    let inData = (localStorage.getItem('productListing') == null || localStorage.getItem('productListing') == undefined) ? [] : JSON.parse(localStorage.getItem('productListing'));
    inData.map((v) => {
        const { id, img, name, price } = v;
        tbl += `
            <div class="col-sm-6 col-md-4 col-lg-4">
                <div class="box">
                    <div class="option_container">
                        <div class="options">
                            <span class="option1" onclick="btnCart(${id})">
                                Add To Cart
                            </span>
                            <span class="option2" onclick="btnBuy()">
                                Buy Now
                            </span>
                        </div>
                    </div>
                    <input type="hidden" value="${id}"/>
                    <div class="img-box"><img src="${img}"></img></div>
                    <div class="detail-box">
                        <h5>${name}</h5>
                        <h6>${price}</h6>
                    </div>
                </div>
            </div>
        `
        document.getElementById('piece').innerHTML = tbl;
    });
    localStorage.setItem('viewProduct', JSON.stringify(inData));
}
viewData();
let cart = []
const btnCart = (id) => {
    let data = JSON.parse(localStorage.getItem('product')) || [];
    let find = data.find((v) => {
        return v.id === id
    });
    if (find) {
        alert("the product are already exist");
    } else {
        let viewData = JSON.parse(localStorage.getItem('productListing'))
        let filterData = "";
        let reapet = true;
        for (let i in viewData) {
            if (viewData[i].id == id) {
                filterData = viewData[i];
                
            }
        }
        if (localStorage.getItem("product") === null || localStorage.getItem("product") === undefined) {
            cart.push(filterData);
            localStorage.setItem('product', JSON.stringify(cart));
        } else {
            var val = JSON.parse(localStorage.getItem("product"));
            val.push(filterData);
            localStorage.setItem('product', JSON.stringify(val));
        }
    }
};