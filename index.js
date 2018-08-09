var recipes = {};

function updateObjectWithKeyAndValue (recipes, key, value) {
  var newRecipes = Object.assign({key:value}, recipes);
  return newRecipes;
}