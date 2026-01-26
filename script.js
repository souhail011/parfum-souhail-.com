let count = 0;

function addToCart(name, price) {
  count++;
  document.getElementById("count").innerText = count;
  alert(name + " ajouté au panier : " + price + " DH");
}
