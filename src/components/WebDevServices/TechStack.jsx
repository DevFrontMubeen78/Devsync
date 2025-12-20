import React from 'react';

const techStackData = [
  {
    title: 'Backend web development',
    items: [
      'Java: Spring Boot, Spring Core, Spring MVC, Spring Security, Spring Data JPA, Hibernate, Flyway, Apache Tomcat, REST API, Maven',
      'NodeJS: Express.js',
      'Documentation: Swagger',
      'Database: PostgreSQL, Redis'
    ]
  },
  {
    title: 'Frontend web development',
    items: [
      'React.js',
      'HTML 5',
      'React Redux',
      'Material components'
    ]
  }
];

const TechStack = () => {
  return (
    <div className="container">
      <h2 className="Heading3 secondaryColor mb-6">Tech Stack</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-40 gap-20">
        {techStackData.map((section, index) => (
          <div key={index}>
            <h3 className="Heading5 secondaryColor mb-4">{section.title}</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300 Text3 secondaryColor">
              {section.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;