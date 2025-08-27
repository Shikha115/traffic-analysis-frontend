# Traffic Analysis Frontend

A modern web application built with Next.js and TypeScript for analyzing and visualizing traffic data. This frontend provides an intuitive interface to search, filter, and view traffic statistics with real-time data visualization.

## 🚀 Features

- **Real-time Traffic Data Visualization**: Interactive dashboard displaying traffic statistics
- **Search and Filter**: Advanced search functionality to filter traffic data by various parameters
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- **Statistical Breakdown**: Detailed breakdown of traffic data with visual charts
- **Date Range Filtering**: Filter data by specific date ranges
- **Modern UI/UX**: Clean, intuitive interface with smooth animations

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: React Context API
- **HTTP Client**: Fetch API for backend communication
- **Package Manager**: Yarn

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [Yarn](https://yarnpkg.com/) package manager

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Shikha115/traffic-analysis-frontend.git
cd traffic-analysis-frontend
```

### 2. Install Dependencies

```bash
yarn install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory and add your environment variables:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### 4. Start the Development Server

```bash
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## 🔌 API Integration

This frontend communicates with the Traffic Analysis Backend API to fetch and display traffic data. The API provides endpoints for:

- Traffic statistics and analytics
- Search and filtering capabilities
- Real-time data updates
- Historical data retrieval

### Backend Repository
The backend API is available at: [Traffic Analysis Backend](https://github.com/Shikha115/traffic-analysis-backend.git)

**Note**: Make sure the backend server is running before starting the frontend application.

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx          # Home page
│   └── Provider.tsx      # Context providers
├── components/            # Reusable UI components
│   ├── BreakdownList.tsx # Traffic data breakdown
│   ├── SearchBar.tsx     # Search functionality
│   ├── StatsCard.tsx     # Statistics cards
│   └── formatDate.tsx    # Date formatting utilities
└── services/             # API service layer
    ├── traffic.service.ts # Traffic data API calls
    └── url.service.ts    # URL management utilities
```

## 🏗️ Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build production application
- `yarn start` - Start production server
- `yarn lint` - Run ESLint for code quality
- `yarn type-check` - Run TypeScript type checking

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS for styling. Configuration can be found in `tailwind.config.js`.

### TypeScript
TypeScript configuration is in `tsconfig.json` with strict mode enabled for better code quality.

### Next.js
Next.js configuration is in `next.config.ts` with optimizations for production builds.

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on every push to main branch

### Other Platforms
You can also deploy to:
- Netlify
- AWS Amplify
- Heroku
- Docker containers

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Known Issues

- Backend connection required for full functionality
- Ensure CORS is properly configured on the backend

## 📞 Support

If you encounter any issues or have questions, please:
1. Check the [Issues](https://github.com/Shikha115/traffic-analysis-frontend/issues) section
2. Create a new issue if your problem isn't already listed
3. Provide detailed information about your environment and the issue

## 🔗 Related Projects

- [Traffic Analysis Backend](https://github.com/Shikha115/traffic-analysis-backend.git) - The API backend for this application

---

Made with ❤️ for traffic data analysis and visualization.
