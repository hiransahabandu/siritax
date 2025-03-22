
import React, { useState } from 'react';
import Header from '../components/Header';
import ChatBot from '../components/ChatBot';
import TaxCalculator from '../components/TaxCalculator';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calculator, MessageSquare } from 'lucide-react';

const Index = () => {
  const [activeTab, setActiveTab] = useState<string>("chat");
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-siritax-blue-50 to-white">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-6 md:py-8">
        <div className="max-w-5xl mx-auto">
          <Card className="rounded-2xl border-siritax-slate-200 shadow-lg overflow-hidden">
            <Tabs defaultValue="chat" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-siritax-slate-100 rounded-none p-0">
                <TabsTrigger 
                  value="chat"
                  className="py-3 rounded-none data-[state=active]:bg-white data-[state=active]:text-siritax-blue-600 data-[state=active]:shadow-none border-r border-siritax-slate-200"
                >
                  <div className="flex items-center space-x-2">
                    <MessageSquare size={16} />
                    <span>Chat with SiriTax</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger 
                  value="calculator"
                  className="py-3 rounded-none data-[state=active]:bg-white data-[state=active]:text-siritax-blue-600 data-[state=active]:shadow-none"
                >
                  <div className="flex items-center space-x-2">
                    <Calculator size={16} />
                    <span>Tax Calculator</span>
                  </div>
                </TabsTrigger>
              </TabsList>
              
              <CardContent className="p-0">
                <TabsContent value="chat" className="m-0 h-[70vh]">
                  <ChatBot />
                </TabsContent>
                <TabsContent value="calculator" className="m-0 min-h-[500px] p-6 flex items-center justify-center">
                  <TaxCalculator />
                </TabsContent>
              </CardContent>
            </Tabs>
          </Card>
        </div>
      </main>
      
      <footer className="py-4 text-center text-siritax-slate-500 text-sm bg-white border-t border-siritax-slate-200">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} SiriTax. Your AI Tax Assistant.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
