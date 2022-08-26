type menuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';

export const createObjectMenu = (changeMenu: menuOptions) => {
    let objectChange = {
      all: false,
      dog: false,
      cat: false,
      fish: false
    };

      if (changeMenu !== '') {
       objectChange[changeMenu] = true
      }

      return objectChange;
}
