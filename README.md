# INE Blog

This repository contains the code for a dynamic blogging platform developed with Next.js, utilizing Hygraph as the headless CMS for backend management.

## Key Features and Implementations

- **Content Model**: The platform uses Hygraph to define a versatile content model. This model supports essential features for blog posts, including titles, rich text content, publication dates, and optional cover images for each post.

- **Data Fetching**: Data is fetched efficiently from Hygraph using the `graphql-request` library, which facilitates simple yet powerful GraphQL queries. This ensures that the platform always displays the most current content.

- **Dynamic Page Generation**: Thanks to Next.js's dynamic routing capabilities, the platform generates pages for individual blog posts dynamically. This approach allows each post to have a unique URL based on its ID, facilitating direct access and sharing.

- **Styling and Layout**: The application employs Tailwind CSS to ensure that the site remains responsive and visually appealing across various devices. Tailwind's utility-first approach aids in creating a cohesive look and feel while allowing for rapid UI development.

## Advanced Features

In addition to the core functionalities, this project explores advanced features to enhance user engagement and content discoverability:

- A search functionality that allows users to filter posts by title, improving the user experience by making it easier to find relevant content.
- Pagination or infinite scrolling on the homepage to manage content presentation and ensure that users can easily access more articles as they browse.

## Project Structure

The repository is organized into modular components, facilitating easy navigation and scalability of the project. The structure includes:

- `components/`: Reusable UI components.
- `pages/`: Page components used by Next.js for routing.
- `styles/`: Tailwind CSS and custom styles for the project.
- `utilities/`: Helper functions and utilities for data fetching and other operations.

This structured approach not only makes the development process more efficient but also simplifies maintenance and future enhancements.

---

We hope this README provides a clear overview of the project. For any questions or contributions, please feel free to open an issue or submit a pull request.


2. **Provide your Hygraph project keys**

> In order to use this starter, you'll need to have created a new Hygraph project using our `Blog Template`.

Navigate into your new site’s directory and copy the `.env.sample` file.

```shell
cd hygraph-blog
cp .env.sample .env.local
```

Inside of your newly created `.env` file, provide values for each variable. These variables can be found in the [project settings UI](https://hygraph.com/docs/guides/overview/api-access).

```env
HYGRAPH_ENDPOINT=""
HYGRAPH_TOKEN=""
```

3. **Run the project locally.**

Install the dependencies and start the Next.js dev server:

```shell
npm install
npm run dev
```

## Features
* App Router
* Tailwind CSS
