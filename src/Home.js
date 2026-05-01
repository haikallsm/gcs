import { useState,useEffect } from 'react';
import LeftSideBar from './component/LeftSidebar';

const Home = () => {

    const [telemetry, setTelemetry] = useState({
        gspd: 15.5,
        aspd: 16.2,
        alt: 100.5,
        rangefinder: 95,
        throttle: 65,
        pitch: 5.2,
        roll: -2.1,
        yaw: 180
    });

    useEffect(() => {
        const interval =setInterval(() => {
                setTelemetry(prev => ({
                    ...prev,
                    gspd: prev.gspd + (Math.random() - 0.5) * 2,
                    aspd: prev.aspd + (Math.random() - 0.5) * 2,
                    alt: prev.alt + (Math.random() - 0.5) * 0.5,
                    throttle: Math.max(0, Math.min(100, prev.throttle + (Math.random() - 0.5) * 5)),
                    pitch: prev.pitch + (Math.random() - 0.5) * 0.5,
                    roll: prev.roll + (Math.random() - 0.5) * 0.5,
                    yaw: (prev.yaw + (Math.random() - 0.5) * 2) % 360
                }));
            }, 1000);
        return () => clearInterval(interval);
        }, []);
    return (
        <div className="home">
            <div className="Sidebar-Left">
                <LeftSideBar telem={telemetry}/>
            </div>
            <div className="Center">

            </div>
            <div className="Sidebar-Right">

            </div>
            <div className="Bottom">
                
            </div>
        </div>
    );
} 

export default Home;