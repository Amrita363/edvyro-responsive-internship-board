# Responsive and accessibility test notes

Record actual results before submitting.

| Viewport | What to verify | Result |
|---|---|---|
| 360 × 800 | Single-column cards; no horizontal scrolling; filters stack vertically | Pending manual test |
| 768 × 1024 | Two-column cards; search and filters remain usable | Pending manual test |
| 1366 × 768 | Three-column cards; hero and filter panel fit comfortably | Pending manual test |

## Keyboard checks
- Tab to the skip link, navigation, search, filters, reset, save buttons, and details buttons.
- Use Enter/Space to activate buttons.
- Open a details dialog and close it using the close button or Escape.
- Confirm focus indicators are visible.

## Functional checks
- Search for “Python”, “MetricMint”, and “SQL”.
- Select “Web Development” and then “Remote”.
- Search for a term that does not exist and confirm the empty state appears.
- Use “Clear all filters” and confirm all records return.
- Save and unsave a listing and confirm its state changes.
