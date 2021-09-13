export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        center: { lat: 0, lng: 0 },
        zoom: 1,
      }
    );
  }

  addMarker(mark: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mark.location.lat,
        lng: mark.location.lng,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mark.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
