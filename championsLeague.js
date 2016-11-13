// Description:
//
// Create a function that takes two arguments:
//
// 1) An array of objects which feature the season, the team and the country of the Champions League winner.
//
// 2) Country (as a string, for example, 'Portugal')
//
// You function should then return the number which represents the number of times a team from a given country has won. Return 0 if there have been no wins.

const winnerList1 = [
  { season: '1999-00', team: 'Real Madrid', country: 'Spain' },
  {season: '2000-01', team: 'Bayern Munich', country: 'Germany' },
  {season:'2001-02', team:'Real Madrid', country: 'Spain' },
  {season:'2002-03', team:'Milan', country: 'Italy' },
  {season:'2003-04', team: 'Porto', country: 'Portugal' }
];

const countWins = (list, country) => {
  const wins = list.filter((item) => {
    return item.country.toLowerCase() === country.toLowerCase();
  });
  return wins.length;
};




console.log(countWins(winnerList1,'Spain'));// => should return 2
console.log(countWins(winnerList1,'Portugal'));// => should return 1
console.log(countWins(winnerList1,'Sportland'));// => should return 0
