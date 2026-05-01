import TCard from "./Tcard";

const LeftSidebar = ({telem = {}}) => {
    const {gspd = 0, aspd = 0, alt = 0, rangefinder = 0, throttle = 0, pitch = 0, roll = 0, yaw = 0} = telem;
    
    const fmt = (val, digits = 2) => {
        if (val === null || val === undefined || isNaN(val)) return "--";
        return Number(val).toFixed(digits);
    }

    return (
        <div className="flex flex-col gap-px bg-accent/5 overflow-hidden flex-shrink-0 w-[220px]">
            <div className="px-4 py-3 bg-panel border-b border-border flex-shrink-0">
                <div className="font-mono text-[9px] tracking-[2.5px] text-accent uppercase opacity-80">
                    Telemetry
                </div>
            </div>

            <div className="telem-grid">
                <TCard label="Ground Speed" val={fmt(gspd)} unit="m/s" color="var(--a2)" />
                <TCard label="Air Speed" val={fmt(aspd)} unit="m/s" color="var(--a2)" />
                <TCard label="Throttle" val={Math.round(throttle)} unit="%" color="var(--a2)" />
                <TCard label="Rangefinder" val={fmt(rangefinder)} unit="Cm" color="var(--a2)" />
                <TCard label="Pitch" val={fmt(pitch,1)} unit="°" color="var(--a2)" />
                <TCard label="Roll" val={fmt(roll,1)} unit="°" color="var(--a2)" />
                <TCard label="Yaw" val={fmt(yaw ?? 0, 0)} unit="°" color="var(--a2)" />
                <TCard label="Altitude" val={fmt(alt)} unit="m" color="var(--a2)" />

            </div>
        </div>
    );
}

export default LeftSidebar;