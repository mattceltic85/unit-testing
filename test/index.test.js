const functions = require('../src/index');

test('Addition', function(){
  const expected = 5;
  const result = functions.add(2, 3);
  expect(result).toBe(expected);
});

test('LongestString',function(){
  const expected = 'Banana';
  const result = functions.longest(['Apple','Banana','Orange']);
  expect(result).toBe(expected);
})

test('testl337',function(){
  const expected = '1234567890'
  const result = functions.l337('lzeasgtbqo');
  expect(result).toBe(expected);
})

test('uniqueStringsTest',function(){
  const expected = (['a', 'b', 'c', 'd', 'e', 'f', 'g']);
  const result = functions.uniqueStrings(['a', 'b', 'a', 'b', 'c', 'd', 'e', 'f', 'g']);
  expect(result).toEqual(expected);
})

test('DeveloperTest', function(){
  const expected = "Python"
  const result = new functions.DeveloperObject("Ethan",["Java","Ruby","Python"]);

  expect(result.languages[2]).toBe("Python")
  expect(result.name).toBe("Ethan")
})
