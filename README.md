<a name="readme-top"></a>


<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">Json Dynamic Form Builder</h3>

  <p align="center">
    An awesome json editor to create dynamic form
    <br />
    <a href="https://json-dynamic-form.vercel.app/">View Demo</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This website used for creating an dynamic website based on json 

you can directly enter json in our editor or you can paste the json based on json response 
the form will created

the json should be structed followed by below rules


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![React][React.js]][React-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

 you can direactly get the code and run it by following below instructions

### Prerequisites

you need stabel version of node in you machine
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an instructions how you can get and run code in your machine

1. Clone the repo
   ```sh
   git clone https://github.com/ajayaj2001/json-dynamic-form.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Run the code
   ```sh
   npm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

After running the react app now you can play with it 

The json that you have enter/paste must be in correct format below you will see the example code
snippets

   ```sh
{
  "title": "Json Form Builder",
  "description": "generate dynamic form based on json response, play with it",
  "properties": [
    {
      "id": "label-1",
      "class": "label-1",
      "for": "input-1",
      "fieldType": "label",
      "label": "First Name"
    },
    {
      "id": "input-1",
      "class": "input-1",
      "name": "firstName",
      "fieldType": "input",
      "type": "text",
      "placeholder": "First Name",
      "hint": "your first name",
      "validations": {
        "regex": "^[a-zA-Z ]{2,30}$"
      }
    },
    {
      "id": "button-1",
      "class": "button-1",
      "fieldType": "button",
      "type": "submit",
      "title": "submit"
    }
  ]
}
   ```
   
   For each field properties depends upon field type properties are required

For all the fields
    • fieldType
Label Attributes
    • class / id
    • for
b. Input Attributes
    • type
    • class
    • id
    • name
    • placeholder
    • hint
c. Button
    • type
    • class
    • id

for input some input types are not allowed
here are the list  : radio,checkbox,file,image
*if the user try to add the above input type it will treat this as text type input

submit button should be have on 
currently for future use we allow multiple button 
if the button with type "submit" is clicked the form will validate and return the form value


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Ajay - [ajay.live](https://ajay.live) - ajayaj7397@gmail.com

Project Link: [https://github.com/ajayaj2001/json-dynamic-form](https://github.com/ajayaj2001/json-dynamic-form)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
