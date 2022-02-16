import React, { useRef, useEffect } from 'react';
import { select } from "d3";

const data = [25, 30, 45, 60, 20]

const D3Chart = () => {

    const svgRef = useRef();
    console.log(svgRef);
    
    useEffect(() => {
        console.log(svgRef);
        const svg = select(svgRef.current);
        svg.selectAll('circle')
            .data(data)
            .join(
                enter => enter.append("circle")
                    .attr("r", value => value)
                    .attr("cx", value => value * 2)
                    .attr("cy", value => value * 2)
                    .attr("stroke", "red"),
                update => update.attr("class", "updated"),
                exit => exit.remove()
            )
        
    },[]);

    return (
        <div className="bg-slate-400">
            <svg ref={svgRef}>
                <circle />
                <circle />
                <circle />
                <circle />
                <circle />
            </svg>
        </div>
    )
}

export default D3Chart;