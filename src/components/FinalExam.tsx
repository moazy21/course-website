// src/components/FinalExam.tsx
import React, {useRef, useState} from 'react';

interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: string;
}

const examQuestions: Question[] = [
    {
        "id": 1,
        "question": "What is the primary goal of sustainable packaging?",
        "options": [
            "Increase shelf life",
            "Reduce manufacturing costs",
            "Minimize environmental impact",
            "Maximize brand visibility"
        ],
        "correctAnswer": "Minimize environmental impact"
    },
    {
        "id": 2,
        "question": "Which of the following is NOT a characteristic of sustainable packaging?",
        "options": [
            "Made from non-renewable resources",
            "Designed for recyclability",
            "Efficient material usage",
            "Designed for reuse"
        ],
        "correctAnswer": "Made from non-renewable resources"
    },
    {
        "id": 3,
        "question": "Which company is known for offering reusable packaging systems through Loop?",
        "options": [
            "Coca-Cola",
            "Unilever",
            "TerraCycle",
            "Nestlé"
        ],
        "correctAnswer": "TerraCycle"
    },
    {
        "id": 4,
        "question": "Which material is 100% recyclable without loss of quality?",
        "options": [
            "PET plastic",
            "Glass",
            "Cardboard",
            "PLA"
        ],
        "correctAnswer": "Glass"
    },
    {
        "id": 5,
        "question": "What does PLA stand for?",
        "options": [
            "Plastic Labeling Act",
            "Polylactic Acid",
            "Poly Labeled Adhesive",
            "Post-use Light Alloy"
        ],
        "correctAnswer": "Polylactic Acid"
    },
    {
        "id": 6,
        "question": "Which of the following is considered an innovative sustainable material?",
        "options": [
            "Polyethylene",
            "Seaweed-based film",
            "Polyvinyl chloride",
            "Polyester"
        ],
        "correctAnswer": "Seaweed-based film"
    },
    {
        "id": 7,
        "question": "What does the 3R principle stand for?",
        "options": [
            "Reduce, Recycle, Reinvest",
            "Reuse, Return, Rebuild",
            "Reduce, Reuse, Recycle",
            "Refuse, Reuse, Repurpose"
        ],
        "correctAnswer": "Reduce, Reuse, Recycle"
    },
    {
        "id": 8,
        "question": "Which packaging design is most aligned with circular economy principles?",
        "options": [
            "Disposable plastic wrap",
            "Laminated snack pouches",
            "Returnable glass jars",
            "Styrofoam containers"
        ],
        "correctAnswer": "Returnable glass jars"
    },
    {
        "id": 9,
        "question": "Smart packaging may include which of the following features?",
        "options": [
            "A recyclable triangle symbol",
            "Tamper-resistant ink",
            "QR codes and freshness sensors",
            "Double-wall construction"
        ],
        "correctAnswer": "QR codes and freshness sensors"
    },
    {
        "id": 10,
        "question": "Which of the following is a benefit of minimalist packaging?",
        "options": [
            "Higher production cost",
            "Greater consumer confusion",
            "Reduced resource use",
            "Increased visual clutter"
        ],
        "correctAnswer": "Reduced resource use"
    },
    {
        "id": 11,
        "question": "What is LCA short for in sustainable packaging?",
        "options": [
            "Life Cycle Adjustment",
            "Local Compost Analysis",
            "Lifecycle Assessment",
            "Long-term Composting Approach"
        ],
        "correctAnswer": "Lifecycle Assessment"
    },
    {
        "id": 12,
        "question": "Which of these is a benefit of conducting a lifecycle assessment?",
        "options": [
            "Reduces employee workload",
            "Maximizes production time",
            "Identifies environmental hotspots",
            "Increases color vibrancy in packaging"
        ],
        "correctAnswer": "Identifies environmental hotspots"
    },
    {
        "id": 13,
        "question": "Why is educating consumers on packaging disposal important?",
        "options": [
            "It helps boost sales",
            "It reduces return rates",
            "It encourages proper recycling and composting",
            "It replaces the need for regulation"
        ],
        "correctAnswer": "It encourages proper recycling and composting"
    },
    {
        "id": 14,
        "question": "Which of these is an example of an edible packaging material?",
        "options": [
            "Bioplastic wrap",
            "Wax-coated cardboard",
            "Seaweed film",
            "Nylon pouch"
        ],
        "correctAnswer": "Seaweed film"
    },
    {
        "id": 15,
        "question": "Which of the following is an interactive packaging feature?",
        "options": [
            "Aluminum seal",
            "QR code",
            "Twist cap",
            "Paper label"
        ],
        "correctAnswer": "QR code"
    },
    {
        "id": 16,
        "question": "Which program encourages consumers to reuse outdoor gear, promoting circularity?",
        "options": [
            "Tetra Pak Refresh",
            "Coca-Cola Loop",
            "Patagonia Worn Wear",
            "Nestlé Renewables"
        ],
        "correctAnswer": "Patagonia Worn Wear"
    },
    {
        "id": 17,
        "question": "What is the first step in implementing a sustainable packaging strategy?",
        "options": [
            "Start social media promotions",
            "Set sustainability goals",
            "Assess current packaging practices",
            "Redesign product branding"
        ],
        "correctAnswer": "Assess current packaging practices"
    },
    {
        "id": 18,
        "question": "Which company implemented refillable packaging stations for cleaning products?",
        "options": [
            "L’Oréal",
            "Unilever",
            "IKEA",
            "Coca-Cola"
        ],
        "correctAnswer": "Unilever"
    },
    {
        "id": 19,
        "question": "What does modular packaging allow for?",
        "options": [
            "Single-use disposal",
            "Higher shelf placement",
            "Customization and reuse",
            "Automated pricing"
        ],
        "correctAnswer": "Customization and reuse"
    },
    {
        "id": 20,
        "question": "Which of the following is a future trend in packaging design?",
        "options": [
            "Thicker plastic layers",
            "Single-use polystyrene",
            "Integration of IoT (Internet of Things)",
            "Less use of recycled materials"
        ],
        "correctAnswer": "Integration of IoT (Internet of Things)"
    },
    {
        "id": 21,
        "question": "What innovation helps monitor freshness in food packaging?",
        "options": [
            "Tamper stickers",
            "Bioplastics",
            "Freshness sensors",
            "Algae inks"
        ],
        "correctAnswer": "Freshness sensors"
    },
    {
        "id": 22,
        "question": "Which of these is NOT an environmental KPI?",
        "options": [
            "Carbon footprint",
            "Waste reduction",
            "ROI",
            "Water usage"
        ],
        "correctAnswer": "ROI"
    },
    {
        "id": 23,
        "question": "Which tool is used to conduct a Lifecycle Assessment?",
        "options": [
            "Canva",
            "OpenLCA",
            "Adobe Illustrator",
            "Google Sheets"
        ],
        "correctAnswer": "OpenLCA"
    },
    {
        "id": 24,
        "question": "Which of the following should a sustainability report include?",
        "options": [
            "Only visual elements",
            "Competitive pricing",
            "Methodology and findings",
            "Product discount codes"
        ],
        "correctAnswer": "Methodology and findings"
    },
    {
        "id": 25,
        "question": "What is one benefit of using recycled materials in packaging?",
        "options": [
            "Increases plastic production",
            "Reduces demand for virgin materials",
            "Makes sorting harder",
            "Improves visual appeal"
        ],
        "correctAnswer": "Reduces demand for virgin materials"
    },
    {
        "id": 26,
        "question": "Which visual design cue commonly signals sustainability to consumers?",
        "options": [
            "Neon colors",
            "Earthy tones and kraft paper",
            "Foil stamping",
            "Glossy finishes"
        ],
        "correctAnswer": "Earthy tones and kraft paper"
    },
    {
        "id": 27,
        "question": "Which smart packaging technology offers temperature control?",
        "options": [
            "QR codes",
            "Oxygen absorbers",
            "Active packaging",
            "Barcodes"
        ],
        "correctAnswer": "Active packaging"
    },
    {
        "id": 28,
        "question": "Which of the following is a challenge when using biodegradable packaging?",
        "options": [
            "Consumer excitement",
            "Too many composting facilities",
            "Lack of proper disposal infrastructure",
            "Overly high recyclability"
        ],
        "correctAnswer": "Lack of proper disposal infrastructure"
    },
    {
        "id": 29,
        "question": "Which material is derived from corn starch and used in compostable packaging?",
        "options": [
            "PET",
            "PLA",
            "PVC",
            "HDPE"
        ],
        "correctAnswer": "PLA"
    },
    {
        "id": 30,
        "question": "Which term refers to packaging made entirely from one material for easier recycling?",
        "options": [
            "Multi-layer",
            "Hybrid packaging",
            "Mono-material",
            "Composite wrap"
        ],
        "correctAnswer": "Mono-material"
    },
    {
        "id": 31,
        "question": "Why do companies apply for eco-label certifications?",
        "options": [
            "To avoid recycling fees",
            "To increase packaging weight",
            "To build consumer trust",
            "To hide packaging composition"
        ],
        "correctAnswer": "To build consumer trust"
    },
    {
        "id": 32,
        "question": "Which of these is an example of reuse-oriented design?",
        "options": [
            "Vacuum-sealed pouches",
            "Aluminum cans",
            "Refillable containers",
            "Shrink wrap"
        ],
        "correctAnswer": "Refillable containers"
    },
    {
        "id": 33,
        "question": "Which standard certifies compostable packaging materials?",
        "options": [
            "EN 13432",
            "ISO 9001",
            "FDA 510K",
            "ASTM B403"
        ],
        "correctAnswer": "EN 13432"
    },
    {
        "id": 34,
        "question": "A packaging design with high-end finishes, heavy ink coverage, and plastic lining is likely to...",
        "options": [
            "Be recyclable",
            "Be sustainable",
            "Be compostable",
            "Face recycling challenges"
        ],
        "correctAnswer": "Face recycling challenges"
    },
    {
        "id": 35,
        "question": "Which organization sets standards like FSC for sustainable forestry in packaging?",
        "options": [
            "FDA",
            "ISO",
            "FSC",
            "USDA"
        ],
        "correctAnswer": "FSC"
    },
    {
        "id": 36,
        "question": "What is a key challenge in adopting emerging packaging materials?",
        "options": [
            "Excessive consumer demand",
            "Too low cost",
            "Lack of scalability",
            "Widespread regulations"
        ],
        "correctAnswer": "Lack of scalability"
    },
    {
        "id": 37,
        "question": "What type of packaging can actually reduce transportation emissions?",
        "options": [
            "Heavy-duty crates",
            "Shrink wrap",
            "Flat-pack, lightweight packaging",
            "Plastic bubble wrap"
        ],
        "correctAnswer": "Flat-pack, lightweight packaging"
    },
    {
        "id": 38,
        "question": "How can interactive packaging increase sustainability awareness?",
        "options": [
            "By making packaging louder",
            "Through digital experiences like QR codes",
            "Using printed comics",
            "Including neon labels"
        ],
        "correctAnswer": "Through digital experiences like QR codes"
    },
    {
        "id": 39,
        "question": "What does 'design for disassembly' mean in circular packaging?",
        "options": [
            "Designing for artistic effect",
            "Ensuring packaging can be easily separated for recycling",
            "Using glue to hold materials tightly",
            "Preventing consumer tampering"
        ],
        "correctAnswer": "Ensuring packaging can be easily separated for recycling"
    },
    {
        "id": 40,
        "question": "Which brand is known for using mushroom-based packaging?",
        "options": [
            "Ecovative",
            "PepsiCo",
            "Amazon Basics",
            "L’Oréal"
        ],
        "correctAnswer": "Ecovative"
    }
];

const FinalExam: React.FC = () => {
    const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    const questionsPerPage = 5;
    const totalPages = Math.ceil(examQuestions.length / questionsPerPage);

    // Ref for the course module container
    const courseModuleRef = useRef<HTMLDivElement>(null);

    const getCurrentQuestions = () => {
        const startIndex = currentPage * questionsPerPage;
        return examQuestions.slice(startIndex, startIndex + questionsPerPage);
    };

    const handleAnswerSelect = (questionId: number, answer: string) => {
        setUserAnswers(prev => ({
            ...prev,
            [questionId]: answer
        }));
    };

    const handleNext = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(prev => prev + 1);
            courseModuleRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handlePrevious = () => {
        if (currentPage > 0) {
            setCurrentPage(prev => prev - 1);
            courseModuleRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const isPageComplete = () => {
        const currentQuestions = getCurrentQuestions();
        return currentQuestions.every(q => userAnswers[q.id]);
    };

    const handleSubmit = () => {
        const correctAnswers = examQuestions.filter(
            q => userAnswers[q.id] === q.correctAnswer
        ).length;
        const finalScore = (correctAnswers / examQuestions.length) * 100;
        setScore(finalScore);
        setSubmitted(true);
    };

    const renderFeedback = () => {
        if (score >= 80) {
            return (
                <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-4">
                    <p className="font-bold">Congratulations! 🎉</p>
                    <p>You have successfully passed the final exam!</p>
                </div>
            );
        } else {
            return (
                <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg mb-4">
                    <p className="font-bold">Keep Learning</p>
                    <p>We recommend reviewing the course materials and trying again.</p>
                </div>
            );
        }
    };

    return (
        <div ref={courseModuleRef} className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-6">Final Exam</h2>
            <div className="mb-4 text-gray-600">
                Page {currentPage + 1} of {totalPages}
            </div>
            {!submitted ? (
                <>
                    {getCurrentQuestions().map(q => (
                        <div key={q.id} className="mb-8">
                            <p className="font-semibold mb-4">{q.question}</p>
                            <div className="space-y-2">
                                {q.options.map(option => (
                                    <label key={option} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                                        <input
                                            type="radio"
                                            name={`question-${q.id}`}
                                            value={option}
                                            checked={userAnswers[q.id] === option}
                                            onChange={() => handleAnswerSelect(q.id, option)}
                                            className="form-radio h-4 w-4 text-green-600"
                                        />
                                        <span className="text-gray-700">{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-between mt-8">
                        <button
                            onClick={handlePrevious}
                            disabled={currentPage === 0}
                            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400"
                        >
                            Previous
                        </button>
                        {currentPage === totalPages - 1 ? (
                            <button
                                onClick={handleSubmit}
                                disabled={!isPageComplete()}
                                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                            >
                                Submit Exam
                            </button>
                        ) : (
                            <button
                                onClick={handleNext}
                                disabled={!isPageComplete()}
                                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                            >
                                Next
                            </button>
                        )}
                    </div>
                </>
            ) : (
                <div className="space-y-4">
                    {renderFeedback()}
                    <p className="text-xl font-bold text-center">
                        Your Score: {score.toFixed(1)}%
                    </p>
                </div>
            )}
        </div>
    );
};

export default FinalExam;
