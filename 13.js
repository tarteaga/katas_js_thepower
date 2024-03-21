const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  
  function finderName(array, name) {
    const index = array.indexOf(name);
    if (index !== -1) {
      return [true, index];
    } else {
      return false;
    }
  }
  
  console.log(finderName(nameFinder, 'Tony'));
  console.log(finderName(nameFinder, 'Wanda')); 