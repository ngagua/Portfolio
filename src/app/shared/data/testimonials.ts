export interface Testimonial {
  quote: string;
  authorName: string;
  authorRole: string;
  authorContext?: string;
  initials: string;
}

/**
 * Placeholder testimonials. REPLACE these with real quotes from colleagues,
 * managers, or clients before going live. The section auto-hides if the
 * array is empty, so it's safe to clear if you don't have real quotes yet.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      'Pairs strong front-end skills with real back-end fluency — ships features end-to-end and keeps the contracts clean.',
    authorName: 'Add a real name',
    authorRole: 'Engineering lead',
    authorContext: 'Vitality engagement · placeholder quote',
    initials: 'EL',
  },
  {
    quote:
      'One of those rare engineers who scopes the work, writes the spec, and then quietly delivers it without drama.',
    authorName: 'Add a real name',
    authorRole: 'Tech lead',
    authorContext: 'Omedia · placeholder quote',
    initials: 'TL',
  },
];
