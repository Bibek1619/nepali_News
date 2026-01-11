import NepaliDate from 'nepali-date-converter';

// Function to get the current Nepali date and time
export const getNepaliDateAndTime = () => {
  const now = new Date(); // Get current date and time
  const nepaliDate = new NepaliDate(now); // Convert to Nepali date

  // Format the date and time
  const year = nepaliDate.getYear();
  const month = nepaliDate.getMonth() + 1; // Months are 0-indexed
  const day = nepaliDate.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  // Format the time as "HH:MM"
  const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')}`;

  // Format the date as "YYYY-MM-DD"
  const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

  return { formattedDate, formattedTime };
};

// Function to get the Nepali month name
export const getNepaliMonthName = (month) => {
  const months = [
    'बैशाख', 'जेठ', 'असार', 'साउन', 'भदौ', 'असोज',
    'कार्तिक', 'मंसिर', 'पुष', 'माघ', 'फाल्गुन', 'चैत्र'
  ];
  return months[month - 1]; // Months are 1-indexed
};

// Function to get the Nepali day name
export const getNepaliDayName = (day) => {
  const days = [
    'आइतबार', 'सोमबार', 'मंगलबार', 'बुधबार', 'बिहिबार', 'शुक्रबार', 'शनिबार'
  ];
  return days[day];
};