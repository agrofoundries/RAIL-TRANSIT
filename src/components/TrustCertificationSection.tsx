import React, { useState, useRef } from 'react';
import { ShieldCheck, Lock, Eye, Building2, TrainTrack, Award, CheckCircle2, Train, Download, ChevronLeft, ChevronRight } from 'lucide-react';

interface CertificationItem {
  id: string;
  code: string;
  title: string;
  authority: string;
  certNumber: string;
  validUntil: string;
  scope: string;
  details: string;
  iconBg: string;
  pdfSize: string;
}

const certificationsList: CertificationItem[] = [
  {
    id: 'rdso-class-a',
    code: "RDSO CLASS 'A'",
    title: "RDSO Approved Class 'A' Foundry (Ministry of Railways)",
    authority: 'Research Designs and Standards Organisation (RDSO)',
    certNumber: 'RDSO-FOUNDRY-CLASS-A',
    validUntil: 'Active Regulatory Approval',
    scope: 'Manufacture of Grade A & B Steel Castings, Bogie Frames, Bolsters & Rail Draft Components.',
    details: 'Certified Class A Foundry with full material traceability, induction melting, automated heat treatment, and ultrasonic NDT testing verification.',
    iconBg: '#4caf50',
    pdfSize: '2.4 MB'
  },
  {
    id: 'rdso-trackwork',
    code: 'RDSO TRACKWORK',
    title: 'High-Integrity Railway Trackwork & Turnout Components',
    authority: 'RDSO Civil Engineering Directorate',
    certNumber: 'RDSO-TRK-SPEC',
    validUntil: 'Continuous Audited Compliance',
    scope: 'Manganese Turnout Frogs, Crossing Diamonds, Tie Plates, Guard Rail Clamps & Switch Components.',
    details: 'Strict adherence to RDSO trackwork geometry, work-hardening parameters, and heavy axle load endurance standards.',
    iconBg: '#4caf50',
    pdfSize: '1.8 MB'
  },
  {
    id: 'rdso-rolling-stock',
    code: 'RDSO ROLLING STOCK',
    title: 'Bogie Castings & Freight Rolling Stock Components',
    authority: 'RDSO Wagon & Carriage Directorate',
    certNumber: 'RDSO-WGN-SPEC',
    validUntil: 'Active Regulatory Approval',
    scope: 'Safety Standard Compliance for Heavy Haul Freight Wagons (BOXNHL, BCNHL, BOBRN) and Coach Components.',
    details: 'Verifies structural integrity of cast steel bogies, couplers, and suspension castings under maximum axle load impacts.',
    iconBg: '#15803D',
    pdfSize: '3.1 MB'
  },
  {
    id: 'rdso-metallurgy',
    code: 'METALLURGY QA',
    title: 'Comprehensive In-House Metallurgical & NDT Quality Assurance',
    authority: 'RDSO M&C Directorate / Internal QA',
    certNumber: 'QA-MET-TRACE-01',
    validUntil: 'Annual Heat Code Audited',
    scope: '100% Volumetric Ultrasonic Flaw Detection, Magnetic Particle Testing, Spectrometry & Microstructural Analysis.',
    details: 'Complete quality system controls from scrap steel procurement to electric induction furnace chemistry and final release auditing.',
    iconBg: '#4caf50',
    pdfSize: '1.2 MB'
  }
];

const authorityApprovals = [
  {
    name: 'Amtrak Passenger Rail',
    network: 'National Passenger Rail System',
    status: 'Approved Master Vendor',
    supplies: 'High-speed passenger bogie castings, suspension arms, and forged wheelsets.',
    icon: Train,
    accent: '#4caf50',
    tag: 'PASSENGER CORRIDOR'
  },
  {
    name: 'BNSF Railway Company',
    network: 'North American Freight Network',
    status: 'Class 1 Certified Manufacturer',
    supplies: '36-ton heavy haul axles, freight bogie bolsters, and cast couplers.',
    icon: Building2,
    accent: '#EA580C',
    tag: 'CLASS I FREIGHT'
  },
  {
    name: 'Union Pacific Railroad',
    network: 'Transcontinental Class 1 System',
    status: 'Qualified Trackwork Supplier',
    supplies: 'High-impact manganese turnout switch frogs, crossovers, and trackwork.',
    icon: ShieldCheck,
    accent: '#DC2626',
    tag: 'TRACKWORK & TURNOUTS'
  },
  {
    name: 'CSX Transportation',
    network: 'Eastern U.S. Freight Network',
    status: 'Approved Component Provider',
    supplies: 'Locomotive wheel assemblies, wear plates, and structural steel castings.',
    icon: TrainTrack,
    accent: '##4caf50',
    tag: 'LOCOMOTIVE SYSTEMS'
  },
  {
    name: 'Norfolk Southern Rail',
    network: 'Heavy Haul Freight Network',
    status: 'Approved Heavy Haul Vendor',
    supplies: 'Ductile iron brake heads, forged axles, and side frame bolster parts.',
    icon: Award,
    accent: '#4caf50',
    tag: 'FOUNDRY CASTINGS'
  },
  {
    name: 'Metra / MBTA / MTA',
    network: 'Commuter & Subway Transit',
    status: 'Verified Transit Supplier',
    supplies: 'Commuter and subway coach bogies, disc brake rotors, and truck frames.',
    icon: CheckCircle2,
    accent: '#4caf50',
    tag: 'COMMUTER & METRO'
  }
];

export const TrustCertificationSection: React.FC = () => {
  const [, setSelectedCert] = useState<CertificationItem | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const approvalsSliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current && sliderRef.current.firstElementChild) {
      const cardWidth = (sliderRef.current.firstElementChild as HTMLElement).offsetWidth;
      const gap = 16;
      const scrollAmount = cardWidth + gap;
      sliderRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollApprovalsSlider = (direction: 'left' | 'right') => {
    if (approvalsSliderRef.current && approvalsSliderRef.current.firstElementChild) {
      const cardWidth = (approvalsSliderRef.current.firstElementChild as HTMLElement).offsetWidth;
      const gap = 12;
      const scrollAmount = cardWidth + gap;
      approvalsSliderRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="trust-certifications"
      style={{
        background: '#FFFFFF',
        padding: '2rem 0',
        borderBottom: '2px solid #E5E7EB',
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="container-custom" style={{ width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'stretch' }}>

        {/* Left Column: Certifications */}
        <div style={{ minWidth: 0, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: '0.75rem' }}>
                <span style={{ display: 'inline-block', width: '32px', height: '3px', background: '#4CAF50' }} />
                <span style={{ color: '#4caf50', fontWeight: 900 }}>COMPANY TRUST &amp; COMPLIANCE DIVISION</span>
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: '#111827', fontWeight: 900, margin: 0, textTransform: 'uppercase', lineHeight: 1.1, fontFamily: "'Manrope', sans-serif !important" }}>
                TRUST &amp; OFFICIAL CERTIFICATIONS
              </h2>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#FAF6EE', border: '1.5px solid #4caf50', padding: '12px 20px', borderRadius: '2px' }}>
              <Lock size={18} color="#4caf50" />
              <div>
                <span style={{ fontSize: '10.5px', color: '#4caf50', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', fontFamily: "'Manrope', sans-serif !important" }}>AUDITED QUALITY SYSTEM</span>
                <strong style={{ fontSize: '13px', color: '#4caf50', fontWeight: 900, fontFamily: "'Manrope', sans-serif !important" }}>RDSO APPROVED CLASS 'A' FOUNDRY</strong>
              </div>
            </div>
          </div>

          {/* Slider Controls */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginBottom: '0.75rem', marginTop: '-2.5rem' }}>
            <button onClick={() => scrollSlider('left')} style={{ background: '#FAF6EE', border: '1.5px solid #4caf50', padding: '6px', cursor: 'pointer', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Scroll left">
              <ChevronLeft size={18} color="#4caf50" />
            </button>
            <button onClick={() => scrollSlider('right')} style={{ background: '#FAF6EE', border: '1.5px solid #4caf50', padding: '6px', cursor: 'pointer', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Scroll right">
              <ChevronRight size={18} color="#4caf50" />
            </button>
          </div>
          <div
            ref={sliderRef}
            className="cert-slider"
            style={{
              display: 'flex',
              overflowX: 'auto',
              gap: '1rem',
              marginBottom: '1.5rem',
              paddingBottom: '0.5rem',
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <style dangerouslySetInnerHTML={{
              __html: `
            .cert-slider::-webkit-scrollbar { display: none; }
          `}} />
            {certificationsList.map((cert) => (
              <div
                key={cert.id}
                style={{
                  minWidth: '220px',
                  width: 'calc(50% - 0.5rem)',
                  flexShrink: 0,
                  scrollSnapAlign: 'start',
                  background: '#FFFFFF',
                  border: '1.5px solid #E5E7EB',
                  borderRadius: '2px',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                className="card-hover-industrial"
              >
                <div>
                  {/* Header Tag */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div style={{ background: '#4caf50', color: '#FFFFFF', padding: '6px 12px', fontSize: '11px', fontWeight: 900, letterSpacing: '0.08em', textTransform: 'uppercase', borderRadius: '2px', fontFamily: "'Manrope', sans-serif !important" }}>
                      {cert.code}
                    </div>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#4caf50', background: '#F0FDF4', padding: '4px 10px', borderRadius: '2px', border: '1px solid #BBF7D0' }}>
                      Active Cert
                    </span>
                  </div>

                  <h3 style={{ fontSize: '15px', fontWeight: 900, color: '#111827', margin: '0 0 8px 0', lineHeight: 1.35, fontFamily: "'Manrope', sans-serif !important" }}>
                    {cert.title}
                  </h3>

                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#4CAF50', marginBottom: '8px', fontFamily: "'Manrope', sans-serif !important" }}>
                    {cert.authority}
                  </div>
                </div>

                {/* Card Footer: Metadata & Action CTA */}
                <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: '14px', marginTop: '14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11.5px', color: '#4caf50', marginBottom: '12px', fontWeight: 600 }}>
                    <span>Cert: <strong style={{ color: '#111827' }}>{cert.certNumber}</strong></span>
                    <span>Valid: <strong style={{ color: '#4caf50' }}>{cert.validUntil}</strong></span>
                  </div>

                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="btn-animated"
                      style={{
                        flex: 1,
                        background: '#4caf50',
                        color: '#FFFFFF',
                        border: '1.5px solid #4caf50',
                        padding: '10px 14px',
                        fontSize: '11.5px',
                        fontWeight: 900,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        borderRadius: '2px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        fontFamily: "'Manrope', sans-serif !important"
                      }}
                    >
                      <Eye size={14} />
                      <span>INSPECT CERT</span>
                    </button>

                    <a
                      href={`#download-${cert.id}`}
                      onClick={(e) => { e.preventDefault(); alert(`Downloading official ${cert.code} audit documentation (${cert.pdfSize})...`); }}
                      title="Download Official PDF Certificate"
                      style={{
                        width: '38px',
                        height: '38px',
                        background: '#FAF6EE',
                        border: '1.5px solid #4caf50',
                        color: '#4caf50',
                        borderRadius: '2px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = '#4CAF50'; e.currentTarget.style.color = '#FFFFFF'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = '#FAF6EE'; e.currentTarget.style.color = '#4caf50'; }}
                    >
                      <Download size={15} />
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Rail Authorities Approval Directory */}
        <div style={{ minWidth: 0, display: 'flex', flexDirection: 'column' }}>
          <div style={{ background: '#4caf50', color: '#FFFFFF', padding: '1.5rem', borderRadius: '4px', position: 'relative', overflow: 'hidden', borderTop: '4px solid #4CAF50', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <div>
                <span style={{ fontSize: '10px', fontWeight: 900, color: '#A5D6A7', letterSpacing: '0.14em', textTransform: 'uppercase', display: 'block', marginBottom: '4px', fontFamily: "'Manrope', sans-serif !important" }}>
                  CLASS I FREIGHT &amp; PASSENGER RAIL AUTHORITY APPROVALS
                </span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#FFFFFF', margin: 0, textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important", lineHeight: 1.2 }}>
                  APPROVED RAIL NETWORK VENDOR STATUS
                </h3>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginBottom: '0.75rem', marginTop: '-2.5rem' }}>
                <button onClick={() => scrollApprovalsSlider('left')} style={{ background: '#FAF6EE', border: '1.5px solid #4caf50', padding: '6px', cursor: 'pointer', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Scroll left">
                  <ChevronLeft size={18} color="#4caf50" />
                </button>
                <button onClick={() => scrollApprovalsSlider('right')} style={{ background: '#FAF6EE', border: '1.5px solid #4caf50', padding: '6px', cursor: 'pointer', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Scroll right">
                  <ChevronRight size={18} color="#4caf50" />
                </button>
              </div>
            </div>

            <div
              ref={approvalsSliderRef}
              className="cert-slider"
              style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gridAutoColumns: 'calc(50% - 0.375rem)', gridAutoFlow: 'column', gap: '0.75rem', overflowX: 'auto', paddingBottom: '0.5rem', scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {authorityApprovals.map((auth, i) => {
                const IconComp = auth.icon;
                return (
                  <div
                    key={i}
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '4px',
                      padding: '1rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
                      border: '1px solid #E5E7EB',
                      width: '100%',
                      scrollSnapAlign: 'start'
                    }}
                  >
                    <div>
                      {/* Top Row: Railroad Identity & Status Badge */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div style={{ width: '32px', height: '32px', borderRadius: '4px', background: auth.accent + '15', color: auth.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid ' + auth.accent + '30' }}>
                            <IconComp size={16} color={auth.accent} />
                          </div>
                          <div>
                            <span style={{ fontSize: '10px', fontWeight: 800, color: auth.accent, letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', fontFamily: "'Manrope', sans-serif !important" }}>
                              {auth.tag}
                            </span>
                          </div>
                        </div>

                        <span style={{ background: '#F0FDF4', color: '#4caf50', border: '1px solid #BBF7D0', padding: '3px 8px', borderRadius: '3px', fontSize: '10.5px', fontWeight: 800, whiteSpace: 'nowrap', fontFamily: "'Manrope', sans-serif !important" }}>
                          VERIFIED
                        </span>
                      </div>

                      {/* Railroad Name */}
                      <h4 style={{ fontSize: '13px', fontWeight: 800, color: '#111827', margin: '0 0 16px 0', fontFamily: "'Manrope', sans-serif !important" }}>
                        {auth.name}
                      </h4>
                    </div>

                    {/* Footer Status */}
                    <div style={{ marginTop: '10px', paddingTop: '8px', borderTop: '1px solid #F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '10px', color: '#4caf50', fontWeight: 700, fontFamily: "'Manrope', sans-serif !important" }}>
                        {auth.status}
                      </span>
                      <span style={{ fontSize: '9px', color: '#9CA3AF', fontWeight: 600, fontFamily: "'Manrope', sans-serif !important" }}>
                        RDSO CLASS 'A'
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>


  );
};

export default TrustCertificationSection;
