const p=document.querySelector("p");
const div=document.querySelector("div");
div.style.backgroundColor='#3357FF '
div.style.height='20rem'
div.style.width='20rem'
div.style.display='flex'
div.style.margin='0 auto'
div.style.borderRadius='2rem'
div.style.padding='2rem'
var color=document.getElementById("colors");
var divcolor=document.getElementById("divcolors")
var size=document.getElementById("size")
var fonts=document.getElementById("font-picker");
function bold(){
    p.style.fontWeight = "900";
}
function italic(){
    p.style.fontStyle='italic'
}
function left(){
   div.style.justifyContent= 'start'
}
function mid(){
    div.style.justifyContent= 'center'
 }
 function right(){
    div.style.justifyContent= 'end'
 }
 function upp(){
    p.style.textTransform='uppercase'
 }
 function low(){
    p.style.textTransform='lowercase'
 }
 function cap(){
    p.style.textTransform='capitalize'
 }
 function cc(){
    p.style.display=' none';
 }

 color.addEventListener('input', function() {
    // Get the value of the color input
    const selectedColor = color.value;
    // Display the selected color value
    p.style.color=selectedColor;
})
divcolor.addEventListener('input',function(){
    const divbackcolor=divcolor.value;
    div.style.backgroundColor=divbackcolor;
})
size.addEventListener('input',function(){
    let font_size=size.value;
    p.style.fontSize=font_size +'px'
})
let font_type=fonts.value;
function fonnt(){
    font_type=fonts.value;
    p.style.fontFamily=font_type;
    console.log(font_type);
}
fonts.addEventListener('change',fonnt())
fonnt()
function printDiv(div) {
    var printContents = document.getElementById(div).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}
document.getElementById("print").addEventListener('click',function(){
    var pp=div.innerText;
    let printWindow = window.open('', 'Print', 'width=200,height=200');
    printWindow.document.write("<html><head><title>Print</title></head><body>" + text + "</body></html>");
    printWindow.document.close();
    printWindow.print();
})