var year = 2016;
var month = 5;
var DayCount = 0; // var for numbers of days in month


switch (month) {
    // months with 31 days
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        DayCount = 31;
        break
    // months with 30 days
    case 4:
    case 6: 
    case 9: 
    case 11:
        DayCount = 30;
        break
    // february
    case 2:
        // leap year
        if ((year%4==0 && !(year % 100 == 0)) || year % 400 == 0) {
            DayCount = 29;
        } else {
            DayCount = 28;
        }
        break
    default:
        DayCount = -1;
}

console.log(DayCount)
