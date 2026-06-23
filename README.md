# College Compass (College Discovery Platform)

College Compass is a modern, full-stack web application designed to help students discover, compare, and predict their chances of admission to various top engineering colleges in India. Built with a focus on user experience and reliable information, the platform offers an intuitive interface to streamline the complex college selection process.

## 🚀 Features

*   **College Discovery:** Browse a comprehensive database of top colleges with detailed information, including location, average package, ranking, and tuition fees.
*   **Admission Predictor:** Estimate your chances of admission into different institutes based on your exam percentiles. 
*   **Compare Tool:** Select and compare multiple colleges side-by-side across various metrics to make an informed decision.
*   **User Authentication:** Secure user registration and login functionality allowing users to save their predictions and preferences.
*   **Interactive Dashboard:** A personalized dashboard to manage your saved predictions, view recently viewed colleges, and access quick actions.
*   **Responsive Design:** Fully responsive UI crafted with Tailwind CSS that works seamlessly across desktop, tablet, and mobile devices.

## 🛠️ Tech Stack

*   **Frontend Framework:** [Next.js](https://nextjs.org/) (App Router)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Authentication:** [NextAuth.js](https://next-auth.js.org/)
*   **Database:** SQLite (for development)
*   **ORM:** [Prisma](https://www.prisma.io/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)

## ⚙️ Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   [Node.js](https://nodejs.org/) (version 18 or higher recommended)
*   npm or yarn package manager

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/cheelaakhil/College-Discovery-Platform.git
    cd College-Discovery-Platform
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up the environment variables:**
    *   Create a `.env` file in the root directory.
    *   Add the following variables (adjust as needed for your local setup):
        ```env
        DATABASE_URL="file:./dev.db"
        NEXTAUTH_SECRET="your_secure_random_string_here"
        NEXTAUTH_URL="http://localhost:3000"
        ```

4.  **Initialize the database:**
    *   Run Prisma migrations to create the database schema:
        ```bash
        npx prisma migrate dev --name init
        ```
    *   Seed the database with initial college data:
        ```bash
        npm run prisma db seed
        ```

5.  **Run the development server:**
    ```bash
    npm run dev
    ```

6.  **Open the application:**
    Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the application in action.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/cheelaakhil/College-Discovery-Platform/issues).

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
