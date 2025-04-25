
import { Quote } from 'lucide-react';

const quotes = [
  {
    text: "The greatest wealth is health.",
    author: "Virgil"
  },
  {
    text: "Take care of your body. It's the only place you have to live.",
    author: "Jim Rohn"
  },
  {
    text: "Health is not valued until sickness comes.",
    author: "Thomas Fuller"
  }
];

const HealthQuotes = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {quotes.map((quote, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-start gap-4"
              >
                <div className="bg-medical-light-purple p-3 rounded-full">
                  <Quote className="h-6 w-6 text-medical-purple" />
                </div>
                <div>
                  <p className="text-lg text-gray-700 italic mb-2">{quote.text}</p>
                  <p className="text-sm text-gray-500">- {quote.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthQuotes;
