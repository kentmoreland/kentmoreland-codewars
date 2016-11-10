// Fold an array
//
// In this kata you have to write a method that folds a given array of integers by the middle x-times.
//
// An example says more than thousand words:

// Fold 1-times:
// [1,2,3,4,5] -> [6,6,3]
//
// A little visualization (NOT for the algorithm but for the idea of folding):
//
//  Step 1         Step 2        Step 3       Step 4       Step5
//                      5/           5|         5\
//                     4/            4|          4\
// 1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
// ----*----      ----*          ----*        ----*        ----*
//
//
// Fold 2-times:
// [1,2,3,4,5] -> [9,6]

mid = (array) => {
  len = array.length
  return Math.floor(len/2)
}
