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
  Plane,
  Radar,
  Route,
  Search,
  Send,
  ShieldCheck,
  Ship,
  Truck,
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
    englishName: "Shanghai Eastern Worldwide Logistics Co., Ltd.",
    eyebrow: "中美贸易物流与全球货运代理伙伴",
    headline: "连接全球，驱动贸易。",
    subhead:
      "专注美国出口至中国及全球货运代理，为客户提供海运、空运、仓储、清关、商检、陆运、保险与多式联运的一体化物流解决方案。",
    heroPoints: ["安全高效", "精准便捷", "全程可视", "门到门交付"],
    trackingTitle: "货物追踪",
    trackingHint: "输入提单号 / 集装箱号 / 订单号",
    trackingButton: "追踪货物",
    trackingMore: "更多追踪方式",
    trackingResult:
      "模拟状态：已接收查询。正式上线后可接入承运人、仓库或内部系统的实时节点。",
    stats: [
      ["10+", "行业经验", "Years of Experience"],
      ["1000+", "服务客户", "Global Clients"],
      ["50+", "服务国家和地区", "Countries & Regions"],
      ["20K+", "年出运量(TEU)", "Annual Shipments"],
      ["99.2%", "准时交付率", "On-time Delivery"],
    ],
    quickServices: [
      ["海运服务", "Sea Freight", "sea"],
      ["空运服务", "Air Freight", "air"],
      ["仓储配送", "Warehousing", "warehouse"],
      ["报关清关", "Customs Clearance", "customs"],
      ["门到门服务", "Door-to-Door", "truck"],
    ],
    processTitle: "我们的操作流程",
    processKicker: "HOW WE OPERATE",
    process: [
      ["咨询询价", "确认货物、贸易条款、时效与目的地要求。"],
      ["方案与订舱", "匹配航线、舱位、空运或多式联运方案。"],
      ["单证制作", "处理出口文件、提单、保险及所需合规资料。"],
      ["报关清关", "协调海关、码头、场站与商检节点。"],
      ["装运出运", "现场监装、集港、起运并同步运输状态。"],
      ["交付签收", "协调海外代理、末端派送与回单反馈。"],
    ],
    servicesTitle: "服务与解决方案",
    servicesKicker: "WHAT WE DELIVER",
    servicesLead:
      "围绕客户出口链路，我们把航线、仓库、海关、场站、车队和海外代理连接成可执行的物流方案。",
    services: [
      {
        key: "sea",
        title: "海运与空运货代",
        en: "Sea & Air Freight Forwarding",
        icon: "sea",
        desc:
          "与主要船公司、航空公司及关键港口保持稳定合作，承接整箱、拼箱、散杂货、冷藏箱及各类空运货物。",
        bullets: [
          "提供准确船期、航班、订舱与出运计划",
          "处理出口单证、提单、保险与货物跟踪",
          "协调提货、装箱、清关、拆箱与门点派送",
        ],
      },
      {
        key: "bulk",
        title: "散杂货与大宗货物",
        en: "Breakbulk & Bulk Cargo",
        icon: "bulk",
        desc:
          "面向袋装货、机械设备、钢材、自备箱及普通散杂货，提供船东资源、港口接货、地面运输与现场支持。",
        bullets: [
          "长期合作散杂货船东，覆盖优势航线",
          "专业技术团队制定装载与港口衔接方案",
          "适合非标准尺寸、重货与工程类货物",
        ],
      },
      {
        key: "network",
        title: "美国代理网络",
        en: "U.S. Agent Network",
        icon: "network",
        desc:
          "在美国拥有广泛代理资源，提供海运、空运、清关与末端派送服务，帮助美国客户高效出口至中国及全球市场。",
        bullets: [
          "覆盖北美、南美、欧洲、中东、东南亚和澳洲代理网络",
          "支持 FOB、EXW、DDU、DDP 等贸易条款",
          "连接 MAERSK、MATSON、PIL、Hapag-Lloyd 等承运资源",
        ],
      },
      {
        key: "warehouse",
        title: "仓储与配送",
        en: "Warehousing & Distribution",
        icon: "warehouse",
        desc:
          "合作多个港口场站，提供铁路站提货、卸货、仓储、分拣、包装、打托、打带与分批配送。",
        bullets: [
          "按货物属性优化装箱方案，提高箱容利用率",
          "现场监装确保配载准确、安全、可追溯",
          "多吨位集卡车队灵活调度，降低运输成本",
        ],
      },
      {
        key: "customs",
        title: "报关清关与商检",
        en: "Customs Clearance & Commodity Inspection",
        icon: "customs",
        desc:
          "高素质报关团队负责进出口报关、法检、植检、木箱熏蒸等手续，保证通关高效、准确、合规。",
        bullets: [
          "进出口报关与核销单据及时回传",
          "进口商检、法检、植检与木质包装熏蒸",
          "实时联动海关、场站和码头处理异常",
        ],
      },
      {
        key: "project",
        title: "定制化项目物流",
        en: "Customized Project Logistics",
        icon: "package",
        desc:
          "依托码头、仓库与重型陆运车队资源，为复杂项目货物制定合理、精准、节省成本的执行方案。",
        bullets: [
          "适合大件、重件、工程设备与多节点联运",
          "响应迅速的项目操作团队负责全程协调",
          "从运输路线到装卸计划均可按项目定制",
        ],
      },
    ],
    networkTitle: "全球代理网络",
    networkKicker: "GLOBAL COVERAGE",
    networkLead:
      "我们与海外代理建立长期合作，形成覆盖北美、中南美、欧洲、中东及印巴、东南亚、澳洲等区域的服务网络。",
    regions: [
      "North America",
      "Central & South America",
      "Europe",
      "Middle East & Indian Subcontinent",
      "Southeast Asia",
      "Australia",
    ],
    advantageTitle: "为什么选择上海隽昊",
    advantages: [
      ["客户为中心", "以客户选择为使命，以客户成功作为服务标准。"],
      ["专业团队", "多年行业探索与实战经验，熟悉港口、场站、海关与海外代理协同。"],
      ["实时反馈", "对承运货物提供运输状态跟踪，及时处理出口链路中的突发情况。"],
      ["降本增效", "通过航线、箱型、仓储和车队调度优化，帮助客户降低综合物流成本。"],
    ],
    aboutTitle: "公司简介",
    about:
      "上海隽昊国际货运代理有限公司是一家国际物流公司，核心业务覆盖国际海空运代理、仓储、清关、商检、汽运与铁路运输、货物保险以及多式联运服务。公司秉持诚信经营和客户为中心的理念，依托专业团队和稳健资源，为客户创造安全、高效、精准、便捷的物流体验。",
    ctaTitle: "让下一票货物更顺畅地出发",
    ctaText:
      "告诉我们货物类型、起运港、目的港和贸易条款，我们会为你梳理合适的航线、仓储、清关与交付方案。",
    primaryCta: "发送需求",
    secondaryCta: "查看服务",
    contact: {
      title: "联系上海隽昊",
      desc:
        "网站上线后可在这里接入企业邮箱、电话、WhatsApp、微信二维码或在线表单。",
      email: "sales@junhao-logistics.example",
      phone: "+86 21 0000 0000",
      address: "Shanghai, China",
    },
    form: {
      name: "姓名 / 公司",
      email: "邮箱",
      cargo: "货物与路线",
      message: "补充需求",
      submit: "提交询价",
    },
    footer:
      "上海隽昊国际货运代理有限公司是您值得信赖的全球网络航运伙伴。",
  },
  en: {
    langLabel: "English",
    nav: ["Home", "Services", "Network", "Process", "Advantages", "Contact"],
    quote: "Get a Quote",
    brand: "上海隽昊",
    brandFull: "Shanghai Eastern Worldwide Logistics Co., Ltd.",
    englishName: "Shanghai Eastern Worldwide Logistics Co., Ltd.",
    eyebrow: "U.S.-to-China export logistics and global freight forwarding",
    headline: "Global routes, sharper trade.",
    subhead:
      "We support U.S. exporters and global shippers with integrated sea freight, air freight, warehousing, customs clearance, inspection, trucking, cargo insurance and multimodal transport solutions.",
    heroPoints: ["Safe & efficient", "Precise & convenient", "Visible end to end", "Door-to-door delivery"],
    trackingTitle: "Shipment Tracking",
    trackingHint: "Enter B/L, container or order number",
    trackingButton: "Track",
    trackingMore: "More tracking options",
    trackingResult:
      "Demo status: request received. A production site can connect carrier, warehouse or internal milestone data.",
    stats: [
      ["10+", "Years of Experience", "Industry experience"],
      ["1000+", "Global Clients", "Client relationships"],
      ["50+", "Countries & Regions", "Service coverage"],
      ["20K+", "Annual Shipments", "TEU handled"],
      ["99.2%", "On-time Delivery", "Operational reliability"],
    ],
    quickServices: [
      ["Sea Freight", "海运服务", "sea"],
      ["Air Freight", "空运服务", "air"],
      ["Warehousing", "仓储配送", "warehouse"],
      ["Customs Clearance", "报关清关", "customs"],
      ["Door-to-Door", "门到门服务", "truck"],
    ],
    processTitle: "How We Operate",
    processKicker: "OPERATING RHYTHM",
    process: [
      ["Inquiry", "Confirm cargo profile, trade terms, timing and destination requirements."],
      ["Routing & Booking", "Match sailing, air freight or multimodal options with available capacity."],
      ["Documentation", "Prepare export documents, B/L, insurance and compliance materials."],
      ["Customs Clearance", "Coordinate customs, container yards, terminals and inspection milestones."],
      ["Dispatch", "Supervise loading, gate-in, departure and live shipment status updates."],
      ["Delivery", "Coordinate overseas agents, final-mile delivery and proof-of-delivery feedback."],
    ],
    servicesTitle: "Services & Solutions",
    servicesKicker: "WHAT WE DELIVER",
    servicesLead:
      "We turn routes, warehouses, customs, terminals, trucking fleets and overseas agents into executable logistics plans.",
    services: [
      {
        key: "sea",
        title: "Sea & Air Freight Forwarding",
        en: "海运与空运货代",
        icon: "sea",
        desc:
          "Stable cooperation with major shipping lines, airlines and key ports for FCL, LCL, bulk cargo, reefer containers and all kinds of air freight.",
        bullets: [
          "Accurate sailing schedules, flight options, booking and dispatch plans",
          "Export documentation, B/L, cargo insurance and shipment tracking",
          "Pickup, loading, customs clearance, devanning and door delivery",
        ],
      },
      {
        key: "bulk",
        title: "Breakbulk & Bulk Cargo",
        en: "散杂货与大宗货物",
        icon: "bulk",
        desc:
          "Breakbulk ship-owner resources, port receiving, ground transportation and technical support for bagged goods, machinery, steel products and self-owned containers.",
        bullets: [
          "Long-term partnerships with breakbulk vessel owners",
          "Professional loading plans and port coordination",
          "Designed for non-standard, heavy and project cargo",
        ],
      },
      {
        key: "network",
        title: "U.S. Agent Network",
        en: "美国代理网络",
        icon: "network",
        desc:
          "A broad U.S. agency network integrates sea freight, air freight, customs clearance and last-mile delivery for exporters shipping to China and beyond.",
        bullets: [
          "Agent coverage across North America, South America, Europe, Middle East, Southeast Asia and Australia",
          "FOB, EXW, DDU and DDP logistics support",
          "Carrier resources including MAERSK, MATSON, PIL and Hapag-Lloyd",
        ],
      },
      {
        key: "warehouse",
        title: "Warehousing & Distribution",
        en: "仓储与配送",
        icon: "warehouse",
        desc:
          "Port container-yard cooperation for railway station pickup, unloading, storage, sorting, packaging, strapping, palletizing and batch distribution.",
        bullets: [
          "Optimized container loading layouts to improve space utilization",
          "On-site loading supervision for safer and more accurate stowage",
          "Flexible multi-tonnage container trucks to reduce delivery cost",
        ],
      },
      {
        key: "customs",
        title: "Customs Clearance & Commodity Inspection",
        en: "报关清关与商检",
        icon: "customs",
        desc:
          "Qualified customs specialists handle import and export formalities, statutory inspection, phytosanitary inspection and wooden container fumigation.",
        bullets: [
          "Efficient customs processing and prompt verification document return",
          "Commodity inspection, statutory inspection and fumigation support",
          "Real-time coordination with customs, yards and terminal operators",
        ],
      },
      {
        key: "project",
        title: "Customized Project Logistics",
        en: "定制化项目物流",
        icon: "package",
        desc:
          "A responsive project team combines terminal, warehouse and heavy-duty land transport resources into precise, cost-saving logistics plans.",
        bullets: [
          "For oversized, heavy, engineering and multi-node transport projects",
          "End-to-end coordination by experienced operations specialists",
          "Tailored route, loading, unloading and dispatch planning",
        ],
      },
    ],
    networkTitle: "Global Agency Network",
    networkKicker: "GLOBAL COVERAGE",
    networkLead:
      "Long-term overseas agent partnerships create coverage across North America, Central and South America, Europe, the Middle East and Indian Subcontinent, Southeast Asia and Australia.",
    regions: [
      "North America",
      "Central & South America",
      "Europe",
      "Middle East & Indian Subcontinent",
      "Southeast Asia",
      "Australia",
    ],
    advantageTitle: "Why Shanghai Junhao",
    advantages: [
      ["Customer-centered", "We take clients' choices as our mission and clients' success as our service standard."],
      ["Professional team", "Years of hands-on logistics experience across ports, yards, customs and overseas agency coordination."],
      ["Real-time feedback", "Shipment status tracking and prompt coordination during unexpected export operation events."],
      ["Cost efficiency", "Route, container, warehouse and fleet planning designed to lower total logistics cost."],
    ],
    aboutTitle: "Company Profile",
    about:
      "Shanghai Eastern Worldwide Logistics Co., Ltd. is an international logistics company covering international sea and air freight forwarding, warehousing, customs clearance, commodity inspection, truck and railway transportation, cargo insurance and multimodal transport services. Built on integrity, customer focus and professional execution, we deliver safe, efficient, precise and convenient logistics experiences.",
    ctaTitle: "Move the next shipment with more certainty",
    ctaText:
      "Share cargo type, origin, destination and trade terms. We will map the right route, warehouse, customs and delivery solution.",
    primaryCta: "Send Requirement",
    secondaryCta: "View Services",
    contact: {
      title: "Contact Shanghai Junhao",
      desc:
        "When the public site goes live, this area can connect company email, phone, WhatsApp, WeChat QR code or an online form.",
      email: "sales@junhao-logistics.example",
      phone: "+86 21 0000 0000",
      address: "Shanghai, China",
    },
    form: {
      name: "Name / Company",
      email: "Email",
      cargo: "Cargo & route",
      message: "Additional needs",
      submit: "Submit Inquiry",
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

function BrandLockup({ compact = false }) {
  return (
    <a className={`brand-lockup ${compact ? "compact" : ""}`} href="#home" aria-label="上海隽昊 home">
      <img src={logoMark} alt="" />
      <span>
        <strong>上海隽昊</strong>
        <small>Shanghai Eastern Worldwide Logistics</small>
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
      <BrandLockup />
      <button className="menu-button icon-button" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
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
          aria-label="Toggle language"
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

function Hero({ t }) {
  const [trackingValue, setTrackingValue] = useState("");
  const [trackingResult, setTrackingResult] = useState("");

  const submitTracking = (event) => {
    event.preventDefault();
    setTrackingResult(t.trackingResult);
  };

  return (
    <section id="home" className="hero">
      <img className="hero-image" src={heroImage} alt="Container vessel moving through a digital global route network" />
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
            <small>TRACK YOUR SHIPMENT</small>
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

      <div className="quick-dock" aria-label="Service shortcuts">
        {t.quickServices.map(([title, subtitle, icon]) => (
          <a href="#services" key={title}>
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
    <section className="stats-band" aria-label="Company metrics">
      {t.stats.map(([value, label, sub]) => (
        <div key={label}>
          <strong>{value}</strong>
          <span>{label}</span>
          <small>{sub}</small>
        </div>
      ))}
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

function Services({ t }) {
  const [activeKey, setActiveKey] = useState(t.services[0].key);
  const active = useMemo(
    () => t.services.find((service) => service.key === activeKey) || t.services[0],
    [activeKey, t.services],
  );

  useEffect(() => {
    setActiveKey(t.services[0].key);
  }, [t.services]);

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

function NetworkSection({ t }) {
  return (
    <section id="network" className="network-section">
      <div className="network-visual" aria-hidden="true">
        <div className="map-panel">
          {["Los Angeles", "Long Beach", "New York", "Houston", "Savannah", "Shanghai", "Ningbo", "Qingdao"].map((port, index) => (
            <span key={port} style={{ "--index": index }}>
              {port}
            </span>
          ))}
        </div>
      </div>
      <div className="network-copy">
        <p>{t.networkKicker}</p>
        <h2>{t.networkTitle}</h2>
        <span>{t.networkLead}</span>
        <div className="region-list">
          {t.regions.map((region) => (
            <div key={region}>
              <MapPin size={17} />
              {region}
            </div>
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
        <p>COMPANY PROFILE</p>
        <h2>{t.aboutTitle}</h2>
        <span>{t.about}</span>
      </div>
      <div>
        <div className="section-heading compact-heading">
          <p>WHY US</p>
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

  return (
    <section id="contact" className="contact-section">
      <div className="contact-copy">
        <p>LET'S MOVE</p>
        <h2>{t.ctaTitle}</h2>
        <span>{t.ctaText}</span>
        <div className="contact-cards">
          <a href={`mailto:${t.contact.email}`}>
            <Mail size={19} />
            {t.contact.email}
          </a>
          <a href={`tel:${t.contact.phone.replaceAll(" ", "")}`}>
            <Ship size={19} />
            {t.contact.phone}
          </a>
          <div>
            <MapPin size={19} />
            {t.contact.address}
          </div>
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
        <input type="email" placeholder={t.form.email} />
        <input placeholder={t.form.cargo} />
        <textarea placeholder={t.form.message} rows="4" />
        <button type="submit">
          {sent ? <CheckCircle2 size={18} /> : <Send size={18} />}
          {sent ? "Received" : t.form.submit}
        </button>
      </form>
    </section>
  );
}

export function App() {
  const [lang, setLang] = useState("zh");
  const t = content[lang];

  return (
    <>
      <Header lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero t={t} />
        <Stats t={t} />
        <Process t={t} />
        <Services t={t} />
        <NetworkSection t={t} />
        <Advantages t={t} />
        <Contact t={t} />
      </main>
      <footer className="footer">
        <BrandLockup compact />
        <span>{t.footer}</span>
      </footer>
    </>
  );
}
