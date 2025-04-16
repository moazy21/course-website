
import { BookOpen, Video, Leaf, ChevronRight, Clock, Award, Globe, Users, Star, StarHalf, Play, ChevronDown } from 'lucide-react';
import CourseContent from './components/CourseContent';
import { useState, useRef } from 'react';

const courseModules = [
  {
    id: 1,
    title: "Introduction to Sustainable Packaging",
    description: "Core concepts and principles of sustainable packaging",
    courses: [
      {
        id: "1-1",
        title: "What is Sustainable Packaging",
        description: "Covers definitions, evolution, characteristics, and examples of eco-friendly packaging.",
        videoUrl: "/course-website/src/images/m1/1-1.mp4",
        content: "This lesson introduces what sustainable packaging means and why it matters."
      },
      {
        id: "1-2",
        title: "Importance of Sustainable Packaging",
        description: "Explores environmental, economic, and social benefits, with case studies.",
        videoUrl: "https://www.youtube.com/embed/videoseries?list=PLnkKF1GDQK_HtfFfi7KyQFlRgO_qNFPO8",
        content: "Learn why eco-friendly packaging is crucial for the planet and businesses."
      },
      {
        id: "1-3",
        title: "Key Components of Sustainable Packaging",
        description: "Focuses on material choices, design efficiency, and end-of-life considerations.",
        videoUrl: "https://www.youtube.com/embed/videoseries?list=PLnkKF1GDQK_HtfFfi7KyQFlRgO_qNFPO8",
        content: "Understand what makes packaging truly sustainable from start to finish."
      }
    ]
  },
  {
    id: 2,
    title: "Sustainable Packaging Materials",
    description: "Exploring different materials used in sustainable packaging",
    courses: [
      {
        id: "2-1",
        title: "Recycled and Recyclable Materials",
        description: "Details common recyclable materials, challenges, and design strategies.",
        videoUrl: "https://www.youtube.com/embed/videoseries?list=PLnkKF1GDQK_HtfFfi7KyQFlRgO_qNFPO8",
        content: "Discover how using recycled materials helps the environment and how to design for recyclability."
      },
      {
        id: "2-2",
        title: "Biodegradable and Compostable Materials",
        description: "Explains the differences, materials used, and their limitations.",
        videoUrl: "https://www.youtube.com/embed/videoseries?list=PLnkKF1GDQK_HtfFfi7KyQFlRgO_qNFPO8",
        content: "Learn about packaging that can break down naturally and how to use it effectively."
      },
      {
        id: "2-3",
        title: "Innovative and Emerging Materials",
        description: "Introduces new materials like seaweed and mushroom packaging, with case studies.",
        videoUrl: "https://www.youtube.com/embed/videoseries?list=PLnkKF1GDQK_HtfFfi7KyQFlRgO_qNFPO8",
        content: "Explore cutting-edge materials that could transform the future of packaging."
      }
    ]
  },
  {
    id: 3,
    title: "Design Principles for Sustainable Packaging",
    description: "Key approaches to designing sustainable packaging solutions",
    courses: [
      {
        id: "3-1",
        title: "Design for Reduce, Reuse, Recycle",
        description: "Teaches how to minimize material use and create reusable or recyclable designs.",
        videoUrl: "https://www.youtube.com/embed/videoseries?list=PLnkKF1GDQK_HtfFfi7KyQFlRgO_qNFPO8",
        content: "See how to design smartly by reducing waste and encouraging reuse and recycling."
      },
      {
        id: "3-2",
        title: "Life Cycle Assessment (LCA) in Packaging Design",
        description: "Learn the stages of LCA, key tools like SimaPro and GaBi, and how to apply insights for packaging improvements.",
        videoUrl: "https://www.youtube.com/embed/videoseries?list=PLnkKF1GDQK_HtfFfi7KyQFlRgO_qNFPO8",
        content: "This lesson covers LCA fundamentals, essential software, and real-world case studies to optimize packaging sustainability."
      },
      {
        id: "3-3",
        title: "Functional and Aesthetic Design Considerations",
        description: "Balance sustainability with functionality and brand identity while prototyping eco-friendly packaging.",
        videoUrl: "https://www.youtube.com/embed/videoseries?list=PLnkKF1GDQK_HtfFfi7KyQFlRgO_qNFPO8",
        content: "Explore design strategies that maintain usability and brand appeal while reducing environmental impact."
      }
      
    ]
  },
  {
    id: 4,
    title: "Sustainable Packaging Regulations and Certifications",
    description: "Understanding compliance and eco-labeling in packaging",
    courses: [
      {
        id: "4-1",
        title: "Global Packaging Regulations",
        description: "Overview of key global laws affecting packaging design.",
        videoUrl: "https://www.youtube.com/embed/videoseries?list=PLnkKF1GDQK_HtfFfi7KyQFlRgO_qNFPO8",
        content: "Learn the rules companies must follow when designing sustainable packaging."
      },
      {
        id: "4-2",
        title: "Certifications and Eco-Labels",
        description: "Details trusted certifications like FSC and Cradle to Cradle.",
        videoUrl: "https://www.youtube.com/embed/videoseries?list=PLnkKF1GDQK_HtfFfi7KyQFlRgO_qNFPO8",
        content: "Find out how certified labels build consumer trust in eco-packaging."
      }
    ]
  },
  {
    id: 5,
    title: "Implementing Sustainable Packaging in Your Business",
    description: "Practical approaches to adopting sustainable packaging",
    courses: [
      {
        id: "5-1",
        title: "Developing a Sustainable Packaging Strategy",
        description: "Guides on building a roadmap with goals and KPIs.",
        videoUrl: "https://www.youtube.com/embed/videoseries?list=PLnkKF1GDQK_HtfFfi7KyQFlRgO_qNFPO8",
        content: "Learn how to plan and launch your own sustainable packaging strategy."
      },
      {
        id: "5-2",
        title: "Case Studies and Best Practices",
        description: "Highlights real-world success stories and industry insights.",
        videoUrl: "https://www.youtube.com/embed/videoseries?list=PLnkKF1GDQK_HtfFfi7KyQFlRgO_qNFPO8",
        content: "See how other businesses have successfully gone green with packaging."
      },
      {
        id: "5-3",
        title: "Measuring and Reporting on Packaging Sustainability",
        description: "Covers tools, KPIs, and reporting methods.",
        videoUrl: "https://www.youtube.com/embed/videoseries?list=PLnkKF1GDQK_HtfFfi7KyQFlRgO_qNFPO8",
        content: "Discover how to track and share your sustainability impact."
      }
    ]
  },
  {
    id: 6,
    title: "Future Trends in Sustainable Packaging",
    description: "Emerging innovations and developments in packaging sustainability",
    courses: [
      {
        id: "6-1",
        title: "The Future of Sustainable Packaging Design",
        description: "Looks at trends like smart packaging and bio-based materials.",
        videoUrl: "https://www.youtube.com/embed/videoseries?list=PLnkKF1GDQK_HtfFfi7KyQFlRgO_qNFPO8",
        content: "Get a sneak peek at what's next for sustainable packaging design."
      }
    ]
  }
];

const learningObjectives = [
  "Understand sustainable packaging and why it matters",
  "Choose eco-friendly materials (recycled, biodegradable, innovative)",
  "Design packaging that reduces waste (3R approach, circular design)",
  "Apply Life Cycle Assessment (LCA) tools like SimaPro/GaBis",
  "Balance sustainability with functionality and brand appeal",
  "Comply with global regulations and certifications (FSC, Cradle to Cradle)",
  "Implement a sustainable packaging strategy in your business",
  "Measure and report on packaging sustainability",
  "Learn from real-world case studies of successful brands",
  "Stay ahead with future trends (smart packaging, bio-materials)"
];

function App() {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [showIntroVideo, setShowIntroVideo] = useState(false);
  const coursesRef = useRef<HTMLDivElement>(null);

  const scrollToCourses = () => {
    setSelectedModule(1);
    coursesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleModuleClick = (moduleId: number) => {
    if (selectedModule === moduleId) {
      setSelectedModule(null);
      setSelectedCourse(null);
    } else {
      setSelectedModule(moduleId);
      setSelectedCourse(null);
    }
  };

  const getCurrentCourse = () => {
    if (!selectedModule || !selectedCourse) return null;
    const module = courseModules.find(m => m.id === selectedModule);
    return module?.courses.find(c => c.id === selectedCourse) || null;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Sustainability in Action
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Learn how to create a more sustainable future
            </p>
            <button 
              onClick={scrollToCourses}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold flex items-center mx-auto"
            >
              Start Learning <ChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Course Preview Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="flex items-center gap-2 mb-4">
                <Award className="text-yellow-500 w-6 h-6" />
                <span className="text-sm font-semibold bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Bestseller</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Sustainable Packaging Design: A Quick Guide to Eco-Friendly Packaging Solutions</h2>
              <p className="text-gray-600 mb-6">Provide a concise, impactful guide to designing eco-friendly packaging solutions with a focus on key principles, materials, strategies, and real-world applications.</p>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <StarHalf className="w-5 h-5 text-yellow-400" />
                  <span className="ml-2 text-gray-600">(7,385 ratings)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600">23,016 students</span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600">2 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600">English</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600">Certificate</span>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">What you'll learn</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {learningObjectives.map((objective, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span>{objective}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="bg-gray-50 p-6 rounded-lg sticky top-4">
                <div className="mb-4">
                  <span className="text-3xl font-bold">$11.99</span>
                  <span className="text-gray-500 line-through ml-2">$69.99</span>
                  <span className="text-red-600 ml-2">83% off</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">10 hours left at this price!</p>
                <button 
                  onClick={() => setShowIntroVideo(true)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold mb-4"
                >
                  Watch Preview
                </button>
                <button 
                  onClick={scrollToCourses}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold mb-4"
                >
                  Enroll Now
                </button>
                <p className="text-center text-sm text-gray-600 mb-4">30-Day Money-Back Guarantee</p>
                <div className="text-sm text-gray-600">
                  <p className="mb-2">This course includes:</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Video className="w-4 h-4" />
                      2 hours on-demand video
                    </li>
                    
                    <li className="flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      Full lifetime access
                    </li>
                    <li className="flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      Certificate of completion
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Video Section */}
      {showIntroVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full">
            <div className="relative">
              <iframe
                src="course-website/src/images/m1/intro_m1.mp4"
                title="Course Introduction"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full aspect-video"
              ></iframe>
              <button
                onClick={() => setShowIntroVideo(false)}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Course Introduction</h3>
              <p className="text-gray-600 mb-4">
                Get an overview of what you'll learn in this comprehensive ESG and Sustainability course.
              </p>
              <button
                onClick={() => {
                  setShowIntroVideo(false);
                  scrollToCourses();
                }}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2"
              >
                <Play className="w-4 h-4" /> Continue to Course
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Course Overview */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Comprehensive Learning</h3>
            <p className="text-gray-600">In-depth content covering all aspects of sustainability</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Video className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Video Lectures</h3>
            <p className="text-gray-600">Engaging video content for enhanced learning</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Practical Application</h3>
            <p className="text-gray-600">Real-world examples and actionable steps</p>
          </div>
        </div>

        {/* Course Content */}
        <div className="grid md:grid-cols-3 gap-8" ref={coursesRef}>
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-6">Course Modules</h2>
            <div className="space-y-4">
              {courseModules.map((module) => (
                <div key={module.id} className="bg-white rounded-lg overflow-hidden">
                  <button
                    onClick={() => handleModuleClick(module.id)}
                    className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50"
                  >
                    <div>
                      <h3 className="font-semibold">{module.title}</h3>
                      <p className="text-sm text-gray-600">{module.description}</p>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        selectedModule === module.id ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  {selectedModule === module.id && (
                    <div className="border-t border-gray-100">
                      {module.courses.map((course) => (
                        <button
                          key={course.id}
                          onClick={() => setSelectedCourse(course.id)}
                          className={`w-full text-left p-4 pl-8 hover:bg-gray-50 ${
                            selectedCourse === course.id
                              ? 'bg-green-50 text-green-700'
                              : ''
                          }`}
                        >
                          <h4 className="font-medium">{course.title}</h4>
                          <p className="text-sm text-gray-600">{course.description}</p>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-2">
            {selectedCourse ? (
              <CourseContent course={getCurrentCourse()} />
            ) : (
              <div className="bg-white p-8 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-4">Select a Course</h3>
                <p className="text-gray-600">Choose a module and course from the left to start learning</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;