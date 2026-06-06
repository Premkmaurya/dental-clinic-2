import doctor1Img from '../assets/images/doctor_1.png';
import doctor2Img from '../assets/images/doctor_2.png';
import doctor3Img from '../assets/images/doctor_3.png';

export interface DoctorItem {
  id: string;
  name: string;
  qualification: string;
  experience: string;
  specialization: string;
  image: string;
  bio: string;
  credentials: string[];
  schedule: string[];
  faq: { q: string; a: string }[];
}

export const doctorsData: Record<string, DoctorItem> = {
  'dr-alexander-adams': {
    id: 'dr-alexander-adams',
    name: 'Dr. Alexander Adams',
    qualification: 'DDS, MS',
    experience: '15+ Years',
    specialization: 'Implantology & Oral Surgery',
    image: doctor1Img,
    bio: 'Dr. Alexander Adams is a double board-certified oral surgeon specializing in dental implants and computer-guided surgery. He earned his Doctor of Dental Surgery (DDS) degree from Columbia University and went on to complete his residency in Oral and Maxillofacial Surgery. Dr. Adams is recognized for his contributions to digital diagnostic workflows and advanced pain-free tooth restoration.',
    credentials: [
      'Doctor of Dental Surgery (DDS) - Columbia University College of Dental Medicine',
      'Master of Science (MS) in Oral Surgery - Columbia University Graduate School',
      'Diplomate, American Board of Oral and Maxillofacial Surgery',
      'Fellow, International Congress of Oral Implantologists (ICOI)'
    ],
    schedule: ['Monday (09:00 AM - 05:00 PM)', 'Wednesday (09:00 AM - 05:00 PM)', 'Friday (08:00 AM - 03:00 PM)'],
    faq: [
      { q: 'What type of implant systems does Dr. Adams use?', a: 'Dr. Adams uses only premium bio-compatible titanium and zirconia implant systems from industry leaders Nobel Biocare and Straumann.' },
      { q: 'Does Dr. Adams perform extractions?', a: 'Yes. Dr. Adams specializes in single and full-arch extractions, including complex surgical wisdom teeth removals under sedation.' }
    ]
  },
  'dr-sarah-chen': {
    id: 'dr-sarah-chen',
    name: 'Dr. Sarah Chen',
    qualification: 'DDS, MS',
    experience: '10+ Years',
    specialization: 'Orthodontics & Invisalign Specialist',
    image: doctor2Img,
    bio: 'Dr. Sarah Chen is a leading provider of Invisalign treatments and orthodontic options for children, teens, and adults. After obtaining her dental credentials at UCLA, she pursued a three-year orthodontic residency. She is passionate about utilizing 3D digital imaging to craft customized, comfortable aligner trajectories.',
    credentials: [
      'Doctor of Dental Surgery (DDS) - UCLA School of Dentistry',
      'Certificate in Orthodontics and Dentofacial Orthopedics - UCLA Health',
      'Invisalign Diamond Top Provider Award Recipient',
      'Member, American Association of Orthodontists (AAO)'
    ],
    schedule: ['Tuesday (08:00 AM - 06:00 PM)', 'Thursday (08:00 AM - 06:00 PM)', 'Saturday (09:00 AM - 04:00 PM)'],
    faq: [
      { q: 'Is Dr. Chen certified to perform Invisalign?', a: 'Yes. Dr. Chen is an official Invisalign Diamond Elite provider, ranking in the top tier of Invisalign specialists nationwide.' },
      { q: 'Does Dr. Chen treat pediatric orthodontic cases?', a: 'Absolutely. She manages early interceptive orthodontics (Phase 1) for children starting from age 7.' }
    ]
  },
  'dr-marcus-miller': {
    id: 'dr-marcus-miller',
    name: 'Dr. Marcus Miller',
    qualification: 'DDS',
    experience: '12+ Years',
    specialization: 'Aesthetic & Cosmetic Dentistry',
    image: doctor3Img,
    bio: 'Dr. Marcus Miller is a dedicated cosmetic dentist known for his smile designs and porcelain veneer restorations. Graduating from NYU College of Dentistry, he has spent over a decade refining the science of tooth bonding and aesthetic ceramic applications. He focuses on restoring natural facial harmony through customized veneers.',
    credentials: [
      'Doctor of Dental Surgery (DDS) - New York University College of Dentistry',
      'Accredited Member, American Academy of Cosmetic Dentistry (AACD)',
      'Post-graduate Certificate in Advanced Aesthetics - NYU Dentistry',
      'Voted Top Cosmetic Dentist in NY Metropolitan Area'
    ],
    schedule: ['Monday (10:00 AM - 07:00 PM)', 'Wednesday (10:00 AM - 07:00 PM)', 'Thursday (09:00 AM - 05:00 PM)'],
    faq: [
      { q: 'Can Dr. Miller create mockups of my veneers before bonding?', a: 'Yes. Dr. Miller utilizes Digital Smile Design (DSD) to present a 3D digital mockup and a physical temp trial so you can preview your smile.' },
      { q: 'Does Dr. Miller perform composite teeth bonding?', a: 'Yes. Dr. Miller offers high-resolution composite bonding for minor chips and gaps, completed in a single appointment.' }
    ]
  }
};

export const getDoctorSchema = (doc: DoctorItem) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    'name': doc.name,
    'jobTitle': 'Specialist Dentist',
    'worksFor': {
      '@type': 'MedicalClinic',
      'name': 'SmileCare Dental Clinic'
    },
    'description': doc.bio,
    'memberOf': doc.credentials.map(cred => ({
      '@type': 'Organization',
      'name': cred.split(' - ').slice(-1)[0]
    }))
  };
};
