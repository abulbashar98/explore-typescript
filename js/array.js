"use strict";
const salary = 854400;
const employeeSalaries = [435, 5677, 343434, 76665, 4545];
const friends = ['nabil', 'tushar', 'sifat', 'tamjid'];
employeeSalaries[0] = 15000;
employeeSalaries.push(65646);
// employeeSalaries.push('546466');
friends.push('shahid');
friends[0] = 'naymur';
// friends.push(546546);
// let max = '';
// let max;
let max = 0;
for (const salary of employeeSalaries) {
    if (salary > max) {
        max = salary;
    }
}
