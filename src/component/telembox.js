const TelemetryBox = ({ Label, value, unit }) => (
    <div className="flex flex-col">
        <div className="text-xl font-bold text-white">
            {value}<span className="text-xs font-normal text-gray-400 ml-1">{unit}</span>
        </div>
        <div className="text-[10px] text-gray-500 uppercase">{Label}</div>  
    </div>
);

export default TelemetryBox;