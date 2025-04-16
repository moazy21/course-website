import React from 'react';

interface Course {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  content: string;
}

interface CourseContentProps {
  course: Course | null;
}

const CourseContent: React.FC<CourseContentProps> = ({ course }) => {
  if (!course) return null;

  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={course.videoUrl}
          title={course.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-[400px]"
        ></iframe>
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">{course.title}</h2>
        <p className="text-gray-600 mb-6">{course.description}</p>
        <div className="prose max-w-none">
          <p>{course.content}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;