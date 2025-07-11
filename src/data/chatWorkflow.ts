
export interface UserData {
  budget?: string;
  carType?: string;
  brand?: string;
  selectedCar?: any;
  testDriveDate?: string;
  testDriveTime?: string;
  name?: string;
  phone?: string;
  hasLicense?: boolean;
  peopleCount?: string;
  location?: string;
}

export type ChatStep = 
  | 'welcome'
  | 'budget_selection'
  | 'car_type_selection'
  | 'brand_preference'
  | 'car_listing'
  | 'car_details'
  | 'test_drive_date'
  | 'test_drive_time'
  | 'contact_form'
  | 'test_drive_location'
  | 'confirmation'
  | 'final_thanks';

const cars = {
  maruti: [
    {
      id: '1',
      name: 'Brezza',
      year: 2022,
      price: '₹9.2L',
      mileage: '28,000km',
      fuel: 'Petrol',
      transmission: 'Manual',
      color: 'Arctic White',
      ownership: 1,
      images: [
       ' https://drive.google.com/drive/folders/1b2tl8_vtAfasQer6thG70LcgN83dtpZU'
      ]
    },
    {
      id: '2',
      name: 'Vitara Brezza',
      year: 2021,
      price: '₹8.5L',
      mileage: '35,000km',
      fuel: 'Petrol',
      transmission: 'Manual',
      color: 'Granite Grey',
      ownership: 1,
      images: [
        'https://drive.google.com/drive/folders/1b2tl8_vtAfasQer6thG70LcgN83dtpZU'
      ]
    },
    {
      id: '3',
      name: 'S-Cross',
      year: 2020,
      price: '₹7.8L',
      mileage: '42,000km',
      fuel: 'Petrol',
      transmission: 'Manual',
      color: 'Pearl White',
      ownership: 1,
      images: [
        'https://drive.google.com/drive/folders/1b2tl8_vtAfasQer6thG70LcgN83dtpZU'
      ]
    }
  ],
  hyundai: [
    {
      id: '4',
      name: 'Creta',
      year: 2022,
      price: '₹12.5L',
      mileage: '25,000km',
      fuel: 'Petrol',
      transmission: 'Automatic',
      color: 'Phantom Black',
      ownership: 1,
      images: [
        'https://drive.google.com/drive/folders/1b2tl8_vtAfasQer6thG70LcgN83dtpZU'
      ]
    },
    {
      id: '5',
      name: 'Verna',
      year: 2021,
      price: '₹10.2L',
      mileage: '32,000km',
      fuel: 'Petrol',
      transmission: 'Manual',
      color: 'Polar White',
      ownership: 1,
      images: [
        'https://drive.google.com/drive/folders/1b2tl8_vtAfasQer6thG70LcgN83dtpZU'
      ]
    },
    {
      id: '6',
      name: 'i20',
      year: 2020,
      price: '₹8.8L',
      mileage: '38,000km',
      fuel: 'Petrol',
      transmission: 'Manual',
      color: 'Fiery Red',
      ownership: 1,
      images: [
        'https://drive.google.com/drive/folders/1b2tl8_vtAfasQer6thG70LcgN83dtpZU'
      ]
    }
  ],
  tata: [
    {
      id: '7',
      name: 'Nexon',
      year: 2022,
      price: '₹11.5L',
      mileage: '22,000km',
      fuel: 'Petrol',
      transmission: 'Manual',
      color: 'Flame Red',
      ownership: 1,
      images: [
        'https://drive.google.com/drive/folders/1b2tl8_vtAfasQer6thG70LcgN83dtpZU'
      ]
    },
    {
      id: '8',
      name: 'Harrier',
      year: 2021,
      price: '₹16.8L',
      mileage: '28,000km',
      fuel: 'Diesel',
      transmission: 'Manual',
      color: 'Orcus White',
      ownership: 1,
      images: [
        'https://drive.google.com/drive/folders/1b2tl8_vtAfasQer6thG70LcgN83dtpZU'
      ]
    },
    {
      id: '9',
      name: 'Safari',
      year: 2020,
      price: '₹18.2L',
      mileage: '35,000km',
      fuel: 'Diesel',
      transmission: 'Automatic',
      color: 'Dual Tone',
      ownership: 1,
      images: [
        'https://drive.google.com/drive/folders/1b2tl8_vtAfasQer6thG70LcgN83dtpZU'
      ]
    }
  ],
  mahindra: [
    {
      id: '10',
      name: 'XUV300',
      year: 2022,
      price: '₹13.2L',
      mileage: '18,000km',
      fuel: 'Diesel',
      transmission: 'Manual',
      color: 'Aquamarine',
      ownership: 1,
      images: [
        'https://drive.google.com/drive/folders/1b2tl8_vtAfasQer6thG70LcgN83dtpZU'
      ]
    },
    {
      id: '11',
      name: 'Scorpio',
      year: 2021,
      price: '₹15.5L',
      mileage: '45,000km',
      fuel: 'Diesel',
      transmission: 'Manual',
      color: 'Pearl White',
      ownership: 1,
      images: [
        'https://drive.google.com/drive/folders/1b2tl8_vtAfasQer6thG70LcgN83dtpZU'
      ]
    },
    {
      id: '12',
      name: 'Thar',
      year: 2020,
      price: '₹14.8L',
      mileage: '38,000km',
      fuel: 'Diesel',
      transmission: 'Manual',
      color: 'Mystic Copper',
      ownership: 1,
      images: [
        'https://drive.google.com/drive/folders/1b2tl8_vtAfasQer6thG70LcgN83dtpZU'
      ]
    }
  ],
  kia: [
    {
      id: '13',
      name: 'Seltos',
      year: 2022,
      price: '₹14.2L',
      mileage: '20,000km',
      fuel: 'Petrol',
      transmission: 'Automatic',
      color: 'Glacier White',
      ownership: 1,
      images: [
        'https://drive.google.com/drive/folders/1b2tl8_vtAfasQer6thG70LcgN83dtpZU'
      ]
    },
    {
      id: '14',
      name: 'Sonet',
      year: 2021,
      price: '₹9.8L',
      mileage: '28,000km',
      fuel: 'Petrol',
      transmission: 'Manual',
      color: 'Aurora Black',
      ownership: 1,
      images: [
        'https://drive.google.com/drive/folders/1b2tl8_vtAfasQer6thG70LcgN83dtpZU'
      ]
    },
    {
      id: '15',
      name: 'Carens',
      year: 2023,
      price: '₹16.5L',
      mileage: '15,000km',
      fuel: 'Petrol',
      transmission: 'Automatic',
      color: 'Sparkling Silver',
      ownership: 1,
      images: [
        'https://drive.google.com/drive/folders/1b2tl8_vtAfasQer6thG70LcgN83dtpZU'
      ]
    }
  ],
  toyota: [
    {
      id: '16',
      name: 'Innova Crysta',
      year: 2021,
      price: '₹19.5L',
      mileage: '32,000km',
      fuel: 'Diesel',
      transmission: 'Manual',
      color: 'Silver Metallic',
      ownership: 1,
      images: [
        'https://drive.google.com/drive/folders/1b2tl8_vtAfasQer6thG70LcgN83dtpZU'
      ]
    },
    {
      id: '17',
      name: 'Fortuner',
      year: 2020,
      price: '₹28.5L',
      mileage: '48,000km',
      fuel: 'Diesel',
      transmission: 'Automatic',
      color: 'White Pearl',
      ownership: 1,
      images: [
        'https://drive.google.com/drive/folders/1b2tl8_vtAfasQer6thG70LcgN83dtpZU'
      ]
    }
  ]
};

export const chatWorkflow: Record<ChatStep, any> = {
  welcome: {
    message: "Hello! 👋 Welcome to AutoMart Dealership. I'm here to help you find your perfect used car. How can I assist you today?",
    options: [
      { id: 'browse', text: '🚗 Browse Used Cars', value: 'browse' },
      { id: 'valuation', text: '💰 Get Car Valuation', value: 'valuation' },
      { id: 'contact', text: '📞 Contact Our Team', value: 'contact' },
      { id: 'about', text: 'ℹ️ About Us', value: 'about' }
    ],
    nextStep: (optionId: string) => optionId === 'browse' ? 'budget_selection' : 'welcome'
  },

  budget_selection: {
    message: "Great choice! Let's find your perfect car. First, what's your budget range?",
    options: [
      { id: 'under5', text: 'Under ₹5 Lakhs', value: 'Under ₹5 Lakhs' },
      { id: '5-10', text: '₹5-10 Lakhs', value: '₹5-10 Lakhs' },
      { id: '10-15', text: '₹10-15 Lakhs', value: '₹10-15 Lakhs' },
      { id: '15-20', text: '₹15-20 Lakhs', value: '₹15-20 Lakhs' },
      { id: 'above20', text: 'Above ₹20 Lakhs', value: 'Above ₹20 Lakhs' }
    ],
    updateUserData: (userData: UserData, optionId: string) => {
      const budgetMap: Record<string, string> = {
        'under5': 'Under ₹5 Lakhs',
        '5-10': '₹5-10 Lakhs',
        '10-15': '₹10-15 Lakhs',
        '15-20': '₹15-20 Lakhs',
        'above20': 'Above ₹20 Lakhs'
      };
      userData.budget = budgetMap[optionId];
    },
    nextStep: () => 'car_type_selection'
  },

  car_type_selection: {
    message: (userData: UserData) => `Perfect! ${userData.budget} gives you excellent options. What type of car do you prefer?`,
    options: [
      { id: 'hatchback', text: '🚗 Hatchback (Compact, city-friendly)', value: 'Hatchback' },
      { id: 'sedan', text: '🚙 Sedan (Comfort + boot space)', value: 'Sedan' },
      { id: 'suv', text: '🚙 SUV (High seating, family car)', value: 'SUV' },
      { id: 'premium', text: '🏎️ Premium Hatchback (Sporty + efficient)', value: 'Premium Hatchback' },
      { id: 'all', text: '📋 Show me all types', value: 'All Types' }
    ],
    updateUserData: (userData: UserData, optionId: string) => {
      const typeMap: Record<string, string> = {
        'hatchback': 'Hatchback',
        'sedan': 'Sedan',
        'suv': 'SUV',
        'premium': 'Premium Hatchback',
        'all': 'All Types'
      };
      userData.carType = typeMap[optionId];
    },
    nextStep: () => 'brand_preference'
  },

  brand_preference: {
    message: (userData: UserData) => `Excellent choice! ${userData.carType}s are perfect for families. Which brand do you prefer?`,
    options: [
      { id: 'maruti', text: 'Maruti Suzuki (Best service network)', value: 'Maruti Suzuki' },
      { id: 'hyundai', text: 'Hyundai (Premium features)', value: 'Hyundai' },
      { id: 'tata', text: 'Tata (5-star safety rating)', value: 'Tata' },
      { id: 'mahindra', text: 'Mahindra (True SUV experience)', value: 'Mahindra' },
      { id: 'kia', text: 'Kia (Stylish & modern)', value: 'Kia' },
      { id: 'toyota', text: 'Toyota (Reliability & resale)', value: 'Toyota' },
      { id: 'honda', text: 'Honda (Engine reliability)', value: 'Honda' },
      { id: 'ford', text: 'Ford (Global technology)', value: 'Ford' },
      { id: 'skoda', text: 'Skoda (European luxury)', value: 'Skoda' },
      { id: 'volkswagen', text: 'Volkswagen (German engineering)', value: 'Volkswagen' },
      { id: 'nissan', text: 'Nissan (Innovation & comfort)', value: 'Nissan' },
      { id: 'any', text: 'Any brand (Show all options)', value: 'Any Brand' }
    ],
    updateUserData: (userData: UserData, optionId: string) => {
      const brandMap: Record<string, string> = {
        'maruti': 'Maruti Suzuki',
        'hyundai': 'Hyundai',
        'tata': 'Tata',
        'mahindra': 'Mahindra',
        'kia': 'Kia',
        'toyota': 'Toyota',
        'honda': 'Honda',
        'ford': 'Ford',
        'skoda': 'Skoda',
        'volkswagen': 'Volkswagen',
        'nissan': 'Nissan',
        'any': 'Any Brand'
      };
      userData.brand = brandMap[optionId];
    },
    nextStep: () => 'car_listing'
  },

  car_listing: {
    message: (userData: UserData) => `Perfect! Here are ${userData.brand} ${userData.carType}s available in your ${userData.budget} budget:`,
    getCars: (userData: UserData) => {
      const brandKey = userData.brand?.toLowerCase().replace(' suzuki', '').replace(' ', '');
      if (brandKey && cars[brandKey as keyof typeof cars]) {
        return cars[brandKey as keyof typeof cars];
      }
      return [...cars.maruti, ...cars.hyundai, ...cars.tata].slice(0, 6);
    },
    getDynamicOptions: (userData: UserData) => {
      const availableCars = userData.brand?.toLowerCase().replace(' suzuki', '').replace(' ', '');
      const carList = availableCars && cars[availableCars as keyof typeof cars] 
        ? cars[availableCars as keyof typeof cars]
        : [...cars.maruti, ...cars.hyundai, ...cars.tata].slice(0, 6);
      
      const carOptions = carList.map((car: any) => ({
        id: `car_${car.id}`,
        text: `${car.name} ${car.year} - ${car.price}`,
        value: car.id
      }));

      return [
        ...carOptions,
        { id: 'change', text: 'Change my search criteria', value: 'Change Search' }
      ];
    },
    updateUserData: (userData: UserData, optionId: string) => {
      if (optionId.startsWith('car_')) {
        const carId = optionId.replace('car_', '');
        // Find the car in all brands
        for (const brandCars of Object.values(cars)) {
          const foundCar = brandCars.find((car: any) => car.id === carId);
          if (foundCar) {
            userData.selectedCar = foundCar;
            console.log('Selected car:', foundCar); // Debug log
            break;
          }
        }
      }
    },
    nextStep: (optionId: string) => {
      if (optionId.startsWith('car_')) return 'car_details';
      if (optionId === 'change') return 'budget_selection';
      return 'car_listing';
    }
  },

  car_details: {
    message: (userData: UserData) => {
      const car = userData.selectedCar;
      console.log('Car details for:', car); // Debug log
      
      if (!car) {
        return "Sorry, there was an issue loading the car details. Please try selecting a car again.";
      }
      
      const imageElements = car.images?.map((url: string, index: number) => 
        `<img src="${url}" alt="${car.name} ${index + 1}" style="width: 100%; max-width: 300px; height: 200px; object-fit: cover; border-radius: 8px; margin: 8px 0;" />`
      ).join('') || '';
      
      return `Great choice! Here are pictures of the ${car.name} ${car.year}:

${imageElements}

✨ ${car.name} ${car.year} Details:
• Price: ${car.price}
• Mileage: ${car.mileage}
• Fuel: ${car.fuel}
• Transmission: ${car.transmission}
• Color: ${car.color}
• Insurance: Valid till Dec 2024
• Service History: Complete
• Ownership: ${car.ownership} Owner

What would you like to do next?`;
    },
    options: [
      { id: 'details', text: '📱 Get more details about this car', value: 'More Details' },
      { id: 'test_drive', text: '🚗 Schedule a test drive', value: 'Schedule Test Drive' },
      { id: 'financing', text: '💰 Check financing options', value: 'Financing Options' },
      { id: 'executive', text: '📞 Talk to our executive', value: 'Talk to Executive' },
      { id: 'back', text: '↩️ See other cars from the list', value: 'See Other Cars' },
      { id: 'new_search', text: '🔄 Start a new search', value: 'New Search' }
    ],
    nextStep: (optionId: string) => {
      if (optionId === 'test_drive') return 'test_drive_date';
      if (optionId === 'back') return 'car_listing';
      if (optionId === 'new_search') return 'budget_selection';
      if (optionId === 'details') return 'car_details';
      if (optionId === 'financing') return 'car_details';
      if (optionId === 'executive') return 'contact_form';
      return 'car_details';
    }
  },

  test_drive_date: {
    message: "Excellent! Let's schedule your test drive. When would you prefer?",
    options: [
      { id: 'today', text: 'Today (If available)', value: 'Today' },
      { id: 'tomorrow', text: 'Tomorrow', value: 'Tomorrow' },
      { id: 'weekend', text: 'This Weekend', value: 'This Weekend' },
      { id: 'next_week', text: 'Next Week', value: 'Next Week' },
      { id: 'specific', text: 'Let me choose specific date', value: 'Specific Date' }
    ],
    updateUserData: (userData: UserData, optionId: string) => {
      const dateMap: Record<string, string> = {
        'today': 'Today',
        'tomorrow': 'Tomorrow',
        'weekend': 'This Weekend',
        'next_week': 'Next Week',
        'specific': 'Specific Date'
      };
      userData.testDriveDate = dateMap[optionId];
    },
    nextStep: (optionId: string) => {
      if (optionId === 'weekend') return 'test_drive_time';
      return 'contact_form';
    }
  },

  test_drive_time: {
    message: "Perfect! Which time works better for you this weekend?",
    options: [
      { id: 'sat_morning', text: 'Saturday Morning (10 AM - 12 PM)', value: 'Saturday Morning (10 AM - 12 PM)' },
      { id: 'sat_afternoon', text: 'Saturday Afternoon (2 PM - 4 PM)', value: 'Saturday Afternoon (2 PM - 4 PM)' },
      { id: 'sat_evening', text: 'Saturday Evening (5 PM - 7 PM)', value: 'Saturday Evening (5 PM - 7 PM)' },
      { id: 'sun_morning', text: 'Sunday Morning (10 AM - 12 PM)', value: 'Sunday Morning (10 AM - 12 PM)' },
      { id: 'sun_afternoon', text: 'Sunday Afternoon (2 PM - 4 PM)', value: 'Sunday Afternoon (2 PM - 4 PM)' },
      { id: 'sun_evening', text: 'Sunday Evening (5 PM - 7 PM)', value: 'Sunday Evening (5 PM - 7 PM)' }
    ],
    updateUserData: (userData: UserData, optionId: string) => {
      const timeMap: Record<string, string> = {
        'sat_morning': 'Saturday Morning (10 AM - 12 PM)',
        'sat_afternoon': 'Saturday Afternoon (2 PM - 4 PM)',
        'sat_evening': 'Saturday Evening (5 PM - 7 PM)',
        'sun_morning': 'Sunday Morning (10 AM - 12 PM)',
        'sun_afternoon': 'Sunday Afternoon (2 PM - 4 PM)',
        'sun_evening': 'Sunday Evening (5 PM - 7 PM)'
      };
      userData.testDriveTime = timeMap[optionId];
    },
    nextStep: () => 'contact_form'
  },

  contact_form: {
    message: (userData: UserData) => `Great! ${userData.testDriveTime || userData.testDriveDate} test drive it is. I need some details to confirm your booking:`,
    options: []
  },

  test_drive_location: {
    message: (userData: UserData) => `Thank you ${userData.name}! Your details are noted. Where would you like to take the test drive?`,
    options: [
      { id: 'showroom', text: 'Pick up from our showroom', value: 'Pick up from our showroom' },
      { id: 'home', text: 'We bring the car to your location', value: 'We bring the car to your location' },
      { id: 'landmark', text: 'Meet at a nearby landmark', value: 'Meet at a nearby landmark' },
      { id: 'office', text: 'At your office (if weekend is suitable)', value: 'At your office' }
    ],
    updateUserData: (userData: UserData, optionId: string) => {
      const locationMap: Record<string, string> = {
        'showroom': 'Pick up from our showroom',
        'home': 'We bring the car to your location',
        'landmark': 'Meet at a nearby landmark',
        'office': 'At your office'
      };
      userData.location = locationMap[optionId];
    },
    nextStep: () => 'confirmation'
  },

  confirmation: {
    message: (userData: UserData) => `Perfect! Here's your test drive confirmation:

📋 TEST DRIVE CONFIRMED:
👤 Name: ${userData.name}
📱 Phone: ${userData.phone}
🚗 Car: ${userData.selectedCar?.name} ${userData.selectedCar?.year} (${userData.selectedCar?.price})
📅 Date: ${userData.testDriveDate}
⏰ Time: ${userData.testDriveTime || 'To be confirmed'}
📍 Location: ${userData.location}

📍 Showroom Address:
AutoMart Dealership
🅿️ Free parking available

What to bring:
✅ Valid driving license
✅ Any photo ID

What else can I help you with?`,
    options: [
      { id: 'directions', text: 'Get directions to showroom', value: 'Get Directions' },
      { id: 'documents', text: 'Know what documents to bring', value: 'Documents Required' },
      { id: 'other_cars', text: 'See other cars too', value: 'See Other Cars' },
      { id: 'financing', text: 'Get financing information', value: 'Financing Info' },
      { id: 'executive', text: 'Talk to our sales executive', value: 'Talk to Executive' },
      { id: 'done', text: 'All set, see you soon! 👋', value: 'All set!' }
    ],
    nextStep: (optionId: string) => {
      if (optionId === 'done') return 'final_thanks';
      if (optionId === 'other_cars') return 'car_listing';
      return 'confirmation';
    }
  },

  final_thanks: {
    message: (userData: UserData) => `Wonderful ${userData.name}! 🎉

Your ${userData.testDriveDate} test drive is all confirmed. Our executive Suresh will call you to confirm directions and answer any questions.

📞 Need help before your test drive?
Call us: +91-9876543210
WhatsApp: This number

Quick reminder: We'll also have financing options ready if you like the car during your test drive!

Looking forward to seeing you soon!
Have a great day! 😊`,
    options: [
      { id: 'restart', text: '🔄 Start a new conversation', value: 'Start New' }
    ],
    nextStep: () => 'welcome'
  }
};
