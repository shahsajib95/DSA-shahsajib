function parentheses(str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === "(" || char === "{" || char === "[") {
      // If it's an open bracket, push it onto the stack
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      // If it's a closing bracket, check if it matches the top of the stack
      if (stack.length === 0) {
        return false; // No matching open bracket found
      } else {
        let top = stack.pop(); // Pop the top element from the stack
        if (
          (top === "(" && char !== ")") ||
          (top === "{" && char !== "}") ||
          (top === "[" && char !== "]")
        ) {
          return false; // Mismatched brackets
        }
      }
    }
  }

  // After processing the entire string, if the stack is empty, it's balanced
  return stack.length === 0;
}

let str = "(({})[])";
console.log(parentheses(str)); // This will print true
