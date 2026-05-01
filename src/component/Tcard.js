const TCard = ({ label, val, unit, color = "#00D2FF", wide = false, children }) => {
    return (
        <div className={`grid gap-4 grid-cols-2 p-2.5 relative overflow-hidden${wide ? "col-span-2" : ""}`}>
            <div className="text-[10px] text-muted tracking-[1.5px] mb-[3px] uppercase">
                {label}
                <div className="tcard-value" style={{ color }}>
                    {val} <span className="tcard-unit">{unit}</span>
                </div> 
            </div>
        </div>
    );
}

export default TCard;