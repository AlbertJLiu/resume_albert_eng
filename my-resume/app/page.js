"use client";

import React from 'react';
import { 
  Database, ShieldCheck, Layout, TrendingUp, Cpu, Users, 
  Briefcase, CheckCircle2, Code2, BarChart3, GraduationCap, 
  Calendar, MapPin, Award, Mail, ChevronRight
} from 'lucide-react';

const Resume = () => {
  // 學歷資料 (台大置頂)
  const education = [
    {
      school: "國立臺灣大學",
      degree: "商學研究所碩士 (最高學歷)",
      period: "2023/02 ~ 2025/06",
      status: "畢業"
    },
    {
      school: "國立政治大學",
      degree: "法律系大學部",
      period: "2010/09 ~ 2014/07",
      status: "畢業"
    },
    {
      school: "國立政治大學",
      degree: "會計系 (輔系)",
      period: "2010/09 ~ 2014/07",
      status: "畢業"
    }
  ];

  // 工作經歷資料
  const experiences = [
    {
      company: "台北富邦銀行",
      role: "數據科學處 科主管",
      period: "2019/07 ~ 仍在職",
      location: "台北市大安區",
      size: "銀行業 500人以上 / 管理 9~12 人",
      description: "負責人工智慧治理、基礎工程、團隊及專案管理、數據分析、預測模型及 LLM 應用。",
      tags: ["SQL", "Python", "AI治理", "MLOps", "PMP", "Scrum"],
      details: [
        "AI 治理：擔任銀行公會 AI 治理法規制定小組成員，制定內部「數據分析模型管理辦法」。",
        "工程導入：以 Python DBT 開發 3000+ 數據標籤中心，建立 CI/CD 機制並推動 MLOps 系統。",
        "數據分析與模型：應用 GRU, LGBM, XGBM 等建立模型，並開發 Fubon+ App 即時推薦功能。",
        "LLM 研發：開發投資研究摘要、理專對話功能及 no-code 自動化行銷內容生產平台。"
      ],
      projects: [
        { name: "好市多卡行銷", desc: "AUC 92%，預測辦卡客群，助攻年度發卡量 200 萬張。" },
        { name: "房貸潛力客群", desc: "精準行銷模型，成效達 Baseline 7 倍。" },
        { name: "信卡權益變動分析", desc: "以 Rsquare 0.92 預測調降衝擊，擬定留客策略。" }
      ]
    },
    {
      company: "勤業眾信 (Deloitte)",
      role: "風險諮詢部門 資深顧問",
      period: "2016/09 ~ 2019/06",
      location: "台北市松山區",
      size: "工商顧問業 500人以上 / 管理 4人以下",
      description: "專注於鑑識會計、法遵制度導入、個資保護及資安查核服務。",
      tags: ["Forensic", "Python", "MSSQL", "VBA", "ISO27001"],
      details: [
        "鑑識會計：透過數據還原真相，參與 8 個專案，其中 2 案擔任專案主管。",
        "法遵制度：擔任 PM 規劃遵法管理政策、辨識相關控制與差異評估。",
        "稽核查核：執行 ISO27001、GDPR、PIMS 及銀行電子支付查核專案。"
      ]
    },
    {
      company: "安侯建業 (KPMG)",
      role: "審計部門 審計員",
      period: "2015/09 ~ 2016/08",
      location: "台北市信義區",
      size: "會計服務業 500人以上",
      description: "執行財務報表查核及公司稅務申報工作。",
      tags: ["Audit", "Tax Compliance", "Internal Control"],
      details: [
        "財務審計：參與 6 間公司財報查核，涵蓋信用狀與金融商品交易項目。",
        "稅務申報：負責稅務憑證抽核、稅務調節表編製及報告撰寫。"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 md:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Header 區塊 (包含照片) */}
        <header className="bg-white rounded-3xl shadow-sm p-6 md:p-10 mb-10 border border-slate-200">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            {/* 照片容器 */}
            <div className="relative shrink-0">
              <div className="w-36 h-36 md:w-48 md:h-48 rounded-2xl overflow-hidden border-4 border-slate-50 shadow-xl">
                <img 
                  src="/profile.jpg" 
                  alt="Albert Profile" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/200?text=Albert"; }}
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-blue-600 text-white p-2 rounded-xl shadow-lg">
                <Award className="w-6 h-6" />
              </div>
            </div>

            {/* 基本資料 */}
            <div className="flex-1 text-center md:text-left">
              <div className="mb-4">
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Albert</h1>
                <p className="text-xl text-blue-700 font-bold mt-2">數據科學主管 | 數據分析｜數據科學｜策略分析｜AI治理｜經營管理</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 text-sm text-slate-600">
                <div className="flex items-center justify-center md:justify-start">
                  <Briefcase className="w-4 h-4 mr-2 text-slate-400" /> 總年資 11~12 年經驗
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <MapPin className="w-4 h-4 mr-2 text-slate-400" /> 台北市大安區
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <Mail className="w-4 h-4 mr-2 text-slate-400" /> albertliu141@gmail.com
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <ShieldCheck className="w-4 h-4 mr-2 text-slate-400" /> CPA | PMP | IBM DS | AI應用規劃師(中級)
                </div>
              </div>

              <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-2">
                {["AI Governance", "MLOps", "Data Modeling", "Forensic Accounting"].map(skill => (
                  <span key={skill} className="bg-slate-900 text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* 左側：學歷與技能 (1/3 寬度) */}
          <div className="lg:col-span-1 space-y-10">
            <section>
              <h2 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-2 text-blue-600" /> 學歷背景
              </h2>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <div key={i} className={`p-5 rounded-2xl border ${i === 0 ? 'bg-blue-50 border-blue-200' : 'bg-white border-slate-200'}`}>
                    <p className="text-xs font-bold text-blue-600 mb-1">{edu.period}</p>
                    <h3 className="font-bold text-slate-900">{edu.school}</h3>
                    <p className="text-sm text-slate-600 mt-1">{edu.degree}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center">
                <Code2 className="w-6 h-6 mr-2 text-blue-600" /> 專業技能
              </h2>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-bold text-slate-800 mb-2">數據技術</p>
                    <p className="text-slate-600">SQL, Python, MongoDB, Impala, Hive, DBT, Tableau</p>
                  </div>
                  <hr />
                  <div>
                    <p className="font-bold text-slate-800 mb-2">AI 與模型</p>
                    <p className="text-slate-600">XGBoost, LGBM, GRU, LLM 應用, AutoML</p>
                  </div>
                  <hr />
                  <div>
                    <p className="font-bold text-slate-800 mb-2">治理與管理</p>
                    <p className="text-slate-600">AI Governance, MLOps, CI/CD, Scrum, PMP</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* 右側：工作經歷 (2/3 寬度) */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center">
              <Briefcase className="w-6 h-6 mr-2 text-blue-600" /> 工作經歷
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