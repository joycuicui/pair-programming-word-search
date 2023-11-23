const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return false;
  }

  for (const array of letters) {
    const horizontalJoin = array.join("");
    if (horizontalJoin.includes(word.toUpperCase())) {
      return true;
    }
  }
  for (let i = 0; i < letters[0].length; i++) {
    let vertical = "";
    for (let j = 0; j < letters.length; j++) {
      vertical += letters[j][i];
    }
    if (vertical.includes(word.toUpperCase())) {
      return true;
    }
  }
  return false;
};

module.exports = wordSearch;
