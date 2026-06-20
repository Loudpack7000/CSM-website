export const BUSINESS = {
  name: 'Cedar Shingle Maintenance',
  email: 'cedarshinglellc@gmail.com',
  phone: '(847) 924-1260',
  phoneTel: '8479241260',
  street: '514 5th Street',
  city: 'Northfield',
  state: 'Illinois',
  stateAbbr: 'IL',
  zip: '60093',
  serviceArea: 'Northfield, IL & surrounding communities',
  hours: {
    weekdays: 'Mon–Fri: 8:00 AM – 6:00 PM',
    saturday: 'Sat: 9:00 AM – 2:00 PM',
  },
};

export const BUSINESS_ADDRESS_LINE1 = `${BUSINESS.street}`;
export const BUSINESS_ADDRESS_LINE2 = `${BUSINESS.city}, ${BUSINESS.state} ${BUSINESS.zip}`;
export const BUSINESS_ADDRESS_FULL = `${BUSINESS.street}, ${BUSINESS.city}, ${BUSINESS.state} ${BUSINESS.zip}`;

export const BUSINESS_MAPS_URL = `https://maps.google.com/?q=${encodeURIComponent(BUSINESS_ADDRESS_FULL)}`;
