"use client";

import React from 'react';
import { 
  Database, ShieldCheck, Layout, TrendingUp, Cpu, Diameter, Calculator, Binoculars,
  Briefcase, CheckCircle2, Code2, GraduationCap, 
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

  // Patents Data (2025 年專利統一標示為 "2025 (granted)")
  const patents = [
    {
      title: "REAL-TIME LOAN NOTIFICATION SYSTEM",
      year: "2026 (under review)",
      type: "System"
    },
    {
      title: "PERSONALIZED RANKING AND RECOMMENDATION SYSTEM",
      year: "2026 (under review)",
      type: "Model"
    },
    {
      title: "FEATURE STORE SYSTEM",
      year: "2026 (under review)",
      type: "Infrastructure"
    },
    {
      title: "MODULAR MODELING SYSTEM",
      year: "2026 (under review)",
      type: "Model"
    },
    {
      title: "CREDIT CARD MERCHANT NAME INTEGRATION SYSTEM",
      year: "2025 (granted)",
      type: "Data Tag"
    },
    {
      title: "OPTIMAL CONTACT TIME RECOMMENDATION SYSTEM",
      year: "2025 (granted)",
      type: "Algorithm"
    }
  ];

  // Work Experience Data
  const experiences = [
    {
      company: "Taipei Fubon Bank",
      role: "Vice President | Chief of Data Science & Development Section",
      period: "2019/07 ~ Present",
      location: "Daan Dist., Taipei City",
      size: "Managing 10+ people",
      description: "Responsible for AI governance, DS infrastructure, team & project management, data analytics, predictive modeling, and LLM applications.",
      tags: ["Machine learning", "Python", "SQL", "AI Governance", "MLOps", "autoML", "Scrum"],
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
  
  // 側欄彩色 Icon (天藍色調)
  const certificates = [
    { title: "Certified Public Accountant (CPA)", icon: <Award className="w-4 h-4 text-sky-400" /> },
    { title: "Project Management Professional (PMP)", icon: <CheckCircle2 className="w-4 h-4 text-sky-400" /> },
    { title: "ISO/IEC 42001:2023 Lead Auditor", icon: <Diameter className="w-4 h-4 text-sky-400" /> },
    { title: "IBM Data Science Professional", icon: <Calculator className="w-4 h-4 text-sky-400" /> },
    { title: "IBM Data Analyst Professional", icon: <Database className="w-4 h-4 text-sky-400" /> },
    { title: "Google Cloud Digital Leader", icon: <Layout className="w-4 h-4 text-sky-400" /> },
    { title: "Deep Learning Specialization", icon: <Binary className="w-4 h-4 text-sky-400" /> },
    { title: "Generative AI with LLMs", icon: <Cpu className="w-4 h-4 text-sky-400" /> },
    { title: "UiPath_RPA Developer Diploma", icon: <Binoculars className="w-4 h-4 text-sky-400" /> }
  ];

  return (
    <div className="min-h-screen bg-slate-100/90 py-10 px-4 md:px-8 font-sans text-slate-800 antialiased selection:bg-slate-900 selection:text-white">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border border-slate-200">
        
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* 左側深色定錨 Side Column (占 4 欄) */}
          <div className="lg:col-span-4 bg-[#0f172a] text-slate-100 p-6 md:p-8 space-y-8 border-r border-slate-800">
            
            {/* 照片與個人聯絡資訊 */}
            <div className="text-center lg:text-left">
              <div className="w-36 h-36 md:w-40 md:h-40 mx-auto lg:mx-0 rounded-xl overflow-hidden border-2 border-slate-700 shadow-lg mb-6">
                <img 
                  src="/profile.jpg" 
                  alt="Albert Profile" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/200?text=Albert"; }}
                />
              </div>

              <div className="space-y-3 text-xs md:text-sm text-slate-300 font-medium border-b border-slate-800 pb-6">
                <div className="flex items-center justify-center lg:justify-start">
                  <Briefcase className="w-4 h-4 mr-2 text-sky-400 shrink-0" /> 11~12 Years Experience
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <MapPin className="w-4 h-4 mr-2 text-sky-400 shrink-0" /> Taipei City, Taiwan
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <Mail className="w-4 h-4 mr-2 text-sky-400 shrink-0" /> albertliu141@gmail.com
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <ShieldCheck className="w-4 h-4 mr-2 text-sky-400 shrink-0" /> CPA | PMP | IBM DS
                </div>
              </div>
            </div>

            {/* Education */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-3 flex items-center border-b border-slate-800 pb-2">
                <GraduationCap className="w-4 h-4 mr-2 text-sky-400" /> Education
              </h2>
              <div className="space-y-3">
                {education.map((edu, i) => (
                  <div key={i} className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                    <p className="text-[11px] font-bold text-sky-400 mb-0.5">{edu.period}</p>
                    <h3 className="font-bold text-white text-xs md:text-sm">{edu.school}</h3>
                    <p className="text-xs text-slate-300 mt-0.5">{edu.degree}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-3 flex items-center border-b border-slate-800 pb-2">
                <Award className="w-4 h-4 mr-2 text-sky-400" /> Certifications
              </h2>
              <div className="space-y-2">
                {certificates.map((cert, i) => (
                  <div key={i} className="flex items-center p-2.5 bg-slate-900/90 rounded-lg border border-slate-800">
                    {cert.icon}
                    <span className="ml-2.5 text-xs font-semibold text-slate-200">{cert.title}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Tools */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-3 flex items-center border-b border-slate-800 pb-2">
                <Code2 className="w-4 h-4 mr-2 text-sky-400" /> Technical Tools
              </h2>
              <div className="bg-slate-900/90 p-4 rounded-lg border border-slate-800 space-y-3">
                <div>
                  <p className="text-[10px] font-bold text-sky-400 uppercase mb-2 tracking-wider">Programming & DB</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Python", "MS SQL", "SAS", "VBA", "HDFS", "MongoDB"].map(t => (
                      <span key={t} className="px-2 py-0.5 bg-slate-800 rounded text-xs font-mono font-medium text-slate-200">{t}</span>
                    ))}
                  </div>
                </div>
                <hr className="border-slate-800" />
                <div>
                  <p className="text-[10px] font-bold text-sky-400 uppercase mb-2 tracking-wider">Analysis & Visualization</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Tableau", "Scikit-learn"].map(t => (
                      <span key={t} className="px-2 py-0.5 bg-slate-800 rounded text-xs font-mono font-medium text-slate-200">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Patents Section */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-3 flex items-center border-b border-slate-800 pb-2">
                <FileCheck className="w-4 h-4 mr-2 text-sky-400" /> Patents
              </h2>
              <div className="space-y-2">
                {patents.map((item, i) => (
                  <div key={i} className="bg-slate-900/90 p-3 rounded-lg border border-slate-800">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold bg-sky-950 text-sky-300 px-2 py-0.5 rounded border border-sky-800">
                        {item.type}
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">{item.year}</span>
                    </div>
                    <h3 className="font-bold text-slate-100 text-xs leading-snug">{item.title}</h3>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* 右側主內容 Main Column (占 8 欄) */}
          <div className="lg:col-span-8 p-6 md:p-10 bg-white space-y-8">
            
            {/* Header: 姓名與不換行標題 */}
            <header className="border-b border-slate-200 pb-6">
              <h1 className="text-4xl font-black text-slate-900 tracking-tight">Albert Liu</h1>
              
              {/* 避免自動換行控制項：whitespace-nowrap + overflow-x-auto */}
              <div className="overflow-x-auto no-scrollbar py-1">
                <p className="text-sm md:text-base text-blue-700 font-bold tracking-tight whitespace-nowrap">
                  Data Science Section Manager | Data Analytics | AI Governance | Strategic Planning | Project Management
                </p>
              </div>

              {/* 關鍵 Skills 標籤 */}
              <div className="mt-4 flex flex-wrap gap-2">
                {["AI Governance", "MLOps", "Data Modeling", "Data Science", "Scrum"].map(skill => (
                  <span key={skill} className="bg-slate-900 text-white px-3 py-1 rounded text-xs font-semibold tracking-wide">
                    {skill}
                  </span>
                ))}
              </div>
            </header>

            {/* Executive Profile Summary */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-3 flex items-center border-b border-slate-200 pb-2">
                <ShieldCheck className="w-4 h-4 mr-2 text-blue-600" /> Executive Profile
              </h2>
              <p className="text-xs md:text-sm text-slate-700 font-medium leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                Banking data science leader with 10+ years across financial services, risk consulting and audit. Combine AI governance and platform delivery with a background in law and accounting to translate regulatory requirements into model controls and business outcomes.
              </p>
            </section>

            {/* Work Experience */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-5 flex items-center border-b border-slate-200 pb-2">
                <Briefcase className="w-4 h-4 mr-2 text-blue-600" /> Work Experience
              </h2>
              <div className="space-y-6">
                {experiences.map((exp, idx) => {
                  const isLatest = idx === 0;
                  const isSecond = idx === 1;

                  return (
                    <div key={idx} className="relative">
                      
                      {/* 1. 現任經歷 (Taipei Fubon Bank): 微藍漸層 + 藍實線 Accent */}
                      {isLatest && (
                        <div className="bg-gradient-to-br from-blue-50/80 via-indigo-50/20 to-white p-6 rounded-xl border-2 border-blue-600/80 shadow-md">
                          <div className="flex flex-col md:flex-row justify-between items-start gap-2 mb-3">
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">{exp.company}</h3>
                                <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded tracking-wide">CURRENT</span>
                              </div>
                              
                              {/* 防止職稱被自動換行：whitespace-nowrap + overflow-x-auto */}
                              <div className="overflow-x-auto no-scrollbar max-w-full">
                                <p className="text-blue-800 font-bold text-sm md:text-base mt-0.5 whitespace-nowrap">
                                  {exp.role}
                                </p>
                              </div>

                              <p className="text-xs text-slate-500 font-medium mt-0.5">{exp.size}</p>
                            </div>
                            
                            <div className="px-2.5 py-1 bg-white text-blue-700 text-xs font-bold flex items-center whitespace-nowrap shrink-0 border border-blue-200 shadow-sm">
                              <Calendar className="w-3.5 h-3.5 mr-1.5 shrink-0 text-blue-600" /> {exp.period}
                            </div>
                          </div>

                          <p className="text-slate-800 text-xs md:text-sm font-medium mb-4 leading-relaxed">{exp.description}</p>
                          
                          <ul className="space-y-2 mb-5">
                            {exp.details.map((detail, dIdx) => (
                              <li key={dIdx} className="flex text-xs md:text-sm text-slate-700 leading-relaxed">
                                <ChevronRight className="w-3.5 h-3.5 text-blue-600 mr-1.5 shrink-0 mt-0.5" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>

                          {exp.projects && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mb-5">
                              {exp.projects.map((proj, pIdx) => (
                                <div key={pIdx} className="bg-white/80 p-3 rounded-lg border border-blue-100 shadow-sm">
                                  <p className="font-bold text-blue-900 text-xs flex items-center">
                                    <TrendingUp className="w-3.5 h-3.5 mr-1.5 text-blue-600" /> {proj.name}
                                  </p>
                                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{proj.desc}</p>
                                </div>
                              ))}
                            </div>
                          )}

                          <div className="flex flex-wrap gap-1.5">
                            {exp.tags.map(tag => (
                              <span key={tag} className="text-[10px] bg-blue-100/70 text-blue-800 px-2 py-0.5 rounded font-mono font-semibold uppercase tracking-wider border border-blue-200">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* 2. 第二階段經歷 (Deloitte): 白底 + 鋼灰 Accent 邊條 */}
                      {isSecond && (
                        <div className="bg-white p-6 rounded-xl border border-slate-200/90 border-l-4 border-l-slate-600 shadow-sm">
                          <div className="flex flex-col md:flex-row justify-between items-start gap-2 mb-3">
                            <div>
                              <h3 className="text-xl font-bold text-slate-900 tracking-tight">{exp.company}</h3>
                              
                              <div className="overflow-x-auto no-scrollbar max-w-full">
                                <p className="text-slate-800 font-semibold text-sm mt-0.5 whitespace-nowrap">
                                  {exp.role}
                                </p>
                              </div>

                              <p className="text-xs text-slate-500 font-medium mt-0.5">{exp.size}</p>
                            </div>
                            
                            <div className="px-2.5 py-1 bg-slate-100 rounded text-slate-700 text-xs font-semibold flex items-center whitespace-nowrap shrink-0 border border-slate-200">
                              <Calendar className="w-3.5 h-3.5 mr-1.5 shrink-0 text-slate-600" /> {exp.period}
                            </div>
                          </div>

                          <p className="text-slate-700 text-xs md:text-sm font-medium mb-4 leading-relaxed">{exp.description}</p>
                          
                          <ul className="space-y-2 mb-5">
                            {exp.details.map((detail, dIdx) => (
                              <li key={dIdx} className="flex text-xs md:text-sm text-slate-600 leading-relaxed">
                                <ChevronRight className="w-3.5 h-3.5 text-slate-500 mr-1.5 shrink-0 mt-0.5" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="flex flex-wrap gap-1.5">
                            {exp.tags.map(tag => (
                              <span key={tag} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono font-medium uppercase tracking-wider border border-slate-200">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* 3. 早期經歷 (KPMG): 微灰輕柔底色 + 淺灰邊條 */}
                      {!isLatest && !isSecond && (
                        <div className="bg-slate-50/80 p-5 md:p-6 rounded-xl border border-slate-200/80 border-l-4 border-l-slate-400">
                          <div className="flex flex-col md:flex-row justify-between items-start gap-2 mb-3">
                            <div>
                              <h3 className="text-lg font-bold text-slate-800 tracking-tight">{exp.company}</h3>
                              
                              <div className="overflow-x-auto no-scrollbar max-w-full">
                                <p className="text-slate-700 font-semibold text-xs md:text-sm mt-0.5 whitespace-nowrap">
                                  {exp.role}
                                </p>
                              </div>

                              <p className="text-[11px] text-slate-500 font-medium mt-0.5">{exp.size}</p>
                            </div>
                            
                            <div className="px-2.5 py-1 bg-white rounded text-slate-600 text-xs font-medium flex items-center whitespace-nowrap shrink-0 border border-slate-200">
                              <Calendar className="w-3.5 h-3.5 mr-1.5 shrink-0 text-slate-500" /> {exp.period}
                            </div>
                          </div>

                          <p className="text-slate-600 text-xs font-medium mb-3 leading-relaxed">{exp.description}</p>
                          
                          <ul className="space-y-1.5 mb-4">
                            {exp.details.map((detail, dIdx) => (
                              <li key={dIdx} className="flex text-xs text-slate-600 leading-relaxed">
                                <ChevronRight className="w-3.5 h-3.5 text-slate-400 mr-1.5 shrink-0 mt-0.5" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="flex flex-wrap gap-1.5">
                            {exp.tags.map(tag => (
                              <span key={tag} className="text-[10px] bg-white text-slate-500 px-2 py-0.5 rounded font-mono font-medium uppercase tracking-wider border border-slate-200">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                    </div>
                  );
                })}
              </div>
            </section>

          </div>

        </div>

        <footer className="text-center text-slate-400 text-xs py-6 bg-slate-50 border-t border-slate-200">
          <p>© 2026 Albert - Professional Portfolio Profile</p>
        </footer>
      </div>
    </div>
  );
};

export default Resume;