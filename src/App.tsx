import React from 'react';
import {
  Monitor,
  Layers,
  TrendingUp,
  LayoutGrid,
  Smartphone,
  FileText,
  Blocks,
  Play,
  BookOpen,
  History,
  Code,
  Workflow,
  Database,
  Link as LinkIcon,
  ShieldCheck,
  ChevronRight,
  Github,
  Twitter,
  Zap,
  Webhook,
  Table
} from 'lucide-react';

const products = [
  {
    title: "大屏设计器",
    icon: Monitor,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
    description: "面向数据可视化与指挥中心场景，支持多种图表组件的拖拽式布局，快速构建数据驾驶舱大屏。",
    actions: ["演示地址", "操作手册", "产品履历", "白皮书", "开发指南"]
  },
  {
    title: "中屏设计器",
    icon: LayoutGrid,
    iconColor: "text-purple-600",
    iconBg: "bg-purple-50",
    description: "管理驾驶舱与数据看板场景，提供丰富的业务组件与模板，适配中等屏幕分辨率的管理后台。",
    actions: ["演示地址", "操作手册", "产品履历", "白皮书", "开发指南"]
  },
  {
    title: "小屏设计器",
    icon: Smartphone,
    iconColor: "text-green-600",
    iconBg: "bg-green-50",
    description: "专为移动端、H5与小程序场景打造，支持响应式布局与移动端交互组件，一键发布多端应用。",
    actions: ["演示地址", "操作手册", "产品履历", "白皮书", "开发指南"]
  },
  {
    title: "表单设计器",
    icon: FileText,
    iconColor: "text-orange-600",
    iconBg: "bg-orange-50",
    description: "动态表单与数据录入场景的最优解，支持条件联动、校验规则配置及多级数据源绑定。",
    actions: ["演示地址", "操作手册", "产品履历", "白皮书", "开发指南"]
  },
  {
    title: "其他专项设计器",
    icon: Blocks,
    iconColor: "text-pink-600",
    iconBg: "bg-pink-50",
    description: "覆盖更多垂直场景的专项设计工具，包括登录页面、指标卡片与报表等快速搭建工具。",
    subTags: ["登录设计器", "指标卡片设计器", "报表设计器"],
    actions: ["演示地址", "操作手册", "产品履历", "白皮书", "开发指南"]
  }
];

const capabilities = [
  {
    title: "流程引擎",
    icon: Workflow,
    description: "基于 BPMN 2.0 标准，提供可视化流程设计器，支持复杂审批流、业务流转与自动化任务编排。"
  },
  {
    title: "数据模型",
    icon: Database,
    description: "可视化构建底层数据表结构，自动生成 CRUD 接口，支持多数据源接入与复杂关联查询。"
  },
  {
    title: "集成中心",
    icon: LinkIcon,
    description: "标准化的 API 编排与第三方服务接入能力，打破数据孤岛，实现企业内部系统无缝互联。"
  },
  {
    title: "权限引擎",
    icon: ShieldCheck,
    description: "细粒度的 RBAC 权限控制体系，支持组织架构、角色、菜单权限与行级数据权限多维管控。"
  },
  {
    title: "动作流",
    icon: Zap,
    description: "可视化配置前端交互与后端逻辑，支持条件分支、循环与异步调用，灵活编排业务动作。"
  },
  {
    title: "API接口管理",
    icon: Webhook,
    description: "统一管理内外部 API 接口，支持接口调试、鉴权配置、参数映射与自动生成接口文档。"
  },
  {
    title: "数据集",
    icon: Table,
    description: "将底层数据模型转化为可供前端组件直接调用的数据视图，支持数据聚合、过滤与转换。"
  }
];

const scenarios = [
  {
    title: "智慧城市指挥中心",
    tag: "大屏场景",
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    title: "企业内部 ERP 系统",
    tag: "中屏场景",
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    title: "现场巡检移动助手",
    tag: "小屏场景",
    gradient: "from-emerald-400 to-teal-500"
  }
];

const ActionIcon = ({ name, className }: { name: string, className?: string }) => {
  switch (name) {
    case '演示地址': return <Play className={className} />;
    case '操作手册': return <BookOpen className={className} />;
    case '产品履历': return <History className={className} />;
    case '白皮书': return <FileText className={className} />;
    case '开发指南': return <Code className={className} />;
    default: return <Play className={className} />;
  }
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm shadow-blue-600/20">
              <Blocks className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900 tracking-tight">LowCode Pro</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#" className="text-blue-600">首页</a>
            <a href="#products" className="hover:text-blue-600 transition-colors">产品矩阵</a>
            <a href="#capabilities" className="hover:text-blue-600 transition-colors">底层引擎</a>
            <a href="#scenarios" className="hover:text-blue-600 transition-colors">解决方案</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors hidden sm:block">
              登录控制台
            </button>
            <button className="text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 shadow-sm shadow-blue-600/20 transition-all active:scale-95">
              免费试用
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-[#eef2f6] to-[#fafafa] overflow-hidden pt-32 pb-24">
        {/* Decorative Background */}
        <div className="absolute inset-0 z-0 pointer-events-none flex justify-center">
          <div
            className="w-[200%] h-[200%] absolute top-[-50%] opacity-[0.08]"
            style={{
              backgroundImage: `linear-gradient(to right, #0055ff 1px, transparent 1px), linear-gradient(to bottom, #0055ff 1px, transparent 1px)`,
              backgroundSize: '4rem 4rem',
              transform: 'perspective(1000px) rotateX(60deg) translateY(-100px) translateZ(-200px)',
              transformOrigin: 'top center'
            }}
          ></div>
          <div className="absolute top-0 w-[800px] h-[400px] bg-blue-400/20 blur-[120px] rounded-full mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/60 text-sm text-gray-600 mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            Enterprise Low-Code Platform
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            低代码平台演示门户
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            一站式可视化设计与底层流程引擎服务，赋能数字化转型，降低开发门槛，提升交付效率。探索我们的产品矩阵，体验所见即所得的开发模式。
          </p>

          <div className="flex items-center justify-center gap-4 mb-16">
            <button className="bg-blue-600 text-white px-8 py-3.5 rounded-xl font-medium hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 flex items-center">
              <Play className="w-4 h-4 mr-2 fill-current" />
              观看平台演示
            </button>
            <button className="bg-white text-gray-700 border border-gray-200 px-8 py-3.5 rounded-xl font-medium hover:bg-gray-50 hover:border-gray-300 shadow-sm transition-all hover:-translate-y-0.5">
              查阅开发者文档
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Stat Card 1 */}
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white flex flex-col items-center justify-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 rounded-xl bg-blue-500 text-white flex items-center justify-center mb-5 shadow-lg shadow-blue-500/20">
                <Monitor className="w-7 h-7" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">5+</div>
              <div className="text-sm font-medium text-gray-500">可视化设计工具</div>
            </div>
            
            {/* Stat Card 2 */}
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white flex flex-col items-center justify-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 rounded-xl bg-blue-500 text-white flex items-center justify-center mb-5 shadow-lg shadow-blue-500/20">
                <Layers className="w-7 h-7" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">4</div>
              <div className="text-sm font-medium text-gray-500">底层服务引擎</div>
            </div>
            
            {/* Stat Card 3 */}
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white flex flex-col items-center justify-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 rounded-xl bg-blue-500 text-white flex items-center justify-center mb-5 shadow-lg shadow-blue-500/20">
                <TrendingUp className="w-7 h-7" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">10x</div>
              <div className="text-sm font-medium text-gray-500">开发交付提效</div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">设计器类产品矩阵</h2>
          <p className="text-gray-500 text-lg max-w-2xl">核心产品矩阵 — 覆盖从大屏指挥到移动端应用的全场景可视化拖拽式设计，所见即所得。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              <div className="flex items-center mb-5">
                <div className={`w-12 h-12 rounded-xl ${product.iconBg} ${product.iconColor} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <product.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{product.title}</h3>
              </div>
              
              <p className="text-gray-600 text-[15px] mb-8 flex-grow leading-relaxed">
                {product.description}
              </p>

              {product.subTags && (
                 <div className="flex flex-wrap gap-2 mb-8">
                   {product.subTags.map(tag => (
                     <span key={tag} className="px-3 py-1.5 bg-gray-50 border border-gray-100 text-gray-600 text-xs font-medium rounded-lg">
                       {tag}
                     </span>
                   ))}
                 </div>
              )}

              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-gray-50">
                {product.actions.map((action, i) => (
                  <button 
                    key={i} 
                    className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-lg text-[13px] font-medium text-gray-500 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-200"
                  >
                    <ActionIcon name={action} className="w-3.5 h-3.5 mr-1.5" />
                    {action}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Capabilities Section */}
      <div id="capabilities" className="bg-white border-y border-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">坚实的底层服务引擎</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">不仅是前端 UI 的拖拽，我们提供完整的后端逻辑、数据与权限的低代码配置能力。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap, index) => (
              <div key={index} className="flex p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300 border border-transparent hover:border-gray-100">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <cap.icon className="w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{cap.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{cap.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scenarios Section */}
      <div id="scenarios" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">行业应用场景</h2>
            <p className="text-gray-500 text-lg max-w-2xl">各行各业都在使用我们的低代码平台加速数字化创新。</p>
          </div>
          <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
            查看更多案例 <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {scenarios.map((scenario, index) => (
            <div key={index} className="group rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300">
              <div className={`h-48 bg-gradient-to-br ${scenario.gradient} p-6 flex flex-col justify-between relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                <span className="relative z-10 inline-flex px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-medium rounded-full w-fit border border-white/20">
                  {scenario.tag}
                </span>
                <h3 className="relative z-10 text-2xl font-bold text-white mt-auto">
                  {scenario.title}
                </h3>
              </div>
              <div className="bg-white p-5 border border-t-0 border-gray-100 rounded-b-2xl flex justify-between items-center">
                <span className="text-sm text-gray-500 font-medium">了解解决方案</span>
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Blocks className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl text-white tracking-tight">LowCode Pro</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                致力于为企业提供强大、易用的低代码开发平台，加速企业数字化转型进程。
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-6">产品矩阵</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">大屏设计器</a></li>
                <li><a href="#" className="hover:text-white transition-colors">中屏设计器</a></li>
                <li><a href="#" className="hover:text-white transition-colors">小屏设计器</a></li>
                <li><a href="#" className="hover:text-white transition-colors">表单设计器</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">开发者资源</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">开发指南</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API 文档</a></li>
                <li><a href="#" className="hover:text-white transition-colors">组件物料库</a></li>
                <li><a href="#" className="hover:text-white transition-colors">更新日志</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">联系我们</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">商务合作</a></li>
                <li><a href="#" className="hover:text-white transition-colors">技术支持</a></li>
                <li><a href="#" className="hover:text-white transition-colors">加入我们</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2026 LowCode Pro. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">隐私政策</a>
              <a href="#" className="hover:text-white transition-colors">服务条款</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
