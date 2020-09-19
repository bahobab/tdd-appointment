const today = new Date();
const at = hours => today.setHours(hours, 0)

export const sampleAppointments = [
  {
    startsAt: at(9),
    customer: {
      firstName: 'Bineta',
      tel: '111-222-3333',
      stylist: 'Mobio',
      service: 'Zazou',
      notes: 'Pique with rolls on the sides'
    }
  }, {
    startsAt: at(10),
    customer: {
      firstName: 'Mamadou',
      tel: '111-222-3333',
      stylist: 'Mobio',
      service: 'Zazou',
      notes: 'Pique with rolls on the sides'
    }
  }, {
    startsAt: at(11),
    customer: {
      firstName: 'Koudou',
      tel: '111-222-3333',
      stylist: 'Mobio',
      service: 'Zazou',
      notes: 'Pique with rolls on the sides'
    }
  }, {
    startsAt: at(12),
    customer: {
      firstName: 'Aya',
      tel: '111-222-3333',
      stylist: 'Mobio',
      service: 'Zazou',
      notes: 'Pique with rolls on the sides'
    }
  }, {
    startsAt: at(13),
    customer: {
      firstName: 'Awa',
      tel: '111-222-3333',
      stylist: 'Mobio',
      service: 'Zazou',
      notes: 'Pique with rolls on the sides'
    }
  }, {
    startsAt: at(14),
    customer: {
      firstName: 'Koffi',
      tel: '111-222-3333',
      stylist: 'Mobio',
      service: 'Zazou',
      notes: 'Pique with rolls on the sides'
    }
  }, {
    startsAt: at(15),
    customer: {
      firstName: 'Digbeu',
      tel: '111-222-3333',
      stylist: 'Mobio',
      service: 'Zazou',
      notes: 'Pique with rolls on the sides'
    }
  }, {
    startsAt: at(16),
    customer: {
      firstName: 'Silue',
      tel: '111-222-3333',
      stylist: 'Mobio',
      service: 'Zazou',
      notes: 'Pique with rolls on the sides'
    }
  }, {
    startsAt: at(17),
    customer: {
      firstName: 'Yapi',
      tel: '111-222-3333',
      stylist: 'Mobio',
      service: 'Zazou',
      notes: 'Pique with rolls on the sides'
    }
  }
]