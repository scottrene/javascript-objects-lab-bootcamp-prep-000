var recipes = {};

function updateObjectWithKeyAndValue (recipes, key, value) {
  recipes = Object.assign(recipes, {key:value});
  return recipes;
}