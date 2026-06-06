export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullDetails: string;
  duration: string;
  cost: string;
  benefits: string[];
  procedureSteps: string[];
  faq: { q: string; a: string }[];
}

export const servicesData: Record<string, ServiceItem> = {
  'teeth-cleaning': {
    id: 'teeth-cleaning',
    title: 'Teeth Cleaning',
    tagline: 'Professional prophylaxis for vibrant gums and a fresh, clean smile.',
    description: 'Our professional dental cleanings remove plaque, tartar, and surface stains that regular brushing can\'t reach, preventing gum disease and cavities.',
    fullDetails: 'Deep teeth cleaning, or prophylaxis, is essential for maintaining oral health. Utilizing advanced ultrasonic scalers, our certified hygienists gently remove calcified tartar deposits and plaque build-up. We complete the treatment with a polishing paste that removes minor surface stains and a fluoride treatment to strengthen the tooth enamel.',
    duration: '45 - 60 minutes',
    cost: '$150 - $250',
    benefits: [
      'Prevents gum disease and inflammation',
      'Removes stubborn surface stains from coffee and tea',
      'Freshens breath instantly',
      'Early detection of potential dental issues'
    ],
    procedureSteps: [
      'Oral examination to evaluate gums and teeth',
      'Ultrasonic scaling to remove plaque and tartar deposits',
      'Fine hand scaling for precision cleaning',
      'Polishing with premium grit paste',
      'Fluoride varnish application for enamel protection'
    ],
    faq: [
      { q: 'How often should I get a dental cleaning?', a: 'We recommend visiting us every 6 months for a routine cleaning to prevent tartar buildup and catch issues early.' },
      { q: 'Does teeth cleaning hurt?', a: 'No. Our hygienists use gentle techniques and topical numbing gels if you have sensitive gums.' }
    ]
  },
  'teeth-whitening': {
    id: 'teeth-whitening',
    title: 'Teeth Whitening',
    tagline: 'Professional in-office whitening for a dazzlingly bright smile.',
    description: 'Get up to 8 shades whiter teeth in a single visit with our premium Zoom laser whitening system, safe and highly effective.',
    fullDetails: 'Professional whitening is the fastest and safest cosmetic way to brighten your teeth. Unlike over-the-counter kits that can cause uneven results and gum sensitivity, our in-office bleaching treatment uses a concentrated hydrogen peroxide gel activated by a special UV light. We customize the application to protect your gums and minimize sensitivity.',
    duration: '60 minutes',
    cost: '$400 - $600',
    benefits: [
      'Instantly whitens up to 8 shades',
      'Safely supervised by dental specialists',
      'Long-lasting results with proper care',
      'Boosts self-confidence immediately'
    ],
    procedureSteps: [
      'Shade analysis to track whitening progress',
      'Isolation of gums and lips using a protective barrier',
      'Application of professional-grade whitening gel',
      'Activation of the gel using a special UV light (three 15-minute cycles)',
      'Fluoride treatment to alleviate post-whitening sensitivity'
    ],
    faq: [
      { q: 'How long do whitening results last?', a: 'Results can last between 1 to 3 years depending on your diet (coffee, tea, wine) and smoking habits.' },
      { q: 'Will whitening damage my enamel?', a: 'No. Professional whitening uses formulas designed to keep the enamel structure safe and intact.' }
    ]
  },
  'dental-implants': {
    id: 'dental-implants',
    title: 'Dental Implants',
    tagline: 'Permanent, natural-looking tooth replacements that restore full function.',
    description: 'Implants provide a permanent solution for missing teeth, looking, feeling, and functioning exactly like natural teeth.',
    fullDetails: 'Dental implants are the gold standard for tooth replacement. A bio-compatible titanium post is surgically placed into the jawbone, acting as a root. Once integrated, a custom-crafted porcelain crown is secured to the post. This structure prevents jawbone deterioration and protects neighboring teeth from shifting.',
    duration: 'Multi-visit procedure',
    cost: '$2,500 - $4,500 per implant',
    benefits: [
      'Matches natural teeth in appearance and chewing strength',
      'Prevents bone loss in the jaw',
      'Will not slip or decay like traditional dentures',
      'Can last a lifetime with excellent hygiene'
    ],
    procedureSteps: [
      'Comprehensive 3D CT scan and treatment planning',
      'Gently placing the titanium implant post under local anesthesia',
      'Osseointegration period (3-6 months for the bone to fuse with the post)',
      'Abutment placement on the implant post',
      'Design and bonding of the custom porcelain crown'
    ],
    faq: [
      { q: 'Are dental implants painful?', a: 'The procedure is performed under local anesthesia. Most patients report feeling only mild pressure and find recovery comparable to a simple extraction.' },
      { q: 'What is the success rate of dental implants?', a: 'Our clinic holds a success rate of over 98%, thanks to digital diagnostics and surgical templates.' }
    ]
  },
  'root-canal': {
    id: 'root-canal',
    title: 'Root Canal Treatment',
    tagline: 'Pain-free root therapy to save damaged or infected teeth.',
    description: 'Save your natural teeth and find relief from severe toothaches with our modern, advanced root canal treatments.',
    fullDetails: 'A root canal becomes necessary when the soft tissue (pulp) inside the tooth becomes inflamed or infected due to deep decay, cracking, or trauma. Using digital microscopes, our specialists clean, disinfect, and seal the canal. This stops the infection, relieves pain, and saves the tooth structure from extraction.',
    duration: '60 - 90 minutes (1-2 visits)',
    cost: '$800 - $1,200',
    benefits: [
      'Resolves severe tooth pain and swelling',
      'Saves the natural tooth from extraction',
      'Restores normal biting force and chewing functionality',
      'Prevents infection from spreading to surrounding tissues'
    ],
    procedureSteps: [
      'Numbing the tooth and surrounding area completely',
      'Creating a small access point to reach the infected pulp',
      'Removing the diseased pulp and cleaning the root canals using micro-instruments',
      'Disinfecting the canals and filling them with gutta-percha sealant',
      'Sealing the tooth and planning a protective crown'
    ],
    faq: [
      { q: 'Does a root canal hurt?', a: 'This is a myth. Modern anesthesia ensures that a root canal is no more uncomfortable than receiving a standard filling.' },
      { q: 'Is it necessary to get a crown after a root canal?', a: 'Yes. Teeth without pulp become brittle. A crown restores structural strength and prevents future fractures.' }
    ]
  },
  'invisalign': {
    id: 'invisalign',
    title: 'Invisalign',
    tagline: 'Clear, removable aligners for virtually invisible teeth straightening.',
    description: 'Straighten your teeth comfortably and discreetly without wires or brackets using custom clear aligners.',
    fullDetails: 'Invisalign uses a series of custom-made, clear plastic aligner trays that apply gentle pressure to gradually guide teeth into place. The trays are removable, allowing you to eat whatever you want and clean your teeth with absolute ease. Using our iTero scanner, you can see a 3D preview of your final smile before starting.',
    duration: '9 - 18 months plan',
    cost: '$4,000 - $6,500',
    benefits: [
      'Completely transparent and virtually invisible',
      'Removable for meals, brushing, and flossing',
      'No metal wires to cause cheek irritation',
      'Fewer office checkups required'
    ],
    procedureSteps: [
      'iTero 3D digital scan of your mouth (no messy molds)',
      'ClinCheck projection showing step-by-step movement',
      'Delivery of custom aligner sets',
      'Wearing aligners for 20-22 hours daily, switching sets every 1-2 weeks',
      'Short progress checks every 6-8 weeks'
    ],
    faq: [
      { q: 'Do I have to wear aligners all day?', a: 'Yes. For best results, they must be worn for 20 to 22 hours a day, only taking them out to eat, drink, brush, and floss.' },
      { q: 'Is Invisalign painful?', a: 'You may feel temporary pressure for the first few days of a new aligner set, which is normal and shows they are working.' }
    ]
  },
  'cosmetic-dentistry': {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    tagline: 'Custom smile design with porcelain veneers and bonding.',
    description: 'Transform chipped, stained, or gapped teeth into a flawless, radiant smile using advanced cosmetic artistry.',
    fullDetails: 'Cosmetic smile design is customized to your facial features and goals. Using porcelain veneers—ultra-thin shells of durable ceramic bonded to the front of teeth—we can instantly correct chips, gaps, alignment issues, and permanent stains. We also offer composite bonding for minor chips and shapes.',
    duration: '2 - 3 visits',
    cost: '$1,000 - $2,000 per tooth',
    benefits: [
      'Creates a perfectly shaped, bright smile matching your face',
      'Highly resistant to coffee and tobacco staining',
      'Saves healthy tooth structure',
      'Extremely durable, lasting 10-15 years'
    ],
    procedureSteps: [
      'Comprehensive smile design consultation and digital mock-up',
      'Minimal preparation of the enamel surface',
      'Taking digital impressions for the lab ceramists',
      'Placement of temporary veneers to test the fit and feel',
      'Bonding of custom-crafted porcelain veneers'
    ],
    faq: [
      { q: 'Are veneers permanent?', a: 'Yes. Preparation requires removing a tiny layer of enamel, meaning the process is irreversible.' },
      { q: 'How do I care for my veneers?', a: 'Brush and floss normally. Avoid biting hard items like ice or pens to prevent chipping.' }
    ]
  },
  'pediatric-dentistry': {
    id: 'pediatric-dentistry',
    title: 'Pediatric Dentistry',
    tagline: 'Gentle, fun, and warm dental care for growing smiles.',
    description: 'Building positive dental experiences for infants, toddlers, and teens in a comforting environment.',
    fullDetails: 'Our pediatric dental care focused on prevention and education. We create a welcoming environment where children feel secure. From initial baby checkups to dental sealants, we track dental development and build habits that lead to a lifetime of healthy smiles.',
    duration: '30 - 45 minutes',
    cost: '$100 - $200',
    benefits: [
      'Creates a positive association with visiting the dentist',
      'Fosters healthy oral hygiene habits early on',
      'Sealants protect teeth from sugary food decay',
      'Tracks correct jaw and teeth development'
    ],
    procedureSteps: [
      'Interactive, stress-free chair introduction',
      'Gentle tooth cleaning and polishing',
      'Nutritional counseling and brushing demonstration',
      'Application of dental sealants (if needed)',
      'Reward and encouragement'
    ],
    faq: [
      { q: 'When should my child first see a dentist?', a: 'The American Academy of Pediatric Dentistry recommends visiting within six months of their first tooth appearing, or by their first birthday.' },
      { q: 'What are dental sealants?', a: 'Sealants are thin coatings painted on the chewing surfaces of back teeth to prevent food from getting trapped in deep grooves.' }
    ]
  }
};

export const getServiceSchema = (service: ServiceItem) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    'name': service.title,
    'description': service.description,
    'procedureType': 'Surgical',
    'bodyLocation': 'Mouth',
    'offers': {
      '@type': 'Offer',
      'price': service.cost.split(' ')[0].replace('$', ''),
      'priceCurrency': 'USD'
    }
  };
};
