//1.merging two arrays
// let arr1=[1,3,5,7,9]
// let arr2=[2,4,6,8]
// let res=arr1.concat(arr2)
// console.log(res.sort())

//2.Rotating array 
// function rotate(num,k){
// for (let i=0; i<k; i++){
//     num.unshift(num.pop())
// }
// return num
// }
// let num=[1,2,3,4,5,6,7]
// let k=3
// console.log(rotate(num,k))

//3.compare two arrays of equality
// let a=[2,7,1,8,4]
// let b=[7,1,8,2,4]
// function compare(a,b) {
//     a.sort()
//     b.sort()
//     for (let i=0; i<a.length; i++){
//         for (let j=0; j<b.length; j++){
//             if (a[i]!=[j]){
//                     return false;
//             }
//             else {
//                 return true;
//             }
// }
//     }
// }
// console.log(compare(a,b));

//4.first occurence
// let s=[2,6,1,4,5,4]
// let tar=4
// function first(s,tar){
// for (let i=0; i<s.length; i++) {
//     if (s[i]==tar){
//         return i;
//     }
// }
// }
// console.log(first(s,tar));


//5.Intersection of two arrays
// let first=[1,2,3,4]
// let second=[1,5,2,6]
// let temp=[]
// for (let i=0; i<first.length; i++){
//     for (let j=0; j<second.length; j++){
//         if (first[i]==second[j]){
//             temp.push(first[i])
//         }
// }
// }
// console.log(temp);
