import { useState } from "react";
import NoChangeMessage from "../components/NoChangeMessage";

const Index = () => {
  const [showNoChangeMessage, setShowNoChangeMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating a submission that results in no changes
    setShowNoChangeMessage(true);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Web App Builder</h1>
      
      {showNoChangeMessage && (
        <NoChangeMessage onClose={() => setShowNoChangeMessage(false)} />
      )}
      
      <form onSubmit={handleSubmit} className="mt-4">
        <textarea
          className="w-full p-2 border rounded"
          rows="4"
          placeholder="Enter your prompt here..."
        ></textarea>
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Index;