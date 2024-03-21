const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  
  function removeDuplicates(param) {
    const uniqueValues = [];
    for (let i = 0; i < param.length; i++) {
      if (uniqueValues.indexOf(param[i]) === -1) {
        uniqueValues.push(param[i]);
      }
    }
    return uniqueValues;
  }
  
  console.log(removeDuplicates(duplicates)); 
  