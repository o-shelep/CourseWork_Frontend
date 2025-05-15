export function formatSubject(subject) {
  if (!subject) return "";
  return subject
    .split(" ")
    .map((word) => word[0]?.toUpperCase())
    .join("")
    .slice(0, 2);
}

export function truncateDescription(description, maxLength = 120) {
  if (!description) return "";
  return description.length > maxLength
    ? description.slice(0, maxLength).trim() + "..."
    : description;
}
