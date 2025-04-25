
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-6">
              Early detection of diseases is crucial for better treatment outcomes. Our advanced screening methods and health assessments help identify potential health issues before they become serious concerns.
            </p>
            {/* Placeholder for future content */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
              <p className="text-gray-600">
                We are currently developing comprehensive early detection tools and resources. Stay tuned for updates!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default EarlyDetection;
