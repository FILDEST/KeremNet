export function loadImage(imagePath?: string, baseUrl?: string): string | undefined {
  return imagePath && baseUrl ? `${baseUrl}/${imagePath}` : undefined;
}