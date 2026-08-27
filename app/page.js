"use client";

import React from 'react';
import { 
  Database, ShieldCheck, Layout, TrendingUp, Cpu, Users, Diameter, Calculator, Binoculars,
  Briefcase, CheckCircle2, Code2, BarChart3, GraduationCap, 
  Calendar, MapPin, Award, Mail, ChevronRight, Binary, FileCheck
} from 'lucide-react';

const Resume = () => {
  // Education Data
  const education = [
    {
      school: "National Taiwan University",
      degree: "Master of Business Administration (MBA)",
      period: "2023/02 ~ 2025/06",
      status: "Graduated"
    },
    {
      school: "National Chengchi University",
      degree: "LL.B. in Law (Major)",
      period: "2010/09 ~ 2014/07",
      status: "Graduated"
    },
    {
      school: "National Chengchi University",
      degree: "B.B.A. in Accounting (Minor)",
      period: "2010/09 ~ 2014/07",
      status: "Graduated"
    }
  ];

  // Work Experience Data
  const experiences = [
    {
      company: "Taipei Fubon Bank",
      role: "Section Manager, Data Science Division",
      period: "2019/07 ~ Present",
      location: "Daan Dist., Taipei City",
      size: "Banking (500+ employees) / Managing 9–12 people",
      description: "Responsible for AI governance, data infrastructure, team & project management, data analytics, predictive modeling, and LLM applications.",
      tags: ["Machine learning", "Python", "SQL", "AI Governance", "MLOps", "PMP", "Scrum"],
      details: [
        "AI Governance: Member of the Bankers Association AI Governance Regulatory Task Force; drafted the bank's 'Data Analytics Model Management Policy'.",
        "Team & Project Management: Hands-on experience in Scrum and PMP; effectively coordinated cross-functional resources to execute actionable plans.",
        "Data Infrastructure: Built a 3,000+ data tag center using dbt, established CI/CD pipelines, and deployed an MLOps platform.",
        "Data Analytics: Conducted exploratory data analysis to evaluate marketing impacts and uncover strategic business opportunities.",
        "Predictive Modeling: Developed models using GRU, LightGBM, and XGBoost; launched real-time recommendation engines for the Fubon+ App.",
        "LLM R&D: Developed investment research summarization and relationship manager (RM) chat features; established a centralized LLM platform."
      ],
      projects: [
        { name: "Credit Cards", desc: "Costco card analytics project predicting target cardholders, contributing to 2M+ cards issued." },
        { name: "Consumer Finance", desc: "Built mortgage lead scoring models for precision marketing, achieving 7x performance vs. baseline." },
        { name: "Digital Banking", desc: "Developed real-time recommendation ranking models and digital footprint tracking mechanisms for Fubon+ App." },
        { name: "Wealth Management", desc: "Created wealth management customer analytics dashboards to monitor client trends and dynamics." }
      ]
    },
    {
      company: "Deloitte",
      role: "Senior Consultant, Risk Advisory",
      period: "2016/09 ~ 2019/06",
      location: "Songshan Dist., Taipei City",
      size: "Management Consulting (500+ employees) / Managing <4 people",
      description: "Focused on forensic accounting, regulatory compliance implementation, personal data protection, and cybersecurity audit services.",
      tags: ["Forensic", "Python", "MSSQL", "VBA", "Legal Compliance", "ISO27001"],
      details: [
        "Forensic Accounting: Issued investigation reports via data analytics across 8 projects, serving as project lead in 2 engagements.",
        "Compliance Frameworks: Served as PM to plan compliance policies, identify key controls, and perform gap assessments.",
        "Audits & Reviews: Executed audit engagements for ISO 27001, GDPR, PIMS, and e-payment systems."
      ]
    },
    {
      company: "KPMG",
      role: "Audit Associate, Audit Department",
      period: "2015/09 ~ 2016/08",
      location: "Xinyi Dist., Taipei City",
      size: "Accounting Services (500+ employees)",
      description: "Executed financial statement audits and corporate tax filing engagements.",
      tags: ["Audit", "Tax"],
      details: [
        "Financial Auditing: Participated in financial statement audits for 6 companies, covering letters of credit and financial instruments.",
        "Tax Filing: Responsible for tax document sampling, tax reconciliation schedule preparation, and report drafting."
      ]
    }
  ];
  
  const certificates = [
    { title: "Certified Public Accountant (CPA)", icon: <Award className="w-4 h-4 text-amber-500" /> },
    { title: "Project Management Professional (PMP)", icon: <CheckCircle2 className="w-4 h-4 text-blue-500" /> },
    { title: "AI Application Planner (Intermediate)", icon: <Diameter className="w-4 h-4 text-green-600" /> },
    { title: "IBM Data Science Professional", icon: <Calculator className="w-4 h-4 text-blue-600" /> },
    { title: "IBM Data Analyst Professional", icon: <Database className="w-4 h-4 text-blue-600" /> },
    { title: "Google Cloud Digital Leader", icon: <Layout className="w-4 h-4 text-sky-500" /> },
    { title: "Deep Learning Specialization", icon: <Binary className="w-4 h-4 text-indigo-500" /> },
    { title: "Generative AI with LLMs", icon: <Cpu className="w-4 h-4 text-purple-500" /> },
    { title: "UiPath_RPA Developer Diploma", icon: <Binoculars className="w-4 h-4 text-purple-500" /> }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 md:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <header className="bg-white rounded-3xl shadow-sm p-6 md:p-10 mb-10 border border-slate-200">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            {/* Profile Image Container */}
            <div className="relative shrink-0">
              <div className="w-36 h-36 md:w-48 md:h-48 rounded-2xl overflow-hidden border-4 border-slate-50 shadow-xl">
                <img 
                  src="/profile.jpg" 
                  alt="Albert Profile" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/200?text=Albert"; }}
                />
              </div>
            </div>

            {/* Basic Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="mb-4">
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Albert Liu</h1>
                <p className="text-xl text-blue-700 font-bold mt-2">
                  Data Science Section Manager | Data Analytics | AI Governance | Strategic Planning | Project Management
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 text-sm text-slate-600">
                <div className="flex items-center justify-center md:justify-start">
                  <Briefcase className="w-4 h-4 mr-2 text-slate-400" /> 11~12 Years of Experience
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <MapPin className="w-4 h-4 mr-2 text-slate-400" /> Daan Dist., Taipei City, Taiwan
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <Mail className="w-4 h-4 mr-2 text-slate-400" /> albertliu141@gmail.com
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <ShieldCheck className="w-4 h-4 mr-2 text-slate-400" /> CPA | PMP | IBM DS | AI Application Planner
                </div>
              </div>

              <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-2">
                {["AI Governance", "MLOps", "Data Modeling", "Data Science", "Scrum"].map(skill => (
                  <span key={skill} className="bg-slate-900 text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Column: Education & Skills (1/3 Width) */}
          <div className="lg:col-span-1 space-y-8">

            {/* Education */}
            <section>
              <h2 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-2 text-blue-600" /> Education
              </h2>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <div key={i} className={`p-5 rounded-2xl border ${i === 0 ? 'bg-blue-50 border-blue-200' : 'bg-white border-slate-200'}`}>
                    <p className="text-xs font-bold text-blue-600 mb-1">{edu.period}</p>
                    <h3 className="font-bold text-slate-900 text-sm">{edu.school}</h3>
                    <p className="text-xs text-slate-600 mt-1">{edu.degree}</p>
                  </div>
                ))}
              </div>
            </section>
 
            {/* Certifications */}
            <section>
              <h2 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center">
                <Award className="w-6 h-6 mr-2 text-blue-600" /> Certifications
              </h2>
              <div className="space-y-3">
                {certificates.map((cert, i) => (
                  <div key={i} className="flex items-center p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                    {cert.icon}
                    <span className="ml-3 text-sm font-semibold text-slate-700">{cert.title}</span>
                  </div>
                ))}
                <div className="p-3 bg-slate-50 rounded-xl border border-dashed border-slate-300">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Financial Licenses</p>
                  <p className="text-xs text-slate-500">Bank Internal Control & Audit, Credit Specialist, Foreign Exchange, AML/CFT, FinTech Proficiency, Legal Compliance</p>
                </div>
              </div>
            </section>

           {/* Technical Tools */}
            <section>
              <h2 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center">
                <Code2 className="w-6 h-6 mr-2 text-blue-600" /> Technical Tools
              </h2>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
                <div>
                  <p className="text-xs font-black text-blue-600 uppercase mb-2 tracking-wider">Programming & DB</p>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "MS SQL", "SAS", "VBA", "HDFS", "MongoDB"].map(t => (
                      <span key={t} className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-700">{t}</span>
                    ))}
                  </div>
                </div>
                <hr />
                <div>
                  <p className="text-xs font-black text-blue-600 uppercase mb-2 tracking-wider">Analysis & Visualization</p>
                  <div className="flex flex-wrap gap-2">
                    {["Tableau", "Scikit-learn"].map(t => (
                      <span key={t} className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-700">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Right Column: Work Experience (2/3 Width) */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center">
              <Briefcase className="w-6 h-6 mr-2 text-blue-600" /> Work Experience
            </h2>
            <div className="space-y-10">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative group">
                  <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">{exp.company}</h3>
                        <p className="text-blue-600 font-bold text-lg mt-1">{exp.role}</p>
                        <p className="text-xs text-slate-400 mt-1">{exp.size}</p>
                      </div>
                      <div className="mt-3 md:mt-0 px-4 py-1.5 bg-slate-100 rounded-lg text-slate-600 text-sm font-bold flex items-center">
                        <Calendar className="w-4 h-4 mr-2" /> {exp.period}
                      </div>
                    </div>

                    <p className="text-slate-700 font-medium mb-4 leading-relaxed">{exp.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {exp.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex text-sm text-slate-600 leading-relaxed">
                          <ChevronRight className="w-4 h-4 text-blue-500 mr-2 shrink-0 mt-1" />
                          {detail}
                        </li>
                      ))}
                    </ul>

                    {exp.projects && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {exp.projects.map((proj, pIdx) => (
                          <div key={pIdx} className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                            <p className="font-bold text-blue-900 text-sm flex items-center">
                              <TrendingUp className="w-4 h-4 mr-2 text-blue-600" /> {proj.name}
                            </p>
                            <p className="text-xs text-blue-700 mt-2 leading-relaxed">{proj.desc}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map(tag => (
                        <span key={tag} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-1 rounded font-black tracking-widest uppercase">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <footer className="text-center text-slate-400 text-sm mt-20 pb-10">
          <p>© 2026 Albert - Professional Portfolio Profile</p>
          <p className="mt-1">Built with React & Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
};

export default Resume;