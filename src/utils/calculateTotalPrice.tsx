export function calculateTotalPrice (checkIn: Date, checkOut: Date, price_per_night: number | undefined) {

  // Calculate differance
  const diff = checkOut.getTime() - checkIn.getTime();

  // Convert to full days
  const nights = Math.ceil(diff / (1000 * 60 * 60 * 24));

  // Return 0 if number is 0 or lower
  if (nights <= 0) return 0;

  // Return 0 if price per night is not provided
  if (!price_per_night) return 0;

  // Calculate total price and return
  return nights * price_per_night;
}
