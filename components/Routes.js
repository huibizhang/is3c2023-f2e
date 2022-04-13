const links = [
  {
    name: 'News',
    link: '/news',
    isGroup: false,
  },
  {
    name: 'Submission',
    isGroup: true,
    children: [
      {
        name: 'Call for Papers',
        link: '/callForPapers',
        isGroup: false,
      },
      {
        name: 'Important Dates',
        link: '/dates',
        isGroup: false,
      },
      {
        name: 'Paper Submission',
        link: '/paperSubmission',
        isGroup: false,
      },
      {
        name: 'Registration',
        link: '/registration',
        isGroup: false,
      },
      {
        name: 'Special Sessions',
        link: '/specialSessions',
        isGroup: false,
      },
    ],
  },
  {
    name: 'Organizing Committee',
    shortName: 'Committee',
    link: '/committee',
    isGroup: false,
  },
  {
    name: 'Events',
    isGroup: true,
    children: [
      {
        name: 'Keynote Speakers',
        link: '/keynoteSpeakers',
        isGroup: false,
      },
      {
        name: 'Schedule',
        link: '/schedule',
        isGroup: false,
      },
      {
        name: 'Conference Venue',
        link: '/venue',
        isGroup: false,
      },
      {
        name: 'Travel Information',
        link: '/travel',
        isGroup: false,
      },
    ],
  },
  {
    name: 'Contact',
    link: '/contact',
    isGroup: false,
  },
]

const myRoutes = function () {
  this.routes = links
}

myRoutes.prototype.getLinks = () => {
  return links
    .map((link) => {
      if (link.isGroup) return link.children
      else return link
    })
    .flat()
}

export default myRoutes
