var recipes = {prop2: 2};

function updateObjectWithKeyAndValue (recipes, key, value) {
  recipes = Object.assign(recipes, {key:value});
  return recipes;
}