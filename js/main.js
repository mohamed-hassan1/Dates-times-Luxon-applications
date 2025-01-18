// *** First Application ***
/*
assumbtions:
- csv file contains data for persons
- birth date in the csv file formated as MM/DD/YYYY
- birth time formated as 12 hour (am, pm)

Task requirements:
- change the birth date format to matach the person country format (as posible)
- calculate the age of the person in 1st October 2025
- add the calculated age to the person data
- create a paragraph from the formated data
- save new data in a new file

Output:

2,male,Dylan Haugen,dhaugen1@surveymonkey.com,10/19/1984,05:59 AM,MA,Morocco,en,UTC+1

{id} {username} is born in {Counter} on {Month} {Day}, {Year} at {Time}
his age in {Month} {Year} will be alomost {age} years
his contact inforamtion: {email}

*/

import * as fs from 'fs';

let data = fs.readFileSync('./input.csv', {encoding: 'utf8', flag: 'r'});

let data_arr = data.split('\n');

data_arr.forEach(item => {
  item = item.split(',');
  
})