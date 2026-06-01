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
      "Nikoloz combines strong technical skills with a deep sense of responsibility. You can trust him with critical projects and know they’ll be handled professionally. He's super detail-oriented, always willing to help, and consistently sets a high standard. A pleasure working with someone so committed and dependable.",
    authorName: 'Meghan Keener',
    authorRole: 'Product Owner',
    authorContext: 'Vitality Group',
    initials: 'MK',
  },
  {
    quote:
      'It is a real privilege to work with Nikoloz. His influence went far beyond the code he wrote. He improved our engineering standards, challenged assumptions, and helped raise the quality of the entire team. Nikoloz always shares his knowledge, is very hardworking, and is a reliable professional.',
    authorName: 'Zain Zafrani',
    authorRole: 'Software Engineer · Pod Ventricle Lead',
    authorContext: 'Emory CARES Program',
    initials: 'ZZ',
  },
];
