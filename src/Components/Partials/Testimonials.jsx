import React from 'react';

const testimonials = [
  // Add your testimonials data here
  { name: 'John Doe', review: 'Great products!', imageUrl: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Aman', review: 'Amazing quality!', imageUrl: 'https://images.unsplash.com/photo-1475403614135-5f1aa0eb5015?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Prakhar', review: 'Excellent service!', imageUrl: 'https://images.unsplash.com/photo-1514278033938-06f80809a42c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img src={testimonial.imageUrl} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
              <p className="text-lg font-semibold text-gray-900">{testimonial.name}</p>
              <p className="mt-2 text-gray-600">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
