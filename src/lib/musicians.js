const musicians = [
  {
    name: 'ΣΤΕΛΙΟΣ ΜΑΓΑΛΙΟΣ',
    desc: 'Φωνή',
    image: 'nikola.jpg',
    tag: '',
    songs: [
      {
        id: 1,
        name: 'Υποφέρω',
        time: 206,
      }
    ],
    socials: {
      fb: 'https://www.facebook.com/magaliosontour',
      insta: '',
      yt: ''
    }
  },
  {
    name: 'ΝΙΚΟΣ ΝΙΚΟΛΑΟΥ',
    desc: 'Κιθάρα, Φωνή',
    image: 'nikola.jpg',
    tag: '',
    songs: [
      {
        id: 1,
        name: 'Καταιγίδα',
        time: 206,
      }
    ],
    socials: {
      fb: 'https://facebook.com'
    }
  },
  {
    name: 'SKAPATOR',
    desc: 'Κιθάρα, Φωνή',
    image: 'skap.jpg',
    tag: '',
    songs: [
      {
        id: 1,
        name: 'Gigi',
        time: 708.4,
      }
    ],
    socials: {
      fb: 'https://facebook.com'
    }
  },
  {
    name: 'NECROPETHAMENOS',
    desc: 'Κιθάρα, Φωνή',
    image: 'nekro.jpg',
    tag: '',
    songs: [
      {
        id: 1,
        name: 'Gigi',
        time: 708.4,
      }
    ],
    socials: {
      fb: 'https://facebook.com'
    }
  }
];

export default musicians.map((m,i) => ({...m, id: i+1}));
