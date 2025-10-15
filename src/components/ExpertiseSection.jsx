import React from "react";

export default function ExpertiseSection() {
  const services = [
    {
      title: "Manicure",
      description:
        "Give your hands the care they deserve! Our manicures are designed to improve the health and appearance of your nails.",
      image:
        "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=500&auto=format&fit=crop",
    },
    {
      title: "Massage",
      description:
        "Our team of professional masseuses will give you a customized massage that will be tailored to your specific needs.",
      image:
        "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=500&auto=format&fit=crop",
    },
    {
      title: "Hairstyles",
      description:
        "Our team of stylists will help you find the perfect hairstyle for your face and style.",
      image:
        "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=500&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-serif text-gray-800 mb-10 tracking-wide">
          OUR AREAS OF EXPERTISE
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {service.description}
                </p>
                <button className="mt-auto text-sm font-medium text-gray-700 hover:text-gray-900">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
