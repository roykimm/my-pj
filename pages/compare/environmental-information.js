import Head from "next/head";
import { Carousel } from "react-responsive-carousel";
import AnalysisComponent from "../../components/AnalysisComponent";
import Nbottom from "../../components/Nbottom";
import Nheader from "../../components/Nheader";
import Nheader2 from "../../components/Nheader2";
import { compareAsc, format , startOfMonth , lastDayOfMonth } from 'date-fns'
import Slider from "../../components/Slider";
import { useEffect, useState } from "react";
import EnvironmentInfo from "../../components/EnvironmentInfo";
import TodayVisotor from "../../components/chart/TodayVisotor";
import axios from "axios";


const EnvironmentalInformation = ({todayVisotor}) =>{
    
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    useEffect(() => {
        let firstDay = format(startOfMonth(new Date()), 'yyyy-MM-dd');
        let lastDay = format(lastDayOfMonth(new Date()), 'yyyy-MM-dd');

        setStartDate(firstDay);
        setEndDate(lastDay);
    }, [])

    const data1 = {
        title : "당항포 공룡의 문",
        data1 : "3",
        data2 : "49",
        data3 : "28",
        data4 : "22",
        data5 : "250",
    }
    const data2 = {
        title : "공룡박물관",
        data1 : "3",
        data2 : "49",
        data3 : "28",
        data4 : "22",
        data5 : "250",
    }
    const data3 = {
        title : "연꽃공원",
        data1 : "3",
        data2 : "49",
        data3 : "28",
        data4 : "22",
        data5 : "250",
    }
    const data4 = {
        title : "옥천사",
        data1 : "3",
        data2 : "49",
        data3 : "28",
        data4 : "22",
        data5 : "250",
    }
    const data5 = {
        title : "송학동고분군",
        data1 : "3",
        data2 : "49",
        data3 : "28",
        data4 : "22",
        data5 : "250",
    }

    return (
        <div className="">
            <Head>
                <title>고성군 비교분석</title>
                <link rel="icon" href="/gosung_favicon.png" />
            </Head>
            <Nheader />
            <Nheader2 gb="3" />
            <div className="">
                {/* 분석기간 */}
                <div className="flex items-center">
                    <div className="mx-auto flex items-center py-2">
                        <p className="px-5 text-white text-sm">분석기간</p>
                        <input className="text-black rounded-md w-[150px] h-[30px] text-sm" type="date" onChange={(e) => setStartDate(e.target.value)} value={startDate}/>
                        <p className="text-white mx-2 text-sm">~</p>
                        <input className="text-black rounded-md w-[150px] h-[30px] text-sm" type="date" onChange={(e) => setEndDate(e.target.value)} value={endDate}/>
                        <button className="text-sm bg-orange-400 px-4 py-1 rounded-md ml-5 text-white hover:bg-orange-500 hover:text-gray-200">검색</button>
                    </div>
                </div>

                {/*  */}
                <div className="flex items-center justify-center space-x-2 mx-20">
                    <EnvironmentInfo color="black" data={data1} />
                    <EnvironmentInfo data={data2} />
                    <EnvironmentInfo data={data3} />
                    <EnvironmentInfo data={data4} />
                    <EnvironmentInfo data={data5} />
                </div>

                {/* 그래프 */}
                <div className="mt-3 mb-16">
                    <div className="flex mx-auto text-center justify-center text-white">
                        <div className="w-[800px] mx-1 my-1">
                            <TodayVisotor todayVisotor={todayVisotor}/>
                        </div>
                        <div className="w-[800px] mx-1 my-1">
                            <TodayVisotor todayVisotor={todayVisotor}/>
                        </div>
                    </div>
                    <div className="flex mx-auto text-center justify-center text-white">
                        <div className="w-[800px] mx-1 my-1">
                            <TodayVisotor todayVisotor={todayVisotor}/>
                        </div>
                        <div className="w-[800px] mx-1 my-1">
                            <TodayVisotor todayVisotor={todayVisotor}/>
                        </div>
                    </div>
                </div>

                {/* 하단 navigation */}
                <div className="fixed bottom-0 w-full">
                    <Nbottom gb="4"/>
                </div>
                
            </div>
        </div>
    )
}

export default EnvironmentalInformation;

export async function getServerSideProps(context) {
  
    const todayVisotor = await axios.post(`${process.env.RESTAPI_URL}/getMainVisitGraph`);

    return {
        props : {
            todayVisotor: todayVisotor.data.data,
        }
    }
}