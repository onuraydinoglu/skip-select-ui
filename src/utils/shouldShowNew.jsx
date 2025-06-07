// NOTE:
// The API currently returns the same created_at for all skips,
// so some skips are manually marked as "New" for UI/demo purposes.
// The actual logic for newness is handled via `isNew()`.

import { isNew } from "./isNew";
import { manualNewSkipIds } from "./manualNewSkips";

export const shouldShowNew = (createdAt, id) => {
  return isNew(createdAt) || manualNewSkipIds.includes(id);
};
