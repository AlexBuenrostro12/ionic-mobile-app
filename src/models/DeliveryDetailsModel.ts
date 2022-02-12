export enum FormatDelivery {
  MINUTES = 'min',
  HOURS = 'hrs',
}

interface DeliveryI {
  deliveryIn: number;
  format: FormatDelivery;
}

export interface DeliveryDetailsModel {
  delivery: DeliveryI;
  homeDelivery: boolean;
  freeShipping: boolean;
  costShipping?: number;
}