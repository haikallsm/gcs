const HealthIndicator = ({ Label, status }) => {
    const isOk = status === 'ok';
    return (
        <div className="flex items-center gap-1">
            <div className={`w-1.5 h-1.5 rounded-full ${isOk ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span className={isOk ? 'text-gray-300' : 'text-red-400'}>{Label}</span>
        </div>
    );
};

export default HealthIndicator;