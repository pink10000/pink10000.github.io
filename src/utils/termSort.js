// src/utils/termSort.js

/**
 * Calculates a chronologically sortable score for an academic term.
 * Groups Winter and Spring into the previous calendar year's academic block,
 * ensuring the order flows: S222 -> FA22 -> WI23 -> SP23 -> FA23...
 */
export const getTermScore = (termStr) => {
  const match = termStr.match(/^([a-zA-Z0-9]+?)(\d{2})$/);
  if (!match) return 0;
  
  let prefix = match[1].toUpperCase();
  let year = parseInt(match[2], 10);
  
  let termWeight = 0;
  if (prefix.startsWith('S')) {
    termWeight = 1; // Summer 1/2
  } else if (prefix === 'FA') {
    termWeight = 2; // Fall
  } else if (prefix === 'WI') {
    termWeight = 3; // Winter
    year -= 1; // Winter is part of the previous calendar year's academic block
  } else if (prefix === 'SP') {
    termWeight = 4; // Spring
    year -= 1; // Spring is part of the previous calendar year's academic block
  }
  
  return (year * 10) + termWeight;
};
