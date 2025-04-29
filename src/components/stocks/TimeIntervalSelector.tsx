import React from 'react';
import { TimeInterval } from '../../types/stock';

interface TimeIntervalSelectorProps {
  selectedInterval: TimeInterval;
  onChange: (interval: TimeInterval) => void;
}

const TimeIntervalSelector: React.FC<TimeIntervalSelectorProps> = ({
  selectedInterval,
  onChange,
}) => {
  const intervals: { value: TimeInterval; label: string }[] = [
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
  ];

  return (
    <div className="flex space-x-2">
      {intervals.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => onChange(value)}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
            selectedInterval === value
              ? 'bg-sky-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default TimeIntervalSelector;