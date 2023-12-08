function FontSize(type) {
    var ids = ["#h1", "#p"];
    ids.forEach(id => {
        var elemento = document.querySelector(id);
        var style = window.getComputedStyle(elemento);
        var size = parseFloat(style.getPropertyValue('font-size'));
        if (type == 'increase') {
            elemento.style.fontSize = (size + 5) + "px";
        } else {
            elemento.style.fontSize = (size - 5) + "px";
        }
    });
}

$(document).ready(function() {
  $(".increase").click(function() {
    $('.aberto').css({
      'display': 'block'
    });
  });

})