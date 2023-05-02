/**
 * Resume/CV template created with Bootstrap 5 by @vmoratog and @jdnichollsc
 */
const resume = {
  firstName: 'Tenzin',
  lastName: 'Kunsang',
  jobTitle: 'Senior Software Developer / Data Engineer',
  city: 'Minneapolis',
  postalCode: '55408',
  country: 'United States',
  phone: '+1 (612) 461-9711',
  email: 'tenzkunsang648@gmail.com',
  education: [
    {
      school: 'Carleton College',
      degree: 'BA Mathematics',
      graduationDate: '2020',
    }
  ],
  links: [
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/tenzin-kunsang648/'
    },
    {
      label: 'GitHub',
      link: 'https://github.com/tenzin-kunsang648'
    }
  ],
  certificates: [
    'Salesforce Certified Platform Developer I',
    'Salesforce Certified Tableau CRM and Einstein Discovery Consultant',
    'Salesforce Certified Platform App Builder Certification',
    'Salesforce Certified Administrator (SCA)',
    'IBM Data Science Professional Certificate',
    'Neural Networks and Deep Learning',
    'Machine Learning with Python'
  ],
  skills: [
    'Lightning Web Component',
    'Aura Component',
    'JavaScript',
    'Apex',
    'Database Triggers',
    'Tableau CRM Analytics',
    'Einstein Analytics',
    'SAQL',
    'Cloud Computing',
    'Salesforce Lightning',
    'Dataloader',
    'Python',
    'R',
    'HTML',
    'CSS'
    
  ],
  languages: ['English', 'Tibetan'],
  professionalSummary: `A software developer with over 3 years of experience in designing, developing, and implementing Salesforce solutions for various industries. With a deep understanding of the Salesforce platform and architecture, I am an expert in Apex, Lightning Web Component, Aura Component, CRM Analytics, and Lightning platform. I have taken the lead in managing the data aspect for several teams, utilizing techniques such as data mining, preprocessing, and data visualization to extract actionable insights from clients' data on our system. With my expertise in Salesforce technologies and data analysis, I can assist organizations in leveraging the power of Salesforce's CRM, Sales Cloud, Service Cloud, Einstein Analytics and Tableau CRM to make data-driven decisions, improve their overall performance, streamline their sales and customer service processes, and maximize the return on investment on their Salesforce platform.`,
  employmentHistory: [
    {
      jobTitle: 'Senior Software Developer, SaaS',
      startDate: 'July 2020',
      endDate: 'Present',
      employer: 'ICF',
      city: 'Remote',
      achievements: [
        'Designed and developed projects on the Salesforce platform, including identifying and utilizing OOTB marketplace plugins for several projects in Department of Labor and United States Department of Agriculture',
'Identified and managed data relevant for the National Directory of New Hires (NDNH), including gathering, mining, cleaning, pre-processing, restructuring data models to meet strict data structures and codifications in other systems, and documenting automation and manual tasks as part of NDNH data codification processes',
'Revamped and developed survey processes, using Tableau Recipe and Dataflow to gather and restructure survey data models, visualizing survey insights on Tableau dashboards, and utilizing CRMA features such as Interactions and Salesforce Query Language (SAQL)',
'Worked closely with Product Owners, IT Federal Project Managers, and other stakeholders to gain a comprehensive understanding of functional and technical requirements, actively contributing to key design decisions while also gaining insight into their mission, existing architecture, and security needs',
'Demonstrated ability in working with integrated project teams to design scalable solutions that met evolving enterprise and future state needs, and delivering Salesforce solutions that comply with federal standards such as security and section 508',
'Utilized Agile methodology to manage development timelines and deliverables',
        'Developed a Machine Learning model using Python in Jupyter notebook to analyze 1994 US Adult Census Data and predict income, which was presented to the Data Science Practice Area team',
'Proven ability in mentoring new members on technical processes and sharing knowledge of Tableau CRMA, Salesforce declarative tools, and writing codes in CRMA, Apex Class/Trigger, and LWC',
'Identified new opportunities to build platform-based solutions to meet user challenges and designing/developing custom connectors as needed',
'Experienced in integrating Salesforce with federal systems (on-premises and cloud) and ensuring compliance with all federal standards'
          ]
    },
    {
      jobTitle: 'Software Developer Intern',
      startDate: 'Nov 2019',
      endDate: ' Dec 2019',
      employer: 'MIAC Analytics',
      city: 'New York, NY',
      achievements: [
        'Created a fixed rate loan Cash Flow Calculator utilizing C# and Entity Framework, allowing end users to manipulate loans in an SQL database by storing, adding, and removing them', 'Improved the user interface of the Cash Flow Calculator by designing it with AngularJS, HTML, CSS (Bootstrap CSS), and JS'
      ]
    },
    {
      jobTitle: 'Digital Humanities Associate ',
      startDate: 'Sep 2019',
      endDate: 'June 2020',
      employer: 'Carleton College Digital Humanities',
      city: 'Northfield, MN',
      achievements: [
        "Developed Python scripts to clean and organize metadata for London Chronicles to support Professor George Shuffleton's research",
"Created documentation for command-line commands for data visualization of English texts",
"Assisted as a Teaching Assistant in humanities courses, providing practical guidance for digital class projects and offering additional support during evening office hours on various tools such as ArcGIS by ESRI, Voyant, Omeka S, and Wordpress."
      ]
    },
    {
      jobTitle: 'Sales Development Representative Intern',
      startDate: 'Jun 2019',
      endDate: 'Aug 2019',
      employer: 'Queue-it',
      city: 'Minneapolis, MN',
      achievements: [
        "Designed a Python program for the CEO that generates monthly actions for over 100 Queue-it customers based on their subscription levels and campaign types",
"Developed a program for the startup's Sales Development Manager that significantly reduced the time needed to find quarterly email open rates for 55,000+ contacts from 2 days (manual process) to 4 minutes using Python",
"Utilized Python, R and Excel to analyze sales data from Hubspot, providing valuable insights to drive business decisions"
      ]
    },
    {
      jobTitle: 'Research Assistant',
      startDate: 'Jun 2017',
      endDate: 'Aug 2017',
      employer: 'Carleton College Office of Institutional Research and Assessment',
      city: 'Northfield, MN',
      achievements: [
        "Successfully upgraded Carleton College's writing portfolio from hard copies to a digital database using OnBase Software",
"Utilized advanced knowledge of OnBase Software to design and develop a comprehensive training manual for future research assistants as a reference guide",
      ]

    }
  ],
  
  projects: [
    {
      title: 'Find a Home',
      
      achievements: [
        "Web scraped with Python package BeautifulSoup, location service FourSquare API, and data extraction platform Apify to retrieve neighborhood names in Minneapolis, venues in each neighborhood, and rental listings and home details from Zillow",
"Performed data cleanup and related the three separate dataframes to visualize and create an unsupervised data set",
"Implemented K-Nearest Neighbors to cluster homes in Minneapolis based on venues and details of home listings",
      ]
    },
    {
      title: 'Stock Predictor',
      
      achievements: [
        "Built an LSTM Neural Network by feeding and training the network with Yahoo Finance’s stock price dataset",
"Implemented supervised learning algorithm and backtested historical data by performing cross-validation on varying number of hidden layers & nodes to obtain the best AI model using opening stock price of companies such as Apple, Amazon, and Google",
      ]
    },
    {
      title: 'Cash Flow Calculator Web App',
      
      achievements: [
        "Modularized a Loan Cash Flow Calculator to four separate layers through Visual Studio: end user’s view, business model, controllers, and data storage/access, using C#, HTML, CSS, JavaScript, AngularJS, and Entity Framework",
      ]
    },
    ],
  photo: 'https://lh3.googleusercontent.com/SVudPmh_HhGDun40rmq4BpgVr0mR-S_1h01oqHwnjRt4Yxg1Kvs7Jveujkpma3GtJSniHPuPFnCw4sxgGJrtOKaQOH2-2xpiPDJdBylFKNlVjusHAaj11V9JD0SaNh_Sz1bUty0z8_U=w2400?source=screenshot.guru',
}

const formatResume = (r) => ({
  ...r,
  address: [
    r.country,
    r.city,
    r.postalCode
  ].filter(Boolean).join(', ')
})

new Vue({
  el: "#app",
  data: formatResume(resume)
});

/**
 * Wait for animatable-component to be loaded (Only for VanillaJS)
 **/
function animatableLoaded() {
  document.querySelector('body').classList.remove('d-none');
}
if (customElements) {
  customElements.whenDefined('animatable-component').then(animatableLoaded);
} else animatableLoaded()