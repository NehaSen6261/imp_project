import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { } from 'googlemaps';
@Component({
  selector: 'app-agm-map',
  templateUrl: './agm-map.component.html',
  styleUrls: ['./agm-map.component.css']
})
export class AgmMapComponent implements AfterViewInit {
 
  
  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  map: google.maps.Map;
  lat = 37.37;
  lng = -122.04;
  coordinates = new google.maps.LatLng(this.lat, this.lng);


  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 12,
    gestureHandling:"cooperative",
  };

  // marker = new google.maps.Marker({
  //   position: this.coordinates,
  //   map: this.map,
  //   title:"Start"
  // });

  // mark2=new google.maps.Marker({
  //   label: "TEST",
  //   position:{lat:37.37,lng:-122.03},
  //   map: this.map,
  //   title:"TESTERSZ"

  // });

  ngAfterViewInit(){
    this.mapInitializer();
    throw new Error('Method not implemented.');
    
  }
  

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
  
    const marker = new google.maps.Marker({
      position: this.coordinates,
      map: this.map, // this.map will contain the map object here
      title:"Start"
    });
  
    const mark2 = new google.maps.Marker({
      label: "TEST",
      position:{lat:37.37,lng:-122.03},
      map: this.map,
      title:"TESTERSZ"
    });

    const mark3 = new google.maps.Marker({
      label: "TEST",
      position:{lat:37.39,lng:-122.03},
      map: this.map,
      title:"TESTERSZ"
    });

    const mark4 = new google.maps.Marker({
      label: "TEST",
      position:{lat:37.40,lng:-122.03},
      map: this.map,
      title:"TESTERSZ"
    });


    const mark5 = new google.maps.Marker({
      label: "TEST",
      position:{lat:37.45,lng:-122.09},
      map: this.map,
      title:"TESTERSZ"
    });

    const mark6 = new google.maps.Marker({
      label: "TEST",
      position:{lat:40.39,lng:-122.03},
      map: this.map,
      title:"TESTERSZ"
    });

    const mark7 = new google.maps.Marker({
      label: "TEST",
      position:{lat:42.39,lng:-122.03},
      map: this.map,
      title:"TESTERSZ"
    });

    const mark8 = new google.maps.Marker({
      label: "TEESSSt",
      position:{lat:37.45,lng:-122.03},
      map: this.map,
      title:"TESTERSZ"
    });


    const mark9 = new google.maps.Marker({
      label: "TEST",
      position:{lat:37.39,lng:-122.03},
      map: this.map,
      title:"TESTERSZ"
    });

    const mark10 = new google.maps.Marker({
      label: "TEST",
      position:{lat:37.39,lng:-122.03},
      map: this.map,
      title:"TESTERSZ"
    });

    const mark11 = new google.maps.Marker({
      label: "TEST",
      position:{lat:37.39,lng:-122.03},
      map: this.map,
      title:"TESTERSZ"
    });

    const mark12 = new google.maps.Marker({
      label: "TEST",
      position:{lat:37.39,lng:-122.03},
      map: this.map,
      title:"TESTERSZ"
    });

    const mark13 = new google.maps.Marker({
      label: "TEST",
      position:{lat:37.39,lng:-122.03},
      map: this.map,
      title:"TESTERSZ"
    });

    const mark14 = new google.maps.Marker({
      label: "TEST",
      position:{lat:37.39,lng:-122.03},
      map: this.map,
      title:"TESTERSZ"
    });

    const mark15 = new google.maps.Marker({
      label: "TEST",
      position:{lat:37.39,lng:-122.03},
      map: this.map,
      title:"TESTERSZ"
    });

    const mark16 = new google.maps.Marker({
      label: "TEST",
      position:{lat:37.39,lng:-122.03},
      map: this.map,
      title:"TESTERSZ"
    });

    const mark17 = new google.maps.Marker({
      label: "TEST",
      position:{lat:37.39,lng:-122.03},
      map: this.map,
      title:"TESTERSZ"
    });

    const mark18 = new google.maps.Marker({
      label: "TEST",
      position:{lat:37.39,lng:-122.03},
      map: this.map,
      title:"TESTERSZ"
    });

    const mark19 = new google.maps.Marker({
      label: "TEST",
      position:{lat:37.39,lng:-122.03},
      map: this.map,
      title:"TESTERSZ"
    });

    const mark20 = new google.maps.Marker({
      label: "TEST",
      position:{lat:37.39,lng:-122.03},
      map: this.map,
      title:"TESTERSZ"
    });
  
    marker.setMap(this.map);
    mark2.setMap(this.map);
    mark3.setMap(this.map);
    mark4.setMap(this.map);
    mark5.setMap(this.map);
    mark6.setMap(this.map);
    mark7.setMap(this.map);
    mark8.setMap(this.map);
    mark9.setMap(this.map);
    mark10.setMap(this.map);
    mark11.setMap(this.map);
    mark12.setMap(this.map);
    mark13.setMap(this.map);
    mark14.setMap(this.map);
    mark15.setMap(this.map);
    mark16.setMap(this.map);
    mark17.setMap(this.map);
    mark18.setMap(this.map);
    mark19.setMap(this.map);
    mark20.setMap(this.map);
    
  }
   
}
