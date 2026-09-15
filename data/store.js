/* Rac97Work Phase A: local-first data layer. */
(function () {
  const KEY = "rac97work.data";
  const VERSION = 1;
  const seed = {
    version: VERSION,
    profile: { name: "滢珊", englishName: "Rachel" },
    projects: [
      { id: "project-ais", title: "AIS Maritime Traffic Complexity", status: "Active", progress: 68, updatedAt: "2026-09-12" },
      { id: "project-rac97", title: "Rac97Work", status: "Active", progress: 42, updatedAt: "2026-09-14" },
      { id: "project-research", title: "Research Portfolio", status: "Planning", progress: 25, updatedAt: "2026-09-10" },
      { id: "project-applications", title: "University Applications", status: "Active", progress: 64, updatedAt: "2026-09-13" },
      { id: "project-portfolio", title: "Portfolio", status: "Planning", progress: 30, updatedAt: "2026-09-11" },
      { id: "project-sat", title: "SAT", status: "Active", progress: 20, updatedAt: "2026-09-09" },
      { id: "project-toefl", title: "TOEFL", status: "Planning", progress: 10, updatedAt: "2026-09-08" }
    ],
    tasks: [
      { id: "task-statement", title: "完成 Personal Statement 大纲", status: "Todo", priority: "High", dueDate: "2026-09-14", projectId: "project-applications" },
      { id: "task-notes", title: "整理科研笔记", status: "Todo", priority: "Medium", dueDate: "2026-09-14", projectId: "project-research" },
      { id: "task-supervisor", title: "回复导师", status: "Todo", priority: "High", dueDate: "2026-09-14", projectId: "project-research" },
      { id: "task-brief", title: "更新项目 Brief", status: "Todo", priority: "Medium", dueDate: "2026-09-14", projectId: "project-rac97" }
    ],
    deadlines: [
      { id: "deadline-uoft", title: "UofT Application", date: "2026-09-18", type: "Application", priority: "High", status: "Open", projectId: "project-applications" },
      { id: "deadline-portfolio", title: "Portfolio", date: "2026-09-24", type: "Materials", priority: "Medium", status: "Open", projectId: "project-portfolio" },
      { id: "deadline-sat", title: "SAT", date: "2026-10-02", type: "Test", priority: "High", status: "Open", projectId: "project-sat" }
    ],
    applications: [
      { id: "application-uoft", university: "University of Toronto", system: "OUAC", program: "", country: "Canada", degree: "", deadline: "2026-09-18", applyDate: "", status: "In Progress", priority: "High", progress: 45, requirements: "Program prerequisites; transcripts; essays", notes: "", requirementIds: [], progressLogIds: [] },
      { id: "application-commonapp", university: "Common App / US list", system: "Common App", country: "United States", deadline: "", applyDate: "", status: "Planning", progress: 0, requirements: "Personal Statement; activities; recommendations; school forms" },
      { id: "application-uc", university: "UC system", system: "UC Application", country: "United States", deadline: "2026-11-30", applyDate: "", status: "Planning", progress: 0, requirements: "4 PIQs; activities; courses; self-reported grades" },
      { id: "application-uk", university: "UK university list", system: "UCAS", country: "United Kingdom", deadline: "2027-01-29", applyDate: "", status: "Planning", progress: 0, requirements: "Personal statement; reference; predicted grades" },
      { id: "application-au", university: "Australian university list", system: "Direct / state portal", country: "Australia", deadline: "", applyDate: "", status: "Planning", progress: 0, requirements: "Academic record; English score; program-specific documents" },
      { id: "application-eu", university: "European university list", system: "School portal", country: "Europe", deadline: "", applyDate: "", status: "Planning", progress: 0, requirements: "Transcript; motivation letter; portfolio where required" }
    ],
    progress: [
      { id: "progress-research", area: "科研", title: "AIS Maritime Traffic Complexity", progress: 68, status: "Ongoing", next: "完成模型比较、图表与 paper" },
      { id: "progress-sat", area: "SAT", title: "SAT", progress: 20, status: "Preparing", next: "整理错题并完成下一套模考" },
      { id: "progress-toefl", area: "托福", title: "TOEFL", progress: 10, status: "Planning", next: "安排模考与口语练习" },
      { id: "progress-ap", area: "AP", title: "AP coursework", progress: 70, status: "Ongoing", next: "维护成绩与考试安排" },
      { id: "progress-activities", area: "活动", title: "Activities list", progress: 85, status: "Drafting", next: "统一时间、描述与证明材料" }
    ],
    trackers: [
      { id: "tracker-sat", category: "SAT", title: "SAT practice", date: "", score: "", notes: "添加每次模考或实考记录" },
      { id: "tracker-toefl", category: "TOEFL", title: "TOEFL practice", date: "", score: "", notes: "添加模考、口语或实考记录" },
      { id: "tracker-research", category: "Research", title: "AIS research milestone", date: "", score: "68%", notes: "模型比较、图表和 paper" }
    ],
    files: [
      { id: "file-activities", title: "UC Activities List（标蓝修改）", url: "file:///Users/mac/Desktop/UC%20Activities%20List(%E6%A0%87%E8%93%9D%E4%BF%AE%E6%94%B9%EF%BC%89.doc", type: "Activities" },
      { id: "file-long-essay", title: "个人长文 / Why Major 素材", url: "file:///Users/mac/Desktop/%E6%88%91%E9%95%BF%E6%96%87.docm", type: "Essay" },
      { id: "file-essays", title: "寓言与申请文书素材", url: "file:///Users/mac/Desktop/%E5%AF%93%E8%A8%803.5%E5%88%99%EF%BC%882.0%EF%BC%89.doc", type: "Essay" },
      { id: "file-research", title: "Maritime Traffic Complexity research folder", url: "file:///Users/mac/Desktop/Martitime_Traffic_Complexity/", type: "Research" },
      { id: "file-school-list", title: "选校列表（待补充）", url: "", type: "School list" }
    ],
    lifeRecords: [
      { id: "life-health", title: "健康", value: "睡眠、运动、饮食", notes: "后续填写自己的目标与记录方式" },
      { id: "life-routine", title: "日常习惯", value: "早起 / 学习 / 休息", notes: "建立稳定的每日节奏" },
      { id: "life-finance", title: "生活财务", value: "收入、支出、储蓄", notes: "与挣钱的工作区分开管理" }
    ],
    goals: [], calendarEvents: [], knowledge: [], quickCaptures: []
  };
  function clone(value) { return JSON.parse(JSON.stringify(value)); }
  function read() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) { localStorage.setItem(KEY, JSON.stringify(seed)); return clone(seed); }
      const value = JSON.parse(raw);
      Object.keys(seed).forEach(key => { if (!(key in value)) value[key] = clone(seed[key]); });
      if (!value || value.version !== VERSION) { localStorage.setItem(KEY, JSON.stringify(seed)); return clone(seed); }
      return value;
    } catch (error) { console.error("Rac97Work storage read failed", error); return clone(seed); }
  }
  function write(value) {
    try { localStorage.setItem(KEY, JSON.stringify({ ...value, version: VERSION })); return true; }
    catch (error) { console.error("Rac97Work storage write failed", error); return false; }
  }
  window.Rac97Data = { KEY, VERSION, seed: clone(seed), read, write, reset: () => write(clone(seed)) };
  window.Rac97Data.read();
})();

(function () {
  const data = window.Rac97Data;
  const collections = ["tasks", "projects", "goals", "deadlines", "applications", "progress", "files"];
  const uid = (type) => type + "-" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  function list(type) { return data.read()[type] || []; }
  function save(type, items) { const state = data.read(); state[type] = items; data.write(state); return items; }
  function create(type, item) { const value = { id: uid(type), createdAt: new Date().toISOString(), ...item }; save(type, [...list(type), value]); return value; }
  function update(type, id, changes) { const items = list(type); const next = items.map(item => item.id === id ? { ...item, ...changes, updatedAt: new Date().toISOString() } : item); save(type, next); return next.find(item => item.id === id) || null; }
  function remove(type, id) { const items = list(type); save(type, items.filter(item => item.id !== id)); return true; }
  collections.forEach(type => {
    const name = type[0].toUpperCase() + type.slice(1);
    data["get" + name] = () => list(type);
    data["create" + name.slice(0, -1)] = item => create(type, item);
    data["update" + name.slice(0, -1)] = (id, changes) => update(type, id, changes);
    data["delete" + name.slice(0, -1)] = id => {
      if (type === "projects") {
        const state = data.read();
        state.tasks = (state.tasks || []).map(task => task.projectId === id ? { ...task, projectId: "" } : task);
        data.write(state);
      }
      return remove(type, id);
    };
  });
  data.toggleTask = id => {
    const task = list("tasks").find(item => item.id === id);
    return task && update("tasks", id, task.status === "Completed" ? { status: "Todo", completedAt: null } : { status: "Completed", completedAt: new Date().toISOString() });
  };
})();
