// 1. Create a predefined objects in an array

let products = {
    {
        prodCode: 00001,
        prodName: "",
        price: ,
        prodDetails: "",
        manufacturer: "",
        stocks: ,
        supplier: "",
        url: "",
        imgurl: ,
    },

    {
        prodCode: 00002,
        prodName: "",
        price: ,
        prodDetails: "",
        manufacturer: "",
        stocks: ,
        supplier: "",
        url: "",
        imgurl: ,
    },

    {
        prodCode: 00003,
        prodName: "",
        price: ,
        prodDetails: "",
        manufacturer: "",
        stocks: ,
        supplier: "",
        url: "",
        imgurl: ,
    },

    {
        prodCode: 00004,
        prodName: "",
        price: ,
        prodDetails: "",
        manufacturer: "",
        stocks: ,
        supplier: "",
        url: "",
        imgurl: ,
    },

    {
        prodCode: 00005,
        prodName: "",
        price: ,
        prodDetails: "",
        manufacturer: "",
        stocks: ,
        supplier: "",
        url: "",
        imgurl: ,
    },

    {
        prodCode: 00006,
        prodName: "",
        price: ,
        prodDetails: "",
        manufacturer: "",
        stocks: ,
        supplier: "",
        url: "",
        imgurl: ,
    },

    {
        prodCode: 00007,
        prodName: "",
        price: ,
        prodDetails: "",
        manufacturer: "",
        stocks: ,
        supplier: "",
        url: "",
        imgurl: ,
    },

    {
        prodCode: 00008,
        prodName: "",
        price: ,
        prodDetails: "",
        manufacturer: "",
        stocks: ,
        supplier: "",
        url: "",
        imgurl: ,
    },

    {
        prodCode: 00009,
        prodName: "",
        price: ,
        prodDetails: "",
        manufacturer: "",
        stocks: ,
        supplier: "",
        url: "",
        imgurl: ,
    },

    {
        prodCode: 00010,
        prodName: "",
        price: ,
        prodDetails: "",
        manufacturer: "",
        stocks: ,
        supplier: "",
        url: "",
        imgurl: ,
    }

}

let output = "";

products.forEach(function(item) {
    output += `<img src= ${item.imgurl}>
    <p> ${item.prodname} </p>
    <a href = "${item.url}}> ${item.pname} </a>`
    
});

document.getElementById('container').innerHTML = output;