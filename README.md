# Welcome

Welcome to the AR Robotics project!

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Installation

To get started with AR Robotics, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/sanskar1308/arrobotics.git
   ```
2. Navigate to the project directory:
   ```sh
   cd arrobotics
   ```
3. Run Docker Compose to build and start the required services:

   ```sh
   docker-compose up --build
   ```

   - The following services will be available:
     - **Backend**: [http://localhost:3002](http://localhost:3002)
     - **User Frontend**: [http://localhost:3004](http://localhost:3004)
     - **Admin Frontend**: [http://localhost:3005](http://localhost:3005)

4. To run locally without Docker:
   ```sh
   for dir in backend frontend admin; do (cd "$dir" && npm install && npm start); done
   ```
   - Alternatively, you can start each part individually:
     - **Backend**:
       ```sh
       cd backend
       npm install
       npm start
       ```
     - **User Frontend**:
       ```sh
       cd frontend
       npm install
       npm start
       ```
     - **Admin Frontend**:
       ```sh
       cd admin
       npm install
       npm start
       ```

## Usage

- Visit the **User Frontend** at [http://localhost:3004](http://localhost:3004).
- Visit the **Admin Frontend** at [http://localhost:3005](http://localhost:3005).
- The **Backend** API is available at [http://localhost:3002](http://localhost:3002).

## Contributing

We welcome contributions to the AR Robotics project! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature-branch
   ```
3. Make your changes and commit them:
   ```sh
   git commit -m 'Add new feature'
   ```
4. Push to the branch:
   ```sh
   git push origin feature-branch
   ```
5. Open a Pull Request.

We appreciate your contributions and will review them as soon as possible!

---

Thank you for being a part of AR Robotics!
