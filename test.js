function findOppositeNumber(n,inputNumber){
    if (0<= inputNumber && inputNumber <= n-1){
      if (inputNumber === n/2){
        return 0
      }
      if (inputNumber > n/2){
        return inputNumber - n/2
      }
      if (inputNumber < n/2){
        return inputNumber + n/2
      }
    }
    else{
      return "no opposite number in range"
    }
  }
  function merge2String(s1,s2){
    let mergeString =""
    let countOfs1 = 0
    let countOfs2 = 0
    let count = 0
    while (count< s1.length + s2.length ){
      if  (count %2 ==0 ){
        if  (countOfs1 < s1.length){
        mergeString += s1[countOfs1]
        countOfs1 += 1
        }
        else {
          mergeString += s2[countOfs1]
          countOfs1 += 2
          countOfs2 += 1
        }
      }
      else{
        if  (countOfs2 < s2.length){
        mergeString += s2[countOfs2]
        countOfs2 += 1
        }
        else {
          mergeString +=s1[countOfs2]
          countOfs1 += 1
          countOfs2 += 2
        }
      }
        count += 1
    }
    return mergeString
        
    }
    