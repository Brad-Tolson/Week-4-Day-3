// const balancedParens(s) {
//     const stack = [];
//     for (const c of s) {
//       if (c === '(') {
//         stack.push(c);
//       } else if (c === ')') {
//         if (!stack || stack.pop() !== '(') {
//           return false;
//         }
//       }
//     }
//     return !stack.length;
//   }

//   console.log(balancedParens("()"))
//   console.log(balancedParens("(Oh Noes!)("))
//   console.log(balancedParens("((There's a bonus open paren here.)"))
//   console.log(balancedParens(")"))
//   console.log(balancedParens("("))
//   console.log(balancedParens("(This has (too many closes.) ) )"))
//   console.log(balancedParens("Hey...there are no parens here!"))

const balanced = str => {
    let count = 0

    for(let i = 0; i < str.length; i++){
        if(str[i] === '('){
            count++
        } else if (str[i] === ')'){
            count--
        }

        if(count < 0){
            return false
        }
    }
    
    return count === 0

}    


console.log(balanced('((((()))'))