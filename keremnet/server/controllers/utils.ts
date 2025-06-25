export function parseId(idParam: string): string | null {
  return idParam && idParam.length > 0 ? idParam : null;
}