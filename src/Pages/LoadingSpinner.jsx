import React from 'react';

const LoadingSpinner = () => {
    return (
      <div className="flex justify-center items-center py-50">
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
};

export default LoadingSpinner;