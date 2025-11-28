import React from 'react';

const SecondStat = () => {
    return (
      <div>
        <section className="py-16 bg-green-50 rounded-2xl mt-10">
          <div className="max-w-6xl mx-auto text-center px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Community Stats
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-4xl font-bold text-green-600">1200+</h3>
                <p className="text-gray-600 mt-2">Foods Donated</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-4xl font-bold text-green-600">850+</h3>
                <p className="text-gray-600 mt-2">Families Helped</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-4xl font-bold text-green-600">300+</h3>
                <p className="text-gray-600 mt-2">Active Donors</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default SecondStat;