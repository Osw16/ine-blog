# INE Blog

Welcome to the repository for the INE Blog, a dynamic blogging platform built with Next.js and powered by Hygraph as our headless CMS for backend management. Our goal is to create an engaging, responsive, and visually appealing platform for users to enjoy a seamless reading and navigation experience.

## Key Features and Implementations

- **Content Model**: Leveraging Hygraph, we've designed a comprehensive content model that supports blog posts with titles, rich text content, publication dates, and optional cover images. This structure is key to delivering a rich user experience.

- **Data Fetching**: We utilize the `graphql-request` library for straightforward yet powerful GraphQL queries to Hygraph, ensuring that our content is always current and dynamically fetched.

- **Dynamic Page Generation**: With Next.js's dynamic routing, our platform efficiently generates individual pages for each blog post. This feature allows each post to have a unique URL, facilitating easier access and sharing.

- **Styling and Layout**: Tailwind CSS is our choice for styling, ensuring that the site is not only responsive but also aesthetically pleasing across different devices. Tailwind's utility-first approach helps us maintain a cohesive look and feel while enabling rapid development.

## Advanced Features In Development
Currently, I expect to roll this out in about a week, making it much simpler to locate specific content.
- **Search Functionality** (In Development): A feature that will allow users to easily search and filter posts by title is currently under development. This will greatly simplify finding specific content.


## Getting Started

To get started with this project, you'll need to set up your Hygraph project using our `Blog Template`.

1. **Hygraph Project Setup**:

   Ensure you've created a new Hygraph project. Then, navigate to your project's directory and copy the `.env.sample` file:

    ```shell
    cd hygraph-blog
    cp .env.sample .env.local
    ```

    In your `.env` file, set the `NEXT_PUBLIC_HYGRAPH_ENDPOINT` variable to the following value:

    ```env
    NEXT_PUBLIC_HYGRAPH_ENDPOINT=https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clu5i3sa2000008jw566rd0v6/master
    ```

2. **Run the Project Locally**:

   Install the dependencies and start the Next.js development server:

    ```shell
    npm install
    npm run dev
    ```

## Features Overview

- **App Router**: Efficiently manages page routing within the application.
- **Tailwind CSS**: Provides utility-first CSS for rapid UI development and ensures responsiveness and aesthetic appeal.

