module.exports = {
  siteMetadata: {
    author: `@Brian-Munene`,
    title: `Arcon Construction Company`,
    description: `Arcon is a construction company based in Nairobi, Kenya. We improve and maintain the built environment to enhance quality of life of the present and future generations.`,
    email: 'arconconstructioncompany@gmail.com',
    phone: ['+254 731 869 172', '+254 726 532 724'],
    location: 'Wabera Street. Standard Building. Room 22.',
    training_locations: ['Kiambu Road. Thindigua Junction next to Delta Petrol Station.', 'Ongata Rongai. Bees Park Second floor Room F22.'],
    facebook_url: 'https://www.facebook.com/ARCONCOMPANY/',
    instagram_url: 'https://www.instagram.com/arconconstructioncompany/',
    linkedIn_url: 'https://www.linkedin.com/in/arcon-construction-company-limited-912a54163/',
    what_we_do:['Design and Construction of Commercial and Residential houses.', 'Road Works(Paved and Unpaved Roads),','Water Works and Survey Works.'],
    services:['Construction of residential and commercial buildings', 'Renovation, repairs and general maintenance works', 'Civil and road works', 'Surveying works', ],
    mission: 'To build a diverse, inclusive, and collaborative work environment',
    vision: 'To improve and maintain the built environment to enhance quality of life of the present and future generations.',
    values: 'Maintaining equality and respect for everyone who interacts with us.',
    training_courses: [
      { 'type': 'Drafting and Design',
        'courses':[{
        'name': 'ArchiCAD',
        'hours': 10,
        'price': 12500
        },
        {
          'name': 'Revit Architecture',
          'hours': 12,
          'price': 12000
        }],
      },
      { 'type': 'Engineering Drafting and Annotation',
        'courses':[{
          'name': 'AutoCAD 2D',
          'hours': 10,
          'price': 7500
        },
          {
            'name': 'Revit Structure',
            'hours': 12,
            'price': 12000
          },
          {
            'name': 'Advanced Steel',
            'hours': 10,
            'price': 12500
          }],
      },
      { 'type': 'Design Software',
        'courses':[{
          'name': 'Prokon',
          'hours': 8,
          'price': 8000
        },
          {
            'name': 'Masterseries',
            'hours': 10,
            'price': 10000
          },
          {
            'name': 'Robot Structural Analysis',
            'hours': 12,
            'price': 12500
          },
          {
            'name': 'Autodesk Structural Bridge design',
            'hours': 12,
            'price': 12500
          }],
      },
      { 'type': 'Works(Drafting,Modelling and Design)',
        'courses':[{
          'name': 'AutoCAD Civil 3D',
          'hours': 15,
          'price': 1500
        },
          {
            'name': 'Infraworks',
            'hours': 8,
            'price': 10000
          },
          {
            'name': 'Naviswork',
            'hours': 8,
            'price': 10000
          }],
      },
      { 'type': 'Project Management',
        'courses':[{
          'name': 'Microsoft Project',
          'hours': 8,
          'price': 8000
        },
          {
            'name': 'Primavera',
            'hours': 10,
            'price': 10000
          }],
      },
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
  ],
}
