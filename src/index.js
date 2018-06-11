function add(a, b){
  return a + b;
}

exports.add = add;

function longest(arr){
  const result = arr.sort(function(a, b){
    return b.length - a.length;
  })
  return result[0];
}

exports.longest = longest;

function l337(string){
  let newString = string
    .replace('l','1')
    .replace('z','2')
    .replace('e','3')
    .replace('a','4')
    .replace('s','5')
    .replace('g','6')
    .replace('t','7')
    .replace('b','8')
    .replace('q','9')
    .replace('o','0');
  return newString;
}

exports.l337 = l337;

function uniqueStrings(arr){
  return Array.from(new Set(arr));
}

exports.uniqueStrings = uniqueStrings;

function DeveloperObject(name, languages) {
  this.name = name;
  this.languages = languages;

}

exports.DeveloperObject = DeveloperObject;
