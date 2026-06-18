export const GALLERY_SECTIONS = [
  {
    id: 'cleaning',
    title: 'Cleaning & Restoration',
    description:
      'Gentle soft-wash cleaning that removes moss, mildew, and weathering — without damaging cedar fibers.',
    photos: [
      {
        src: '/gallery/during-cleaning-cedar.jpg',
        alt: 'Technician soft-washing cedar shingles on a residential roof',
        caption: 'Soft-wash cleaning in progress',
      },
      {
        src: '/gallery/during-cleaning-progress.jpg',
        alt: 'Cedar roof showing cleaned and weathered sections side by side during treatment',
        caption: 'Restoration in progress — weathered vs. cleaned cedar',
      },
      {
        src: '/gallery/during-restoration-turret.jpg',
        alt: 'Cedar shake turret roof with restored golden-tan shingles',
        caption: 'Turret restoration with cleaned cedar shakes',
      },
      {
        src: '/gallery/after-cleaning.jpg',
        alt: 'Pristine cedar shake roof after professional cleaning and maintenance',
        caption: 'Completed cleaning — Northfield area home',
      },
      {
        src: '/gallery/cedar-roof-overview.jpg',
        alt: 'Aerial view of a maintained cedar shake roof with solar panels',
        caption: 'Full roof overview after maintenance',
      },
    ],
  },
  {
    id: 'repairs',
    title: 'Repairs & Replacement',
    description:
      'Targeted shingle replacement and flashing work to stop leaks before they spread.',
    photos: [
      {
        src: '/gallery/before-maintenance.jpg',
        alt: 'Cedar roof with new replacement shingles installed among weathered shakes',
        caption: 'Individual shingle replacements on weathered cedar',
      },
      {
        src: '/gallery/cedar-shingle-repair.jpg',
        alt: 'Close-up of new cedar shingles being installed during a repair',
        caption: 'On-site cedar shingle repair',
      },
      {
        src: '/gallery/during-maintenance.jpg',
        alt: 'Technician on a cedar roof with new shingles along the ridge line',
        caption: 'Ridge and field repairs in progress',
      },
      {
        src: '/gallery/cedar-shingle-maintenance.jpg',
        alt: 'Large cedar roof showing restored section next to weathered shakes',
        caption: 'Cleaning in progress',
      },
    ],
  },
];

export const FEATURED_PHOTOS = [
  GALLERY_SECTIONS[0].photos[3],
  GALLERY_SECTIONS[1].photos[3],
  GALLERY_SECTIONS[0].photos[1],
];
