function calculateRectangleArea(){
    //get length the of reactangle
    const lengthInput= document.getElementById('rectangle-length');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);
    console.log(length);

    // get width of the reactagle
    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);
    console.log(width);

    // calculate reactangle area 
    const area =length * width;
    console.log('area of the reactangle area:', area);

    // display reactangle area 
    const reactagleAreaSpan = document.getElementById('rectangle-area');
    reactagleAreaSpan.innerText = area;


}