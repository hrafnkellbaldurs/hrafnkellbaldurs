<p align="center">
  <a href="https://hrafnkellbaldurs.com">
    <img alt="HrafnkellBaldurs" src="https://hrafnkellbaldurs.com/icons/icon-72x72.png" width="60" />
  </a>
</p>

<h1 align="center">
  HrafnkellBaldurs - Personal Portfolio
</h1>

[![Storybook](https://github.com/storybooks/brand/blob/master/logo/logo-storybook-default.svg)](https://hrafnkellbaldurs.github.io/hrafnkellbaldurs/)

This is my personal portfolio website where I showcase my work and experience.<br>
The website is created with [Gatsby](https://github.com/gatsbyjs/gatsby) to be statically generated, to improve performance and SEO.<br/>
To kick off the development, I used [gatsby-starter-default](https://github.com/gatsbyjs/gatsby-starter-default) which has basic scaffolding set up for a Gatsby project<br/>

## 🚀 Quick start

1.  **Clone the repository and install dependencies.**
    ```sh
    git clone https://github.com/hrafnkellbaldurs/hrafnkellbaldurs.git
    cd hrafnkellbaldurs
    npm install
    ```
2.  **Start developing**
    ```sh
    npm run dev
    ```
3.  **Open the source code and start editing!**
    The site is now running at `http://localhost:8000`!

    *Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying the data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).*

    Open the the `hrafnkellbaldurs` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!


## 🎓 More about Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

-   **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

-   **To dive straight into code samples head to [the documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the “Guides”, API reference, and “Advanced Tutorials” sections in the sidebar.


## :books: Storybook

-  The built storybook is located here  [![Storybook](https://github.com/storybooks/brand/blob/master/logo/logo-storybook-default.svg)](https://hrafnkellbaldurs.github.io/hrafnkellbaldurs/)<br/>
    but you can also run it locally and see live changes.

-  **To run Storybook in development mode**
    ```sh
    npm run storybook
    # storybook will run on http://localhost:6006
    ```
    All files in the [/src](https://github.com/hrafnkellbaldurs/hrafnkellbaldurs/tree/master/src) folder that match `*.stories.js` will be used, although I like to keep each stories file in the same folder as the component it's representing

-  **To build Storybook**
    ```sh
    npm run storybook:prod
    ```
    The build files are generated in the [/docs](https://github.com/hrafnkellbaldurs/hrafnkellbaldurs/tree/master/docs) folder, which is hosted on the main branch GitHub Pages [for this repository](https://hrafnkellbaldurs.github.io/hrafnkellbaldurs/)
