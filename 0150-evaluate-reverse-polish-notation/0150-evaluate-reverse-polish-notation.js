/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];

    for(let i = 0; i < tokens.length; i++) {

        if(tokens[i] == '+' || tokens[i] === '-' || tokens[i] === '*' || tokens[i] === '/') {
            
            let x = stack.pop()
            let y = stack.pop()
            
            switch(tokens[i]) {
                case '+': stack.push(x+y); break;
                case '-': stack.push(y-x); break;
                case '*': stack.push(x*y); break;
                case '/': stack.push(Math.trunc(y/x)); break;
            }

        }
        
        else stack.push(parseInt(tokens[i]))
    }

    return stack.pop()
};