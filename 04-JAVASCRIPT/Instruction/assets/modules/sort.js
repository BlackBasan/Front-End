
/*
SORT FUNCTION
If the result is negative, a is sorted before b.
If the result is positive, b is sorted before a.
If the result is 0, no changes are done with the sort order of the two values.
*/
//const numbers = [23, 1, 8, 5, 7, 45, 12, 16, 34, 25]
const numberSortASC = (arr) => { 
    return arr.sort((a, b)=>a-b);
 }

 

 const numberSortDESC = (arr) => { 
    return arr.sort((a, b)=>b-a);
 }

 const stringSortASC = (arr)=>{
    return arr.sort((a, b)=>a.localeCompare(b));
 }

 const stringSortDESC = (arr)=>{
    return arr.sort((a, b)=>b.localeCompare(a));
 }

 const randomSort = (arr)=>{
    return arr.sort(()=>Math.random() - 0.5);  //Math.random() --> 0 - 1
 }

 

 export default randomSort;
 export {numberSortASC, numberSortDESC, stringSortASC, stringSortDESC};