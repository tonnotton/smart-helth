// components/LoadingSpinner.jsx
export default function LoadingSpinner() {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }