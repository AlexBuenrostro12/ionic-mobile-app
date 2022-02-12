import { DeliveryDetailsModel, FormatDelivery } from "../models/DeliveryDetailsModel";

const deliveryDetailsMock: DeliveryDetailsModel = {
  delivery: {
    deliveryIn: 35,
    format: FormatDelivery.MINUTES    
  },
  homeDelivery: true,
  freeShipping: false,
  costShipping: 10,
}

export const getDeliveryDetails = async (): Promise<DeliveryDetailsModel> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(deliveryDetailsMock);
    }, 300);
  });
}