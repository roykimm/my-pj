import Head from "next/head";
import { Carousel } from "react-responsive-carousel";
import AnalysisComponent from "../../components/AnalysisComponent";
import Nbottom from "../../components/Nbottom";
import Nheader from "../../components/Nheader";
import Nheader2 from "../../components/Nheader2";
import { compareAsc, format , startOfMonth , lastDayOfMonth } from 'date-fns'
import Slider from "../../components/Slider";
import { useEffect, useState } from "react";
import TodayVisotor from "../../components/chart/TodayVisotor";
import axios from "axios";


const FloatingPopulation = ({todayVisotor}) =>{
    
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    useEffect(() => {
        let firstDay = format(startOfMonth(new Date()), 'yyyy-MM-dd');
        let lastDay = format(lastDayOfMonth(new Date()), 'yyyy-MM-dd');

        setStartDate(firstDay);
        setEndDate(lastDay);
    }, [])

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
                {/* 방문객 통계 */}
                <div className="flex space-x-2 justify-center items-center py-2 text-white">
                    {/* 좌측 통계 */}
                    <div className="bg-slate-700 py-2 rounded-lg min-h-[140px] w-[180px]">
                        <p className="text-md text-orange-500 text-center font-bold">오늘 방문객</p>
                        <p className="text-xl text-center py-2">3,738 명</p>
                        <p className="text-sm text-center pb-2">-723</p>
                        <p className="text-sm text-center font-semibold">전일 4,461명</p>
                    </div>
                    <div className="bg-slate-700 py-2 rounded-lg min-h-[140px] w-[180px]">
                        <p className="text-md text-orange-500 text-center font-bold">이달의 방문객</p>
                        <p className="text-xl text-center py-2">3,738 명</p>
                        <p className="text-sm text-center pb-2">-723</p>
                        <p className="text-sm text-center font-semibold">전일 4,461명</p>
                    </div>
                    <div className="bg-slate-700 py-2 rounded-lg min-h-[140px] w-[180px]">
                        <p className="text-md text-orange-500 text-center font-bold">누적 방문객</p>
                        <p className="text-xl text-center py-2">3,738 명</p>
                        <p className="text-sm text-center pb-2">-723</p>
                        <p className="text-sm text-center font-semibold">전일 4,461명</p>
                    </div>
                    <div className="bg-slate-700 py-2 rounded-lg min-h-[140px] w-[180px]">
                        <p className="text-md text-orange-500 text-center font-bold">현재 체류 인원</p>
                        <p className="text-xl text-center py-2">3,738 명</p>
                        <p className="text-sm text-center pb-2">-723</p>
                        <p className="text-sm text-center font-semibold">전일 4,461명</p>
                    </div>
                    <div className="bg-slate-700 py-2 rounded-lg min-h-[140px] w-[180px]">
                        <p className="text-md text-orange-500 text-center font-bold">평균 체류 시간</p>
                        <p className="text-xl text-center py-2">3,738 명</p>
                        <p className="text-sm text-center pb-2">-723</p>
                        <p className="text-sm text-center font-semibold">전일 4,461명</p>
                    </div>
                    <div className="bg-slate-700 py-2 rounded-lg min-h-[140px] w-[180px]">
                        <p className="text-md text-orange-500 text-center font-bold">재방문자 수</p>
                        <p className="text-xl text-center py-2">3,738 명</p>
                        <p className="text-sm text-center pb-2">-723</p>
                        <p className="text-sm text-center font-semibold">전일 4,461명</p>
                    </div>
                </div>

                {/* 그래프 */}
                <div className="flex mx-auto text-center justify-center text-white">
                    <div className="w-[800px] mx-1 my-1">
                        <TodayVisotor todayVisotor={todayVisotor}/>
                    </div>
                    <div className="w-[800px] mx-1 my-1">
                        <TodayVisotor todayVisotor={todayVisotor}/>
                    </div>
                </div>

                {/* 하단 navigation */}
                <div className="fixed bottom-0 w-full">
                    <Nbottom gb="2"/>
                </div>
                
            </div>
        </div>
    )
}

export default FloatingPopulation;

export async function getServerSideProps(context) {
  
    const todayVisotor = await axios.post(`${process.env.RESTAPI_URL}/getMainVisitGraph`);

    return {
        props : {
            todayVisotor: todayVisotor.data.data,
        }
    }
}