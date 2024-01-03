// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  // create a varaible "employee object" with new 
  let empBonusObj = {
    name: employee.name,
  }
 
  //if statement if/else for employee rating for bonus
  if (employee.reviewRating <= 2){
    empBonusObj.bonusPercentage = 0;
    empBonusObj.totalBonus = 0;
  } else if(employee.reviewRating === 3){
    empBonusObj.bonusPercentage = 0.04
    empBonusObj.totalBonus = employee.annualSalary * 0.04;
    console.log(empBonusObj.bonusPercentage);
  } else if(employee.reviewRating === 4){
    empBonusObj.bonusPercentage = 0.06
    empBonusObj.totalBonus = employee.annualSalary * 0.06;
  }else if(employee.reviewRating === 5){
    empBonusObj.bonusPercentage = 0.1;
    empBonusObj.totalBonus = employee.annualSalary * 0.1;
  }//end if for total bonus %


  // if conditional for 4 digit emplyee number
  if (employee.employeeNumber.length === 4){
    empBonusObj.bonusPercentage += 0.05
    empBonusObj.totalBonus += .05 * employee.annualSalary
  }//end if for 4 digit employee number

  //if conditional for anual salary greater than $65,000
  if (employee.annualSalary > 65000){
    empBonusObj.bonusPercentage -=.01;
    if (empBonusObj.bonusPercentage < 0){
      empBonusObj.bonusPercentage = 0;
      empBonusObj.totalBonus = empBonusObj.bonusPercentage * employee.annualSalary

    }
    else{
      empBonusObj.totalBonus = empBonusObj.bonusPercentage * employee.annualSalary
    }
    
  
  }
  //if conditional for bonus percentage greater than 12% or less than 0%
if (empBonusObj.bonusPercentage > .13){
  empBonusObj.bonusPercentage = .13
} else if(empBonusObj.bonusPercentage < 0 ){
  empBonusObj.bonusPercentage = 0
}

// total compensation calculation
empBonusObj.totalCompensation = empBonusObj.totalBonus + parseInt(employee.annualSalary);

//round total bonus to whole int.
empBonusObj.totalBonus = Math.round(empBonusObj.totalBonus);
  // return new object with bonus results
return empBonusObj
}//end function calculateIndividualEmployeeBonus


//create loop to go through all employees
for (let person of employees){
  console.log(calculateIndividualEmployeeBonus(person));
}