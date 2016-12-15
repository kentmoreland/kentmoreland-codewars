rm = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 };

const ride = (group, comet) => {

  if(group === comet){ return 'GO'};
  gp = group.split(''); ct = comet.split('');

  gp = gp.reduce((tally, letter) => {
    tally *= rm[letter.toLowerCase()]
    return tally;
  }, 1)

  ct = ct.reduce((tally, letter) => {
    tally *= rm[letter.toLowerCase()]
    return tally;
  }, 1)

  if(gp % 47 === ct % 47){ return 'GO' } else { return 'STAY' };

  return result;
}


test1 = {group: 'COMETQ', comet: 'HVNGAT'};

console.log(ride(test1.group, test1.comet));