"use client";
import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = { lat: -6.303306939179257, lng: 107.02617702670409 };

function Map() {
  const mapRef = useRef<HTMLDivElement>(null);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);
 
  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_API_KEY as string,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");
      const { Marker } = (await loader.importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;

      const options: google.maps.MapOptions = {
        mapId: process.env.NEXT_PUBLIC_MAP_ID,
        mapTypeControl: false,
        zoomControl: true,
        clickableIcons: false,
        scrollwheel: false,
        center: center,
        zoom: 17,
        streetViewControl: true,
        streetViewControlOptions: {
          position: google.maps.ControlPosition.TOP_LEFT,
        },
        fullscreenControl: false, // Menonaktifkan kontrol fullscreen default
      };

      const newMap = new Map(mapRef.current as HTMLDivElement, options);

      const marker = new Marker({
        map: newMap,
        position: center,
      });

      const infoWindowContent = `
     <div class="custom-container">
  <div class="custom-border">
    <img src="/assets/logo.webp" alt="GPdI" class="custom-image" />
  </div>
  <div class="custom-text-container">
    <div id="title_screen" class="custom-title">GPdI Shekinah</div>
    <div id="fullscreen-toggle"  class="custom-view-larger">View Larger Map</div>
  </div>
</div>
    `;


      const infowindow = new google.maps.InfoWindow({
        content: infoWindowContent,
        headerDisabled: true,
      });
infoWindowRef.current = infowindow;
      infowindow.open({
        anchor: marker,
      });

      google.maps.event.addListenerOnce(infowindow, "domready", () => {
        const fullscreenToggle = document.getElementById("fullscreen-toggle");
        const title_screen = document.getElementById("title_screen");
        if (fullscreenToggle && title_screen) {
          fullscreenToggle.addEventListener("click", () => {

            newMap.getDiv().requestFullscreen()
            fullscreenToggle.innerText = "Exit Fullscreen";
            // title_screen.style.fontSize = "1.5rem"
            if(document.fullscreenElement) {
                document.exitFullscreen().catch((err) => {
                    console.error("Failed to exit fullscreen:", err);
                  });
            fullscreenToggle.innerText = "View Larger Map";

            }
          });
        }
      });

    }

    initMap();
  }, []);


  return (
    <div style={{ position: "relative", height: "100%" }}>
      <div ref={mapRef} style={containerStyle}></div>
    </div>
  );
}

export default Map;
