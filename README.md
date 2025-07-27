# Myportfoliwebsite

This repository will eventually host my personal portfolio site. The
portfolio will be built using the open‑source
[`DeveloperFolio`](https://developerfolio.js.org/) project. Below is a
quick guide on how to set up and customize DeveloperFolio for your own
use.

## Getting Started

1. **Clone DeveloperFolio**

   ```bash
   git clone https://github.com/saadpasta/developerFolio.git
   ```

   You can copy its contents here or work in a separate fork and merge it
   later.

2. **Install Dependencies**

   DeveloperFolio uses Node and npm. Install the dependencies inside the
   project directory:

   ```bash
   npm install
   ```

3. **Customize `src/portfolio.js`**

   Replace the sample data with your own details (name, location, links,
   skills, etc.). You can also change images under `src/assets`.

4. **Run the Development Server**

   ```bash
   npm start
   ```

   This launches a local site at `http://localhost:3000` where you can see
   your changes live.

5. **Build and Deploy**

   ```bash
   npm run build
   ```

   The build output can then be uploaded to GitHub Pages or any web host
   of your choice.

## Tips

- Node 14 or newer is recommended.
- Customize colors in `src/theme.js` if desired.
- Commit your updates to keep track of changes.
