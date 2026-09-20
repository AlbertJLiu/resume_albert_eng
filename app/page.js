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

  // Patents Data
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
      role: "Vice President | Chief of DS & Development Section",
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
  
  // Certifications 點綴藍色調 Icon
  const certificates = [
    { title: "Certified Public Accountant (CPA)", icon: <Award className="w-4 h-4 text-blue-600" /> },
    { title: "Project Management Professional (PMP)", icon: <CheckCircle2 className="w-4 h-4 text-emerald-600" /> },
    { title: "ISO/IEC 42001:2023 Lead Auditor", icon: <Diameter className="w-4 h-4 text-indigo-600" /> },
    { title: "IBM Data Science Professional", icon: <Calculator className="w-4 h-4 text-sky-600" /> },
    { title: "IBM Data Analyst Professional", icon: <Database className="w-4 h-4 text-cyan-600" /> },
    { title: "Google Cloud Digital Leader", icon: <Layout className="w-4 h-4 text-blue-500" /> },
    { title: "Deep Learning Specialization", icon: <Binary className="w-4 h-4 text-violet-600" /> },
    { title: "Generative AI with LLMs", icon: <Cpu className="w-4 h-4 text-[#1e385c]" /> },
    { title: "UiPath_RPA Developer Diploma", icon: <Binoculars className="w-4 h-4 text-teal-600" /> }
  ];

  return (
    <div className="min-h-screen bg-slate-100/90 py-12 px-4 md:px-8 font-sans text-slate-800 antialiased selection:bg-[#13293d] selection:text-white">
      <div className="max-w-5xl mx-auto">
        
        {/* 個人資料 Header: 沉穩藍深底 (#13293d) */}
        <header className="bg-[#13293d] text-slate-100 rounded-2xl shadow-xl p-6 md:p-10 mb-8 border border-slate-800">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Profile Image */}
            <div className="relative shrink-0">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-xl overflow-hidden border-2 border-slate-700 shadow-lg">
                <img 
                  src="/profile.jpg" 
                  alt="Albert Profile" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/200?text=Albert"; }}
                />
              </div>
            </div>

            {/* Basic Info */}
            <div className="flex-1 text-center md:text-left min-w-0">
              <div className="mb-3">
                <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">Albert Liu</h1>
                
                <p className="text-xs sm:text-sm md:text-base text-slate-300 font-semibold tracking-tight mt-1 leading-normal">
                  Data Science Section Manager | Data Analytics | AI Governance | PM & Strategy
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-5 text-xs md:text-sm text-slate-300 font-medium">
                <div className="flex items-center justify-center md:justify-start">
                  <Briefcase className="w-4 h-4 mr-2 text-sky-400 shrink-0" /> 11~12 Years of Experience
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <MapPin className="w-4 h-4 mr-2 text-sky-400 shrink-0" /> Daan Dist., Taipei City, Taiwan
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <Mail className="w-4 h-4 mr-2 text-sky-400 shrink-0" /> albertliu141@gmail.com
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <ShieldCheck className="w-4 h-4 mr-2 text-sky-400 shrink-0" /> CPA | PMP | IBM DS | AI Application Planner
                </div>
              </div>

              {/* 核心技能 Badge */}
              <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-2">
                {["AI Governance", "MLOps", "Data Modeling", "Data Science", "Scrum"].map(skill => (
                  <span key={skill} className="bg-[#1e385c] text-slate-100 border border-slate-700 px-3 py-1 rounded text-xs font-mono font-medium tracking-wide">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* 雙欄架構 (1/3 左欄 + 2/3 右欄) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* 左側欄位 (1/3 寬度) */}
          <div className="lg:col-span-1 space-y-6">

            {/* Education */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-800 mb-3 flex items-center border-b border-slate-200 pb-2">
                <div className="w-6 h-6 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center mr-2 shrink-0">
                  <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                </div>
                Education
              </h2>
              <div className="space-y-2.5">
                {education.map((edu, i) => (
                  <div key={i} className="p-3.5 rounded-xl border border-[#d0dbe5] bg-[#f0f4f8] shadow-sm hover:border-[#1e385c]/40 transition-colors">
                    <p className="text-[11px] font-bold text-[#1e385c] mb-0.5">{edu.period}</p>
                    <h3 className="font-bold text-slate-900 text-xs md:text-sm">{edu.school}</h3>
                    <p className="text-xs text-slate-600 mt-0.5">{edu.degree}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-800 mb-3 flex items-center border-b border-slate-200 pb-2">
                <div className="w-6 h-6 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center mr-2 shrink-0">
                  <Award className="w-3.5 h-3.5 text-blue-600" />
                </div>
                Certifications
              </h2>
              <div className="space-y-2">
                {certificates.map((cert, i) => (
                  <div key={i} className="flex items-center p-2.5 bg-[#f0f4f8] rounded-lg border border-[#d0dbe5] shadow-sm hover:border-[#1e385c]/40 transition-colors">
                    <div className="w-7 h-7 rounded-md bg-white border border-slate-200 flex items-center justify-center shrink-0 mr-2.5 shadow-2xs">
                      {cert.icon}
                    </div>
                    <span className="text-xs font-semibold text-slate-800">{cert.title}</span>
                  </div>
                ))}
                <div className="p-3 bg-[#e2ebf3] rounded-lg border border-[#d0dbe5]">
                  <p className="text-[10px] text-[#1e385c] font-bold uppercase tracking-wider mb-1">Financial Licenses</p>
                  <p className="text-xs text-slate-700 leading-relaxed">Bank Internal Control & Audit, Credit Specialist, Foreign Exchange, AML/CFT, FinTech Proficiency, Legal Compliance</p>
                </div>
              </div>
            </section>

            {/* Technical Tools */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-800 mb-3 flex items-center border-b border-slate-200 pb-2">
                <div className="w-6 h-6 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center mr-2 shrink-0">
                  <Code2 className="w-3.5 h-3.5 text-blue-600" />
                </div>
                Technical Tools
              </h2>
              <div className="bg-[#f0f4f8] p-4 rounded-xl border border-[#d0dbe5] shadow-sm space-y-3.5">
                <div>
                  <p className="text-[10px] font-bold text-[#1e385c] uppercase mb-2 tracking-wider">Programming & DB</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Python", "MS SQL", "SAS", "VBA", "HDFS", "MongoDB"].map(t => (
                      <span key={t} className="px-2 py-0.5 bg-white border border-[#d0dbe5] rounded text-xs font-medium text-slate-700">{t}</span>
                    ))}
                  </div>
                </div>
                <hr className="border-[#d0dbe5]" />
                <div>
                  <p className="text-[10px] font-bold text-[#1e385c] uppercase mb-2 tracking-wider">Analysis & Visualization</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Tableau", "Scikit-learn"].map(t => (
                      <span key={t} className="px-2 py-0.5 bg-white border border-[#d0dbe5] rounded text-xs font-medium text-slate-700">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Patents Section */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-800 mb-3 flex items-center border-b border-slate-200 pb-2">
                <div className="w-6 h-6 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center mr-2 shrink-0">
                  <FileCheck className="w-3.5 h-3.5 text-blue-600" />
                </div>
                Patents
              </h2>
              <div className="space-y-2">
                {patents.map((item, i) => (
                  <div key={i} className="bg-[#f0f4f8] p-3.5 rounded-xl border border-[#d0dbe5] shadow-sm hover:border-[#1e385c]/40 transition-colors">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-bold bg-white text-[#1e385c] px-2 py-0.5 rounded border border-[#c1d1e0]">
                        {item.type}
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium">{item.year}</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-xs leading-snug">{item.title}</h3>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* 右側欄位 (2/3 寬度): 統一的典雅白底與鋼藍色系卡片 */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Work Experience */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-800 mb-5 flex items-center border-b border-slate-200 pb-2">
                <div className="w-6 h-6 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center mr-2 shrink-0">
                  <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                </div>
                Work Experience
              </h2>
              <div className="space-y-6">
                {experiences.map((exp, idx) => {
                  const isLatest = idx === 0;

                  return (
                    <div key={idx} className="bg-white p-6 md:p-7 rounded-xl border border-slate-200/90 shadow-sm hover:border-slate-300 transition-colors">
                      
                      <div className="flex flex-col md:flex-row justify-between items-start gap-2 mb-4">
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">{exp.company}</h3>
                            {isLatest && (
                              <span className="bg-[#1e385c] text-white text-[10px] font-bold px-2 py-0.5 rounded border border-[#162a45] tracking-wide shrink-0">
                                CURRENT
                              </span>
                            )}
                          </div>
                          
                          <p className="text-[#1e385c] font-bold text-xs sm:text-sm md:text-base mt-1">
                            {exp.role}
                          </p>

                          <p className="text-xs text-slate-500 font-medium mt-0.5">{exp.size}</p>
                        </div>
                        
                        <div className="px-3 py-1 bg-[#f0f4f8] text-[#1e385c] rounded-md text-xs font-semibold flex items-center whitespace-nowrap shrink-0 border border-[#d0dbe5]">
                          <Calendar className="w-3.5 h-3.5 mr-1.5 shrink-0 text-blue-600" /> {exp.period}
                        </div>
                      </div>

                      <p className="text-slate-700 text-xs md:text-sm font-medium mb-4 leading-relaxed">{exp.description}</p>
                      
                      <ul className="space-y-2 mb-5">
                        {exp.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex text-xs md:text-sm text-slate-600 leading-relaxed">
                            <ChevronRight className="w-3.5 h-3.5 text-blue-600 mr-1.5 shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>

                      {exp.projects && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mb-5">
                          {exp.projects.map((proj, pIdx) => (
                            <div key={pIdx} className="bg-[#f0f4f8] p-3 rounded-lg border border-[#d0dbe5] shadow-xs">
                              <p className="font-bold text-[#1e385c] text-xs flex items-center">
                                <TrendingUp className="w-3.5 h-3.5 mr-1.5 text-blue-600" /> {proj.name}
                              </p>
                              <p className="text-xs text-slate-600 mt-1 leading-relaxed">{proj.desc}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="flex flex-wrap gap-1.5">
                        {exp.tags.map(tag => (
                          <span key={tag} className="text-[10px] bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded font-mono font-medium uppercase tracking-wider border border-slate-200">
                            #{tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  );
                })}
              </div>
            </section>

          </div>

        </div>

        <footer className="text-center text-slate-400 text-xs mt-16 pb-8">
          <p>© 2026 Albert - Professional Portfolio Profile</p>
        </footer>
      </div>
    </div>
  );
};

export default Resume;