
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DetectionCard from "@/components/early-detection/DetectionCard";

const detectionServices = [
  {
    title: "AI-Powered Health Screening",
    description: "Advanced machine learning algorithms for early disease detection",
    image: "photo-1581091226825-a6a2a5aee158",
    details: [
      "Utilizes state-of-the-art AI algorithms to analyze health data",
      "Early detection of potential health risks through pattern recognition",
      "Continuous monitoring and real-time health insights"
    ]
  },
  {
    title: "Genetic Risk Assessment",
    description: "DNA analysis to identify potential genetic health risks",
    image: "photo-1487058792275-0ad4aaf24ca7",
    details: [
      "Comprehensive genetic screening for hereditary conditions",
      "Personalized risk assessment based on family history",
      "Detailed genetic counseling and guidance"
    ]
  },
  {
    title: "Preventive Health Monitoring",
    description: "Regular health monitoring for early warning signs",
    image: "photo-1485827404703-89b55fcc595e",
    details: [
      "Regular vital signs monitoring and analysis",
      "Early detection of cardiovascular conditions",
      "Preventive health recommendations and lifestyle guidance"
    ]
  },
  {
    title: "Advanced Diagnostic Imaging",
    description: "State-of-the-art imaging for early detection",
    image: "photo-1518770660439-4636190af475",
    details: [
      "High-resolution medical imaging technology",
      "Early detection of structural abnormalities",
      "Non-invasive screening methods"
    ]
  },
  {
    title: "Biomarker Analysis",
    description: "Molecular-level detection of disease indicators",
    image: "photo-1531297484001-80022131f5a1",
    details: [
      "Advanced blood and tissue analysis",
      "Early detection of cancer markers",
      "Comprehensive metabolic profiling"
    ]
  },
  {
    title: "Digital Health Monitoring",
    description: "24/7 digital health tracking and analysis",
    image: "photo-1605810230434-7631ac76ec81",
    details: [
      "Continuous digital health monitoring",
      "Real-time health data analysis",
      "Early warning system for health anomalies"
    ]
  }
];

const EarlyDetection = () => {
  return (
    <>
      <Helmet>
        <title>Early Disease Detection - SereneHealth</title>
      </Helmet>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="container-custom py-16">
          <h1 className="text-4xl font-bold text-center mb-8">Early Disease Detection</h1>
          <div className="max-w-6xl mx-auto">
            <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              Early detection of diseases is crucial for better treatment outcomes. Our advanced screening methods and health assessments help identify potential health issues before they become serious concerns.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {detectionServices.map((service, index) => (
                <DetectionCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  details={service.details}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default EarlyDetection;
