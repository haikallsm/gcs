// import { useState,useEffect } from 'react';
import TelemetryBox from './component/telembox';
import HealthIndicator from './component/HealthIndicator';
import ControlButton from './component/ControlButton';

const Home = () => {
        
    return (
        <div className="flex flex-1 overflow-hidden">
        
            {/* 2. SIDEBAR (Kiri) */}
            <aside className="w-80 border-r border-gray-800 bg-[#121212] flex flex-col overflow-y-auto custom-scrollbar">
                {/* Header Tab Sidebar */}
                <div className="flex border-b border-gray-800 text-xs">
                    <div className="px-4 py-2 border-b-2 border-blue-500 text-white">Overview</div>
                    <div className="px-4 py-2 text-gray-500">Flights</div>
                    <div className="px-4 py-2 text-gray-500">Calibrate</div>
                </div>

                <div className="p-4 space-y-6">
                    {/* Attitude / Artificial Horizon Placeholder */}
                    <div className="h-48 bg-gradient-to-b from-blue-900 to-green-900 rounded border border-gray-700 relative flex items-center justify-center">
                        <span className="text-red-500 font-bold tracking-widest bg-black/50 px-2 rounded absolute">ARMED</span>
                        {/* Garis pitch & roll buatan */}
                        <div className="w-3/4 border-t-2 border-green-500 absolute"></div>
                        <div className="absolute top-2 text-green-400 text-xs">048°</div>
                    </div>

                    {/* Telemetry Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <TelemetryBox label="ALT" value="44.7" unit="m" />
                        <TelemetryBox label="SPD" value="28.8" />
                        <TelemetryBox label="HDG" value="048" unit="°" />
                        <TelemetryBox label="VS" value="0.0" />
                    </div>

                    {/* Health Status */}
                    <div>
                        <h3 className="text-xs text-gray-500 mb-2 font-semibold">HEALTH</h3>
                        <div className="flex flex-wrap gap-x-3 gap-y-2 text-[10px]">
                            <HealthIndicator label="Gyro" status="ok" />
                            <HealthIndicator label="Accel" status="ok" />
                            <HealthIndicator label="Compass" status="ok" />
                            <HealthIndicator label="Baro" status="ok" />
                            <HealthIndicator label="GPS" status="ok" />
                            <HealthIndicator label="Motors" status="error" />
                        </div>
                    </div>

                    {/* Vehicle Info */}
                    <div>
                        <h3 className="text-xs text-gray-500 mb-2 font-semibold">VEHICLE</h3>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                            <div>
                                <div className="text-white">copter</div>
                                <div className="text-gray-500 text-[10px]">Frame</div>
                            </div>
                            <div>
                                <div className="text-white">ArduCopter</div>
                                <div className="text-gray-500 text-[10px]">Firmware</div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* 3. MAIN HUD VIEW (Kanan/Tengah) */}
            <main className="flex-1 bg-black relative flex flex-col justify-between">
                {/* Top HUD Overlays */}
                    <div className="absolute top-4 w-full flex justify-center">
                        <div className="border border-green-500/50 text-green-400 px-4 py-1 text-xs">048°</div>
                    </div>

                    {/* Center Crosshair / Pitch Ladder */}
                    <div className="flex-1 flex items-center justify-center relative">
                        <div className="text-green-500/70 flex flex-col items-center">
                            <div className="border-t border-green-500 w-32 mb-8"></div>
                            <div className="border-t border-green-500 w-16 mb-8"></div>
                            <div className="border border-green-500 w-8 h-8 flex items-center justify-center mb-2">
                                <div className="w-1 h-1 bg-green-500"></div>
                            </div>
                            <span className="text-red-500 text-xs font-bold tracking-widest">ARMED</span>
                        </div>

                        {/* Altitude Ladder (Kanan) */}
                        <div className="absolute right-12 h-3/4 w-12 border-l border-green-500/30 flex flex-col justify-between text-[10px] text-green-500 py-4 px-2">
                            <span>90</span>
                            <span>80</span>
                            <span>70</span>
                            <span className="border border-green-500 px-1 py-0.5 text-white bg-black">44.7</span>
                            <span>30</span>
                            <span>20</span>
                            <span>10</span>
                        </div>
                    </div>

                    {/* Bottom Control Bar */}
                    <div className="h-14 border-t border-gray-800 bg-[#121212]/80 flex items-center justify-between px-4 z-10">
                        <div className="flex gap-2">
                            <ControlButton icon="⌂" label="RTH" />
                            <ControlButton icon="↓" label="LAND" />
                            <ControlButton icon="⏸" label="PAUSE" />
                        </div>
                        
                        <div className="flex gap-2">
                            <button className="bg-red-900/40 text-red-500 border border-red-900 px-4 py-1.5 rounded text-xs hover:bg-red-900/60 transition">
                                ⊘ DISARM
                            </button>
                            <button className="bg-gray-800 text-gray-300 border border-gray-700 px-4 py-1.5 rounded text-xs hover:bg-gray-700 transition">
                                ↑ TAKEOFF
                            </button>
                        
                        <div className="ml-4 flex items-center gap-2">
                            <span className="text-xs text-gray-400">Flight Mode</span>
                            <select className="bg-gray-900 border border-gray-700 text-white text-xs px-2 py-1 rounded">
                                <option>Auto</option>
                                <option>Loiter</option>
                                <option>Guided</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <button className="bg-red-600 text-white px-4 py-1.5 rounded text-xs hover:bg-red-500">⊗ ABORT</button>
                    </div>
                </div>
                
            </main>
        </div>
    );
}

export default Home;