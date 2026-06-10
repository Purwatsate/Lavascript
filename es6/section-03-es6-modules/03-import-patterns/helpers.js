/**
 * helpers.js — Import patterns demo module
 */

export const VERSION = '2.0.0';

export function formatPrice(amount) {
  return `$${amount.toFixed(2)}`;
}

export function formatDate(date) {
  return date.toISOString().split('T')[0];
}

export default function log(message) {
  console.log(`[LOG] ${message}`);
}

// side effect — module load ဖြစ်တာနဲ့ run (import only for side effect demo)
export const loadedAt = new Date().toISOString();
