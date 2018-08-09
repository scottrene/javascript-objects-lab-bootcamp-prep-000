var recipes = {prop2: 2};

function updateObjectWithKeyAndValue (recipes, key, value) {
  Object.assign({}, recipes);
  return recipes;
}