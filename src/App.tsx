import React, { useState } from 'react';
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
  Table,
  ArrowLeft,
  CheckCircle,
  X,
  Phone,
  Mail,
  User
} from 'lucide-react';

const products = [
  {
    id: "big-screen",
    title: "大屏设计器",
    icon: Monitor,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
    description: "面向数据可视化与指挥中心场景，支持多种图表组件的拖拽式布局，快速构建数据驾驶舱大屏。",
    actions: ["演示地址", "操作手册", "产品履历", "白皮书", "开发指南"],
    details: {
      intro: "可视化大屏设计器是一款在线开发工具，用于快速搭建可视化大屏页面，提高生产和交付效率。它是集组件开发、资源配置、大屏设计、数据对接、发布与运行的一体化平台，能快速将数据通过可视化的方式展现出来。",
      features: [
        { title: "操作简单，所见即所得", desc: "使用者只需要重点围绕图层、画布、组件三块主体功能区，通过简单的拖拉配置即可生成一张可视化页面，通过预览和发布分享功能便可查看大屏。" },
        { title: "丰富强大的组件配置", desc: "设计器内置了包含各种形式的柱状图、折线图、饼图的常规图表，能自由切换或者沉淀各种主题，满足各类风格需求；另外提供的辅助组件利用现代浏览器的特性，可以实现各种动画、视觉变换等效果，让大屏展现形式更丰富。" },
        { title: "后台管理功能丰富", desc: "后台集成了组件、字体、主题、插件、素材和收藏等一系列大屏资源的管理功能，以及可以对大屏进行的复制、删除、导出等功能操作，在资源的用户权限分离上利用F9框架的角色权限能力可实现灵活配置。" },
        { title: "支持多种类型数据源", desc: "设计器目前支持静态数据、API接口两种类型的数据源。静态数据适用于Demo搭建，对于快速演示的场景，可直接在设计器中写入演示数据无需接口开发，方便快捷；API接口应用于实际项目落地开发，对接正式数据，设计器提供了丰富的数据请求配置，包括参数注入、自动刷新、数据过滤等功能，结合后台数据源管理模块能快速进行项目的复用。" },
        { title: "支持自定义组件开发", desc: "当内置组件无法满足需求时，可通过组件开发脚手架进行自定义组件开发，集成了创建、调试、预览、打包等一体化流程；将组件包上传至平台即可使用新的组件，脚手架提供了完整的开发手册，上手快；完善的版本机制及利用工程化的特性兼顾了相同组件不同版本之间的隔离。" },
        { title: "支持资产的沉淀和复用", desc: "复用的核心先要将好的资产如大屏、组件进行沉淀，然后将它们快速应用到新大屏中，设计器通过素材管理、成组收藏、大屏复制等功能来对大屏的资产进行沉淀，覆盖了大屏在搭建过程中需要使用的各个层面的资产，无论是局部复用或者整屏复用，都可大幅提升大屏的搭建效率。" }
      ]
    }
  },
  {
    id: "mid-screen",
    title: "中屏设计器",
    icon: LayoutGrid,
    iconColor: "text-purple-600",
    iconBg: "bg-purple-50",
    description: "管理驾驶舱与数据看板场景，提供丰富的业务组件与模板，适配中等屏幕分辨率的管理后台。",
    actions: ["演示地址", "操作手册", "产品履历", "白皮书", "开发指南"],
    details: {
      intro: "所见即所得的数字看板设计器，低成本可视化配置，按角色与个人偏好快速交付千人千面看板。",
      features: [
        { title: "所见即所得编辑器", desc: "可视化拖拽画布与实时预览，用户无需编码即可配置布局和组件，编辑即所见。" },
        { title: "灵活的数据配置与联动", desc: "通过可视化的数据源配置和事件联动，支持搜索、参数注入和跨组件联动更新。" },
        { title: "丰富的组件库与自定义扩展", desc: "内置常用图表和元件，并提供组件脚手架以便快速开发、调试与发布自定义组件。" },
        { title: "角色与权限化管理", desc: "系统管理员可按角色下发看板，支持页面级与组件级权限配置，满足差异化查看需求。" },
        { title: "资产沉淀与模板复用", desc: "支持将看板和组件沉淀为可复用资产与模板，便于低代码快速复用和二次开发。" },
        { title: "无需为每个看板定制接口", desc: "依托 API 管理平台进行接口编排，降低单看板接口开发成本，加速交付。" },
        { title: "多部署与运维支持", desc: "支持集成部署与独立部署两种模式，适配不同交付与运维需求。" }
      ]
    }
  },
  {
    id: "small-screen",
    title: "小屏设计器",
    icon: Smartphone,
    iconColor: "text-green-600",
    iconBg: "bg-green-50",
    description: "专为移动端、H5与小程序场景打造，支持响应式布局与移动端交互组件，一键发布多端应用。",
    actions: ["演示地址", "操作手册", "产品履历", "白皮书", "开发指南"],
    details: {
      intro: "移动小屏是一款用来构建移动应用的低代码平台，开发者、用户可以根据自身业务的需求来实现不同的APP应用场景，比如：数字看板、移动首页门户等。",
      features: [
        { title: "操作简单，所见即所得", desc: "使用者只需要重点围绕图层、画布、组件三块主体功能区，通过简单的拖拉配置即可生成一张可视化页面，通过预览和发布分享功能便可查看小屏。" },
        { title: "多端发布", desc: "基于新点前端框架开发的移动页面应用支持多端发布，可以一键转换为新点小程序、微信小程序、钉钉、支付宝、讯盟等三方平台小程序包，真正做到开发一次，多端运行，满足客户多终端、多平台、自我定制等个性化需求，满足敏捷交付要求。" },
        { title: "制定行业标准，促进资产沉淀和生态建设", desc: "为高效复用数字化运营资产、降低技术复杂度、减少重复开发和浪费，通过制定统一的扩展组件（卡片）规范，明确卡片开发、上架和运行平台的要求，减少重复开发，实现跨项目复用，促进卡片资产沉淀和生态建设，助力客户创建数据资产运营中枢平台" },
        { title: "聚焦数字看板业务场景，快速助力政府智慧城市系统搭建", desc: "基于统一可视化工具开发小屏可视化卡片，灵活编排页面，将移动端的业务指标卡片沉淀到低码资产平台，以数字看板的形式呈现，通过直观查看城市各个方面运营情况并对指标进行预警、挖掘和分析，为领导提供辅助决策支持。" },
        { title: "支持开放式接入", desc: "小屏低代码提供了完善的开放文档和指导手册，使得ISV开发商能够快速实现自己的业务需求，同时，基于全端的自助式开发工具,降低专题配置开发的门槛，加快接入的效率，允许ISV合作伙伴基于原子组件进行二次开发实现更复杂的业务场景。" },
        { title: "集成API网关能力", desc: "小屏引擎集成了新点API网关管理和指标工厂能力，统一提供数据集成入口和标准接入规范，客户侧采集的大数据业务指标可直接与新点API网关进行对接，API网关统一为小屏引擎提供标准的数据接入规范，实现数据与卡片模板的渲染和驱动，为客户提供更为丰富的数字城市仪表盘。" }
      ]
    }
  },
  {
    id: "form",
    title: "表单设计器",
    icon: FileText,
    iconColor: "text-orange-600",
    iconBg: "bg-orange-50",
    description: "动态表单与数据录入场景的最优解，支持条件联动、校验规则配置及多级数据源绑定。",
    actions: ["演示地址", "操作手册", "产品履历", "白皮书", "开发指南"],
    details: {
      intro: "在线表单引擎支持以拖、拉、拽的操作方式在可视化界面中设计表单页面，这种开发模式的特征是低代码，能帮助开发者提高研发效率，节省研发成本。在线表单引擎支持二次开发、在线编码、自定义控件设置、移动端页面设计，被广泛应用于协同办公、政务服务综合管理、政务网厅等业务系统中。在线表单引擎提供表单设计器和列表设计器两个主要组件，辅以工作流引擎，能够快速地搭建简易审批流程。",
      features: [
        { title: "图形化表单设计", desc: "提供可视化的在线表单设计页面，通过拖、拉、拽的操作，以“所见即所得”的方式完成表单的设计。设计器功能丰富，支持单表、移动端、多表合一等功能。" },
        { title: "多终端适配", desc: "在线表单引擎同时支持PC端和移动端，实现一次设计多端使用，可实时查看表单设计效果。" },
        { title: "可自定义表单控件", desc: "支持自定义扩展控件功能，以适应各种业务场景，满足客户的主流需求。" },
        { title: "支持事件配置、在线编码能力", desc: "支持以零代码方式实现自定义控件事件，大大减少开发人员的工作量；同时，支持通过JS/CSS编辑器在线编写代码，方便进行个性化开发。" },
        { title: "支持Word导入", desc: "支持Word文档导入，一键生成在线表单，提升表单设计效率。" },
        { title: "丰富的布局与组件能力", desc: "内置栅格、多行多列、手风琴等布局。内置功能强大的高级组件，包括自定义控件、子表控件、附件/图片上传、地图控件、富文本编辑控件等。" },
        { title: "与工作流无缝集成", desc: "支持与新点工作流引擎无缝协作，通过配置即可完成审批流程的搭建。" },
        { title: "支持函数在线编辑与管理", desc: "内置常用函数，支持开发人员在线编辑函数，方便进行能力的扩展与提升。" },
        { title: "表单样式管理", desc: "支持定义样式上传，进行统一管理，在表单预览页面可实时切换，查看不同样式的表单。" }
      ]
    }
  },
  {
    id: "others",
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
    title: "工作流引擎",
    icon: Workflow,
    description: "自主研发的可视化流程设计器，支持复杂审批流、业务流转与自动化任务编排。针对政务及企业场景深度优化，提供材料、角色、权限、节点等要素的灵活低代码配置能力，实现业务流程快速建模与高效执行，大幅提升开发与交付效率。"
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
    title: "数据模型",
    icon: Database,
    description: "可视化构建底层数据表结构，自动生成 CRUD 接口，支持多数据源接入与复杂关联查询。"
  },
  {
    title: "权限引擎",
    icon: ShieldCheck,
    description: "细粒度的 RBAC 权限控制体系，支持组织架构、角色、菜单权限与行级数据权限多维管控。"
  },
  
  {
    title: "数据集",
    icon: Table,
    description: "将底层数据模型转化为可供前端组件直接调用的数据视图，支持数据聚合、过滤与转换。"
  }
];

const allCases = [
  {
    title: "交易移动商城",
    industry: "智慧招采",
    tag: "小屏场景",
    gradient: "from-blue-500 to-cyan-400",
    desc: "支持投标人/供应商的移动端操作（如移动CA认证、标书查看、电子签章等），支持“不见面”交易全流程移动化。",
    metrics: "降低定制开发成本"
  },
  {
    title: "政务服务领导驾驶舱",
    industry: "智慧政务",
    tag: "中/小屏场景",
    gradient: "from-purple-500 to-indigo-500",
    desc: "领导/管理人员通过手机/平板随时查看政务数据，政务大厅展示实时数据驾驶舱、业务专题。",
    metrics: "提升项目交付效率"
  },
  {
    title: "建筑数据分析平台",
    industry: "数字建筑",
    tag: "多端联动",
    gradient: "from-emerald-400 to-teal-500",
    desc: "融合大中小屏，实现工程建设全生命周期数据可视化，支持物联网实时感知、BIM数据融合、AI预警等。",
    metrics: "数据互通与实时协同"
  },
  {
    title: "智慧住建业务系统",
    industry: "数字建筑",
    tag: "小屏场景",
    gradient: "from-orange-400 to-pink-500",
    desc: "移动端监管APP或小程序，支持住建主管部门/企业现场人员进行数据上报、巡检、监管、查询等。",
    metrics: "助力监管框架落地"
  },
  {
    title: "数字化监管系统",
    industry: "智慧政务",
    tag: "小屏场景",
    gradient: "from-blue-600 to-indigo-600",
    desc: "移动端咨询详情、办事指南、数据统计等小屏场景，实现“一次PC设计 → 自动转为移动样式”。",
    metrics: "多终端自动适配"
  },
  {
    title: "智慧燃气监管平台",
    industry: "数字建筑",
    tag: "中/小屏场景",
    gradient: "from-teal-400 to-cyan-500",
    desc: "业务诊断预警中心，低代码配置燃气预警，大幅降低开发与交付成本，提高项目毛利率。",
    metrics: "提升全生命周期效能"
  }
];

const categories = ["全部", "智慧招采", "智慧政务", "数字建筑"];

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
  const [currentPage, setCurrentPage] = useState<'home' | 'cases' | 'product'>('home');
  const [activeCategory, setActiveCategory] = useState('全部');
  const [activeProductId, setActiveProductId] = useState<string | null>(null);
  const [isBusinessModalOpen, setIsBusinessModalOpen] = useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);

  const filteredCases = activeCategory === '全部' 
    ? allCases 
    : allCases.filter(c => c.industry === activeCategory);

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm shadow-blue-600/20">
              <Blocks className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900 tracking-tight">LowCode Pro</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }} className={currentPage === 'home' ? "text-blue-600" : "hover:text-blue-600 transition-colors"}>首页</a>
            {currentPage === 'home' ? (
              <>
                <a href="#products" className="hover:text-blue-600 transition-colors">产品矩阵</a>
                <a href="#capabilities" className="hover:text-blue-600 transition-colors">底层引擎</a>
                <a href="#scenarios" className="hover:text-blue-600 transition-colors">解决方案</a>
              </>
            ) : currentPage === 'cases' ? (
              <span className="text-blue-600">行业案例</span>
            ) : (
              <span className="text-blue-600">产品详情</span>
            )}
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

      {/* Main Content Area */}
      {currentPage === 'home' ? (
        <>
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
              onClick={() => {
                if (product.details) {
                  setActiveProductId(product.id);
                  setCurrentPage('product');
                  window.scrollTo(0, 0);
                }
              }}
              className={`bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300 flex flex-col group ${product.details ? 'cursor-pointer' : ''}`}
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
                    onClick={(e) => e.stopPropagation()}
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
          <button onClick={() => setCurrentPage('cases')} className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
            查看更多案例 <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {allCases.slice(0, 3).map((scenario, index) => (
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
      </>
      ) : currentPage === 'cases' ? (
        <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen animate-in fade-in duration-500">
          <div className="mb-10">
            <button onClick={() => setCurrentPage('home')} className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-6 transition-colors font-medium text-sm">
              <ArrowLeft className="w-4 h-4 mr-2" /> 返回首页
            </button>
            <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">行业应用案例</h1>
            <p className="text-lg text-gray-600 max-w-3xl">探索各行业领先企业如何使用 LowCode Pro 驱动业务创新，实现数字化转型与降本增效。</p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20 scale-105' 
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((scenario, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden cursor-pointer shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className={`h-48 bg-gradient-to-br ${scenario.gradient} p-6 flex flex-col justify-between relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative z-10 flex justify-between items-start">
                    <span className="inline-flex px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-medium rounded-full border border-white/20">
                      {scenario.tag}
                    </span>
                    <span className="inline-flex px-3 py-1 bg-black/20 backdrop-blur-md text-white text-xs font-medium rounded-full">
                      {scenario.industry}
                    </span>
                  </div>
                  <h3 className="relative z-10 text-2xl font-bold text-white mt-auto">
                    {scenario.title}
                  </h3>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-gray-600 text-[15px] leading-relaxed mb-6 flex-grow">
                    {scenario.desc}
                  </p>
                  <div className="flex items-center justify-between pt-5 border-t border-gray-50">
                    <div className="flex items-center text-blue-600 font-semibold text-sm bg-blue-50 px-3 py-1.5 rounded-lg">
                      <TrendingUp className="w-4 h-4 mr-1.5" />
                      {scenario.metrics}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredCases.length === 0 && (
            <div className="py-20 text-center">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8 text-gray-300" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">暂无相关案例</h3>
              <p className="text-gray-500">该行业分类下暂无公开的客户案例</p>
            </div>
          )}
        </div>
      ) : currentPage === 'product' && activeProductId ? (
        <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen animate-in fade-in duration-500">
          {(() => {
            const activeProductData = products.find(p => p.id === activeProductId);
            if (!activeProductData || !activeProductData.details) return null;
            return (
              <>
                <div className="mb-12">
                  <button onClick={() => setCurrentPage('home')} className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors font-medium text-sm">
                    <ArrowLeft className="w-4 h-4 mr-2" /> 返回首页
                  </button>
                  <div className="flex items-center gap-5 mb-6">
                    <div className={`w-16 h-16 rounded-2xl ${activeProductData.iconBg} ${activeProductData.iconColor} flex items-center justify-center shadow-sm`}>
                      <activeProductData.icon className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 tracking-tight">{activeProductData.title}</h1>
                  </div>
                  <p className="text-lg text-gray-600 max-w-4xl leading-relaxed bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    {activeProductData.details.intro}
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="w-1.5 h-6 bg-blue-600 rounded-full mr-3"></span>
                    核心特性与优势
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {activeProductData.details.features.map((feature, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300 group">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-blue-600 transition-colors duration-300">
                            <CheckCircle className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-[15px]">{feature.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            );
          })()}
        </div>
      ) : null}

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
                <li><button onClick={() => setIsBusinessModalOpen(true)} className="hover:text-white transition-colors cursor-pointer">商务合作</button></li>
                <li><button onClick={() => setIsSupportModalOpen(true)} className="hover:text-white transition-colors cursor-pointer">技术支持</button></li>
                <li><a href="https://epoint.zhiye.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">加入我们</a></li>
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

      {/* Modals */}
      {isBusinessModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-900">商务合作</h3>
              <button onClick={() => setIsBusinessModalOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-gray-600 text-sm mb-4">欢迎与我们联系，探索新点低代码平台的无限商业可能。请通过以下方式获取专属商业解决方案：</p>
              <div className="flex items-center gap-4 p-4 bg-blue-50/50 rounded-xl border border-blue-100/50">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0"><Phone className="w-5 h-5"/></div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">全国合作专线</div>
                  <div className="font-semibold text-gray-900">400-XXX-XXXX</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-green-50/50 rounded-xl border border-green-100/50">
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0"><Mail className="w-5 h-5"/></div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">商务洽谈邮箱</div>
                  <div className="font-semibold text-gray-900">business@epoint.com.cn</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isSupportModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-900">技术支持与产品负责人</h3>
              <button onClick={() => setIsSupportModalOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <p className="text-gray-600 text-sm mb-6">如在使用过程中遇到技术问题，或需要产品相关的深入交流，欢迎联系我们的产品负责人：</p>
              <div className="space-y-3">
                {[
                  { product: '大屏/中屏设计器', name: '张经理', desc: '负责可视化大屏、中屏看板产品线' },
                  { product: '小屏设计器', name: '李经理', desc: '负责移动端、多端适配产品线' },
                  { product: '表单设计器', name: '王经理', desc: '负责动态表单、数据流转产品线' },
                  { product: '底层引擎与集成', name: '赵经理', desc: '负责工作流、API网关及底层架构' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start justify-between p-4 border border-gray-100 rounded-xl hover:border-blue-200 hover:bg-blue-50/50 transition-colors group">
                    <div>
                      <div className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">{item.product}</div>
                      <div className="text-sm text-gray-500 mt-1">{item.desc}</div>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100 group-hover:bg-white group-hover:border-blue-200 transition-colors">
                      <User className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                      <span className="text-sm font-medium text-gray-700">{item.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
