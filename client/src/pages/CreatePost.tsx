import React from 'react';

const CreatePost: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Create Post</h2>
      <div className="card p-6">
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <input
              type="text"
              className="input"
              placeholder="Enter post title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Content
            </label>
            <textarea
              className="input"
              rows={10}
              placeholder="Write your post content..."
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost; 