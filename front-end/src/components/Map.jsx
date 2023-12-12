
import {useJsApiLoader, GoogleMap, Marker, DirectionsRenderer} from '@react-google-maps/api';


const journey ={
    source:{
        lat: 17.39267921447754, lng: 78.4677734375
    },
    destination:{
        lat: 23.26445690889521, lng:  77.41202726657104
    }
}

const Map = () => {

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyAKNvINXosnYnjKponB3GzlRhwwWr7f254"
        
    })
    

    if(!isLoaded) {
        return <div>Loading......</div>
    }

   
    return (
        < div style={{display: 'flex', justifyContent: 'space-evenly', padding: '50px'}}>
    
        <iframe src="https://www.google.com/maps/d/u/1/embed?mid=1f_DtjkfxGU4p9ECKLKt1SgYYlZQ1So0&ehbc=2E312F" width="320" height="320"></iframe>
        
        {/* <div>
            Hello Maps
            <script async src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCQTvaTlzihjmOWI4GGKV8kkYsTP4-1CYI&callback=console.debug&libraries=maps,marker&v=beta"></script>
            <gmp-map center="17.39267921447754,78.4677734375" zoom="14" map-id="DEMO_MAP_ID">
            <gmp-advanced-marker position="17.39267921447754,78.4677734375" title="My location">
            </gmp-advanced-marker>
            </gmp-map>
        </div> */
        }


        {/* <div>
            <iframe src="https://storage.googleapis.com/maps-solutions-6d7whzch36/commutes/8t7y/commutes.html"
  width="400" height="400" draggable="true"
  loading="lazy">
            </iframe>
        </div> */}

       <GoogleMap center={journey.source} 
       zoom={10}
       mapContainerStyle={{width: '500px', 
        height:'500px', 
        margin:'50px'}}
        
        
        style={{borderRadius: '50px', boxShadow: '10px 10px 10px 10px #000000'}}
        options={{
            disableDefaultUI: true,
            zoomControl: true,
            styles: [
                {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [
                        {
                            visibility: "off"
                        }
                    ]
                }
            ]
        }}
        
        
        >

        {
            /* Google Map Box*/
        }

        <Marker position={journey.source} />
        <Marker position={journey.destination} />

    
       </GoogleMap >

            <a>
            TEXT
            </a>

        </div>


      
      
    );
};

export default Map;