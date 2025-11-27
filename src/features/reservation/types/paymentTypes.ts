export type statusTypes = 'pending' | 'paid' | 'refunded';
export type paymentTypes = 'PayPal' | 'Debit' | 'Klarna' | 'Google_Pay' | 'Swish';

export interface Payment {
  payment_id: number;
  reservation_id: number;
  amount: number;
  payment_method: string;
  status: statusTypes;
  payment_date: Date;
}