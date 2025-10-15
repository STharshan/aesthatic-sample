import React from "react";

export default function LatestSection() {
  const articles = [
    {
      title: "Skincare Simplified: Expert Tips",
      date: "01.02.2025",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop",
    },
    {
      title: "The Natural Path to Better Skin",
      date: "01.02.2025",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop",
    },
    {
      title: "Nurture Your Skin with Nature",
      date: "01.02.2025",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-gray-900">
          The Latest
        </h2>

        {/* Grid layout */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <div
              key={index}
              className="flex flex-col items-start space-y-3 group"
            >
              <div className="overflow-hidden w-full">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Title & Date */}
              <div className="flex justify-between items-center w-full">
                <p className="text-xs tracking-widest text-gray-800 uppercase font-mono">
                  {article.title}
                </p>
                <span className="text-xs text-gray-600 font-mono">
                  {article.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
