/**
 * Objective: get base, height of a triangle . Calculate the area by using the 
   provided formula and then display the are
 *   
 * Step-1: get base  value  of the triangle
 * Step-2: added an id in the base input field
 * Step-3: use getElementByID to access the input field
 * Step-4: get value from the input field.(value is string now)
 * Step-5: convert the value to a number. use parseFloat
 * */


function triangleCalculateArea() {
    // get triangle base value
   const triangleBaseInput = document.getElementById('triangle-base');
   const triangleBaseText = triangleBaseInput.value;
   const base = parseFloat(triangleBaseText);
   console.log(base);
   

   // get triangle height valu
   const triangleHeightInput = document.getElementById('triangle-height');
   const triangleHeightText = triangleHeightInput.value;
   const height = parseFloat(triangleHeightText);
   console.log(height);
 
//    calcualte triangele area 
   const area = 0.5 * base *height;
   console.log('Area of the triangle is:', area);

//display triangle area
  const triangleAreaSpan = document.getElementById('triangle-area');
  triangleAreaSpan.innerText = area;
}