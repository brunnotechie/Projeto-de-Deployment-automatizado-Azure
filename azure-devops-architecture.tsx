import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { IconX, IconCheck } from 'lucide-react';

const AzureDevOpsArchitecture = () => {
  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Azure DevOps Architecture</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-medium">Microsoft Azure (Region)</h3>
            <div className="bg-gray-100 p-4 rounded">
              <div className="flex items-center mb-2">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                <span>Resource Group</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium">Azure DevOps Organization</h3>
            <div className="bg-gray-100 p-4 rounded">
              <div className="flex items-center mb-2">
                <div className="w-4 h-4 bg-orange-500 rounded-full mr-2"></div>
                <span>Azure Repos</span>
                <div className="ml-auto">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-pink-500 rounded-full mr-2"></div>
                    <span>Dispara Build</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                <span>Build</span>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-4 h-4 bg-purple-500 rounded-full mr-2"></div>
                <span>Dispara Release</span>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                <span>Releases</span>
                <div className="ml-auto">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-orange-500 rounded-full mr-2"></div>
                    <span>Dispara Deploy Automatizado</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
                <span>Deploy</span>
                <div className="ml-auto flex">
                  <div className="flex items-center mr-4">
                    <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                    <span>Ambiente de Testes</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
                    <span>Ambiente de Homologação</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
                    <span>Ambiente de Produção</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AzureDevOpsArchitecture;
