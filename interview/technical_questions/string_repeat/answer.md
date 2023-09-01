# StringChallenge - Length of repeating character

## Answer


```js
function StringChallenge(str) { 
  let result = '';
  [...str].forEach(char => {
    const lastChar = result[result.length - 1];

    if (lastChar !== char) {
      // return the case where new character comes
      // init the new character to 1 + char
      result = `${result}1${char}`;
      return
    }

    // Add the count if character is still the same as previous
    const count = Number(result[result.length - 2]) + 1;
    const previousString = `${result.substring(0, result.length - 2)}`
    const currentChar = `${result.substring(result.length - 1)}`
    result = `${previousString}${count}${currentChar}`;
  })

  return result
}
```