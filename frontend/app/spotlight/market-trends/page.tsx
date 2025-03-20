"use client";

import React from 'react';
import { Search, ChevronDown, Calendar } from 'lucide-react';
import { 
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

// Sample data for charts
const stockData = [
  { month: 'Q1', value: 125 },
  { month: 'Q2', value: 145 },
  { month: 'Q3', value: 135 },
  { month: 'Q4', value: 110 },
  { month: 'Q5', value: 140 },
  { month: 'Q6', value: 170 },
  { month: 'Q7', value: 185 },
];

const commodityData = [
  { month: 'Q1', value: 150 },
  { month: 'Q2', value: 175 },
  { month: 'Q3', value: 160 },
  { month: 'Q4', value: 220 },
  { month: 'Q5', value: 200 },
  { month: 'Q6', value: 240 },
  { month: 'Q7', value: 230 },
];

const currencyData = [
  { month: 'Q1', value: 110 },
  { month: 'Q2', value: 95 },
  { month: 'Q3', value: 105 },
  { month: 'Q4', value: 85 },
  { month: 'Q5', value: 105 },
  { month: 'Q6', value: 100 },
  { month: 'Q7', value: 90 },
];

const gdpData = [
  { year: 2017, eurozone: 2.4, china: 6.9, usa: 2.3 },
  { year: 2018, eurozone: 1.9, china: 6.7, usa: 2.9 },
  { year: 2019, eurozone: 1.3, china: 6.1, usa: 2.3 },
  { year: 2020, eurozone: -6.4, china: 2.3, usa: -3.4 },
  { year: 2021, eurozone: 5.3, china: 8.1, usa: 5.7 },
  { year: 2022, eurozone: 3.3, china: 3.0, usa: 2.1 },
];

const tradeData = [
  { month: 'Q1', eurozone: 45, china: 65 },
  { month: 'Q2', eurozone: 55, china: 80 },
  { month: 'Q3', eurozone: 50, china: 75 },
  { month: 'Q4', eurozone: 70, china: 90 },
  { month: 'Q5', eurozone: 65, china: 85 },
  { month: 'Q6', eurozone: 75, china: 95 },
];

const FinancialDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 bg-gray-50">
      {/* Search and filter bar */}
      <div className="flex flex-col md:flex-row items-center gap-3 mb-6">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Searching for specific trends"
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-md"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative min-w-[180px]">
            <select className="appearance-none w-full pl-4 pr-10 py-2.5 bg-white border border-gray-300 rounded-md">
              <option>Data Category</option>
              <option>Stocks</option>
              <option>Commodities</option>
              <option>Currencies</option>
              <option>Economic Indicators</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
          </div>
          
          <div className="relative">
            <input
              type="text"
              placeholder="DD/MM/YYYY"
              className="pl-4 pr-10 py-2.5 border border-gray-300 rounded-md"
            />
            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
          </div>
          
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2.5 px-6 rounded-md transition-colors">
            Search
          </button>
        </div>
      </div>
      
      {/* First row of charts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Stock Market Prices */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-800">Stock Market Prices</h2>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
              <span className="text-xs text-gray-500">Stocks</span>
            </div>
          </div>
          
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={stockData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#3b82f6" 
                  strokeWidth={2} 
                  dot={false}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <p className="text-xs text-gray-600 mt-4">
            Stock market prices have been fluctuating due to uncertainties in global
            trade policies and geopolitical tensions. These fluctuations can impact
            investor confidence and business investment decisions.
          </p>
        </div>
        
        {/* Commodity Prices */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-800">Commodity Prices</h2>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
              <span className="text-xs text-gray-500">Commodity</span>
            </div>
          </div>
          
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={commodityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  fill="#86efac" 
                  stroke="#22c55e"
                  fillOpacity={0.6}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          
          <p className="text-xs text-gray-600 mt-4">
            Commodity prices have been increasing influenced by factors such as
            supply chain disruptions, weather conditions, and changing consumer
            demand.
          </p>
        </div>
        
        {/* Currency Exchange Rates */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-800">Currency Exchange Rates</h2>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
              <span className="text-xs text-gray-500">Forex</span>
            </div>
          </div>
          
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={currencyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#ef4444" 
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <p className="text-xs text-gray-600 mt-4">
            Currency exchange rates have been volatile due to shifts in monetary
            policies, economic developments, and market sentiment. Businesses
            engaged in international trade need to monitor these fluctuations.
          </p>
        </div>
      </div>
      
      {/* Second row of charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* GDP Growth Rates */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-800">GDP Growth Rates</h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-300 rounded-full mr-1"></div>
                <span className="text-xs text-gray-500">Eurozone</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
                <span className="text-xs text-gray-500">China</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-700 rounded-full mr-1"></div>
                <span className="text-xs text-gray-500">USA</span>
              </div>
            </div>
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={gdpData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="year" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="eurozone" 
                  stackId="1"
                  fill="#93c5fd" 
                  stroke="#60a5fa"
                  fillOpacity={0.6}
                />
                <Area 
                  type="monotone" 
                  dataKey="china" 
                  stackId="1"
                  fill="#3b82f6" 
                  stroke="#2563eb"
                  fillOpacity={0.6}
                />
                <Area 
                  type="monotone" 
                  dataKey="usa" 
                  stackId="1"
                  fill="#1d4ed8" 
                  stroke="#1e40af"
                  fillOpacity={0.6}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          
          <p className="text-xs text-gray-600 mt-4">
            Global GDP growth rates have exhibited notable variations with all regions registering positive performances in most of recent times excluding challenges from
            the global health emergency and their economic impacts. Eurozone has shown moderate growth, while China continues to drive global recovery despite slower pace 
            as USA displays strong growth rate year to year. Analysts anticipate that regional growth will maintain consistency in the coming months.
          </p>
        </div>
        
        {/* Trade Volumes */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-800">Trade Volumes</h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-400 rounded-full mr-1"></div>
                <span className="text-xs text-gray-500">Eurozone</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-1"></div>
                <span className="text-xs text-gray-500">China</span>
              </div>
            </div>
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={tradeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="eurozone" 
                  fill="#60a5fa" 
                  stroke="#3b82f6"
                  fillOpacity={0.6}
                />
                <Area 
                  type="monotone" 
                  dataKey="china" 
                  fill="#4ade80" 
                  stroke="#22c55e"
                  fillOpacity={0.6}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          
          <p className="text-xs text-gray-600 mt-4">
            International trade volumes reflect shifts in global economic activity and
            trade relationships. After recovering from pandemic-related trade disruption,
            both Eurozone and China are showing strong growth in export volumes
            signaling increased economic activity overall.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinancialDashboard;