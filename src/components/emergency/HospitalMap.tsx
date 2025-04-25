
import { useState, useEffect } from 'react';
import { MapPin, PhoneCall, Map as MapIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

interface Hospital {
  id: string;
  name: string;
  address: string;
  phone: string;
  distance: string;
  specialty: string;
}

// Mock hospitals data - in a real app, this would come from an API
const mockHospitals: Hospital[] = [
  {
    id: "hosp1",
    name: "General Memorial Hospital",
    address: "123 Medical Center Dr, Cityville",
    phone: "(555) 123-4567",
    distance: "1.2 miles",
    specialty: "General"
  },
  {
    id: "hosp2",
    name: "University Medical Center",
    address: "456 Health Blvd, Townsburg",
    phone: "(555) 987-6543",
    distance: "2.8 miles",
    specialty: "Research & Trauma"
  },
  {
    id: "hosp3",
    name: "Children's Health Center",
    address: "789 Pediatric Way, Cityville",
    phone: "(555) 234-5678",
    distance: "3.5 miles",
    specialty: "Pediatric"
  },
  {
    id: "hosp4",
    name: "Riverside Emergency Clinic",
    address: "101 Urgent Care Ln, Townsburg",
    phone: "(555) 345-6789",
    distance: "4.1 miles",
    specialty: "Emergency & Urgent Care"
  }
];

const HospitalMap = () => {
  const [hospitals] = useState<Hospital[]>(mockHospitals);
  const [selectedHospital, setSelectedHospital] = useState<string | null>(null);
  const [locationPermission, setLocationPermission] = useState<boolean | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Check if geolocation is available
    if ("geolocation" in navigator) {
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        if (result.state === "granted") {
          setLocationPermission(true);
        } else if (result.state === "prompt") {
          setLocationPermission(null);
        } else {
          setLocationPermission(false);
        }
      });
    } else {
      setLocationPermission(false);
    }
  }, []);

  const requestLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocationPermission(true);
          toast({
            title: "Location accessed",
            description: "We can now show hospitals near you.",
          });
        },
        (error) => {
          setLocationPermission(false);
          toast({
            title: "Location access denied",
            description: "Please enable location services to see nearby hospitals.",
            variant: "destructive"
          });
        }
      );
    }
  };

  // Handle hospital selection
  const selectHospital = (id: string) => {
    setSelectedHospital(id === selectedHospital ? null : id);
  };

  return (
    <div className="space-y-4">
      <Tabs defaultValue="list">
        <TabsList className="grid grid-cols-2">
          <TabsTrigger value="list" className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Hospital List</span>
          </TabsTrigger>
          <TabsTrigger value="map" className="flex items-center gap-2">
            <MapIcon className="h-4 w-4" />
            <span>Map View</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="list" className="mt-4">
          {locationPermission === false && (
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-sm text-gray-600 mb-2">
                Enable location services to find hospitals near you.
              </p>
              <Button onClick={requestLocation} size="sm">
                Share Location
              </Button>
            </div>
          )}
          
          <div className="space-y-3">
            {hospitals.map((hospital) => (
              <div 
                key={hospital.id} 
                className={`border rounded-lg p-4 cursor-pointer transition-all ${
                  selectedHospital === hospital.id 
                    ? 'border-medical-purple bg-medical-light-purple/20' 
                    : 'hover:border-gray-300'
                }`}
                onClick={() => selectHospital(hospital.id)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{hospital.name}</h3>
                    <p className="text-sm text-gray-600">{hospital.specialty} • {hospital.distance}</p>
                  </div>
                  <Button 
                    size="icon" 
                    variant="ghost"
                    className="rounded-full h-8 w-8 text-medical-purple hover:bg-medical-light-purple/50"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(`tel:${hospital.phone}`);
                    }}
                  >
                    <PhoneCall className="h-4 w-4" />
                  </Button>
                </div>
                {selectedHospital === hospital.id && (
                  <div className="mt-2 pt-2 border-t border-gray-200 animate-fade-in">
                    <p className="text-sm text-gray-700 mb-1">{hospital.address}</p>
                    <p className="text-sm text-gray-700">{hospital.phone}</p>
                    <div className="flex gap-2 mt-3">
                      <Button size="sm" variant="outline" className="text-xs">Get Directions</Button>
                      <Button size="sm" variant="outline" className="text-xs">View Details</Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="map" className="mt-4">
          <div className="bg-gray-100 rounded-lg border border-gray-200 h-[400px] flex items-center justify-center">
            <div className="text-center max-w-xs mx-auto">
              <MapIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Map View</h3>
              <p className="text-sm text-gray-600 mb-4">
                To view hospitals on a map, please enable location services.
              </p>
              <Button onClick={requestLocation}>Share Location</Button>
            </div>
          </div>
          
          <p className="text-xs text-gray-500 mt-2">
            In a production environment, this would display an actual map with hospital locations.
          </p>
        </TabsContent>
      </Tabs>
      
      <div className="mt-4 bg-medical-blue/30 p-4 rounded-lg border border-blue-200">
        <p className="text-sm text-gray-700">
          <strong className="font-medium">Note:</strong> Always call 911 in case of a serious emergency. This hospital finder is for informational purposes only.
        </p>
      </div>
    </div>
  );
};

export default HospitalMap;
