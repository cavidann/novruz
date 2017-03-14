  setInterval(function () {        
    var isiq = document.getElementsByClassName('isiq');
    isiq[0].style.background = 'red';
    isiq[1].style.background = '#ccc';
    isiq[2].style.background = '#ccc';   
    function s() {
        isiq[1].style.background = 'yellow';
        isiq[0].style.background = '#ccc';
        isiq[2].style.background = '#ccc';
    }
    function y() {
        isiq[2].style.background = 'green';        
        isiq[0].style.background = '#ccc';
        isiq[1].style.background = '#ccc';      
    }  
    var s1 = setTimeout(s, 5000);
    var y1 = setTimeout(y, 7000); 
 }, 12000);

