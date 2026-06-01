# Campus Guide App Prototype

A mobile-friendly web application designed to help students navigate campus, discover facilities, and access campus information.

## Features

- **Interactive Campus Map**: View buildings and facilities on an interactive map
- **Building Directory**: Search and browse campus buildings with details
- **Facility Locator**: Find libraries, cafeterias, classrooms, and more
- **Navigation Guide**: Get directions between campus locations
- **Event Calendar**: Discover campus events and activities
- **Campus Services**: Quick access to student services and contacts
- **Offline Support**: Core functionality works offline (planned)

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Mapping**: Leaflet.js for interactive maps
- **Data**: JSON-based campus information
- **Responsive Design**: Mobile-first approach

## Project Structure

```
campus-guide-app/
├── index.html           # Main application entry point
├── css/
│   └── styles.css       # Application styling
├── js/
│   ├── app.js          # Main application logic
│   ├── map.js          # Map functionality
│   ├── buildings.js    # Building data and management
│   └── ui.js           # UI components and interactions
├── data/
│   ├── buildings.json  # Campus buildings data
│   ├── facilities.json # Campus facilities data
│   └── events.json     # Campus events data
└── assets/
    ├── images/         # Icons and graphics
    └── icons/          # App icons

```

## Getting Started

1. Clone the repository
2. Open `index.html` in a web browser
3. Explore campus buildings and facilities on the interactive map

## Development

### Running Locally

```bash
# No build process required - just serve the files
python -m http.server 8000
# Then visit http://localhost:8000/campus-guide-app/
```

## Features Roadmap

- [ ] Interactive campus map with building markers
- [ ] Building search functionality
- [ ] Directions and navigation
- [ ] Event calendar integration
- [ ] Mobile app version (React Native)
- [ ] User reviews and ratings
- [ ] Real-time facility status
- [ ] Accessibility features

## Contributing

Contributions are welcome! Please create a feature branch and submit a pull request.

## License

MIT License - See LICENSE file for details
