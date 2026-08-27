"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import {
  BadgeCheck,
  Boxes,
  Building2,
  CalendarDays,
  ChevronRight,
  GraduationCap,
  HardHat,
  Medal,
  PenTool,
  Shirt,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";

type Service = {
  id: string;
  title: string;
  description: string;
  context: string;
  tone: string;
  icon: LucideIcon;
};

const services: Service[] = [
  { id: "custom-tshirts", title: "Custom T-Shirts", description: "T-shirts shaped around your artwork, purpose, audience and quantity.", context: "Brands, groups and individual requirements", tone: "aqua", icon: Shirt },
  { id: "polo-tshirts", title: "Polo T-Shirts", description: "Collared apparel for teams, staff, institutions and polished brand presentation.", context: "Teams, staff and organizations", tone: "marigold", icon: BadgeCheck },
  { id: "corporate", title: "Corporate & Promotional", description: "Branded apparel for business teams, campaigns, promotions and activations.", context: "Business and promotional requirements", tone: "coral", icon: Building2 },
  { id: "institutional", title: "School & Institutional", description: "Coordinated apparel requirements for schools, colleges and institutions.", context: "Schools, colleges and institutions", tone: "sky", icon: GraduationCap },
  { id: "sports", title: "Sports T-Shirts", description: "Team apparel prepared around comfort, identity, fit and required quantity.", context: "Sports groups and active teams", tone: "mint", icon: Medal },
  { id: "events", title: "Event & Team T-Shirts", description: "Unifying apparel for events, communities, groups and special occasions.", context: "Events, communities and teams", tone: "lilac", icon: CalendarDays },
  { id: "hoodies", title: "Hoodies & Sweatshirts", description: "Warm layers for teams, institutions, merchandise and branded everyday use.", context: "Teams, institutions and merchandise", tone: "coral", icon: Sparkles },
  { id: "caps", title: "Custom Caps", description: "Branded caps suited to uniforms, promotions, teams and events.", context: "Uniforms, promotions and events", tone: "marigold", icon: HardHat },
  { id: "finishes", title: "Printed & Embroidered", description: "Decoration options selected around the fabric, artwork and desired finish.", context: "Print and embroidery requirements", tone: "aqua", icon: PenTool },
  { id: "bulk", title: "Bulk & Customized Orders", description: "Coordinated garment orders prepared to your required specifications and quantity.", context: "Small custom runs and bulk orders", tone: "sky", icon: Boxes },
];

const process = [
  { title: "Share your requirement", copy: "Tell us who the apparel is for, the quantity you need, your artwork and how it will be used." },
  { title: "Choose fabric & fit", copy: "We work with you to identify a suitable fabric, fit and garment format for the requirement." },
  { title: "Select the finish", copy: "Choose printing or embroidery around the garment, design and finish you want to achieve." },
  { title: "Confirm your order", copy: "Review the specification, then continue final pricing and delivery details directly with TEXA." },
];

export function AboutExperience() {
  const [selectedService, setSelectedService] = useState(services[0].id);
  const [hoveredService, setHoveredService] = useState<string>();
  const [selectedStep, setSelectedStep] = useState(0);
  const servicePreview = useRef<HTMLElement | null>(null);
  const processTabs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeService = services.find((service) => service.id === (hoveredService ?? selectedService)) ?? services[0];
  const ActiveIcon = activeService.icon;

  function handleProcessKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex: number | undefined;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (index + 1) % process.length;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (index - 1 + process.length) % process.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = process.length - 1;
    if (nextIndex === undefined) return;

    event.preventDefault();
    setSelectedStep(nextIndex);
    processTabs.current[nextIndex]?.focus();
  }

  function selectService(serviceId: string) {
    setSelectedService(serviceId);

    if (window.matchMedia("(max-width: 820px)").matches) {
      window.requestAnimationFrame(() => {
        servicePreview.current?.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
          block: "start",
        });
      });
    }
  }

  return (
    <>
      <div className="about-explorer">
        <ul className="about-service-list" aria-label="TEXA apparel services">
          {services.map((service) => {
            const ServiceIcon = service.icon;
            const selected = selectedService === service.id;

            return (
              <li key={service.id}>
                <button
                  className="about-service-button"
                  type="button"
                  aria-pressed={selected}
                  onClick={() => selectService(service.id)}
                  onFocus={() => setHoveredService(service.id)}
                  onBlur={() => setHoveredService(undefined)}
                  onPointerDown={() => setSelectedService(service.id)}
                  onPointerEnter={() => setHoveredService(service.id)}
                  onPointerLeave={() => setHoveredService(undefined)}
                >
                  <ServiceIcon aria-hidden="true" />
                  <span>{service.title}</span>
                  <ChevronRight aria-hidden="true" />
                </button>
              </li>
            );
          })}
        </ul>

        <article className={`about-service-preview tone-${activeService.tone}`} key={activeService.id} aria-live="polite" ref={servicePreview}>
          <div className="about-preview-icon"><ActiveIcon aria-hidden="true" /></div>
          <div>
            <p>{activeService.context}</p>
            <h3>{activeService.title}</h3>
            <div className="about-preview-rule" aria-hidden="true" />
            <p className="about-preview-copy">{activeService.description}</p>
          </div>
        </article>
      </div>

      {/* <div className="about-process-shell">
        <div className="about-process-nav" role="tablist" aria-label="How TEXA works">
          {process.map((step, index) => (
            <button
              type="button"
              role="tab"
              id={`about-process-tab-${index}`}
              aria-selected={selectedStep === index}
              aria-controls="about-process-panel"
              tabIndex={selectedStep === index ? 0 : -1}
              className="about-process-tab"
              onClick={() => setSelectedStep(index)}
              onKeyDown={(event) => handleProcessKeyDown(event, index)}
              ref={(element) => { processTabs.current[index] = element; }}
              key={step.title}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {step.title}
            </button>
          ))}
        </div>
        <div className="about-process-panel" id="about-process-panel" role="tabpanel" aria-labelledby={`about-process-tab-${selectedStep}`} aria-live="polite" key={selectedStep}>
          <Users aria-hidden="true" />
          <p>{process[selectedStep].copy}</p>
        </div>
      </div> */}
    </>
  );
}
