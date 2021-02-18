var slider = document.getElementById("slider");
var selector = document.getElementById("selector");
var progressbar = document.getElementById("progressbar");

var price_element = document.getElementById("price_value");
var views_element = document.getElementById("views");

//var price = 0;
var views = 0;

slider.oninput = function() {
    selector.style.left = this.value + "%";
    progressbar.style.width = this.value + "%"

    //views_element.innerHTML = this.value*10+"K";


    if(this.value<=5) {
        price_element.innerHTML = "$8"
        views_element.innerHTML = "10K"
    }
    else if (this.value>5 && this.value<=10) {
        price_element.innerHTML = "$12"
        views_element.innerHTML = "50K"
    }
    else if (this.value>10 && this.value<=50) {
        price_element.innerHTML = "$16"
        views_element.innerHTML = "100K"
    }
    else if(this.value>50 && this.value<100) {
        price_element.innerHTML = "$24"
        views_element.innerHTML = "500K"
    }
    else if(this.value==100) {
        price_element.innerHTML = "$36"
        views_element.innerHTML = "1M"
    }
}