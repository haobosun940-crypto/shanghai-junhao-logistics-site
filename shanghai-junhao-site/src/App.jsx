import { useEffect, useMemo, useRef, useState } from "react";
import {
  Anchor,
  ArrowRight,
  Boxes,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  FileCheck2,
  Globe2,
  Languages,
  Mail,
  MapPin,
  Menu,
  Network,
  PackageCheck,
  PhoneCall,
  Plane,
  Radar,
  Route,
  Search,
  Send,
  ShieldCheck,
  Ship,
  Truck,
  UserRound,
  Warehouse,
  X,
} from "lucide-react";
import heroImage from "./assets/hero-vessel-routes.webp";
import logoMark from "./assets/logo-mark.png";
import "./styles.css";

const icons = {
  sea: Ship,
  air: Plane,
  bulk: Anchor,
  network: Network,
  warehouse: Warehouse,
  customs: FileCheck2,
  inspection: ClipboardCheck,
  insurance: ShieldCheck,
  multimodal: Route,
  truck: Truck,
  boxes: Boxes,
  package: PackageCheck,
};

const content = {
  zh: {
    langLabel: "中文",
    nav: ["首页", "服务", "网络", "流程", "优势", "联系"],
    quote: "获取报价",
    brand: "上海隽昊",
    brandFull: "上海隽昊国际货运代理有限公司",
    brandSub: "国际货运代理与供应链服务商",
    englishName: "上海隽昊国际货运代理有限公司",
    heroImageAlt: "数字航线网络中的集装箱船",
    eyebrow: "中美贸易物流与全球货运代理伙伴",
    headline: "连接全球 驱动贸易",
    subhead:
      "专注国际海运、空运、仓储、报关、商检、陆运、保险与多式联运。依托稳定承运资源、海外代理和清关网络，为客户提供安全、高效、精准的一体化物流方案。",
    heroPoints: ["承运资源", "海外代理", "全程节点", "多式联运"],
    trackingTitle: "货物状态咨询",
    trackingBadge: "业务人员协助查询",
    trackingHint: "输入提单号 / 箱号 / 订单号",
    trackingButton: "提交咨询",
    trackingMore: "联系业务获取节点",
    trackingResult:
      "已收到查询信息。正式货物状态将由业务人员结合订舱、提货、装箱、报关、出运、目的港和签收节点协助确认。",
    stats: [
      ["多年", "行业经验", "深耕货运代理"],
      ["全球", "代理网络", "覆盖重点区域"],
      ["多类", "货物操作", "整柜拼箱冷藏散杂"],
      ["全程", "节点反馈", "从订舱到签收"],
      ["稳健", "承运资源", "船司航司与港口协作"],
    ],
    statsLabel: "公司服务数据",
    statsNote:
      "数据用于展示公司历史服务能力，具体价格、时效与交付安排会受航线、海关查验、港口拥堵和目的地派送条件影响。",
    quickServices: [
      ["海运服务", "整柜 / 拼箱", "sea", "sea"],
      ["空运服务", "急件 / 样品", "air", "sea"],
      ["仓储配送", "入仓 / 分拨", "warehouse", "warehouse"],
      ["报关清关", "报关 / 商检", "customs", "customs"],
      ["门到门服务", "提货 / 派送", "truck", "door"],
    ],
    quickServicesLabel: "服务快捷入口",
    processTitle: "我们的操作流程",
    processKicker: "业务流程",
    process: [
      ["咨询询价", "确认货物类型、起运港、目的港、贸易条款与时效要求。"],
      ["方案订舱", "比较船期、航线和舱位，匹配成本与交付周期。"],
      ["单证制作", "准备提单、箱单、发票、保险及出口合规资料。"],
      ["报关清关", "联动海关、场站、码头和商检节点处理通关。"],
      ["装运出运", "跟进提柜、装箱、进港、起运和中转节点。"],
      ["交付签收", "协调海外代理、仓库、卡车派送与回单反馈。"],
    ],
    servicesTitle: "服务与解决方案",
    servicesKicker: "核心服务",
    servicesLead:
      "围绕“怎么运、怎么清关、怎么交付”，我们把航线、仓库、海关、场站、车队和海外代理连接成可执行的物流方案。",
    services: [
      {
        key: "sea",
        title: "海运与空运货代",
        en: "整柜 / 拼箱 / 空运",
        icon: "sea",
        desc:
          "适用于跨境电商、传统贸易、工厂出口和项目货运输需求。我们根据货量、时效和预算，为客户匹配整柜、拼箱、散货、冷藏箱、空运及相关保险方案。",
        bullets: [
          "提供船期、航班、订舱与出运计划，平衡成本与时效",
          "协助出口单证、现场监装、清关、拆箱与货物保险代理",
          "支持提货、门点派送及海外代理、港口、仓库资源衔接",
        ],
      },
      {
        key: "customs",
        title: "报关清关与商检",
        en: "报关 / 商检 / 单证",
        icon: "customs",
        desc:
          "面向进出口企业处理报关、商检、法定检验、植检、木质包装熏蒸和核销资料回传，降低货物在通关节点的等待和沟通成本。",
        bullets: [
          "提前核对品名、海关编码、单证和监管条件",
          "联动海关、码头、场站、商检单位和代理处理异常节点",
          "协助办理法定检验、植检、木质包装熏蒸及相关单证回传",
        ],
      },
      {
        key: "warehouse",
        title: "仓储与配送",
        en: "仓储 / 分拨 / 派送",
        icon: "warehouse",
        desc:
          "围绕港口场站、铁路站点和仓库节点，提供铁路站点提货、铁路货物卸载、仓储、分拣、包装、打托、绑扎、批次管理与配送服务。",
        bullets: [
          "按货物属性优化装箱方案，提高箱容利用率",
          "现场监装、分批入库、分拣配送，确保配载准确可追溯",
          "多吨位集卡车队灵活调度，降低综合转运成本",
        ],
      },
      {
        key: "door",
        title: "门到门与多式联运",
        en: "提货 / 多式联运 / 签收",
        icon: "truck",
        desc:
          "从起运地提货、出口操作、国际运输、目的港清关到门点派送，组合海运、空运、铁路、卡车和仓储资源，为客户减少多方沟通。",
        bullets: [
          "支持工厂交货、离岸价、未完税交货、完税后交货等常见贸易条款",
          "根据目的地、品类和交付周期匹配卡车、铁路与仓配资源",
          "适合需要一站式报价、货物保险和节点反馈的跨境货物",
        ],
      },
      {
        key: "network",
        title: "美国代理网络",
        en: "美国口岸 / 海外代理",
        icon: "network",
        desc:
          "依托美国主要港口和海外代理资源，覆盖提货、仓储中转、出口文件、海空运订舱、清关协调和最后一公里派送协作。",
        bullets: [
          "覆盖洛杉矶、长滩、纽约、休斯敦、萨凡纳等主要口岸",
          "支持北美、中国及其他区域之间的整柜、拼箱与空运方案",
          "连接马士基、美森、太平船务、赫伯罗特等承运资源",
        ],
      },
      {
        key: "project",
        title: "项目与散杂货物流",
        en: "大件 / 散杂货 / 项目货",
        icon: "package",
        desc:
          "承接大宗散货、普通散杂货、袋装货、机械设备、钢材、自备箱运输和多节点工程类货物，制定装载、港口接货和陆运衔接方案。",
        bullets: [
          "对接散杂货船东、地面运输、港口接货和现场装运资源",
          "根据货物尺寸、重量、包装和装卸条件制定执行方案",
          "从运输路线、装卸计划到场站衔接均可按项目定制",
        ],
      },
    ],
    capabilitiesTitle: "关键业务能力",
    capabilitiesKicker: "资料补充",
    capabilitiesLead:
      "把公司资料里的专业能力集中展开，便于客户判断贸易条款、承运资源和落地操作是否匹配自己的货物。",
    capabilities: [
      {
        title: "贸易条款支持",
        icon: "inspection",
        items: ["离岸价", "工厂交货", "未完税交货", "完税后交货"],
        desc: "根据常见贸易条款，衔接起运地提货、出口报关、国际运输、目的港清关与门点派送。",
      },
      {
        title: "承运与航线资源",
        icon: "sea",
        items: ["马士基", "美森", "太平船务", "赫伯罗特"],
        desc: "整合主要承运资源，为客户匹配更具竞争力的航线、舱位和价格方案。",
      },
      {
        title: "保险与多式联运",
        icon: "insurance",
        items: ["海运", "空运", "铁路", "卡车"],
        desc: "按货物类型与路线协助办理运输保险，并组合多种运输方式降低跨境风险。",
      },
      {
        title: "全程节点反馈",
        icon: "multimodal",
        items: ["订舱", "提货", "报关", "签收"],
        desc: "从订舱、提货、装箱、报关、出运到目的港交付，提供关键状态反馈。",
      },
    ],
    networkTitle: "全球代理网络",
    networkKicker: "全球网络",
    networkLead:
      "我们与海外代理建立长期合作，围绕美国主要口岸、中国核心港口和重点区域代理，形成可执行的跨境运输、清关、仓储与派送协作网络，并可承接常见贸易条款下的整柜、拼箱及门到门物流服务。",
    mapLabel: "重点港口网络",
    portGroups: [
      ["美国主要港口", ["洛杉矶", "长滩", "纽约", "休斯敦", "萨凡纳"]],
      ["中国主要港口", ["上海", "宁波", "青岛", "深圳", "厦门"]],
    ],
    routeLegend: ["美国口岸", "中国港口"],
    networkCaption: "美国口岸 → 中国港口｜海运、清关、仓储、门点派送协同网络",
    mapDots: [
      ["洛杉矶", 18, 54],
      ["长滩", 30, 62],
      ["纽约", 42, 46],
      ["上海", 68, 58],
      ["宁波", 78, 50],
      ["深圳", 86, 64],
    ],
    regions: [
      ["北美", "美国主要港口代理、卡车派送、仓储中转"],
      ["中南美", "中南美航线代理与目的港协作"],
      ["欧洲", "欧线海运、清关资料和转运协同"],
      ["中东及印巴", "中东及印巴航线衔接与项目货支持"],
      ["东南亚", "东南亚支线、转运与区域配送"],
      ["澳洲", "澳洲港口代理和门点派送协作"],
    ],
    advantageTitle: "为什么选择上海隽昊",
    advantageKicker: "核心优势",
    advantages: [
      ["稳定承运资源", "与主要船公司、航空公司和港口资源保持合作，具备航线与价格方案整合能力。"],
      ["全球代理网络", "覆盖北美、中南美、欧洲、中东及印巴、东南亚和澳洲等重点区域。"],
      ["全程节点反馈", "提供货物运输状态跟踪，并协调海关、堆场、码头、车队和代理处理突发情况。"],
      ["定制化物流方案", "根据货物类型、时效要求和预算，设计安全、精准、成本可控的运输方案。"],
    ],
    missionQuote: "以客户选择为使命，以客户成功为服务标准。",
    aboutTitle: "公司简介",
    aboutKicker: "公司简介",
    about:
      "上海隽昊国际货运代理有限公司是一家面向中美贸易和全球供应链的国际物流服务商。公司围绕美国出口、中国进口及全球货运代理场景，提供海空运、仓储、清关、商检、陆运、保险及多式联运服务。",
    scenariosTitle: "典型服务场景",
    scenariosKicker: "服务场景",
    scenariosLead:
      "把服务从“能做什么”落到真实业务场景，客户可以更快判断适合自己的运输路径。",
    scenarios: [
      ["洛杉矶至上海整柜运输", "适合工厂出口、贸易订单和稳定批量货物，重点平衡船期、箱型、清关与交付节点。", "sea"],
      ["跨境电商小批量空运", "适合时效敏感、小批量补货或样品运输，重点控制航班、清关资料和末端派送。", "air"],
      ["散杂货与特殊货物", "适合冷藏箱、机械设备、钢材、大件重货和非标准包装，重点处理装载、加固和港口衔接。", "package"],
      ["门到门清关派送", "适合希望减少多方沟通的客户，从海外提货到国内签收提供整段方案。", "truck"],
    ],
    faqTitle: "常见问题",
    faqKicker: "常见问题",
    faq: [
      ["报价需要哪些信息？", "通常需要起运地、目的地、货物品名、件数、重量、体积、包装方式、贸易条款、期望时效，以及是否需要清关、仓储、保险或门到门派送。"],
      ["支持哪些贸易条款？", "可根据离岸价、工厂交货、未完税交货、完税后交货等常见贸易条款，提供起运地提货、出口报关、国际运输、目的港清关、仓储中转和门点派送。"],
      ["是否支持货物保险？", "可根据货物类型与运输路线协助办理货物运输保险，降低跨境运输过程中的风险。"],
      ["海运和空运怎么选择？", "海运更适合大批量和成本敏感货物，空运更适合时效敏感、小批量或紧急补货。实际方案会结合预算、时效和品类判断。"],
      ["能处理大件或项目货吗？", "可以先评估尺寸、重量、包装和装卸条件，再匹配散杂货船东、重型陆运和港口接货资源。"],
    ],
    ctaTitle: "让下一票货物更顺畅地出发",
    ctaText:
      "告诉我们货物类型、起运港、目的港和贸易条款，我们会为你梳理合适的航线、仓储、清关与交付方案。",
    primaryCta: "发送需求",
    secondaryCta: "查看服务",
    contactKicker: "立即咨询",
    menuLabel: "打开或关闭导航菜单",
    languageSwitchLabel: "切换语言",
    contact: {
      title: "联系上海隽昊",
      desc:
        "提交货物信息后，业务人员将根据起运地、目的地、货物类型、重量体积和期望服务，为您匹配合适的运输方案。",
      channels: [
        ["联系人", "鄂晶波", "person"],
        ["业务电话 / 微信", "13916407700", "phone"],
        ["办公区域", "上海", "address"],
      ],
    },
    form: {
      name: "姓名 / 公司",
      contact: "联系方式",
      route: "起运地 → 目的地",
      cargo: "货物类型 / 重量 / 体积",
      service: "期望服务：海运 / 空运 / 清关 / 仓储 / 门到门",
      timing: "期望时效",
      message: "补充需求",
      submit: "提交询价",
      sent: "已提交",
      received: "已收到询价，我们将在 1 个工作日内联系您。",
    },
    footer:
      "上海隽昊国际货运代理有限公司是您值得信赖的全球网络航运伙伴。",
  },
  en: {
    langLabel: "English",
    nav: ["Home", "Services", "Network", "Process", "Advantages", "Contact"],
    quote: "Get a Quote",
    brand: "Shanghai Junhao",
    brandFull: "Shanghai Eastern Worldwide Logistics Co., Ltd.",
    brandSub: "Freight forwarding & supply chain services",
    englishName: "Shanghai Eastern Worldwide Logistics Co., Ltd.",
    heroImageAlt: "Container vessel moving through a digital global route network",
    eyebrow: "U.S.-to-China export logistics and global freight forwarding",
    headline: "Global routes, sharper trade.",
    subhead:
      "We provide international sea freight, air freight, warehousing, customs clearance, inspection, inland transport, insurance and multimodal logistics. Stable carrier resources, overseas agents and clearance networks help customers move cargo with safer, faster and more precise execution.",
    heroPoints: ["Carrier resources", "Overseas agents", "Milestone updates", "Multimodal transport"],
    trackingTitle: "Cargo Status Support",
    trackingBadge: "Operations-assisted inquiry",
    trackingHint: "Enter B/L, container or order number",
    trackingButton: "Submit Inquiry",
    trackingMore: "Contact operations for milestones",
    trackingResult:
      "Inquiry received. The operations team will help confirm cargo milestones across booking, pickup, loading, customs, departure, destination handling and final delivery.",
    stats: [
      ["Years", "Industry Experience", "Freight forwarding focus"],
      ["Global", "Agency Network", "Key regional coverage"],
      ["Diverse", "Cargo Handling", "FCL, LCL, reefer, breakbulk"],
      ["End-to-end", "Milestone Updates", "Booking through delivery"],
      ["Stable", "Carrier Resources", "Carrier, airline and port coordination"],
    ],
    statsNote:
      "Figures summarize historical service capability. Actual pricing, timing and delivery arrangements depend on route, customs inspection, port congestion and final-mile conditions.",
    quickServices: [
      ["Sea Freight", "FCL / LCL", "sea", "sea"],
      ["Air Freight", "Urgent / Samples", "air", "sea"],
      ["Warehousing", "Storage / Distribution", "warehouse", "warehouse"],
      ["Customs Clearance", "Declaration / Inspection", "customs", "customs"],
      ["Door-to-Door", "Pickup / Delivery", "truck", "door"],
    ],
    quickServicesLabel: "Service shortcuts",
    processTitle: "How We Operate",
    processKicker: "OPERATING RHYTHM",
    process: [
      ["Inquiry", "Confirm cargo type, origin, destination, trade terms and timing."],
      ["Routing", "Compare schedules, routes and capacity to balance cost and delivery."],
      ["Documentation", "Prepare B/L, packing list, invoice, insurance and export materials."],
      ["Customs", "Coordinate customs, yards, terminals and inspection milestones."],
      ["Dispatch", "Track pickup, loading, gate-in, departure and transfer nodes."],
      ["Delivery", "Coordinate agents, warehouse handoff, trucking and proof of delivery."],
    ],
    servicesTitle: "Services & Solutions",
    servicesKicker: "WHAT WE DELIVER",
    servicesLead:
      "We focus on the questions shippers ask first: how to move it, how to clear it, and how to deliver it with fewer handoff risks.",
    services: [
      {
        key: "sea",
        title: "Sea & Air Freight Forwarding",
        en: "FCL / LCL / Air",
        icon: "sea",
        desc:
          "For e-commerce replenishment, traditional trade, factory exports and project cargo, we match FCL, LCL, bulk cargo, reefer containers, air freight and cargo insurance options to cargo volume, budget and timing.",
        bullets: [
          "Provide sailing schedules, flight schedules, booking and departure plans",
          "Coordinate export documents, loading supervision, customs clearance, devanning and cargo insurance agency",
          "Support pickup, door delivery and overseas agent, port and warehouse handoffs",
        ],
      },
      {
        key: "customs",
        title: "Customs Clearance & Commodity Inspection",
        en: "Customs / Inspection / Documents",
        icon: "customs",
        desc:
          "Customs specialists support import and export customs formalities, commodity inspection, statutory inspection, phytosanitary inspection, wooden packing fumigation and verification document return.",
        bullets: [
          "Review product name, HS code, documents and regulatory conditions early",
          "Coordinate customs, terminals, container yards, inspection authorities and agents when exceptions occur",
          "Support statutory inspection, phytosanitary inspection, wooden packing fumigation and related document return",
        ],
      },
      {
        key: "warehouse",
        title: "Warehousing & Distribution",
        en: "Storage / Distribution / Delivery",
        icon: "warehouse",
        desc:
          "Port yards, rail stations and warehouse nodes support railway station pickup, rail cargo unloading, storage, sorting, packaging, palletizing, strapping, batch management and distribution delivery.",
        bullets: [
          "Optimize container loading layouts to improve utilization",
          "Supervise loading, batch warehousing, sorting and distribution for traceable handling",
          "Use multi-tonnage container trucks to reduce overall transfer cost",
        ],
      },
      {
        key: "door",
        title: "Door-to-Door & Multimodal Transport",
        en: "Pickup / Multimodal / Delivery",
        icon: "truck",
        desc:
          "From origin pickup and export handling to international transport, destination customs and door delivery, we combine ocean, air, rail, trucking and warehousing resources into one coordinated path.",
        bullets: [
          "Support common trade terms including EXW, FOB, DDU and DDP",
          "Match trucking, rail and warehousing resources by destination, cargo type and timing",
          "Useful for shippers who need one quote, cargo insurance and milestone communication",
        ],
      },
      {
        key: "network",
        title: "U.S. Agent Network",
        en: "U.S. gateways / Overseas agents",
        icon: "network",
        desc:
          "U.S. port and overseas agent resources cover pickup, warehouse transfer, export documentation, sea and air booking, customs coordination and last-mile delivery.",
        bullets: [
          "Cover major gateways such as Los Angeles, Long Beach, New York, Houston and Savannah",
          "Support FCL, LCL and air freight options between North America, China and other regions",
          "Coordinate carrier resources including MAERSK, MATSON, PIL and Hapag-Lloyd",
        ],
      },
      {
        key: "project",
        title: "Project, Breakbulk & Bulk Cargo",
        en: "Oversized / Breakbulk / Project cargo",
        icon: "package",
        desc:
          "For bulk goods, general breakbulk cargo, bagged goods, machinery and equipment, steel products, self-owned containers and multi-node project freight, we plan loading, port receiving and land transport handoffs.",
        bullets: [
          "Coordinate breakbulk vessel owners, ground transportation, port receiving and on-site loading resources",
          "Plan around cargo dimensions, weight, packaging and loading conditions",
          "Tailored routing, loading, unloading and terminal handoff planning",
        ],
      },
    ],
    capabilitiesTitle: "Key Operating Capabilities",
    capabilitiesKicker: "DOCUMENTED STRENGTHS",
    capabilitiesLead:
      "These details expand the company file into practical website content so shippers can quickly evaluate trade terms, carrier resources and operational coverage.",
    capabilities: [
      {
        title: "Trade Terms",
        icon: "inspection",
        items: ["FOB", "EXW", "DDU", "DDP"],
        desc: "Connect origin pickup, export customs, international transport, destination clearance and door delivery under common trade terms.",
      },
      {
        title: "Carrier Resources",
        icon: "sea",
        items: ["MAERSK", "MATSON", "PIL", "Hapag-Lloyd"],
        desc: "Combine major carrier resources to match competitive routes, capacity and pricing options.",
      },
      {
        title: "Insurance & Multimodal",
        icon: "insurance",
        items: ["Ocean", "Air", "Rail", "Truck"],
        desc: "Arrange cargo insurance by commodity and route while combining transport modes to reduce cross-border risk.",
      },
      {
        title: "Milestone Feedback",
        icon: "multimodal",
        items: ["Booking", "Pickup", "Customs", "Delivery"],
        desc: "Provide key updates from booking, pickup, loading and customs through departure, destination handling and delivery.",
      },
    ],
    networkTitle: "Global Agency Network",
    networkKicker: "GLOBAL COVERAGE",
    networkLead:
      "Long-term overseas partnerships connect key U.S. gateways, core China ports and regional agents into an executable transport, clearance, warehousing and delivery network, including FCL, LCL and door-to-door services under common trade terms.",
    mapLabel: "Key port network",
    portGroups: [
      ["Major U.S. Gateways", ["Los Angeles", "Long Beach", "New York", "Houston", "Savannah"]],
      ["Core China Ports", ["Shanghai", "Ningbo", "Qingdao", "Shenzhen", "Xiamen"]],
    ],
    routeLegend: ["U.S. gateways", "China ports"],
    networkCaption: "U.S. Ports → China Ports | Ocean, clearance, warehousing and door delivery network",
    mapDots: [
      ["Los Angeles", 18, 54],
      ["Long Beach", 30, 62],
      ["New York", 42, 46],
      ["Shanghai", 68, 58],
      ["Ningbo", 78, 50],
      ["Shenzhen", 86, 64],
    ],
    regions: [
      ["North America", "Major port agents, trucking, warehousing and transfer support"],
      ["Central & South America", "Route agency and destination coordination"],
      ["Europe", "Ocean freight, document and clearance collaboration"],
      ["Middle East & Indian Subcontinent", "Route handoff and project cargo support"],
      ["Southeast Asia", "Feeder routes, transshipment and regional delivery"],
      ["Australia", "Port agency and final-mile delivery coordination"],
    ],
    advantageTitle: "Why Shanghai Junhao",
    advantageKicker: "WHY US",
    advantages: [
      ["Stable Carrier Resources", "Coordinate major shipping lines, airlines and port resources to build stronger route and pricing options."],
      ["Global Agency Network", "Cover North America, Central & South America, Europe, Middle East & Indian Subcontinent, Southeast Asia and Australia."],
      ["End-to-end Milestone Feedback", "Track cargo status and coordinate customs, yards, terminals, trucking teams and agents when exceptions arise."],
      ["Customized Logistics Plans", "Design safer, more precise and cost-controlled plans by cargo type, timing requirement and budget."],
    ],
    missionQuote: "Take clients' choices as our mission, and clients' success as our service standard.",
    aboutTitle: "Company Profile",
    aboutKicker: "COMPANY PROFILE",
    about:
      "Shanghai Eastern Worldwide Logistics Co., Ltd. is an international logistics provider serving U.S.-China trade and global supply chain scenarios. The company connects sea and air freight, warehousing, customs clearance, commodity inspection, trucking, cargo insurance and multimodal transport services for exporters, importers and trading companies.",
    scenariosTitle: "Service Scenarios",
    scenariosKicker: "SERVICE SCENARIOS",
    scenariosLead:
      "These common shipping situations help customers quickly understand which path fits their cargo.",
    scenarios: [
      ["Los Angeles to Shanghai FCL", "For factory exports, trade orders and recurring cargo where schedule, container type, clearance and delivery nodes matter.", "sea"],
      ["Small-Batch Air Freight", "For urgent replenishment, samples or high-value small cargo where flight choice, clearance documents and final-mile timing matter.", "air"],
      ["Reefer & Special Cargo", "For reefer containers, machinery, steel, oversized cargo and non-standard packing that needs loading, securing and port coordination.", "package"],
      ["Door-to-Door Clearance Delivery", "For customers who want fewer handoffs from overseas pickup through domestic delivery confirmation.", "truck"],
    ],
    faqTitle: "Frequently Asked Questions",
    faqKicker: "FAQ",
    faq: [
      ["What information is needed for a quote?", "Origin, destination, cargo name, package count, weight, volume, packing method, trade terms, timing expectation, and whether clearance, warehousing, insurance or door delivery is required."],
      ["Which trade terms can you support?", "We can provide origin pickup, export customs, international transport, destination clearance, warehousing transfer and door delivery under FOB, EXW, DDU and DDP."],
      ["Can you support cargo insurance?", "Yes. We can assist with cargo transport insurance based on commodity type and route to reduce cross-border risk."],
      ["Should I choose sea freight or air freight?", "Sea freight is usually better for larger or cost-sensitive cargo. Air freight is better for urgent, small-batch or time-sensitive shipments."],
      ["Can you handle oversized or project cargo?", "Yes. We first evaluate dimensions, weight, packaging and loading conditions, then match breakbulk, heavy-duty trucking and port resources."],
    ],
    ctaTitle: "Move the next shipment with more certainty",
    ctaText:
      "Share cargo type, origin, destination and trade terms. We will map the right route, warehouse, customs and delivery solution.",
    primaryCta: "Send Requirement",
    secondaryCta: "View Services",
    contactKicker: "LET'S MOVE",
    menuLabel: "Toggle navigation",
    languageSwitchLabel: "Toggle language",
    contact: {
      title: "Contact Shanghai Junhao",
      desc:
        "Submit cargo information and the operations team will match a suitable transport plan based on origin, destination, cargo type, weight, volume and required services.",
      channels: [
        ["Contact Person", "E Jingbo", "person"],
        ["Phone / WeChat", "13916407700", "phone"],
        ["Office Area", "Shanghai", "address"],
      ],
    },
    form: {
      name: "Name / Company",
      contact: "Contact method",
      route: "Origin → Destination",
      cargo: "Cargo type / weight / volume",
      service: "Expected service: sea / air / customs / warehousing / door-to-door",
      timing: "Expected timing",
      message: "Additional needs",
      submit: "Submit Inquiry",
      sent: "Submitted",
      received: "Inquiry received. We will contact you within one business day.",
    },
    footer:
      "Shanghai Eastern Worldwide Logistics Co., Ltd. is your global network shipping partner.",
  },
};

function RouteField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let frame = 0;
    let animationId;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const particles = Array.from({ length: 82 }, (_, index) => ({
      phase: Math.random() * Math.PI * 2,
      speed: 0.0025 + Math.random() * 0.0045,
      radius: 1.2 + Math.random() * 2.7,
      lane: index % 6,
      jitter: Math.random() * 0.18,
    }));

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawArc = (width, height, offset, lane, alpha) => {
      const startX = width * (0.04 + lane * 0.025);
      const startY = height * (0.66 + lane * 0.04);
      const controlX = width * (0.42 + lane * 0.03);
      const controlY = height * (0.1 + lane * 0.035);
      const endX = width * (0.9 - lane * 0.035);
      const endY = height * (0.3 + lane * 0.055);

      context.beginPath();
      context.moveTo(startX, startY);
      context.quadraticCurveTo(controlX, controlY, endX, endY);
      context.strokeStyle = `rgba(92, 229, 255, ${alpha})`;
      context.lineWidth = 1;
      context.setLineDash([6, 10]);
      context.lineDashOffset = -offset;
      context.stroke();
      context.setLineDash([]);
    };

    const pointOnArc = (width, height, lane, t, jitter) => {
      const startX = width * (0.04 + lane * 0.025);
      const startY = height * (0.66 + lane * 0.04);
      const controlX = width * (0.42 + lane * 0.03);
      const controlY = height * (0.1 + lane * 0.035);
      const endX = width * (0.9 - lane * 0.035);
      const endY = height * (0.3 + lane * 0.055);
      const x = (1 - t) * (1 - t) * startX + 2 * (1 - t) * t * controlX + t * t * endX;
      const y = (1 - t) * (1 - t) * startY + 2 * (1 - t) * t * controlY + t * t * endY;
      return {
        x,
        y: y + Math.sin((t + jitter) * Math.PI * 6) * 9,
      };
    };

    const render = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      frame += prefersReduced ? 0 : 1;
      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = "lighter";

      for (let lane = 0; lane < 6; lane += 1) {
        drawArc(width, height, frame * 0.6, lane, 0.16 + lane * 0.025);
      }

      particles.forEach((particle) => {
        const t = (particle.phase + frame * particle.speed) % 1;
        const { x, y } = pointOnArc(width, height, particle.lane, t, particle.jitter);
        const pulse = 0.55 + Math.sin(frame * 0.04 + particle.phase) * 0.35;
        const gradient = context.createRadialGradient(x, y, 0, x, y, particle.radius * 7);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${0.9 * pulse})`);
        gradient.addColorStop(0.38, `rgba(74, 220, 255, ${0.55 * pulse})`);
        gradient.addColorStop(1, "rgba(74, 220, 255, 0)");
        context.fillStyle = gradient;
        context.beginPath();
        context.arc(x, y, particle.radius * 5, 0, Math.PI * 2);
        context.fill();
      });

      context.globalCompositeOperation = "source-over";
      animationId = window.requestAnimationFrame(render);
    };

    resize();
    render();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="route-field" aria-hidden="true" />;
}

function BrandLockup({ t, compact = false }) {
  return (
    <a className={`brand-lockup ${compact ? "compact" : ""}`} href="#home" aria-label={t.brandFull}>
      <img src={logoMark} alt="" />
      <span>
        <strong>{t.brand}</strong>
        <small>{t.brandSub}</small>
      </span>
    </a>
  );
}

function IconByName({ name, size = 22 }) {
  const Icon = icons[name] || Ship;
  return <Icon size={size} strokeWidth={1.8} />;
}

function Header({ lang, setLang, t }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  }, [lang]);

  const links = [
    ["#home", t.nav[0]],
    ["#services", t.nav[1]],
    ["#network", t.nav[2]],
    ["#process", t.nav[3]],
    ["#advantages", t.nav[4]],
    ["#contact", t.nav[5]],
  ];

  return (
    <header className="site-header">
      <BrandLockup t={t} />
      <button className="menu-button icon-button" onClick={() => setOpen((value) => !value)} aria-label={t.menuLabel}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={open ? "open" : ""}>
        {links.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <button
          className="language-toggle"
          onClick={() => setLang(lang === "zh" ? "en" : "zh")}
          aria-label={t.languageSwitchLabel}
        >
          <Languages size={17} />
          <span>{lang === "zh" ? "EN" : "中文"}</span>
        </button>
        <a className="quote-button" href="#contact">
          {t.quote}
          <ArrowRight size={17} />
        </a>
      </div>
    </header>
  );
}

function Hero({ t, setActiveService }) {
  const [trackingValue, setTrackingValue] = useState("");
  const [trackingResult, setTrackingResult] = useState("");

  const submitTracking = (event) => {
    event.preventDefault();
    setTrackingResult(t.trackingResult);
  };

  return (
    <section id="home" className="hero">
      <img className="hero-image" src={heroImage} alt={t.heroImageAlt} />
      <RouteField />
      <div className="hero-shade" />
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <Radar size={18} />
            {t.eyebrow}
          </div>
          <h1>
            <span>{t.brand}</span>
            {t.headline}
          </h1>
          <p className="hero-name">{t.englishName}</p>
          <p className="hero-subhead">{t.subhead}</p>
          <div className="hero-points">
            {t.heroPoints.map((point) => (
              <span key={point}>
                <CheckCircle2 size={16} />
                {point}
              </span>
            ))}
          </div>
          <div className="hero-actions">
            <a className="primary-action" href="#contact">
              {t.primaryCta}
              <Send size={18} />
            </a>
            <a className="secondary-action" href="#services">
              {t.secondaryCta}
              <ChevronRight size={18} />
            </a>
          </div>
        </div>

        <div className="hero-panel" aria-label={t.trackingTitle}>
          <div className="panel-heading">
            <span>{t.trackingTitle}</span>
            <small>{t.trackingBadge}</small>
          </div>
          <form className="tracking-form" onSubmit={submitTracking}>
            <label>
              <Search size={17} />
              <input
                value={trackingValue}
                onChange={(event) => setTrackingValue(event.target.value)}
                placeholder={t.trackingHint}
              />
            </label>
            <button type="submit">
              {t.trackingButton}
              <ArrowRight size={17} />
            </button>
          </form>
          <button className="tracking-more" type="button" onClick={() => setTrackingResult(t.trackingResult)}>
            {t.trackingMore}
            <ChevronRight size={16} />
          </button>
          {trackingResult && <p className="tracking-result">{trackingResult}</p>}
        </div>
      </div>

      <div className="quick-dock" aria-label={t.quickServicesLabel}>
        {t.quickServices.map(([title, subtitle, icon, serviceKey]) => (
          <a
            href="#services"
            key={title}
            onClick={() => {
              setActiveService(serviceKey);
            }}
          >
            <IconByName name={icon} size={29} />
            <span>{title}</span>
            <small>{subtitle}</small>
          </a>
        ))}
      </div>
    </section>
  );
}

function Stats({ t }) {
  return (
    <section className="stats-band" aria-label={t.statsLabel}>
      <div className="stats-grid">
        {t.stats.map(([value, label, sub]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
            <small>{sub}</small>
          </div>
        ))}
      </div>
      <p>{t.statsNote}</p>
    </section>
  );
}

function Process({ t }) {
  return (
    <section id="process" className="section process-section">
      <div className="section-heading">
        <p>{t.processKicker}</p>
        <h2>{t.processTitle}</h2>
      </div>
      <div className="process-line">
        {t.process.map(([title, desc], index) => (
          <article key={title} className="process-step">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div className="step-icon">
              {index === 0 && <Search size={24} />}
              {index === 1 && <Globe2 size={24} />}
              {index === 2 && <FileCheck2 size={24} />}
              {index === 3 && <ClipboardCheck size={24} />}
              {index === 4 && <Warehouse size={24} />}
              {index === 5 && <Truck size={24} />}
            </div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Services({ t, activeKey, setActiveKey }) {
  const active = useMemo(
    () => t.services.find((service) => service.key === activeKey) || t.services[0],
    [activeKey, t.services],
  );

  useEffect(() => {
    if (!t.services.some((service) => service.key === activeKey)) {
      setActiveKey(t.services[0].key);
    }
  }, [activeKey, setActiveKey, t.services]);

  return (
    <section id="services" className="section services-section">
      <div className="section-heading wide">
        <p>{t.servicesKicker}</p>
        <h2>{t.servicesTitle}</h2>
        <span>{t.servicesLead}</span>
      </div>
      <div className="service-layout">
        <div className="service-tabs" role="tablist" aria-label={t.servicesTitle}>
          {t.services.map((service) => (
            <button
              key={service.key}
              className={active.key === service.key ? "active" : ""}
              type="button"
              onClick={() => setActiveKey(service.key)}
              role="tab"
              aria-selected={active.key === service.key}
            >
              <IconByName name={service.icon} size={23} />
              <span>{service.title}</span>
              <small>{service.en}</small>
            </button>
          ))}
        </div>
        <article className="service-detail">
          <div className="service-emblem">
            <IconByName name={active.icon} size={42} />
          </div>
          <div>
            <p className="detail-kicker">{active.en}</p>
            <h3>{active.title}</h3>
            <p>{active.desc}</p>
            <ul>
              {active.bullets.map((bullet) => (
                <li key={bullet}>
                  <CheckCircle2 size={18} />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}

function Capabilities({ t }) {
  return (
    <section className="section capabilities-section">
      <div className="section-heading wide">
        <p>{t.capabilitiesKicker}</p>
        <h2>{t.capabilitiesTitle}</h2>
        <span>{t.capabilitiesLead}</span>
      </div>
      <div className="capability-grid">
        {t.capabilities.map((capability) => (
          <article key={capability.title}>
            <div className="capability-icon">
              <IconByName name={capability.icon} size={26} />
            </div>
            <h3>{capability.title}</h3>
            <div className="capability-tags">
              {capability.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <p>{capability.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function NetworkSection({ t }) {
  return (
    <section id="network" className="network-section">
      <div className="network-visual">
        <div className="map-panel">
          <div className="map-grid" aria-label={t.mapLabel}>
            {t.portGroups.map(([title, ports]) => (
              <div key={title} className="port-group">
                <h3>{title}</h3>
                <div>
                  {ports.map((port) => (
                    <span key={port}>{port}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="route-legend">
            <span>{t.routeLegend[0]}</span>
            <strong />
            <span>{t.routeLegend[1]}</span>
          </div>
          <p className="network-caption">{t.networkCaption}</p>
          {t.mapDots.map(([port, x, y]) => (
            <i key={port} style={{ "--x": `${x}%`, "--y": `${y}%` }} aria-hidden="true" />
          ))}
        </div>
      </div>
      <div className="network-copy">
        <p>{t.networkKicker}</p>
        <h2>{t.networkTitle}</h2>
        <span>{t.networkLead}</span>
        <div className="region-list">
          {t.regions.map(([region, desc]) => (
            <div key={region}>
              <MapPin size={17} />
              <span>
                <strong>{region}</strong>
                <small>{desc}</small>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScenariosAndFaq({ t }) {
  return (
    <section className="section scenarios-section">
      <div className="section-heading wide">
        <p>{t.scenariosKicker}</p>
        <h2>{t.scenariosTitle}</h2>
        <span>{t.scenariosLead}</span>
      </div>
      <div className="scenario-grid">
        {t.scenarios.map(([title, desc, icon]) => (
          <article key={title}>
            <div className="scenario-icon">
              <IconByName name={icon} size={25} />
            </div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </article>
        ))}
      </div>
      <div className="faq-panel">
        <div className="section-heading compact-heading">
          <p>{t.faqKicker}</p>
          <h2>{t.faqTitle}</h2>
        </div>
        <div className="faq-list">
          {t.faq.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Advantages({ t }) {
  return (
    <section id="advantages" className="section advantages-section">
      <div className="about-block">
        <p>{t.aboutKicker}</p>
        <h2>{t.aboutTitle}</h2>
        <span>{t.about}</span>
        <strong className="mission-quote">{t.missionQuote}</strong>
      </div>
      <div>
        <div className="section-heading compact-heading">
          <p>{t.advantageKicker}</p>
          <h2>{t.advantageTitle}</h2>
        </div>
        <div className="advantage-grid">
          {t.advantages.map(([title, desc], index) => (
            <article key={title}>
              <strong>{String(index + 1).padStart(2, "0")}</strong>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ t }) {
  const [sent, setSent] = useState(false);
  const contactIcons = {
    mail: Mail,
    person: UserRound,
    phone: PhoneCall,
    address: MapPin,
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-copy">
        <p>{t.contactKicker}</p>
        <h2>{t.ctaTitle}</h2>
        <span>{t.ctaText}</span>
        <div className="contact-cards">
          {t.contact.channels.map(([label, value, icon]) => {
            const ContactIcon = contactIcons[icon] || Mail;
            const isPhone = icon === "phone" && /^\+?\d[\d\s-]*$/.test(value);
            const CardTag = isPhone ? "a" : "div";
            const cardProps = isPhone ? { href: `tel:${value.replace(/[^\d+]/g, "")}` } : {};
            return (
              <CardTag key={label} {...cardProps}>
                <ContactIcon size={19} />
                <span>
                  <strong>{label}</strong>
                  <small>{value}</small>
                </span>
              </CardTag>
            );
          })}
        </div>
      </div>
      <form
        className="contact-form"
        onSubmit={(event) => {
          event.preventDefault();
          setSent(true);
        }}
      >
        <h3>{t.contact.title}</h3>
        <p>{t.contact.desc}</p>
        <input placeholder={t.form.name} />
        <input placeholder={t.form.contact} />
        <input placeholder={t.form.route} />
        <input placeholder={t.form.cargo} />
        <input placeholder={t.form.service} />
        <input placeholder={t.form.timing} />
        <textarea placeholder={t.form.message} rows="4" />
        {sent && <p className="form-success">{t.form.received}</p>}
        <button type="submit">
          {sent ? <CheckCircle2 size={18} /> : <Send size={18} />}
          {sent ? t.form.sent : t.form.submit}
        </button>
      </form>
    </section>
  );
}

export function App() {
  const [lang, setLang] = useState("zh");
  const [activeService, setActiveService] = useState("sea");
  const t = content[lang];

  return (
    <>
      <Header lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero t={t} setActiveService={setActiveService} />
        <Stats t={t} />
        <Process t={t} />
        <Services t={t} activeKey={activeService} setActiveKey={setActiveService} />
        <Capabilities t={t} />
        <NetworkSection t={t} />
        <Advantages t={t} />
        <ScenariosAndFaq t={t} />
        <Contact t={t} />
      </main>
      <footer className="footer">
        <BrandLockup t={t} compact />
        <span>{t.footer}</span>
      </footer>
    </>
  );
}
