export interface Product {
    id:number;
    name: string;
    img: string;
    price: number;
    amount: number;
    text?: string;
    selected?: boolean;
}

const productList: Array<Product> = [{
    id:1,
    name:"ananas",
    img:"ananas.jpeg",
    text:"den per kg",
    price:200,
    amount: 1,
    selected: false
},
{
    id:2,
    name:"appels",
    img:"appels.jpeg",
    text:"den per kg",
    price:100,
    amount: 1,
    selected: false
},
{
    id:3,
    name:"bananas",
    img:"bananas.jpeg",
    text:"den per kg",
    price:100,
    amount: 1,
    selected: false
},
{
    id:4,
    name:"beans",
    img:"beans.jpeg",
    text:"den per kg",
    price:50,
    amount: 1,
    selected: false
},
{
    id:5,
    name:"beer",
    img:"beer.jpeg",
    text:"den",
    price:100,
    amount: 1,
    selected: false
},
{
    id:6,
    name:"cacao",
    img:"cacao.jpeg",
    text:"den",
    price:50,
    amount: 1,
    selected: false
},
{
    id:7,
    name:"carrot",
    img:"carrot.jpeg",
    text:"den per kg",
    price:60,
    amount: 1,
    selected: false
},
{
    id:8,
    name:"cherries",
    img:"cherries.jpeg",
    text:"den per kg",
    price:200,
    amount: 1,
    selected: false
},
{
    id:9,
    name:"chips",
    img:"chips.jpeg",
    text:"den",
    price:80,
    amount: 1,
    selected: false
},
{
    id:10,
    name:"chocolate",
    img:"chocolate.jpeg",
    text:"den",
    price:60,
    amount: 1,
    selected: false
},
{
    id:11,
    name:"coca-cola",
    img:"coca-cola.jpeg",
    text:"den",
    price:60,
    amount: 1,
    selected: false
},
{
    id:12,
    name:"cucmber",
    img:"cucumber.jpeg",
    text:"den per kg",
    price:50,
    amount: 1,
    selected: false
},
{
    id:13,
    name:"gin",
    img:"gin.jpeg",
    text:"den",
    price:900,
    amount: 1,
    selected: false
},
{
    id:14,
    name:"kinder",
    img:"kinder.jpg",
    price:60,
    amount: 1,
    selected: false
},
{
    id:15,
    name:"lemons",
    img:"lemons.jpeg",
    text:"den",
    price:60,
    amount: 1,
    selected: false
},
{
    id:16,
    name:"mango",
    img:"mango.jpeg",
    text:"den per kg",
    price:160,
    amount: 1,
    selected: false
},
{
    id:17,
    name:"oranges",
    img:"oranges.jpeg",
    text:"den per kg",
    price:100,
    amount: 1,
    selected: false
},
{
    id:18,
    name:"patato",
    img:"patato.jpeg",
    text:"den per kg",
    price:60,
    amount: 1,
    selected: false
},
{
    id:19,
    name:"peach",
    img:"peach.jpeg",
    text:"den per kg",
    price:90,
    amount: 1,
    selected: false
},
{
    id:20,
    name:"piper",
    img:"piper.jpeg",
    text:"den per kg",
    price:50,
    amount: 1,
    selected: false
},
{
    id:21,
    name:"tomato",
    img:"tomato.jpeg",
    text:"den per kg",
    price:50,
    amount: 1,
    selected: false
},
{
    id:22,
    name:"wine",
    img:"wine.jpg",
    text:"den",
    price:350,
    amount: 1,
    selected: false
},
{
    id:23,
    name:"nescoffee",
    img:"nescoffee.jpeg",
    text:"den",
    price:260,
    amount: 1,
    selected: false
},
{
    id:24,
    name:"water",
    img:"water.jpeg",
    text:"den",
    price:50,
    amount: 1,
    selected: false
}
];

export default productList;