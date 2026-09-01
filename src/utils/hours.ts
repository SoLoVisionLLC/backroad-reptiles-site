export interface StoreStatus {
  isOpen: boolean;
  statusText: string;
  statusType: 'open' | 'closing-soon' | 'closed';
  nextOpenText: string;
  todayHoursText: string;
  currentDayName: string;
}

export const WEEKLY_HOURS = [
  { day: 'Sunday', open: null, close: null, text: 'Closed (Appointments Available)' },
  { day: 'Monday', open: null, close: null, text: 'Closed (Maintenance & Setup Delivery)' },
  { day: 'Tuesday', open: 16, close: 20, text: '4:00 PM – 8:00 PM' },
  { day: 'Wednesday', open: 16, close: 20, text: '4:00 PM – 8:00 PM' },
  { day: 'Thursday', open: 16, close: 20, text: '4:00 PM – 8:00 PM' },
  { day: 'Friday', open: null, close: null, text: 'Closed (Feeder Restock / Appointments)' },
  { day: 'Saturday', open: null, close: null, text: 'Closed (Private Consultations)' },
];

export function getStoreStatus(): StoreStatus {
  // Get time in Eastern Timezone (Ohio)
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'America/New_York',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  };
  
  const formatter = new Intl.DateTimeFormat('en-US', options);
  const parts = formatter.formatToParts(now);
  
  let weekday = '';
  let hour = 0;
  let minute = 0;
  
  for (const part of parts) {
    if (part.type === 'weekday') weekday = part.value;
    if (part.type === 'hour') hour = parseInt(part.value, 10);
    if (part.type === 'minute') minute = parseInt(part.value, 10);
  }

  const currentHourDecimal = hour + minute / 60;
  const todaySchedule = WEEKLY_HOURS.find(h => h.day.toLowerCase() === weekday.toLowerCase()) || WEEKLY_HOURS[2];

  let isOpen = false;
  let statusType: 'open' | 'closing-soon' | 'closed' = 'closed';
  let statusText = '';
  let nextOpenText = 'Opens Tuesday at 4:00 PM';

  if (todaySchedule.open !== null && todaySchedule.close !== null) {
    if (currentHourDecimal >= todaySchedule.open && currentHourDecimal < todaySchedule.close) {
      isOpen = true;
      if (todaySchedule.close - currentHourDecimal <= 1) {
        statusType = 'closing-soon';
        statusText = 'Closing Soon (8:00 PM)';
      } else {
        statusType = 'open';
        statusText = 'Open Now Until 8:00 PM';
      }
    } else if (currentHourDecimal < todaySchedule.open) {
      statusType = 'closed';
      statusText = `Opens Today at 4:00 PM`;
      nextOpenText = 'Opens Today at 4:00 PM';
    } else {
      statusType = 'closed';
      statusText = 'Closed for the Evening';
      // Find next open day
      if (weekday === 'Tuesday') nextOpenText = 'Opens Wednesday at 4:00 PM';
      else if (weekday === 'Wednesday') nextOpenText = 'Opens Thursday at 4:00 PM';
      else nextOpenText = 'Opens Next Tuesday at 4:00 PM';
    }
  } else {
    statusType = 'closed';
    statusText = 'Closed Today';
    if (weekday === 'Sunday' || weekday === 'Monday') {
      nextOpenText = 'Opens Tuesday at 4:00 PM';
    } else if (weekday === 'Friday' || weekday === 'Saturday') {
      nextOpenText = 'Opens Tuesday at 4:00 PM';
    }
  }

  return {
    isOpen,
    statusText,
    statusType,
    nextOpenText,
    todayHoursText: todaySchedule.text,
    currentDayName: weekday,
  };
}
