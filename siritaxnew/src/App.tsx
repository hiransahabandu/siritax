import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SmartTaxAIAssistant } from './components/SmartTaxAIAssistant';
import { HomePage } from './components/pages/HomePage';
import { RoleSelection } from './components/pages/TaxFilingWizard/RoleSelection';
import { Login } from './components/pages/TaxFilingWizard/Login';
import { Register } from './components/pages/TaxFilingWizard/Register';
import { TaxFilingDetails } from './components/pages/TaxFilingWizard/TaxFilingDetails';
import { TaxRecords } from './components/pages/TaxFilingWizard/TaxRecords';
import { UpgradePrompt } from './components/pages/TaxFilingWizard/UpgradePrompt';
export function App() {
  return <UserProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/tax-filing-wizard" element={<RoleSelection />} />
              <Route path="/tax-filing-wizard/login" element={<Login />} />
              <Route path="/tax-filing-wizard/register" element={<Register />} />
              <Route path="/tax-filing-wizard/details" element={<TaxFilingDetails />} />
              <Route path="/tax-filing-wizard/records" element={<TaxRecords />} />
              <Route path="/tax-filing-wizard/upgrade" element={<UpgradePrompt />} />
              <Route path="/features" element={<div className="p-10 text-center">
                    Features Page (Coming Soon)
                  </div>} />
              <Route path="/ai-assistant" element={<div className="p-10 text-center">
                    AI Assistant Page (Coming Soon)
                  </div>} />
              <Route path="/tax-calculator" element={<div className="p-10 text-center">
                    Tax Calculator (Coming Soon)
                  </div>} />
              <Route path="/doc-process" element={<div className="p-10 text-center">
                    Doc Process (Coming Soon)
                  </div>} />
              <Route path="/profile" element={<div className="p-10 text-center">
                    User Profile (Coming Soon)
                  </div>} />
            </Routes>
          </main>
          <Footer />
          <SmartTaxAIAssistant />
        </div>
      </Router>
    </UserProvider>;
}