'use client';

import { useState } from 'react';
import axios from 'axios';

// Import Components đã chia nhỏ
import AiCard from './_components/AiCard';
import QrCard from './_components/QrCard';
import FullscreenScanner from './_components/FullscreenScanner';
import DepositForm from './_components/DepositForm';

const WASTE_TYPES = [
  { id: "glass", label: "THỦY TINH", pts: 15, co2: 0.3 },
  { id: "metal", label: "KIM LOẠI", pts: 20, co2: 0.8 },
  { id: "paper", label: "GIẤY / CARTON", pts: 5, co2: 0.2 },
  { id: "plastic", label: "NHỰA", pts: 10, co2: 0.5 }
];

export default function ScanFeature() {
  const [view, setView] = useState<'HOME' | 'SCANNING' | 'FORM'>('HOME'); 
  const [aiState, setAiState] = useState<'IDLE' | 'ANALYZING' | 'DONE'>('IDLE');
  const [preview, setPreview] = useState<string | null>(null);
  const [aiResult, setAiResult] = useState<any>(null);
  const [scannedItems, setScannedItems] = useState<string[]>([]);
  const [stationId, setStationId] = useState<string | null>(null);
  const [formState, setFormState] = useState<'SELECTING' | 'WAITING' | 'SUCCESS'>('SELECTING');
  const [selectedWastes, setSelectedWastes] = useState<string[]>([]);

  // --- LOGIC XỬ LÝ AI ---
  const handleVisionAI = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));
    setAiState('ANALYZING');

    const formData = new FormData();
    formData.append('image', file);

    try { 
      const response = await axios.post('http://localhost:3001/api/scan', formData);
      if (response.data.success) {
        setAiResult(response.data.data);
        setAiState('DONE');
        // Giả lập thêm vào giỏ hàng
        setScannedItems(prev => [...prev, response.data.data.type]);
      } else {
        alert("AI không nhận diện được!");
        setAiState('IDLE');
      }
    } catch (e) {
      // Mock dữ liệu để test khi không có backend
      setTimeout(() => {
        setAiResult({ label: "Chai nhựa PET", pts: 10, type: 'plastic' });
        setAiState('DONE');
        setScannedItems(prev => [...prev, 'plastic']);
      }, 1500);
    }
  };

  const handleStationScanned = (qrText: string) => {
    setStationId(qrText); 
    setView('FORM');      
    setFormState('SELECTING');
    setSelectedWastes(scannedItems);
  };

  const handleSubmitDeposit = () => {
    setFormState('WAITING');
    setTimeout(() => setFormState('SUCCESS'), 2500);
  };

  const handleReset = () => {
    setView('HOME');
    setAiState('IDLE');
    setPreview(null);
    setAiResult(null);
    setScannedItems([]);
    setSelectedWastes([]);
  };

  return (
    // Sử dụng font-sans (Roboto) đã cấu hình ở Root Layout
    <div className="flex flex-col gap-6 px-5 animate-in fade-in duration-500">
      
      {view === 'HOME' && (
        <>
          <div className="pt-2">
            <h2 className="text-2xl font-black text-[#1c3f25] mb-1">Quét rác tích điểm</h2>
            <p className="text-xs text-gray-500 font-medium">Chụp ảnh rác thải để AI định giá trước khi bỏ vào trạm</p>
          </div>

          <AiCard 
            aiState={aiState} 
            preview={preview} 
            result={aiResult} 
            onUpload={handleVisionAI} 
            scannedCount={scannedItems.length}
          />
          
          <QrCard 
            isLocked={scannedItems.length === 0} 
            onStartScan={() => setView('SCANNING')} 
          />
          
          {/* Tip hướng dẫn nhỏ */}
          <div className="bg-[#e6f0de] p-4 rounded-3xl flex items-center gap-3">
             <div className="w-10 h-10 shrink-0 bg-white rounded-full flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-[#155e24]">lightbulb</span>
             </div>
             <p className="text-[11px] font-bold text-[#155e24] leading-tight">
               Mẹo: Bạn có thể chụp nhiều loại rác cùng lúc để tiết kiệm thời gian quét mã QR!
             </p>
          </div>
        </>
      )}

      {view === 'FORM' && (
        <DepositForm 
          stationId={stationId}
          formState={formState}
          wasteTypes={WASTE_TYPES}
          selectedWastes={selectedWastes}
          onToggleWaste={(id: string) => setSelectedWastes(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])}
          onSubmit={handleSubmitDeposit}
          onReset={handleReset}
        />
      )}

      {/* Scanner Overlay */}
      {view === 'SCANNING' && (
        <FullscreenScanner 
          onScan={handleStationScanned} 
          onClose={() => setView('HOME')} 
        />
      )}
    </div>
  );
}