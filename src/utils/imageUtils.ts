/**
 * Utility function to get the correct image path for both development and production
 * @param imageName - The name of the image file (e.g., 'roofing-sheet.jpg')
 * @returns Full path to the image
 */
export const getImagePath = (imageName: string): string => {
  // In production, the public folder is served at the root
  return `/images/products/${imageName}`;
};
