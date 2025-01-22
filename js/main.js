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
import {DateTime} from 'luxon';

let data = fs.readFileSync('./input.csv', {encoding: 'utf8', flag: 'r'});

let data_arr = data.split('\n'),
    txt = '';

data_arr.forEach(item => {
  let arr = item.split(',');
  /*
    [0]   Id
    [1]   Gender
    [2]   Full Name
    [3]   Email
    [4]   Date
    [5]   Time
    [6]   Country Code
    [7]   Country
    [8]   Language Code
    [9]   Timezone
  */

  let full = DateTime.fromFormat(`${arr[4]} ${arr[5]}`, 'MM/dd/yyyy t', {zone: arr[9].trim()}),
      localeTime = full.setLocale(`${arr[8]}-${arr[6]}`),
      gender = null;

  arr[1] == 'male'? gender = 'his' : gender = 'her';
  
  txt += `${arr[0]}: ${arr[2]} is born in ${arr[7]} on ${localeTime.toLocaleString(DateTime.DATE_MED)} at ${localeTime.toLocaleString(DateTime.TIME_SIMPLE)}
${gender} age in ${full.toLocaleString(DateTime.DATE_MED)} will be almost ${Math.round(DateTime.now().diff(full, 'year').years)} years
${gender} contact information: ${arr[3]}
----------------------\n`;

  console.log(txt)
  
});

fs.writeFileSync('./output.txt', txt, {encoding: 'utf8'})