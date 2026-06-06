export interface ReviewItem {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
  avatar: string;
}

export const googleReviews: ReviewItem[] = [
  {
    id: 1,
    author: 'Robert Sterling',
    rating: 5,
    text: 'SmileCare represents the pinnacle of dental care. The interior feels like a luxury hotel lounge. Dr. Adams performed a bone graft and implant, and it was entirely pain-free. Outstanding service!',
    date: '3 weeks ago',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
  },
  {
    id: 2,
    author: 'Clarissa Montgomery',
    rating: 5,
    text: 'I completed my Invisalign treatment with Dr. Chen. She used 3D models to show me my progress, and I am absolutely thrilled with my new smile. Flawless clinic hygiene and technology.',
    date: '1 month ago',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
  },
  {
    id: 3,
    author: 'Jonathan Reynolds',
    rating: 5,
    text: 'Had an emergency root canal on a Saturday. They took me in within an hour. The staff is polite, professional, and explain everything. SmileCare is easily the best private clinic in town.',
    date: '2 months ago',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150'
  }
];

export const insurancePartners = [
  { name: 'Delta Dental', type: 'PPO Accept' },
  { name: 'MetLife Dental', type: 'PPO Accept' },
  { name: 'Cigna Dental', type: 'PPO Accept' },
  { name: 'Aetna Dental', type: 'PPO Accept' },
  { name: 'Guardian Dental', type: 'PPO Accept' },
  { name: 'UnitedHealthcare', type: 'PPO Accept' }
];

export const serviceAreas = [
  'Manhattan Medical District',
  'Midtown Manhattan',
  'Upper East Side',
  'Brooklyn Heights',
  'Astoria Queens',
  'Jersey City Downtown'
];

export const nearbyLocations = [
  'Central Park Medical Center (0.8 miles)',
  'Metro Heights Subway Hub (0.3 miles)',
  'St. Lukes Hospital Plaza (1.2 miles)',
  'Union Medical Tower (0.5 miles)'
];

export const businessHours = {
  weekday: '8:00 AM - 7:00 PM',
  saturday: '9:00 AM - 4:00 PM',
  sunday: 'Closed',
  emergency: '24/7 Helpline Available'
};

export const emergencyContact = {
  phone: '(555) 999-EMER',
  text: 'Text "EMERGENCY" to (555) 999-3637',
  guidelines: 'For dislodged teeth, acute swelling, or bleeding, contact our emergency response team immediately for priority same-day surgery slots.'
};

export const getDentistSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    'name': 'SmileCare Premium Dental Clinic',
    'image': 'https://smilecare-dental.com/src/assets/images/hero_fallback.png',
    '@id': 'https://smilecare-dental.com/#dentist',
    'url': 'https://smilecare-dental.com',
    'telephone': '(555) 123-4567',
    'priceRange': '$$$',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '123 Dental Suite, Medical District',
      'addressLocality': 'New York',
      'addressRegion': 'NY',
      'postalCode': '10001',
      'addressCountry': 'US'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 40.7484,
      'longitude': -73.9857
    },
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        'opens': '08:00',
        'closes': '19:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': 'Saturday',
        'opens': '09:00',
        'closes': '16:00'
      }
    ],
    'areaServed': serviceAreas.map(area => ({
      '@type': 'AdministrativeArea',
      'name': area
    }))
  };
};

export const getBreadcrumbSchema = (crumbs: { name: string; url: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': crumb.name,
      'item': `https://smilecare-dental.com${crumb.url}`
    }))
  };
};
