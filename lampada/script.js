var element = document.getElementById('image');
element.onclick = function() {
    if (element.src.match("desligada")) {
        element.src="https://arduinolivre.files.wordpress.com/2013/08/lampada_ligada.png";
    } else {
        element.src="https://arduinolivre.files.wordpress.com/2013/08/lampada_desligada.png";
    }
};