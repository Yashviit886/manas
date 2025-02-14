import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cog as Yoga, Brain, Wind, Timer, Play, Pause, RotateCcw, Filter, Clock, Star } from 'lucide-react';

interface Activity {
  id: string;
  title: string;
  description: string;
  duration: number;
  type: 'meditation' | 'yoga' | 'breathing' | 'exercise';
  intensity: 'low' | 'medium' | 'high';
  doshaBalance: {
    vata: number;
    pitta: number;
    kapha: number;
  };
  image: string;
}

const activities: Activity[] = [
  {
    id: '1',
    title: 'Morning Meditation',
    description: 'Start your day with a calming meditation focused on breath awareness and mental clarity.',
    duration: 10,
    type: 'meditation',
    intensity: 'low',
    doshaBalance: {
      vata: 3,
      pitta: 2,
      kapha: 1,
    },
    image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&q=80&w=400&h=300'
  },
  {
    id: '2',
    title: 'Gentle Yoga Flow',
    description: 'A balanced sequence of gentle movements to improve flexibility and reduce stress.',
    duration: 20,
    type: 'yoga',
    intensity: 'medium',
    doshaBalance: {
      vata: 2,
      pitta: 2,
      kapha: 2,
    },
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400&h=300'
  },
  {
    id: '3',
    title: 'Pranayama Breathing',
    description: 'Deep breathing exercises to balance your energy and calm the mind.',
    duration: 15,
    type: 'breathing',
    intensity: 'low',
    doshaBalance: {
      vata: 3,
      pitta: 3,
      kapha: 1,
    },
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=400&h=300'
  },
  {
    id: '4',
    title: 'Energy Boost Exercise',
    description: 'Quick and effective movements to increase energy and mental alertness.',
    duration: 10,
    type: 'exercise',
    intensity: 'high',
    doshaBalance: {
      vata: 1,
      pitta: 3,
      kapha: 2,
    },
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=400&h=300'
  },
];

const Activities: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedIntensity, setSelectedIntensity] = useState<string>('all');
  const [timer, setTimer] = useState<number | null>(null);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  const filteredActivities = activities.filter(activity => {
    const typeMatch = selectedType === 'all' || activity.type === selectedType;
    const intensityMatch = selectedIntensity === 'all' || activity.intensity === selectedIntensity;
    return typeMatch && intensityMatch;
  });

  const startTimer = (duration: number) => {
    setTimer(duration * 60);
    setIsTimerRunning(true);
  };

  const toggleTimer = () => {
    setIsTimerRunning(!isTimerRunning);
  };

  const resetTimer = () => {
    if (selectedActivity) {
      setTimer(selectedActivity.duration * 60);
      setIsTimerRunning(false);
    }
  };

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning && timer !== null && timer > 0) {
      interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timer]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'meditation':
        return <Brain className="h-5 w-5" />;
      case 'yoga':
        return <Yoga className="h-5 w-5" />;
      case 'breathing':
        return <Wind className="h-5 w-5" />;
      case 'exercise':
        return <Timer className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold mb-2">Daily Activities</h1>
        <p className="text-gray-600">
          Choose from our curated selection of activities designed to balance your mind and body.
        </p>
      </motion.div>

      <div className="flex flex-wrap gap-4 mb-8">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-gray-500" />
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="all">All Types</option>
            <option value="meditation">Meditation</option>
            <option value="yoga">Yoga</option>
            <option value="breathing">Breathing</option>
            <option value="exercise">Exercise</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <Star className="h-5 w-5 text-gray-500" />
          <select
            value={selectedIntensity}
            onChange={(e) => setSelectedIntensity(e.target.value)}
            className="px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="all">All Intensities</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredActivities.map((activity) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-sm overflow-hidden"
          >
            <img
              src={activity.image}
              alt={activity.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                {getTypeIcon(activity.type)}
                <span className="text-sm font-medium text-gray-500 capitalize">
                  {activity.type}
                </span>
                <span className="ml-auto flex items-center gap-1">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-500">{activity.duration}m</span>
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
              <p className="text-gray-600 mb-4">{activity.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    activity.intensity === 'low' ? 'bg-green-100 text-green-700' :
                    activity.intensity === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {activity.intensity.charAt(0).toUpperCase() + activity.intensity.slice(1)}
                  </span>
                </div>
                <button
                  onClick={() => {
                    setSelectedActivity(activity);
                    startTimer(activity.duration);
                  }}
                  className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                >
                  Start
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedActivity && timer !== null && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-8 right-8 bg-white rounded-xl shadow-lg p-6 w-80"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">{selectedActivity.title}</h3>
            <button
              onClick={() => {
                setSelectedActivity(null);
                setTimer(null);
                setIsTimerRunning(false);
              }}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>
          <div className="text-4xl font-bold text-center mb-4">
            {formatTime(timer)}
          </div>
          <div className="flex justify-center gap-4">
            <button
              onClick={toggleTimer}
              className="p-3 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors"
            >
              {isTimerRunning ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
            </button>
            <button
              onClick={resetTimer}
              className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
            >
              <RotateCcw className="h-6 w-6" />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Activities;