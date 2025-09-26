

let uniNo = parseInt(prompt("  1: Mehran Univerity of Engineering & Technology\n  2: Sindh Agriculture University\n   3: University of Sindh\n   4:Quaid e Azam University Islamabad \n\n Enter your university no(i.e MUET 1): "));

let major = parseInt(prompt("How many major you have: "));
let minor = parseInt(prompt("How many minor you have: "));
let practical = parseInt(prompt("How many practicals you have: "));

let size = major + minor + practical;
let totalCredits = major*3.00 + minor*2.0 + practical*1.0;
let qualityPoints = 0;

let majorGrades = [];
let minorGrades = [];
let pracGrades = [];


for(let i =0; i < major; i++){
   majorGrades[i] = prompt("What's your grade in major subject: ").toUpperCase().trim();
   qualityPoints += point(majorGrades[i], uniNo)*3.0;
}


for(let i = 0; i < minor; i++){
   minorGrades[i] = prompt("What's your grade in minor subject: ").toUpperCase().trim();
   qualityPoints += point(minorGrades[i], uniNo)*2.0;

}

for(let i = 0; i < practical; i++){
   pracGrades[i] = prompt("What's your grade in practical: ").toUpperCase().trim();
   qualityPoints += point(pracGrades[i], uniNo)*1.0;

}

let g = gpa(qualityPoints,totalCredits);
alert(`GPA: ${g}`);


function gpa(qPoints, tCredits){
   return qPoints/tCredits;
}

function point(g, uniNo){
   switch(uniNo){
      case 1:{ // MUET
      switch(g){
         case 'A+': return 4.0;  
         case 'A': return 3.5; 
         case 'B+': return 3.0; 
         case 'B': return 2.5;  
         case 'C+': return 2.0;  
         case 'C': return 1.5;  
         case  'C-': return 1.0; 
         case 'F': return 0.0;
         default: return 0;  
      }
     }
      break;

      case 2: { //SAU
         switch(g){
            case 'A': return 4.00;  
            case 'A-': return 3.67; 
            case 'B+': return 3.33; 
            case 'B': return 3.00;
            case 'B-': return 2.67;  
            case 'C+': return 2.33; 
            case 'C': return 2.00; 
            case 'C-': return 1.67;  
            case 'D+': return 1.33;
            case 'D': return 1.00; 
            case 'F': return 0.0;  
            default: return 0;
         }
      }
      break;

      case 3: { //US
         switch(g){
            case 'A+': return 4.00;  
            case 'A': return 3.6; 
            case 'B+': return 3.2; 
            case 'B': return 2.8;
            case 'C+': return 2.4;  
            case 'C': return 2.0; 
            case 'D+': return 1.5; 
            case 'D': return 1.0; 
            case 'F': return 0.00;
            default: return 0;  
         }
      }
      break;

      case 4: { //QAU
         switch(g){
            case 'A': return 4.00;  
            case 'A-': return 3.80; 
            case 'B+': return 3.50; 
            case 'B': return 3.00;
            case 'B-': return 2.80;  
            case 'C+': return 2.50; 
            case 'C': return 2.00;  
            case 'D': return 1.00; 
            case 'F': return 0.0; 
            default: return 0; 
         }
      }
      break;

      default: return 0;
   }
}

