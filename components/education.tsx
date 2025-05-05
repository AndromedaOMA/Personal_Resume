// components/EducationCard.tsx

import { GraduationCap, BookOpenText } from "lucide-react";

export default function EducationCard() {
  return (
<div className="max-w-4xl text-left text-gray-800 dark:text-gray-200 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 bg-white/40 dark:bg-white/5 backdrop-blur overflow-visible">
      <div className="flex items-center space-x-4 mb-3">
        <GraduationCap className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
        <div>
          <h2 className="text-xl font-semibold">
            &quot;Alexandru Ioan Cuza&quot; University of Iași
          </h2>
          <p className="text-sm opacity-80">
            Bachelor&apos;s Degree in Computer Science
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Oct 2022 – Jul 2025 • Iași, România
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium flex items-center mb-2">
          <BookOpenText className="w-5 h-5 mr-2 text-indigo-500 dark:text-indigo-400" />
          Relevant Coursework
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1 text-sm list-disc list-inside pl-4">
          <li>Neural Networks (DNN)</li>
          <li>Machine Learning (ML)</li>
          <li>PyTorch, NumPy, Python</li>
          <li>Artificial Intelligence (AI)</li>
          <li>Data Structures & Algorithms</li>
          <li>Probabilities and Statistics</li>
          <li>Object-Oriented Programming (OOP)</li>
          <li>Databases</li>
        </ul>
      </div>
    </div>
  );
}
