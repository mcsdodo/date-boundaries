# date-boundaries
Extension of JavaScript Date object to get date of begining/end of any given date.

## How to use

```javascript
// returns date of first day in the month
var date = new Date(2000, 0, 15);
date.getFirstOfMonth() //-> Date {Sat Jan 01 2000 00:00:00 GMT+0100 (Central Europe Daylight Time)}

// returns date of first day in the month
var date = new Date(2000, 0, 15);
date.getLastOfMonth() //-> Date {Mon Jan 31 2000 00:00:00 GMT+0100 (Central Europe Daylight Time)}
