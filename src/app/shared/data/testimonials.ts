export interface Testimonial {
  quote: string;
  authorName: string;
  authorRole: string;
  authorContext?: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Nikoloz is extremely responsible - one of the first to join stand-up, always on top of his work and providing clear updates. He's super detail-oriented, always willing to help, and consistently sets a high standard. A pleasure working with someone so committed and dependable.",
    authorName: 'Meghan Keener',
    authorRole: 'Product Owner',
    authorContext: 'Vitality Group',
    initials: 'MK',
  },
  {
    quote:
      'Nikusha is truly exceptional in every aspect - an excellent developer who already thinks and works at an architect level. He always shares his knowledge, is very hardworking, and is a trustworthy professional. A real privilege to work with him.',
    authorName: 'Zain Zafrani',
    authorRole: 'Software Engineer · Pod Ventricle Lead',
    authorContext: 'Emory CARES Program',
    initials: 'ZZ',
  },
];
