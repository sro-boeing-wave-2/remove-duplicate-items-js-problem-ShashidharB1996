/**
 * Removes all the duplicate items from the collection
 * @param {Array} items
 * @returns {Array}
 */
const removeDuplicateItems = (items) => {
  const arraySet = new Set(items);
  const out = [...arraySet];
  return out;
};
module.exports = removeDuplicateItems;
