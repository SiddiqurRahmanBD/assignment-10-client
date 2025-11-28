import React from 'react';

const FisrtStat = () => {
    return (
      <div>
        <section className="py-16 bg-gray-100 rounded-2xl mt-10">
          <div className="max-w-5xl mx-auto text-center px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How It Works
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
              Our platform connects food donors with people who need meals.
              Follow these simple steps to get started.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all">
                <div className="text-5xl mb-4 text-green-600 font-bold">1</div>
                <h3 className="text-xl font-semibold mb-2">Post Food</h3>
                <p className="text-gray-600">
                  Donors can add food details such as name, quantity, and pickup
                  location.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all">
                <div className="text-5xl mb-4 text-green-600 font-bold">2</div>
                <h3 className="text-xl font-semibold mb-2">Find Food</h3>
                <p className="text-gray-600">
                  Users can browse available food items based on location and
                  availability.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all">
                <div className="text-5xl mb-4 text-green-600 font-bold">3</div>
                <h3 className="text-xl font-semibold mb-2">Collect Food</h3>
                <p className="text-gray-600">
                  After requesting, simply collect the food from the donor at
                  the given location.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default FisrtStat;