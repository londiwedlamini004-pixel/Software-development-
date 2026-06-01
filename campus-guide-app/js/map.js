// Map Management
class MapManager {
    constructor() {
        this.map = null;
        this.markers = {};
        this.init();
    }

    init() {
        // Initialize Leaflet map centered on campus
        this.map = L.map('map').setView([40.7128, -74.0060], 15);
        
        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 19,
        }).addTo(this.map);

        this.addBuildingMarkers();
    }

    addBuildingMarkers() {
        buildingsData.forEach(building => {
            const marker = L.marker(building.coordinates)
                .bindPopup(`<strong>${building.name}</strong><br/>${building.address}`)
                .addTo(this.map);
            
            marker.on('click', () => {
                window.ui.showBuildingDetails(building.id);
            });

            this.markers[building.id] = marker;
        });
    }

    centerOnBuilding(buildingId) {
        const building = buildingsData.find(b => b.id == buildingId);
        if (!building) return;
        
        this.map.setView(building.coordinates, 17);
        this.markers[buildingId].openPopup();
    }

    addCircle(coordinates, radius, label) {
        L.circle(coordinates, {
            color: '#2563eb',
            fillColor: '#2563eb',
            fillOpacity: 0.1,
            radius: radius
        }).addTo(this.map)
         .bindPopup(label);
    }
}

// Initialize Map
window.map = new MapManager();
