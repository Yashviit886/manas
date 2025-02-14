import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart as BarChartIcon,
  Users,
  AlertTriangle,
  Calendar,
  TrendingUp,
  Download,
  Filter,
  Bell,
  Settings,
  Activity,
  Brain,
  Heart,
  Frown,
  Lightbulb,
  CloudRain
} from 'lucide-react';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const emotionsData = [
  { emotion: 'Stress', value: 65 },
  { emotion: 'Anxiety', value: 45 },
  { emotion: 'Jealousy', value: 30 },
  { emotion: 'Fear', value: 40 },
  { emotion: 'Confusion', value: 55 },
  { emotion: 'Sadness', value: 35 }
];

const stressDistribution = [
  { name: 'Low', value: 30, color: '#22c55e' },
  { name: 'Medium', value: 45, color: '#eab308' },
  { name: 'High', value: 25, color: '#ef4444' }
];

const weeklyTrends = [
  { day: 'Mon', stress: 45, anxiety: 30, engagement: 75 },
  { day: 'Tue', stress: 50, anxiety: 35, engagement: 70 },
  { day: 'Wed', stress: 40, anxiety: 25, engagement: 80 },
  { day: 'Thu', stress: 55, anxiety: 40, engagement: 65 },
  { day: 'Fri', stress: 35, anxiety: 30, engagement: 85 },
  { day: 'Sat', stress: 30, anxiety: 20, engagement: 90 },
  { day: 'Sun', stress: 25, anxiety: 15, engagement: 95 }
];

const atRiskStudents = [
  {
    id: 'S001',
    riskLevel: 'High',
    stressScore: 85,
    lastActivity: '2 hours ago',
    trend: 'increasing'
  },
  {
    id: 'S002',
    riskLevel: 'High',
    stressScore: 80,
    lastActivity: '1 day ago',
    trend: 'stable'
  },
  {
    id: 'S003',
    riskLevel: 'Medium',
    stressScore: 70,
    lastActivity: '3 hours ago',
    trend: 'decreasing'
  }
];

const AdminDashboard: React.FC = () => {
  const [timeRange, setTimeRange] = useState('week');
  const [department, setDepartment] = useState('all');
  
  const engagementScore = 78;

  return (
    <div className="max-w-[1600px] mx-auto px-4">
      <div className="flex justify-between items-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold mb-2">Samattva Insights</h1>
          <p className="text-gray-600">
            Mental wellness analytics and insights dashboard
          </p>
        </motion.div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-500" />
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="day">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-gray-500" />
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Departments</option>
              <option value="engineering">Engineering</option>
              <option value="arts">Arts & Science</option>
              <option value="commerce">Commerce</option>
            </select>
          </div>
          <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
            <Bell className="h-5 w-5" />
          </button>
          <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
            <Settings className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-6 rounded-xl shadow-sm"
        >
          <div className="flex items-center gap-2 mb-4">
            <Activity className="h-6 w-6 text-primary-500" />
            <h2 className="text-lg font-semibold">Engagement Score</h2>
          </div>
          <div className="flex items-center justify-between">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="16"
                  fill="none"
                  className="text-gray-100"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="16"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 56}`}
                  strokeDashoffset={`${2 * Math.PI * 56 * (1 - engagementScore / 100)}`}
                  className="text-primary-500"
                />
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
                {engagementScore}
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-500" />
                <span className="text-sm text-gray-600">5% increase from last week</span>
              </div>
              <div className="text-sm text-gray-500">
                Based on platform activity and interaction
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-6 rounded-xl shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-red-500" />
              <h2 className="text-lg font-semibold">At-Risk Students</h2>
            </div>
            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
              {atRiskStudents.length} identified
            </span>
          </div>
          <div className="space-y-4">
            {atRiskStudents.map((student) => (
              <div
                key={student.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div>
                  <div className="font-medium">Anonymous ID: {student.id}</div>
                  <div className="text-sm text-gray-500">Last active: {student.lastActivity}</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    student.riskLevel === 'High'
                      ? 'bg-red-100 text-red-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {student.riskLevel} Risk
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className={`h-4 w-4 ${
                      student.trend === 'increasing'
                        ? 'text-red-500'
                        : student.trend === 'decreasing'
                        ? 'text-green-500'
                        : 'text-yellow-500'
                    }`} />
                    <span className="text-sm text-gray-600">{student.stressScore}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-xl shadow-sm"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-primary-500" />
              <h2 className="text-lg font-semibold">Stress Distribution</h2>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={stressDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {stressDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-6 rounded-xl shadow-sm"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <BarChartIcon className="h-6 w-6 text-primary-500" />
              <h2 className="text-lg font-semibold">Prevalent Emotions</h2>
            </div>
            <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700">
              <Download className="h-4 w-4" />
              Export
            </button>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={emotionsData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="emotion" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar
                  name="Emotions"
                  dataKey="value"
                  stroke="#0ea5e9"
                  fill="#0ea5e9"
                  fillOpacity={0.6}
                />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-6 rounded-xl shadow-sm"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-6 w-6 text-primary-500" />
              <h2 className="text-lg font-semibold">Weekly Trends</h2>
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="stress"
                  stroke="#ef4444"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="anxiety"
                  stroke="#eab308"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="engagement"
                  stroke="#22c55e"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-4 gap-6"
      >
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-green-500 rounded-lg">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold">Schedule Workshop</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Plan stress management sessions for high-risk groups
          </p>
          <button className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
            Schedule Now
          </button>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold">Contact Counselor</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Connect with mental health professionals
          </p>
          <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Reach Out
          </button>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-purple-500 rounded-lg">
              <Lightbulb className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold">View Resources</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Access mental health support materials
          </p>
          <button className="w-full px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
            Browse Library
          </button>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-orange-500 rounded-lg">
              <CloudRain className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold">Crisis Support</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Immediate assistance for urgent situations
          </p>
          <button className="w-full px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
            Get Help
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;