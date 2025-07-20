import { addDays, addWeeks, addMonths, format } from "date-fns";

/**
 * Generate array of occurrence dates according to recurrence.
 * @param {string} startDate - in 'yyyy-MM-dd' format
 * @param {string} recurrence - "none"|"daily"|"weekly"|"monthly"
 * @param {number} count - Number of occurrences to generate
 * @returns {string[]} - Dates in 'yyyy-MM-dd'
 */
export function generateOccurrences(startDate, recurrence, count = 5) {
  if (!startDate) return [];
  const results = [];
  let current = new Date(startDate);

  for (let i = 0; i < count; ++i) {
    results.push(format(current, "yyyy-MM-dd"));
    if (recurrence === "none") break;
    if (recurrence === "daily") current = addDays(current, 1);
    if (recurrence === "weekly") current = addWeeks(current, 1);
    if (recurrence === "monthly") current = addMonths(current, 1);
  }
  return results;
}
