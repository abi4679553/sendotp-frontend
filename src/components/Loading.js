import React from "react";

export const Loading = () => {
  return (
    <div className="fixed inset-0 bg-gray-950/80 flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">

        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-gray-700 border-t-cyan-400 rounded-full animate-spin"></div>

        {/* Text */}
        <p className="text-cyan-400 text-lg font-medium">
          Loading...
        </p>

      </div>
    </div>
  );
};