// Determine the relative difference (percentage) between 2 values
export const percentDiff = (a, b) => {
  return  100 * Math.abs( ( a - b ) / ( (a+b)/2 ) );
};

/**
 * Slugify a string
 *
 * @param  {string} text
 * @return {string} text
 */
export const slugify = (text) => {
return text
  .toString()
  .toLowerCase()
  .replace(/\s+/g, '_')
  .replace(/[^\w-]+/g, '')
  .replace(/--+/g, '_')
  .replace(/^-+/, '')
  .replace(/-+$/, '');
};

export const normalizeGreek = (text) => {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

export const normalizePolytonicGreek = (text) => {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

export const  _noop = () => {}
