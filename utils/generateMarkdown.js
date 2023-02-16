//generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ### Description
  ${data.Description}


  ## Table of Contents

- [Description](#description)

- [Installation](#requirements)

- [Usage](#usage)

- [License](#license)

- [Contributors](#contributors)

- [Testing](#testing)

- [Github](#github)

- [Email](#email)



### Installation
Installation Requirements ${data.Requirements}



### Testing
${data.Testing}



### Usage
${data.Usage}



### License
${licenseInfo(data.License)}



### Contributors
${data.Contributors}



### Github
[Github Profle](https://github.com/${data.Github})



### Email
If you have any questions about this project, feel free to reach me at: ${data.Email}
`;
}


//generate license badge 
function licenseBadge(license) {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  
} 

//generate license info
function licenseInfo(license) {
  return `${licenseBadge(license)}
  [License Info](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)`
}

module.exports = generateMarkdown;