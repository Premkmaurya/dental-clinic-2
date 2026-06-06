export interface BlogPostItem {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  content: string;
  tags: string[];
}

import blog1Img from '../assets/images/gallery_2.png';
import blog2Img from '../assets/images/gallery_1.png';
import blog3Img from '../assets/images/hero_fallback.png';

export const blogPosts: BlogPostItem[] = [
  {
    slug: 'invisalign-vs-braces',
    title: 'Invisalign vs. Traditional Braces: Which is Right for You?',
    excerpt: 'Comparing clear aligners and stainless-steel brackets in terms of comfort, duration, costs, and cosmetic appearance.',
    category: 'Orthodontics',
    readTime: '5 min read',
    date: 'June 4, 2026',
    author: 'Dr. Sarah Chen',
    image: blog1Img,
    tags: ['Invisalign', 'Braces', 'Orthodontics', 'Straight Teeth'],
    content: `
Straightening your teeth is one of the most impactful investments you can make for your health and self-confidence. With modern dental advancements, you are no longer limited to standard metal brackets. Today, clear aligners like Invisalign represent a highly popular, virtually invisible alternative.

### Traditional Braces: The Reliable Standard
Traditional braces utilize stainless-steel brackets bonded to each tooth, connected by wires. The orthodontist regularly adjusts these wires to apply precise physical pressure.
*   **Best For**: Complex bite corrections, severe rotations, or structural jaw alignments.
*   **Key Advantage**: They are fixed in place, meaning compliance is 100% since patients cannot remove them.
*   **Limitation**: Dietary restrictions (avoiding hard or sticky foods) and challenges with flossing.

### Invisalign: The Discretionary Path
Invisalign uses a series of custom-molded, medical-grade polyurethane trays. You swap these trays out every 1-2 weeks as teeth migrate.
*   **Best For**: Mild to moderate crowding, spacing, and patients who prioritize aesthetics.
*   **Key Advantage**: They are removable. You can take them out for meals, business meetings, and normal brushing.
*   **Limitation**: Requires strict discipline. Aligners must be worn for 20-22 hours a day.

### How to Choose
If you have a busy professional life and want to maintain a completely natural look, **Invisalign** is often the ideal choice. However, if your treatment requires complex rotational corrections or you prefer a "hands-off" process without managing removable trays, **Traditional Braces** remains the gold standard. Consult with our orthodontists to map out your digital trajectory.
    `
  },
  {
    slug: 'dental-implant-guide',
    title: 'The Ultimate Guide to Dental Implants: What to Expect',
    excerpt: 'An in-depth look at surgical integration, healing durations, cost estimates, and permanent care tips for dental implants.',
    category: 'Implants',
    readTime: '7 min read',
    date: 'May 28, 2026',
    author: 'Dr. Alexander Adams',
    image: blog2Img,
    tags: ['Dental Implants', 'Oral Surgery', 'Tooth Replacement', 'Restoration'],
    content: `
If you are living with missing teeth, you know it affects more than just your smile—it impacts your chewing capability, speech, and can cause your jawbone to deteriorate over time. Dental implants are widely considered the gold standard for restoring missing teeth because they replace both the root and the crown.

### Step 1: The Initial Assessment
Before any surgery, we perform a high-resolution 3D CT scan. This diagnostic file allows us to inspect bone density and map the exact trajectory for the implant post, avoiding nerves and sinuses.

### Step 2: Implant Post Placement
The implant post—a bio-compatible titanium cylinder—is gently inserted into the jawbone under local anesthesia. This acts as a sturdy anchor.
*   **Is it painful?** Most patients report feeling pressure but no acute pain.
*   **Healing Phase**: The bone must fuse with the titanium post in a process called *osseointegration*, which takes between 3 to 6 months.

### Step 3: Crown Placement
Once the implant is firmly integrated, we secure an abutment connector. Finally, we bond a custom-made porcelain crown that matches the shade, size, and function of your natural teeth.

### Long-Term Outcomes
With proper hygiene (brushing, flossing, and cleanings every 6 months), dental implants can easily last a lifetime. They will never decay, slip, or require adjacent teeth alterations like dental bridges. Contact us to find out if you are a candidate for dental implants.
    `
  },
  {
    slug: 'veneers-smile-makeover',
    title: 'Transform Your Smile: The Magic of Porcelain Veneers',
    excerpt: 'How custom-crafted medical ceramic shells can instantly resolve dental chips, gaps, and permanent discoloration.',
    category: 'Cosmetic',
    readTime: '4 min read',
    date: 'May 15, 2026',
    author: 'Dr. Marcus Miller',
    image: blog3Img,
    tags: ['Veneers', 'Cosmetic Dentistry', 'Smile Makeover', 'Aesthetic'],
    content: `
Do you hide your smile in photos because of chipped, misaligned, or permanently stained teeth? Porcelain veneers offer a comprehensive cosmetic makeover that can transform your confidence in as little as two visits.

### What are Porcelain Veneers?
Veneers are ultra-thin shells of dental ceramic custom-crafted by master ceramists. They are bonded to the front surfaces of your teeth, instantly altering their shape, alignment, and color.

### The Makeover Process
1.  **Consultation & Design**: We take digital impressions and photos to plan a mockup matching your facial features.
2.  **Preparation**: We gently prepare the front enamel of the teeth (usually less than 0.5mm) to ensure the veneers sit flush.
3.  **Bonding**: The custom porcelain shells are permanently bonded using a medical adhesive activated by a curing light.

### Benefits of Porcelain
Porcelain behaves exactly like natural enamel, reflecting light in a translucent way. Furthermore, ceramic is highly stain-resistant, meaning your teeth will remain bright even if you consume coffee, tea, or red wine. Veneers are a durable, gorgeous solution that can last 10-15 years with basic care.
    `
  }
];

export const getBlogPostSchema = (post: BlogPostItem) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': post.title,
    'description': post.excerpt,
    'datePublished': new Date(post.date).toISOString().split('T')[0],
    'author': {
      '@type': 'Person',
      'name': post.author
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'SmileCare Dental Clinic'
    }
  };
};
