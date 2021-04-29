//Filling the html with the items from item.js
//The quantity being stored as an input with type 'number' gives the user the ability to change how many of the item is in their cart
$(document).ready(function() {
    $("#item1").append("<div><a href=" + item1.url +">Item Link</a></div><img src=" + item1.image + "><p>" + item1.description + "</p><p>Price: $" + item1.price + "</p><input type='number' value=" + item1.quantity + " min='1' max=" + item1.available + " /><p>Total Available: " + item1.available + "</p><p>Product Name: " + item1.productName + "</p><p>Item ID: " +  item1.itemid + "</p><p>Item Manufacturer: " + item1.manufacturer + "</p>");
    $("#item2").append("<div><a href=" + item2.url +">Item Link</a></div><img src=" + item2.image + "><p>" + item2.description + "</p><p>Price: $" + item2.price + "</p><input type='number' value=" + item2.quantity + " min='1' max=" + item2.available + " /><p>Total Available: " + item2.available + "</p><p>Product Name: " + item2.productName + "</p><p>Item ID: " +  item2.itemid + "</p><p>Item Manufacturer: " + item2.manufacturer + "</p>");
    $("#item3").append("<div><a href=" + item3.url +">Item Link</a></div><img src=" + item3.image + "><p>" + item3.description + "</p><p>Price: $" + item3.price + "</p><input type='number' value=" + item3.quantity + " min='1' max=" + item3.available + " /><p>Total Available: " + item3.available + "</p><p>Product Name: " + item3.productName + "</p><p>Item ID: " +  item3.itemid + "</p><p>Item Manufacturer: " + item3.manufacturer + "</p>");
    $("#item4").append("<div><a href=" + item4.url +">Item Link</a></div><img src=" + item4.image + "><p>" + item4.description + "</p><p>Price: $" + item4.price + "</p><input type='number' value=" + item4.quantity + " min='1' max=" + item4.available + " /><p>Total Available: " + item4.available + "</p><p>Product Name: " + item4.productName + "</p><p>Item ID: " +  item4.itemid + "</p><p>Item Manufacturer: " + item4.manufacturer + "</p>");
});

//Method for subtotal:
function subtotal(){
    var subtotal = 0;
    
    //couldn't get this working
}