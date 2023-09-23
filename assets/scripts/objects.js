// 'use strict';

// const members = {
//   teamName: 'Blue Rockets',
//   people: ['Max', 'Manuel'],
//   getTeamMembers() {
//     this.people.forEach(p => {
//       console.log(p + ' - ' + this.teamName);
//     });
//   }
// };

// const result = members.getTeamMembers();
// console.log(result); // Now I do get this because I created this with an arrow function here inside of ForEach

const members = {
  teamName: 'Blue Rockets',
  people: ['Max', 'Manuel'],
  getTeamMembers() {
    this.people.forEach(function (p) {
      console.log(this);
      console.log(p + ' - ' + this.teamName);
    });
  }
};

const result = members.getTeamMembers();
console.log(result); // 'Max' and 'Manuel' are undefined
// Now when I create this function like this with the function keyword, "this" is bound
