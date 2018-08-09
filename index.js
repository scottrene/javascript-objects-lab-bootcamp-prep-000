var recipes = {};

function updateObjectWithKeyAndValue (recipes, key, value) {
  Object.assign(recipes, {key: value});
  return recipes;
}