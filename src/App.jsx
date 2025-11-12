import { useState } from 'react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navigateToPage = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900 bg-opacity-95 backdrop-blur-sm z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold text-white" onClick={(e) => { e.preventDefault(); navigateToPage('home'); }}>
              North Castle Consulting
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center">
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('home'); }} className="text-white hover:text-yellow-600 transition-colors font-medium">Home</a>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="text-white hover:text-yellow-600 transition-colors font-medium flex items-center gap-1"
                >
                  Services ▾
                </button>
                {servicesDropdownOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl py-2"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('mass-tort'); }} className="block px-4 py-2 text-slate-900 hover:bg-gray-100 hover:text-yellow-600">Mass Tort</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('lender-due-diligence'); }} className="block px-4 py-2 text-slate-900 hover:bg-gray-100 hover:text-yellow-600">Lender Due Diligence</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('lender-dd-non-pe'); }} className="block px-4 py-2 text-slate-900 hover:bg-gray-100 hover:text-yellow-600">Lender Due Diligence For Non-PE Financing</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('challenged-credit'); }} className="block px-4 py-2 text-slate-900 hover:bg-gray-100 hover:text-yellow-600">Challenged Credit Due Diligence</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('sell-side'); }} className="block px-4 py-2 text-slate-900 hover:bg-gray-100 hover:text-yellow-600">Sell-Side Readiness</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('corporate-dev'); }} className="block px-4 py-2 text-slate-900 hover:bg-gray-100 hover:text-yellow-600">Corporate Development</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('dividend-recap'); }} className="block px-4 py-2 text-slate-900 hover:bg-gray-100 hover:text-yellow-600">Dividend Recapitalization Prep</a>
                  </div>
                )}
              </div>

              {currentPage === 'home' && (
                <>
                  <a href="#case-studies" onClick={(e) => { e.preventDefault(); scrollToSection('case-studies'); }} className="text-white hover:text-yellow-600 transition-colors font-medium">Case Studies</a>
                  <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="text-white hover:text-yellow-600 transition-colors font-medium">Contact</a>
                </>
              )}
              {currentPage !== 'home' && (
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('home'); scrollToSection('contact'); }} className="text-white hover:text-yellow-600 transition-colors font-medium">Contact</a>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white text-2xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              ☰
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('home'); }} className="text-white hover:text-yellow-600 transition-colors">Home</a>

              <div className="text-white font-medium">Services:</div>
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('mass-tort'); }} className="text-white hover:text-yellow-600 transition-colors pl-4">Mass Tort</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('lender-due-diligence'); }} className="text-white hover:text-yellow-600 transition-colors pl-4">Lender Due Diligence</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('lender-dd-non-pe'); }} className="text-white hover:text-yellow-600 transition-colors pl-4">Lender DD For Non-PE Financing</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('challenged-credit'); }} className="text-white hover:text-yellow-600 transition-colors pl-4">Challenged Credit Due Diligence</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('sell-side'); }} className="text-white hover:text-yellow-600 transition-colors pl-4">Sell-Side Readiness</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('corporate-dev'); }} className="text-white hover:text-yellow-600 transition-colors pl-4">Corporate Development</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('dividend-recap'); }} className="text-white hover:text-yellow-600 transition-colors pl-4">Dividend Recapitalization Prep</a>

              {currentPage === 'home' && (
                <>
                  <a href="#case-studies" onClick={(e) => { e.preventDefault(); scrollToSection('case-studies'); }} className="text-white hover:text-yellow-600 transition-colors">Case Studies</a>
                  <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="text-white hover:text-yellow-600 transition-colors">Contact</a>
                </>
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      {currentPage === 'home' && (
        <>
          {/* Hero Section */}
          <section id="home" className="pt-24 pb-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Unlocking Value Through Financial Expertise
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Delivering actionable insights and tailored solutions for Private Equity, Private Debt, and Corporate Development teams to maximize value, reduce risk, and drive success.
              </p>
              <a
                href="#services"
                onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
                className="inline-block bg-yellow-600 text-slate-900 px-10 py-4 rounded-full font-semibold text-lg hover:bg-yellow-500 transform hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl"
              >
                Explore Our Solutions
              </a>
            </div>
          </section>

          {/* Core Services */}
          <section id="services" className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                  Our Services
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive financial advisory services tailored to your specific needs.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Mass Tort */}
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-blue-900">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-slate-800 rounded-xl flex items-center justify-center text-3xl text-white mb-6">
                    ⚖️
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Mass Tort</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Specialized financial advisory and operational solutions for mass tort litigation. From case intake to settlement, we optimize your workflow, reduce costs, and accelerate outcomes.
                  </p>
                  <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('mass-tort'); }} className="text-blue-900 font-semibold hover:text-yellow-600 transition-colors inline-flex items-center gap-2">
                    Learn More →
                  </a>
                </div>

                {/* Lender Due Diligence */}
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-blue-900">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-slate-800 rounded-xl flex items-center justify-center text-3xl text-white mb-6">
                    🔍
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Lender Due Diligence</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Comprehensive credit assessment and financial analysis to support lending decisions with confidence and minimize risk.
                  </p>
                  <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('lender-due-diligence'); }} className="text-blue-900 font-semibold hover:text-yellow-600 transition-colors inline-flex items-center gap-2">
                    Learn More →
                  </a>
                </div>

                {/* Lender DD Non-PE */}
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-blue-900">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-slate-800 rounded-xl flex items-center justify-center text-3xl text-white mb-6">
                    📋
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Lender DD For Non-PE Financing</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Specialized due diligence services for non-traditional financing structures and alternative lending scenarios.
                  </p>
                  <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('lender-dd-non-pe'); }} className="text-blue-900 font-semibold hover:text-yellow-600 transition-colors inline-flex items-center gap-2">
                    Learn More →
                  </a>
                </div>

                {/* Challenged Credit */}
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-blue-900">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-slate-800 rounded-xl flex items-center justify-center text-3xl text-white mb-6">
                    ⚠️
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Challenged Credit Due Diligence</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Expert analysis and strategic guidance for distressed situations and turnaround opportunities.
                  </p>
                  <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('challenged-credit'); }} className="text-blue-900 font-semibold hover:text-yellow-600 transition-colors inline-flex items-center gap-2">
                    Learn More →
                  </a>
                </div>

                {/* Sell-Side */}
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-blue-900">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-slate-800 rounded-xl flex items-center justify-center text-3xl text-white mb-6">
                    📈
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Sell-Side Readiness</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Prepare your business for sale to achieve optimal valuation and a smooth transaction with &gt;95% success rate.
                  </p>
                  <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('sell-side'); }} className="text-blue-900 font-semibold hover:text-yellow-600 transition-colors inline-flex items-center gap-2">
                    Learn More →
                  </a>
                </div>

                {/* Corporate Development */}
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-blue-900">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-slate-800 rounded-xl flex items-center justify-center text-3xl text-white mb-6">
                    🎯
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Corporate Development</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Strategic M&A advisory from target screening through post-merger integration to maximize synergies.
                  </p>
                  <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('corporate-dev'); }} className="text-blue-900 font-semibold hover:text-yellow-600 transition-colors inline-flex items-center gap-2">
                    Learn More →
                  </a>
                </div>

                {/* Dividend Recap */}
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-blue-900">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-slate-800 rounded-xl flex items-center justify-center text-3xl text-white mb-6">
                    💰
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Dividend Recapitalization Prep</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Strategic capital returns for PE sponsors through structured dividend recaps that balance leverage and returns.
                  </p>
                  <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('dividend-recap'); }} className="text-blue-900 font-semibold hover:text-yellow-600 transition-colors inline-flex items-center gap-2">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Case Studies */}
          <section id="case-studies" className="py-20 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                  Proven Results
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Real-world success stories demonstrating our impact and expertise.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Case Study 1 */}
                <div className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2">
                  <div className="h-48 bg-gradient-to-br from-blue-900 to-slate-800 flex items-center justify-center text-6xl text-white">
                    📊
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      KPI Data Cube for Company Sale
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      A private equity-backed auto parts manufacturer preparing for sale required a consolidated, enterprise-level view of sales, gross margin, and KPIs across customers, SKUs, and other dimensions. We developed a comprehensive data analytics solution that streamlined reporting and enhanced buyer confidence.
                    </p>
                  </div>
                </div>

                {/* Case Study 2 */}
                <div className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2">
                  <div className="h-48 bg-gradient-to-br from-blue-900 to-slate-800 flex items-center justify-center text-6xl text-white">
                    🎯
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      Unlocking Value in Data-Challenged Business
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      A private equity-backed business services company in the vending and catering industry struggled to complete its sale due to significant financial and operational challenges. We restructured their data systems, validated financials, and successfully positioned the company for a competitive exit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact/CTA Section */}
          <section id="contact" className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Unlock Value?
              </h2>
              <p className="text-xl md:text-2xl mb-10 text-gray-200">
                Let's discuss how our expertise can drive success for your organization.
              </p>
              <a
                href="mailto:contact@northcastleconsulting.com"
                className="inline-block bg-yellow-600 text-slate-900 px-12 py-5 rounded-full font-semibold text-lg hover:bg-yellow-500 transform hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl"
              >
                Contact Us Today
              </a>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-slate-900 text-white py-12 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-3 gap-12 mb-8">
                <div>
                  <h4 className="text-yellow-600 text-xl font-bold mb-4">North Castle Consulting</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Delivering actionable insights and tailored solutions for Private Equity, Private Debt, and Corporate Development teams.
                  </p>
                </div>

                <div>
                  <h4 className="text-yellow-600 text-xl font-bold mb-4">Services</h4>
                  <div className="space-y-2">
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('mass-tort'); }} className="block text-gray-400 hover:text-yellow-600 transition-colors">Mass Tort</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('lender-due-diligence'); }} className="block text-gray-400 hover:text-yellow-600 transition-colors">Lender Due Diligence</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('sell-side'); }} className="block text-gray-400 hover:text-yellow-600 transition-colors">Sell-Side Readiness</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('corporate-dev'); }} className="block text-gray-400 hover:text-yellow-600 transition-colors">Corporate Development</a>
                  </div>
                </div>

                <div>
                  <h4 className="text-yellow-600 text-xl font-bold mb-4">Contact</h4>
                  <div className="space-y-2 text-gray-400">
                    <p>Email: contact@northcastleconsulting.com</p>
                    <p>Phone: (555) 123-4567</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
                <p>&copy; 2025 North Castle Consulting. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </>
      )}

      {/* Other Service Pages - Placeholder sections */}
      {currentPage === 'mass-tort' && (
        <div className="pt-24 min-h-screen">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Mass Tort Services</h1>
            <p className="text-xl text-gray-600">Detailed content for Mass Tort services...</p>
          </div>
        </div>
      )}

      {currentPage === 'lender-due-diligence' && (
        <div className="pt-24 min-h-screen">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Lender Due Diligence</h1>
            <p className="text-xl text-gray-600">Content coming soon...</p>
          </div>
        </div>
      )}

      {currentPage === 'lender-dd-non-pe' && (
        <div className="pt-24 min-h-screen">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Lender Due Diligence For Non-PE Financing</h1>
            <p className="text-xl text-gray-600">Content coming soon...</p>
          </div>
        </div>
      )}

      {currentPage === 'challenged-credit' && (
        <div className="pt-24 min-h-screen">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Challenged Credit Due Diligence</h1>
            <p className="text-xl text-gray-600">Content coming soon...</p>
          </div>
        </div>
      )}

      {currentPage === 'sell-side' && (
        <div className="pt-24 min-h-screen">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Sell-Side Readiness</h1>
            <p className="text-xl text-gray-600">Content coming soon...</p>
          </div>
        </div>
      )}

      {currentPage === 'corporate-dev' && (
        <div className="pt-24 min-h-screen">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Corporate Development</h1>
            <p className="text-xl text-gray-600">Content coming soon...</p>
          </div>
        </div>
      )}

      {currentPage === 'dividend-recap' && (
        <div className="pt-24 min-h-screen">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Dividend Recapitalization Prep</h1>
            <p className="text-xl text-gray-600">Content coming soon...</p>
          </div>
        </div>
      )}
    </div>
  );
}
