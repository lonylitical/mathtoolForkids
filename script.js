const input1=document.querySelector('#input1');
const input2=document.querySelector('#input2');
const output=document.querySelector('#output');
const outputas=document.querySelector('#outputas');



function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function calculate()
{
  output.style.display="block";
  outputas.style.display="block";
  let s=prompt("Enter the operation to be performed through signs");
  let a=input1.value;
  let b=input2.value;
  if (a === ' ' || b === ' ')
  {
    alert("operation failed! it requires two input to be entered");
  }
  else
  {
    if (s === '+') 
    {
      output.value= (a-1) + (b-1) +2;
      input1.value=' ';
      input2.value=' ';
    }
    else if (s  === '-') 
    {
      output.value=(a-b);
      input1.value=' ';
      input2.value=' ';
    }
    else if (s === '*')
    {
      output.value=(a*b);
      input1.value=' ';
      input2.value=' ';
    }
    else if (s === '/') 
    {
      output.value=(a/b) + "  (quotient)";
      input1.value=' ';
      input2.value=' ';
    }
    else if( s === '%') 
    {
      output.value=(a%b) + "  (remainder)";
      input1.value=' ';
      input2.value=' ';
    }
    else
    {
      output.value="incorrect input";
      input1.value=' ';
      input2.value=' ';
    }
  }
}
const x1=document.querySelector('#x1');
const x2=document.querySelector('#x2');

function quadratic()
{
  //console.log(1);
  let a=document.getElementById('xsq').value;
  let b=document.getElementById('x').value;
  let c=document.getElementById('c').value;
  let d=(b*b)-(4*a*c);
  //console.log(d);
  if (a === ' ' && b === ' ' && c === ' ') 
  {
    alert("please input something to evaluate your quadratic equation. It's empty! ")
  }
  else if (d<0) 
  {
    D=Math.sqrt(d * (-1));
    x1.value= ((-b) + D)/(2*a) + "i" + "  is your first possible value of 'x' ";
    x2.value= ((-b) - D)/(2*a)  + "i" + "  is your second possible value of 'x' ";
    document.getElementById('outputsentence').style.display="block";
  }
  else if (d==0)
  {
    x2.value= (-b)/ (2*a) + "  is your second possible value of 'x' ";
    x1.value= (-b)/ (2*a) + "  is your first possible value of 'x' ";
    document.getElementById('outputsentence').style.display="block"; 
  }
  else if (d>0)
  {
    D=Math.sqrt(d) ;
    x1.value= ((-b) + D)/(2*a)  + "  is your first possible value of 'x' ";
    x2.value= ((-b) - D)/(2*a)  + "  is your second possible value of 'x' ";
    document.getElementById('outputsentence').style.display="block";
  }
  else
  {
    alert("oops! something went wrong on either side please check whether your inputs placed properly");
  }
}

window.i=0;
function showareabtn()
{
  if (window.i % 2 == 0)
  {
  document.getElementById('area').style.display="block";
  i++;
  }
  else
  {
  document.getElementById('area').style.display="none";
  i++;
  }
}

window.i=0;
function showperibtn()
{
  if (window.i % 2 == 0)
  {
  document.getElementById('peri').style.display="block";
  i++;
  }
  else
  {
  document.getElementById('peri').style.display="none";
  i++;
  }
}


window.i=0;
function showvolbtn()
{
  if (window.i % 2 == 0)
  {
  document.getElementById('vol').style.display="block";
  i++;
  }
  else
  {
  document.getElementById('vol').style.display="none";
  i++;
  }
}
function areacircle()
{
  var radius=prompt("Enter the radius of the circle");
  document.getElementById('shape2d').style.display="block";
  document.getElementById('shape2d').value= (3.14 * Math.pow(radius,2)) + "unit square  ";
}
function areatriangle()
{
    var s1=prompt("Enter the length of first side of the triangle");
    var s2=prompt("Enter the length of second side of the triangle");
    var s3=prompt("Enter the length of third side of the triangle");
    document.getElementById('shape2d').style.display="block";
    document.getElementById('area').style.display="block";
    if (s1 === s2 && s2 === s3 && s3 === s1)
    {
      document.getElementById('shape2d').value= 0.43301 * Math.pow(s1,2) + " unit square   (It is an equilateral triangle.)"; 
    }
    else if (s1===s2 || s2===s3 || s3===s1)
    {
        if(s1==s2 != s3)
        {
         document.getElementById('shape2d').value= s1*s3*0.5 + " unit square   (It is an isosceles triangle.)"; 
        }
        else if (s2==s3!=s1)
        {
         document.getElementById('shape2d').value= s2*s1*0.5 + " unit square   (It is an isosceles triangle.)"; 
        }
        else if (s3==s1 != s2)
        {
         document.getElementById('shape2d').value= s1*s2*0.5 + " unit square   (It is an isosceles triangle.)"; 
        }
        else
        {
         document.getElementById('shape2d').value=" oops!something went wrong on either side. Please check whether your inputs are valid."; 
        }
    }
    else if (s1!=s2!=s3)
    {
      var s=((s1-1)+(s2-1)+(s3-1)+3)/2; 
      document.getElementById('shape2d').value= sqrt(s*(s-s1)*(s-s2)*(s-s3)) + " unit square  (It is a scalene triangle.)";  
    }
    else
    {
      document.getElementById('shape2d').value=" oops!something went wrong on either side. Please check whether your inputs are valid."; 
    }
}

function areasquare()
{
  var side=prompt("Enter the length of side of the square");
  document.getElementById('shape2d').style.display="block";
  document.getElementById('shape2d').value= side*side + " unit square";
}

function arearectangle()
{
  var l=prompt("Enter the length of the rectangle");
  var b=prompt("Enter the breadth of the rectangle");
  document.getElementById('shape2d').style.display="block";
  document.getElementById('shape2d').value= (l*b) + " unit square";
}

function areatrapezoid()
{
  var a1=prompt("Enter the length of the upper base of trapezium");
  var b1=prompt("Enter the length of the lower base of trapezium");
  var h1=prompt("Enter the height of trapezium");
  document.getElementById('shape2d').style.display="block";
  document.getElementById('shape2d').value=((( (a1-1) + (b1-1)+2 )/2)*h1) + " unit square";
}

function areaparallelogram()
{
  var base=prompt("Enter the length of the BASE getting after cutting the parallelogram from the tilted angle to the base. ");
  var ht=prompt("Enter the height of parallelogram");
  document.getElementById('shape2d').style.display="block";
  document.getElementById('shape2d').value= (base*ht) + " unit square";
}
 function areasector()
{
  var r=prompt("Enter the radius of the sector expected in a complete circle.");
  var theta=prompt("Enter the θ in radians. ");
  document.getElementById('shape2d').style.display="block";
  document.getElementById('shape2d').value= (0.5*r*r*theta) + " unit square";
}


function areaellipse()
{
  var a=prompt("Enter the length of semi-major axis as 'a' in the equation of ellipse.");
  var b=prompt("Enter the length of semi-minor axis as 'b' in the equation of ellipse.");
  document.getElementById('shape2d').style.display="block";
  document.getElementById('shape2d').value= (3.14*a*b) + " unit square";
}

function pericircle()
{
  var r=prompt("Enter the radius of circle.");
  document.getElementById('pshape2d').style.display="block";
  document.getElementById('pshape2d').value= (2*3.14*r) + " units";
}
function peritriangle()
{
  var s1=prompt("Enter the length of first side of the triangle");
  var s2=prompt("Enter the length of second side of the triangle");
  var s3=prompt("Enter the length of third side of the triangle");
  document.getElementById('pshape2d').style.display="block";
  document.getElementById('pshape2d').value= ((s1-1)+(s2-1)+(s3-1)+3) + " units";
}
function perisquare()
{
  var s=prompt("Enter the length of the side of the square.");
  document.getElementById('pshape2d').style.display="block";
  document.getElementById('pshape2d').value= (4*s) + " units"; 
}

function perirectagle()
{
  var l=prompt("Enter the length of the rectangle");
  var b=prompt("Enter the breadth of the rectangle");
  document.getElementById('pshape2d').style.display='block';
  document.getElementById('pshape2d').value=(2*((l-1)+ (b-1) +2)) + " units";
}
function peritrapezoid()
{
   var ub=prompt("Enter the length of upperbase of the trapezium.");
   var lb=prompt("Enter the length of lowerbase of the trapezium.");
   var s1=prompt("Enter the length of side one.");
   var s2=prompt("Enter the length of side two.");
   document.getElementById('pshape2d').style.display='block';
   document.getElementById('pshape2d').value= ((ub-1)+(lb-1)+(s1-1)+(s2-1)+4) + " units";
}
function periparallelogram()
{
  var l=prompt("Enter the length of the parallelogram");
  var b=prompt("Enter the breadth of the parallelogram");
  document.getElementById('pshape2d').style.display='block';
  document.getElementById('pshape2d').value=(2*((l-1)+ (b-1) +2)) + " units";
}
function perisector()
{
  var l=prompt("Enter the length of the arc of the sector.");
  var radius=prompt("Enter the radius of the sector inside the expected circle.");
  document.getElementById('pshape2d').style.display='block';
  document.getElementById('pshape2d').value=(( (l-1)+1)+(2*radius)) + " units";
}
function periellipse()
{
  var a=prompt("Enter the length of semi-major axis as 'a' in the equation of ellipse.");
  var b=prompt("Enter the length of semi-minor axis as 'b' in the equation of ellipse.");
  document.getElementById('pshape2d').style.display="block";
  var sq=( (a-1) + (b-1) +2) * 0.5;
  document.getElementById('pshape2d').value= (2* 3.14 * Math.sqrt(sq)) + " units";
}

function volcube()
{
  var a=prompt("Enter the measure of edge of the cube");
  document.getElementById('shape3d').style.display="block";
  document.getElementById('shape3d').value= Math.pow(a,3) + " unit cube";
}
function volcuboid()
{
  var l=prompt("Enter the length of cuboid/rectangular prism");
  var b=prompt("Enter the breadth of cuboid/rectangular prism");
  var h=prompt("Enter the height of cuboid/rectangular prism");
  document.getElementById('shape3d').style.display="block";
  document.getElementById('shape3d').value= (l*b*h) + " unit cube";
}
function volcylinder()
{
  var rad=prompt("Enter the radius of the circular face of the cylinder");
  var ht=prompt("Enter the height of cylinder");
  document.getElementById('shape3d').style.display="block";
  document.getElementById('shape3d').value= (3.14*Math.pow(rad,2)*ht) + " unit cube";
}
function volcone()
{
  var rad=prompt("Enter the radius of the circular face of the cylinder");
  var ht=prompt("Enter the height of cylinder");
  document.getElementById('shape3d').style.display="block";
  document.getElementById('shape3d').value= ((3.14*Math.pow(rad,2)*ht)/3) + " unit cube";
}
function volsphere()
{
  var r=prompt("Enter the radius of the sphere");
  document.getElementById('shape3d').style.display="block";
  document.getElementById('shape3d').value= ((3.14*Math.pow(r,3))*(4/3)) + " unit cube";
}
function volring()
{
  var  R=prompt("Enter the radius of the outer circle in the ring");
  var  r=prompt("Enter the radius of the inner circle in the ring");
  document.getElementById('shape3d').style.display="block";
  document.getElementById('shape3d').value= ((3.14*(Math.pow(R,3)-Math.pow(r,3)))*(4/3)) + " unit cube";
}




































