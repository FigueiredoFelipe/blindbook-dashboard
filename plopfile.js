module.exports = function (plop) {
  // Helper to convert the path into ProperCase per segment
  plop.setHelper('properCase', function (text) {
    return text
      .split('/')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join('');
  });

  plop.setGenerator('page', {
    description: 'Generates a new route with layout.tsx and page.tsx (supports nested paths)',
    prompts: [
      {
        type: 'input',
        name: 'path',
        message: 'What is the route path? (e.g., dashboard or auth/login)',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/app/{{path}}/layout.tsx',
        templateFile: 'templates/layout.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/app/{{path}}/page.tsx',
        templateFile: 'templates/page.tsx.hbs',
      }
    ],
  });
};
