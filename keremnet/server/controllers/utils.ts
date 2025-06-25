export function parseId(idParam: string): number | null {
  const id = Number(idParam);
  return Number.isNaN(id) ? null : id;
}