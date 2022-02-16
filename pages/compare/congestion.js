import Head from "next/head";
import { Carousel } from "react-responsive-carousel";
import AnalysisComponent from "../../components/AnalysisComponent";
import Nbottom from "../../components/Nbottom";
import Nheader from "../../components/Nheader";
import Nheader2 from "../../components/Nheader2";
import { compareAsc, format , startOfMonth , lastDayOfMonth } from 'date-fns'
import Slider from "../../components/Slider";
import { useContext, useEffect, useState } from "react";
import MapContext from "../../context/map/mapContext";

const Congestion = () =>{
    
    const { mapObj } = useContext(MapContext);
    const { map } = mapObj;

    return (
        <div className="">
            <Head>
                <title>고성군 비교분석</title>
                <link rel="icon" href="/gosung_favicon.png" />
            </Head>
            <Nheader />
            <Nheader2 gb="3" />

            <div id='map' className="h-[800px] w-full px-10 py-10"></div>

            {/* 하단 navigation */}
            <div className="fixed bottom-0 w-full">
                <Nbottom gb="3"/>
            </div>
                
        </div>
    )
}

export default Congestion;