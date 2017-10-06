/**
 *     Write a JavaScript function to get the month name from a particular date
 *
 *     Hint: You might want to use `.getMonth()` function from `Date` object
 */

getMonthName = function(date){
  var month = date.getMonth()
  // console.log(month.toString());
  if (month === 0) {
    return 'January'
  }else if (month === 1) {
    return 'February'
  }else if (month === 2) {
    return 'March'
  }else if (month === 3) {
    return 'April'
  }else if (month === 4) {
    return 'May'
  }else if (month === 5) {
    return 'June'
  }else if (month === 6) {
    return  'July';
  }else if (month === 7) {
    return 'August'
  }else if (month === 8) {
    return 'September';
  }else if (month === 9) {
    return 'October';
  }else if (month === 10) {
    return 'November'
  }else if (month === 11) {
    return 'December';
  }
}




console.log("[1] Check that `getMonthName` is a function ")
console.assert( typeof getMonthName === 'function' )
console.log("[1] ==================================================")
console.log()

console.log("[2] Should return 'October' for '10/11/2009'")
console.assert( getMonthName(new Date("10/11/2009")) === 'October' )
console.log("[2] ==================================================")
console.log()

console.log("[3] Should return 'December' for '12/11/2012'")
console.assert( getMonthName(new Date("12/11/2012")) === 'December' )
console.log("[3] ==================================================")
console.log()

console.log("[4] Should return 'January' for '01/15/2017'")
console.assert( getMonthName(new Date("01/15/2017")) === 'January' )
console.log("[4] ==================================================")
console.log()

console.log("[5] Should return 'September' for '09/10/1992'")
console.assert( getMonthName(new Date("09/10/1992")) === 'September' )
console.log("[5] ==================================================")
console.log()
