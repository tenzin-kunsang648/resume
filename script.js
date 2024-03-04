/**
 * Resume/CV template created with Bootstrap 5 by @vmoratog and @jdnichollsc
 */
const resume = {
  firstName: 'Tenzin',
  lastName: 'Kunsang',
  jobTitle: 'Senior Software Developer / Data Engineer',
  city: 'Washington DC',
  postalCode: '20001',
  country: 'United States',
  phone: '+1 (612) 461-9711',
  email: 'tenzkunsang648@gmail.com',
  education: [
    {
      school: 'Northeastern University',
      degree: 'MS Computer Science',
      graduationDate: 'Present',
    },
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
    'Salesforce Certified Platform Developer II',
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
    'Java',
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
      endDate: 'July 2023',
      employer: 'ICF',
      city: 'Remote',
      achievements: [
            'Designed and developed projects on the Salesforce platform, including identifying and utilizing OOTB marketplace plugins for Department of Labor and United States Department of Agriculture',
            'Managed data for the National Directory of New Hires (NDNH) by gathering, mining, cleaning, pre-processing, and restructuring data models to meet strict structures and codifications. Documented automation and manual tasks as part of data codification processes',  
            'Revamped and developed survey processes using Tableau Recipe, Dataflow, CRMA features, and Salesforce Query Language (SAQL) to gather, restructure, and visualize survey data and insights',
            'Collaborated with stakeholders to gain comprehensive understanding of requirements and contribute to key design decisions, gaining insight into their mission, architecture, and security needs',
            'Designed scalable solutions that met evolving enterprise needs and delivered compliant Salesforce solutions',
            'Rapidly delivered high-quality code and features through iterative development, CI/CD, and Agile methodology',
            'Developed Machine Learning model in Python to analyze census data and predict income. Presented model to Data Science team',
            'Mentored new members on code development and best practices in Apex, Lightning Web Component, Aura Component with core languages Java and JavaScript', 
            'Integrated Salesforce with federal systems while ensuring compliance with federal standards'
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
  photo: 'https://photos.google.com/share/AF1QipOHgg_63g08tSbCXMDfMV9nqZ5ykJUzvd03uSOyiKCBZQOzJO-xoRnFJRxAdVeKTQ/photo/AF1QipMQZId9KbTVdzHgKoDB3jeLmzytpQUdwdzkKcC2?key=ckEzel9uQnFzclNSMnRIbWhvZ1JrX0M2NW9KSzRB',
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
