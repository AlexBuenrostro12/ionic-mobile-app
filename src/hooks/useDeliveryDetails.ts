import { useEffect, useState } from 'react';
import { getDeliveryDetails } from '../mocks/DeliveryDetailsMock';
import { DeliveryDetailsModel } from '../models/DeliveryDetailsModel';

interface UseDeliveryDetailsI {
  deliveryDetails: DeliveryDetailsModel | undefined;
}

const useDeliveryDeatils = (): UseDeliveryDetailsI => {
  const [deliveryDetails, setDeliveryDetails] = useState<DeliveryDetailsModel>();

  const getDeliveryDetailsHandler = async (): Promise<void> => {
    try {
      const response = await getDeliveryDetails();
      setDeliveryDetails(response);
    } catch (error) {
      console.error('Error at get Delivery Details: ', error);
    }
  }
  
  useEffect(() => {
    getDeliveryDetailsHandler();
  }, []);


  return  {
    deliveryDetails,
  }
}

export default useDeliveryDeatils;