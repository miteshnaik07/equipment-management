import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FlowchartDiagram = () => {
  const [expandedSections, setExpandedSections] = useState({
    overview: true,
    auth: false,
    student: false,
    admin: false,
    backend: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-2xl p-8 mb-8">
          <h1 className="text-4xl font-bold text-center text-indigo-900 mb-4">
            Equipment Management System
          </h1>
          <p className="text-center text-gray-600 text-lg">
            Complete System Architecture & Flow Diagram
          </p>
        </div>

        {/* System Overview */}
        <div className="bg-white rounded-lg shadow-xl p-6 mb-6">
          <button 
            onClick={() => toggleSection('overview')}
            className="w-full flex justify-between items-center text-2xl font-bold text-indigo-800 mb-4"
          >
            <span>📊 System Overview</span>
            {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
          </button>
          
          {expandedSections.overview && (
            <div className="space-y-4">
              <svg viewBox="0 0 1200 600" className="w-full">
                {/* Users */}
                <g>
                  <rect x="50" y="50" width="200" height="100" fill="#667eea" rx="10"/>
                  <text x="150" y="90" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">👥 Users</text>
                  <text x="150" y="115" textAnchor="middle" fill="white" fontSize="14">Students & Admin</text>
                </g>

                {/* Frontend */}
                <g>
                  <rect x="350" y="50" width="200" height="100" fill="#764ba2" rx="10"/>
                  <text x="450" y="90" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">🖥️ Frontend</text>
                  <text x="450" y="115" textAnchor="middle" fill="white" fontSize="14">HTML/CSS/JavaScript</text>
                </g>

                {/* Backend */}
                <g>
                  <rect x="650" y="50" width="200" height="100" fill="#28a745" rx="10"/>
                  <text x="750" y="90" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">⚙️ Backend</text>
                  <text x="750" y="115" textAnchor="middle" fill="white" fontSize="14">Spring Boot</text>
                </g>

                {/* Database */}
                <g>
                  <rect x="950" y="50" width="200" height="100" fill="#ff6b6b" rx="10"/>
                  <text x="1050" y="90" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">🗄️ Database</text>
                  <text x="1050" y="115" textAnchor="middle" fill="white" fontSize="14">MongoDB</text>
                </g>

                {/* Arrows */}
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#333" />
                  </marker>
                </defs>
                
                <line x1="250" y1="100" x2="350" y2="100" stroke="#333" strokeWidth="3" markerEnd="url(#arrowhead)"/>
                <line x1="550" y1="100" x2="650" y2="100" stroke="#333" strokeWidth="3" markerEnd="url(#arrowhead)"/>
                <line x1="850" y1="100" x2="950" y2="100" stroke="#333" strokeWidth="3" markerEnd="url(#arrowhead)"/>

                {/* Components Detail */}
                <g>
                  <rect x="50" y="250" width="280" height="300" fill="#f0f4ff" stroke="#667eea" strokeWidth="2" rx="10"/>
                  <text x="190" y="280" textAnchor="middle" fill="#667eea" fontSize="16" fontWeight="bold">Frontend Pages</text>
                  <text x="190" y="310" textAnchor="middle" fontSize="13">• index.html</text>
                  <text x="190" y="335" textAnchor="middle" fontSize="13">• login.html</text>
                  <text x="190" y="360" textAnchor="middle" fontSize="13">• register.html</text>
                  <text x="190" y="385" textAnchor="middle" fontSize="13">• student-portal.html</text>
                  <text x="190" y="410" textAnchor="middle" fontSize="13">• admin-portal.html</text>
                  <text x="190" y="435" textAnchor="middle" fontSize="13">• issue.html</text>
                  <text x="190" y="460" textAnchor="middle" fontSize="13">• return.html</text>
                  <text x="190" y="485" textAnchor="middle" fontSize="13">• style.css</text>
                </g>

                <g>
                  <rect x="370" y="250" width="280" height="300" fill="#e8f5e9" stroke="#28a745" strokeWidth="2" rx="10"/>
                  <text x="510" y="280" textAnchor="middle" fill="#28a745" fontSize="16" fontWeight="bold">Backend Controllers</text>
                  <text x="510" y="310" textAnchor="middle" fontSize="13">• EquipmentController</text>
                  <text x="510" y="335" textAnchor="middle" fontSize="13">• UserController</text>
                  <text x="510" y="370" textAnchor="middle" fill="#28a745" fontSize="16" fontWeight="bold">Services</text>
                  <text x="510" y="395" textAnchor="middle" fontSize="13">• EquipmentService</text>
                  <text x="510" y="420" textAnchor="middle" fontSize="13">• UserService</text>
                  <text x="510" y="455" textAnchor="middle" fill="#28a745" fontSize="16" fontWeight="bold">Repositories</text>
                  <text x="510" y="480" textAnchor="middle" fontSize="13">• MongoDB Interfaces</text>
                </g>

                <g>
                  <rect x="690" y="250" width="280" height="300" fill="#fff3e0" stroke="#ff6b6b" strokeWidth="2" rx="10"/>
                  <text x="830" y="280" textAnchor="middle" fill="#ff6b6b" fontSize="16" fontWeight="bold">Database Collections</text>
                  <text x="830" y="320" textAnchor="middle" fontSize="13">📦 equipment</text>
                  <text x="830" y="345" textAnchor="middle" fontSize="12">• id, name, totalQuantity,</text>
                  <text x="830" y="365" textAnchor="middle" fontSize="12">availableQuantity</text>
                  <text x="830" y="400" textAnchor="middle" fontSize="13">👥 users</text>
                  <text x="830" y="425" textAnchor="middle" fontSize="12">• id, userId, name, password,</text>
                  <text x="830" y="445" textAnchor="middle" fontSize="12">role, email, department</text>
                  <text x="830" y="480" textAnchor="middle" fontSize="13">📋 issued_equipment</text>
                  <text x="830" y="505" textAnchor="middle" fontSize="12">• id, equipmentId, userId,</text>
                  <text x="830" y="525" textAnchor="middle" fontSize="12">quantity, dates, status</text>
                </g>
              </svg>
            </div>
          )}
        </div>

        {/* Authentication Flow */}
        <div className="bg-white rounded-lg shadow-xl p-6 mb-6">
          <button 
            onClick={() => toggleSection('auth')}
            className="w-full flex justify-between items-center text-2xl font-bold text-indigo-800 mb-4"
          >
            <span>🔐 Authentication Flow</span>
            {expandedSections.auth ? <ChevronUp /> : <ChevronDown />}
          </button>
          
          {expandedSections.auth && (
            <svg viewBox="0 0 800 900" className="w-full">
              {/* Start */}
              <ellipse cx="400" cy="50" rx="80" ry="40" fill="#667eea"/>
              <text x="400" y="60" textAnchor="middle" fill="white" fontWeight="bold">START</text>

              {/* Landing Page */}
              <rect x="300" y="120" width="200" height="60" fill="#764ba2" rx="5"/>
              <text x="400" y="155" textAnchor="middle" fill="white" fontWeight="bold">Landing Page</text>
              <line x1="400" y1="90" x2="400" y2="120" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>

              {/* Choice */}
              <polygon points="400,220 500,280 400,340 300,280" fill="#ff9800"/>
              <text x="400" y="285" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Login or</text>
              <text x="400" y="305" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Register?</text>
              <line x1="400" y1="180" x2="400" y2="220" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>

              {/* Login Path */}
              <rect x="100" y="380" width="180" height="60" fill="#28a745" rx="5"/>
              <text x="190" y="415" textAnchor="middle" fill="white" fontWeight="bold">Login Page</text>
              <line x1="340" y1="300" x2="280" y2="380" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              <text x="300" y="340" fill="#333" fontSize="12">Login</text>

              {/* Register Path */}
              <rect x="520" y="380" width="180" height="60" fill="#2196f3" rx="5"/>
              <text x="610" y="415" textAnchor="middle" fill="white" fontWeight="bold">Register Page</text>
              <line x1="460" y1="300" x2="520" y2="380" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              <text x="500" y="340" fill="#333" fontSize="12">Register</text>

              {/* Validate Credentials */}
              <rect x="100" y="480" width="180" height="60" fill="#9c27b0" rx="5"/>
              <text x="190" y="510" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Validate</text>
              <text x="190" y="530" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Credentials</text>
              <line x1="190" y1="440" x2="190" y2="480" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>

              {/* Create Account */}
              <rect x="520" y="480" width="180" height="60" fill="#9c27b0" rx="5"/>
              <text x="610" y="510" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Create New</text>
              <text x="610" y="530" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Account</text>
              <line x1="610" y1="440" x2="610" y2="480" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>

              {/* Role Check */}
              <polygon points="190,600 270,650 190,700 110,650" fill="#ff5722"/>
              <text x="190" y="655" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Check Role</text>
              <line x1="190" y1="540" x2="190" y2="600" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>

              {/* Success Registration */}
              <rect x="520" y="600" width="180" height="60" fill="#4caf50" rx="5"/>
              <text x="610" y="635" textAnchor="middle" fill="white" fontWeight="bold">Registration</text>
              <text x="610" y="655" textAnchor="middle" fill="white" fontWeight="bold">Success</text>
              <line x1="610" y1="540" x2="610" y2="600" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>

              {/* Student Portal */}
              <rect x="50" y="760" width="150" height="60" fill="#667eea" rx="5"/>
              <text x="125" y="785" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Student Portal</text>
              <text x="125" y="805" textAnchor="middle" fill="white" fontSize="11">(STUDENT)</text>
              <line x1="150" y1="680" x2="125" y2="760" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              <text x="130" y="720" fill="#333" fontSize="11">Student</text>

              {/* Admin Portal */}
              <rect x="250" y="760" width="150" height="60" fill="#764ba2" rx="5"/>
              <text x="325" y="785" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Admin Portal</text>
              <text x="325" y="805" textAnchor="middle" fill="white" fontSize="11">(ADMIN)</text>
              <line x1="210" y1="680" x2="325" y2="760" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              <text x="270" y="720" fill="#333" fontSize="11">Admin</text>

              {/* Registration to Login */}
              <path d="M 610 660 Q 610 700, 280 410" stroke="#2196f3" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" strokeDasharray="5,5"/>
              <text x="450" y="550" fill="#2196f3" fontSize="11">Go to Login</text>

              {/* End */}
              <ellipse cx="190" cy="870" rx="80" ry="30" fill="#e91e63"/>
              <text x="190" y="878" textAnchor="middle" fill="white" fontWeight="bold">END</text>
              <line x1="125" y1="820" x2="150" y2="850" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              <line x1="325" y1="820" x2="230" y2="850" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>
            </svg>
          )}
        </div>

        {/* Student Flow */}
        <div className="bg-white rounded-lg shadow-xl p-6 mb-6">
          <button 
            onClick={() => toggleSection('student')}
            className="w-full flex justify-between items-center text-2xl font-bold text-indigo-800 mb-4"
          >
            <span>👨‍🎓 Student Portal Flow</span>
            {expandedSections.student ? <ChevronUp /> : <ChevronDown />}
          </button>
          
          {expandedSections.student && (
            <svg viewBox="0 0 1000 800" className="w-full">
              {/* Student Dashboard */}
              <rect x="400" y="50" width="200" height="80" fill="#667eea" rx="10"/>
              <text x="500" y="85" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">Student Dashboard</text>
              <text x="500" y="110" textAnchor="middle" fill="white" fontSize="12">View Stats & Equipment</text>

              {/* Action Choice */}
              <polygon points="500,180 600,240 500,300 400,240" fill="#ff9800"/>
              <text x="500" y="245" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Select Action</text>
              <line x1="500" y1="130" x2="500" y2="180" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>

              {/* Issue Equipment */}
              <rect x="100" y="350" width="200" height="60" fill="#28a745" rx="5"/>
              <text x="200" y="385" textAnchor="middle" fill="white" fontWeight="bold">Issue Equipment</text>
              <line x1="440" y1="260" x2="300" y2="350" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>

              {/* Return Equipment */}
              <rect x="700" y="350" width="200" height="60" fill="#ff6b6b" rx="5"/>
              <text x="800" y="385" textAnchor="middle" fill="white" fontWeight="bold">Return Equipment</text>
              <line x1="560" y1="260" x2="700" y2="350" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>

              {/* View Issued */}
              <rect x="400" y="350" width="200" height="60" fill="#2196f3" rx="5"/>
              <text x="500" y="385" textAnchor="middle" fill="white" fontWeight="bold">View My Issued</text>
              <line x1="500" y1="300" x2="500" y2="350" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>

              {/* Issue Process */}
              <rect x="100" y="460" width="200" height="50" fill="#4caf50" rx="5"/>
              <text x="200" y="490" textAnchor="middle" fill="white" fontSize="13">Select Equipment</text>
              <line x1="200" y1="410" x2="200" y2="460" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>

              <rect x="100" y="540" width="200" height="50" fill="#4caf50" rx="5"/>
              <text x="200" y="570" textAnchor="middle" fill="white" fontSize="13">Enter Quantity</text>
              <line x1="200" y1="510" x2="200" y2="540" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>

              <rect x="100" y="620" width="200" height="50" fill="#9c27b0" rx="5"/>
              <text x="200" y="650" textAnchor="middle" fill="white" fontSize="13">Check Availability</text>
              <line x1="200" y1="590" x2="200" y2="620" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>

              <rect x="100" y="700" width="200" height="50" fill="#28a745" rx="5"/>
              <text x="200" y="730" textAnchor="middle" fill="white" fontSize="13">Issue & Update DB</text>
              <line x1="200" y1="670" x2="200" y2="700" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>

              {/* Return Process */}
              <rect x="700" y="460" width="200" height="50" fill="#f44336" rx="5"/>
              <text x="800" y="490" textAnchor="middle" fill="white" fontSize="13">Select Issued Item</text>
              <line x1="800" y1="410" x2="800" y2="460" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>

              <rect x="700" y="540" width="200" height="50" fill="#f44336" rx="5"/>
              <text x="800" y="570" textAnchor="middle" fill="white" fontSize="13">Enter Return Qty</text>
              <line x1="800" y1="510" x2="800" y2="540" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>

              <rect x="700" y="620" width="200" height="50" fill="#9c27b0" rx="5"/>
              <text x="800" y="650" textAnchor="middle" fill="white" fontSize="13">Validate Quantity</text>
              <line x1="800" y1="590" x2="800" y2="620" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>

              <rect x="700" y="700" width="200" height="50" fill="#ff6b6b" rx="5"/>
              <text x="800" y="730" textAnchor="middle" fill="white" fontSize="13">Return & Update DB</text>
              <line x1="800" y1="670" x2="800" y2="700" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>

              {/* View Process */}
              <rect x="400" y="460" width="200" height="50" fill="#1976d2" rx="5"/>
              <text x="500" y="490" textAnchor="middle" fill="white" fontSize="13">Fetch User Records</text>
              <line x1="500" y1="410" x2="500" y2="460" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>

              <rect x="400" y="540" width="200" height="50" fill="#1976d2" rx="5"/>
              <text x="500" y="570" textAnchor="middle" fill="white" fontSize="13">Display Issued Items</text>
              <line x1="500" y1="510" x2="500" y2="540" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>

              <rect x="400" y="620" width="200" height="50" fill="#1976d2" rx="5"/>
              <text x="500" y="650" textAnchor="middle" fill="white" fontSize="13">Show Statistics</text>
              <line x1="500" y1="590" x2="500" y2="620" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>

              {/* Back to Dashboard */}
              <path d="M 200 750 Q 200 780, 450 130" stroke="#28a745" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" strokeDasharray="5,5"/>
              <path d="M 500 670 Q 350 700, 450 130" stroke="#2196f3" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" strokeDasharray="5,5"/>
              <path d="M 800 750 Q 800 780, 550 130" stroke="#ff6b6b" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" strokeDasharray="5,5"/>
            </svg>
          )}
        </div>

        {/* Admin Flow */}
        <div className="bg-white rounded-lg shadow-xl p-6 mb-6">
          <button 
            onClick={() => toggleSection('admin')}
            className="w-full flex justify-between items-center text-2xl font-bold text-indigo-800 mb-4"
          >
            <span>👨‍💼 Admin Portal Flow</span>
            {expandedSections.admin ? <ChevronUp /> : <ChevronDown />}
          </button>
          
          {expandedSections.admin && (
            <svg viewBox="0 0 1000 700" className="w-full">
              {/* Admin Dashboard */}
              <rect x="400" y="50" width="200" height="80" fill="#764ba2" rx="10"/>
              <text x="500" y="85" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">Admin Dashboard</text>
              <text x="500" y="110" textAnchor="middle" fill="white" fontSize="12">System Overview</text>

              {/* Tab Selection */}
              <rect x="350" y="180" width="300" height="60" fill="#9c27b0" rx="5"/>
              <text x="500" y="215" textAnchor="middle" fill="white" fontWeight="bold">Select View Tab</text>
              <line x1="500" y1="130" x2="500" y2="180" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>

              {/* Overview Tab */}
              <rect x="50" y="300" width="180" height="120" fill="#667eea" rx="5"/>
              <text x="140" y="330" textAnchor="middle" fill="white" fontWeight="bold">Overview Tab</text>
              <text x="140" y="355" textAnchor="middle" fill="white" fontSize="12">• Total Items</text>
              <text x="140" y="375" textAnchor="middle" fill="white" fontSize="12">• Available</text>
              <text x="140" y="395" textAnchor="middle" fill="white" fontSize="12">• Issued Stats</text>
              <text x="140" y="415" textAnchor="middle" fill="white" fontSize="12">• Recent Activity</text>
              <line x1="420" y1="220" x2="230" y2="300" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>

              {/* Inventory Tab */}
              <rect x="270" y="300" width="180" height="120" fill="#28a745" rx="5"/>
              <text x="360" y="330" textAnchor="middle" fill="white" fontWeight="bold">Inventory Tab</text>
              <text x="360" y="355" textAnchor="middle" fill="white" fontSize="12">• All Equipment</text>
              <text x="360" y="375" textAnchor="middle" fill="white" fontSize="12">• Quantities</text>
              <text x="360" y="395" textAnchor="middle" fill="white" fontSize="12">• Availability</text>
              <text x="360" y="415" textAnchor="middle" fill="white" fontSize="12">• Stock Status</text>
              <line x1="480" y1="240" x2="400" y2="300" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>

              {/* Issued Equipment Tab */}
              <rect x="490" y="300" width="180" height="120" fill="#ff9800" rx="5"/>
              <text x="580" y="330" textAnchor="middle" fill="white" fontWeight="bold">Issued Tab</text>
              <text x="580" y="355" textAnchor="middle" fill="white" fontSize="12">• Active Issues</text>
              <text x="580" y="375" textAnchor="middle" fill="white" fontSize="12">• Filter by Status</text>
              <text x="580" y="395" textAnchor="middle" fill="white" fontSize="12">• Search Students</text>
              <text x="580" y="415" textAnchor="middle" fill="white" fontSize="12">• View Details</text>
              <line x1="520" y1="240" x2="560" y2="300" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>

              {/* Students Tab */}
              <rect x="710" y="300" width="180" height="120" fill="#2196f3" rx="5"/>
              <text x="800" y="330" textAnchor="middle" fill="white" fontWeight="bold">Students Tab</text>
              <text x="800" y="355" textAnchor="middle" fill="white" fontSize="12">• All Students</text>
              <text x="800" y="375" textAnchor="middle" fill="white" fontSize="12">• Departments</text>
              <text x="800" y="395" textAnchor="middle" fill="white" fontSize="12">• Issued Count</text>
              <text x="800" y="415" textAnchor="middle" fill="white" fontSize="12">• Activity</text>
              <line x1="560" y1="220" x2="710" y2="300" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>

              {/* Data Processing */}
              <rect x="200" y="480" width="600" height="80" fill="#9c27b0" rx="10"/>
              <text x="500" y="510" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Data Processing Layer</text>
              <text x="500" y="535" textAnchor="middle" fill="white" fontSize="13">Fetch from MongoDB → Process → Display in Tables/Charts</text>
              <text x="500" y="555" textAnchor="middle" fill="white" fontSize="13">Real-time Updates Every 15 seconds</text>

              {/* Connections from tabs to processing */}
              <line x1="140" y1="420" x2="300" y2="480" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              <line x1="360" y1="420" x2="420" y2="480" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              <line x1="580" y1="420" x2="540" y2="480" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              <line x1="800" y1="420" x2="700" y2="480" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>

              {/* Database */}
              <rect x="350" y="600" width="300" height="60" fill="#ff6b6b" rx="10"/>
              <text x="500" y="635" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">🗄️ MongoDB Database</text>
              <line x1="500" y1="560" x2="500" y2="600" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>
            </svg>
          )}
        </div>

        {/* Backend API Flow */}
        <div className="bg-white rounded-lg shadow-xl p-6 mb-6">
          <button 
            onClick={() => toggleSection('backend')}
            className="w-full flex justify-between items-center text-2xl font-bold text-indigo-800 mb-4"
          >
            <span>⚙️ Backend API Flow</span>
            {expandedSections.backend ? <ChevronUp /> : <ChevronDown />}
          </button>
          
          {expandedSections.backend && (
            <svg viewBox="0 0 1200 900" className="w-full">
              {/* API Request */}
              <rect x="50" y="50" width="200" height="60" fill="#667eea" rx="5"/>
              <text x="150" y="85" textAnchor="middle" fill="white" fontWeight="bold">Frontend Request</text>

              {/* Controllers */}
              <rect x="350" y="50" width="200" height="60" fill="#764ba2" rx="5"/>
              <text x="450" y="80" textAnchor="middle" fill="white" fontWeight="bold">REST Controllers</text>
              <text x="450" y="100" textAnchor="middle" fill="white" fontSize="12">@RestController</text>
              <line x1="250" y1="80" x2="350" y2="80" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>

              {/* Equipment Endpoints */}
              <rect x="100" y="180" width="250" height="280" fill="#e8f5e9" stroke="#28a745" strokeWidth="2" rx="5"/>
              <text x="225" y="210" textAnchor="middle" fill="#28a745" fontWeight="bold">Equipment Endpoints</text>
              <text x="225" y="240" textAnchor="middle" fontSize="12">POST /api/equipment/initialize</text>
              <text x="225" y="265" textAnchor="middle" fontSize="12">GET /api/equipment/inventory</text>
              <text x="225" y="290" textAnchor="middle" fontSize="12">POST /api/equipment/issue</text>
              <text x="225" y="315" textAnchor="middle" fontSize="12">POST /api/equipment/return</text>
              <text x="225" y="340" textAnchor="middle" fontSize="12">GET /api/equipment/issued/:id</text>
              <text x="225" y="365" textAnchor="middle" fontSize="12">GET /api/equipment/issued</text>
              <text x="225" y="390" textAnchor="middle" fontSize="12">GET /api/equipment/issued/active</text>
              <text x="225" y="420" textAnchor="middle" fontSize="11" fill="#666">✓ Returns active issues only</text>
              <line x1="400" y1="110" x2="225" y2="180" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>

              {/* User Endpoints */}
              <rect x="400" y="180" width="250" height="200" fill="#fff3e0" stroke="#ff9800" strokeWidth="2" rx="5"/>
              <text x="525" y="210" textAnchor="middle" fill="#ff9800" fontWeight="bold">User Endpoints</text>
              <text x="525" y="240" textAnchor="middle" fontSize="12">POST /api/users/initialize</text>
              <text x="525" y="265" textAnchor="middle" fontSize="12">POST /api/users/login</text>
              <text x="525" y="290" textAnchor="middle" fontSize="12">POST /api/users/register</text>
              <text x="525" y="315" textAnchor="middle" fontSize="12">GET /api/users/all</text>
              <text x="525" y="340" textAnchor="middle" fontSize="12">GET /api/users/students</text>
              <text x="525" y="365" textAnchor="middle" fontSize="12">GET /api/users/:userId</text>
              <line x1="480" y1="110" x2="525" y2="180" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>

              {/* Service Layer */}
              <rect x="750" y="180" width="400" height="200" fill="#e3f2fd" stroke="#2196f3" strokeWidth="2" rx="5"/>
              <text x="950" y="210" textAnchor="middle" fill="#2196f3" fontSize="16" fontWeight="bold">Service Layer (@Service)</text>
              <text x="850" y="250" textAnchor="middle" fontSize="13" fontWeight="bold">EquipmentService</text>
              <text x="850" y="275" textAnchor="middle" fontSize="11">• initializeEquipment()</text>
              <text x="850" y="295" textAnchor="middle" fontSize="11">• getInventory()</text>
              <text x="850" y="315" textAnchor="middle" fontSize="11">• issueItem()</text>
              <text x="850" y="335" textAnchor="middle" fontSize="11">• returnItem()</text>
              <text x="850" y="355" textAnchor="middle" fontSize="11">• getActiveIssuedEquipment()</text>

              <text x="1050" y="250" textAnchor="middle" fontSize="13" fontWeight="bold">UserService</text>
              <text x="1050" y="275" textAnchor="middle" fontSize="11">• initializeUsers()</text>
              <text x="1050" y="295" textAnchor="middle" fontSize="11">• login()</text>
              <text x="1050" y="315" textAnchor="middle" fontSize="11">• register()</text>
              <text x="1050" y="335" textAnchor="middle" fontSize="11">• getAllUsers()</text>
              <text x="1050" y="355" textAnchor="middle" fontSize="11">• getStudentUsers()</text>

              <line x1="350" y1="300" x2="750" y2="280" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              <line x1="650" y1="280" x2="750" y2="280" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>

              {/* Repository Layer */}
              <rect x="750" y="430" width="400" height="150" fill="#f3e5f5" stroke="#9c27b0" strokeWidth="2" rx="5"/>
              <text x="950" y="460" textAnchor="middle" fill="#9c27b0" fontSize="16" fontWeight="bold">Repository Layer (@Repository)</text>
              <text x="850" y="495" textAnchor="middle" fontSize="12">EquipmentRepository</text>
              <text x="850" y="515" textAnchor="middle" fontSize="10">MongoRepository&lt;Equipment, String&gt;</text>
              <text x="850" y="535" textAnchor="middle" fontSize="10">• findByName()</text>

              <text x="950" y="495" textAnchor="middle" fontSize="12">IssuedEquipmentRepo</text>
              <text x="950" y="515" textAnchor="middle" fontSize="10">• findByUserId()</text>
              <text x="950" y="535" textAnchor="middle" fontSize="10">• findByStatus()</text>

              <text x="1050" y="495" textAnchor="middle" fontSize="12">UserRepository</text>
              <text x="1050" y="515" textAnchor="middle" fontSize="10">• findByUserId()</text>
              <text x="1050" y="535" textAnchor="middle" fontSize="10">• findByRole()</text>

              <line x1="950" y1="380" x2="950" y2="430" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>

              {/* MongoDB */}
              <rect x="700" y="640" width="500" height="200" fill="#ffebee" stroke="#f44336" strokeWidth="3" rx="10"/>
              <text x="950" y="670" textAnchor="middle" fill="#f44336" fontSize="18" fontWeight="bold">MongoDB Database</text>
              
              <rect x="730" y="690" width="130" height="130" fill="#fff" stroke="#f44336" strokeWidth="1" rx="5"/>
              <text x="795" y="710" textAnchor="middle" fontSize="12" fontWeight="bold">equipment</text>
              <text x="795" y="730" textAnchor="middle" fontSize="10">• id</text>
              <text x="795" y="748" textAnchor="middle" fontSize="10">• name</text>
              <text x="795" y="766" textAnchor="middle" fontSize="10">• totalQuantity</text>
              <text x="795" y="784" textAnchor="middle" fontSize="10">• availableQuantity</text>

              <rect x="880" y="690" width="130" height="130" fill="#fff" stroke="#f44336" strokeWidth="1" rx="5"/>
              <text x="945" y="710" textAnchor="middle" fontSize="12" fontWeight="bold">users</text>
              <text x="945" y="730" textAnchor="middle" fontSize="10">• id</text>
              <text x="945" y="748" textAnchor="middle" fontSize="10">• userId</text>
              <text x="945" y="766" textAnchor="middle" fontSize="10">• name, password</text>
              <text x="945" y="784" textAnchor="middle" fontSize="10">• role, department</text>

              <rect x="1030" y="690" width="150" height="130" fill="#fff" stroke="#f44336" strokeWidth="1" rx="5"/>
              <text x="1105" y="710" textAnchor="middle" fontSize="12" fontWeight="bold">issued_equipment</text>
              <text x="1105" y="730" textAnchor="middle" fontSize="10">• id, equipmentId</text>
              <text x="1105" y="748" textAnchor="middle" fontSize="10">• userId, userName</text>
              <text x="1105" y="766" textAnchor="middle" fontSize="10">• quantityIssued</text>
              <text x="1105" y="784" textAnchor="middle" fontSize="10">• quantityReturned</text>
              <text x="1105" y="802" textAnchor="middle" fontSize="10">• dates, status</text>

              <line x1="950" y1="580" x2="950" y2="640" stroke="#333" strokeWidth="3" markerEnd="url(#arrowhead)"/>
            </svg>
          )}
        </div>

        {/* Legend */}
        <div className="bg-white rounded-lg shadow-xl p-6">
          <h2 className="text-2xl font-bold text-indigo-800 mb-4">📋 Legend</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded"></div>
              <span>Frontend/UI</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-600 rounded"></div>
              <span>Backend/API</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-500 rounded"></div>
              <span>Database</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-500 rounded"></div>
              <span>Decision Point</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-600 rounded"></div>
              <span>Processing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded"></div>
              <span>View/Display</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-2 bg-gray-800 rounded"></div>
              <span>Data Flow</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-0.5 bg-gray-800 rounded" style={{borderTop: '2px dashed #333'}}></div>
              <span>Return Flow</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowchartDiagram;