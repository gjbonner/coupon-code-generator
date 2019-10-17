function coupon(num, codes, dash){
    const numeric = [0,1,2,3,4,5,6,7,8,9]
    const alpha = ['A','B','C','D','E','F','G','H','I']
    let codesArr = []
    let code = []
    let j = 0;
      //4 numbers, 4 letters
    while(j < codes){
      for(let i = 0; i < num; i++){
      let randomNum = Math.floor(Math.random() * numeric.length);
      let randomLetter = Math.floor(Math.random() * alpha.length);
      if(i % 2 === 0 || i== 3 || i== 7){
        code.push(numeric[randomNum])
      } else {
        code.push(alpha[randomLetter])
      }
      }
      
      //splice dash at either indexes of 3 or 4
      if(dash === 4){
        for(let i = 4; i < num;){
        code.splice(i, 0, '-')
        i+=5
        }
      } else if (dash === 3){
        for(let i = 3; i < num;){
          code.splice(i,0, '-')
        i+=4
        }
      } else {
        return "invalid"
      }
  
      
      codesArr.push(code.join(''))
      code = []
     j++
  
    }
  
    return codesArr
  }