import Head from "next/head";
import Nheader from "../components/Nheader";
import Nheader2 from "../components/Nheader2";

const Analysis = () => {
    return (
        <div>
            <Head>
                <title>고성군 통합분석</title>
                <link rel="icon" href="/gosung_favicon.png" />
            </Head>
            <Nheader />
            <Nheader2 gb="2" />
            <div className="flex space-x-5 mx-10 justify-center items-center py-5">
                {/* 좌측 통계 */}
                <div className="bg-slate-700 px-10 py-3 rounded-lg min-h-[140px]">
                    <p className="text-md text-orange-500 text-center font-bold">오늘 방문객</p>
                    <p className="text-xl text-center py-2">3,738 명</p>
                    <p className="text-sm text-center pb-2">-723</p>
                    <p className="text-sm text-center font-semibold">전일 4,461명</p>
                </div>
                <div className="bg-slate-700 px-10 py-3 rounded-lg min-h-[140px]">
                    <p className="text-md text-orange-500 text-center font-bold">오늘 방문객</p>
                    <p className="text-xl text-center py-2">3,738 명</p>
                    <p className="text-sm text-center pb-2">-723</p>
                    <p className="text-sm text-center font-semibold">전일 4,461명</p>
                </div>
                <div className="bg-slate-700 px-10 py-3 rounded-lg min-h-[140px]">
                    <p className="text-md text-orange-500 text-center font-bold">오늘 방문객</p>
                    <p className="text-xl text-center py-2">3,738 명</p>
                    <p className="text-sm text-center pb-2">-723</p>
                    <p className="text-sm text-center font-semibold">전일 4,461명</p>
                </div>
                <div className="bg-slate-700 px-10 py-3 rounded-lg min-h-[140px]">
                    <p className="text-md text-orange-500 text-center font-bold">오늘 방문객</p>
                    <p className="text-xl text-center py-2">3,738 명</p>
                    <p className="text-sm text-center pb-2">-723</p>
                    <p className="text-sm text-center font-semibold">전일 4,461명</p>
                </div>
                <div className="bg-slate-700 px-10 py-3 rounded-lg min-h-[140px]">
                    <p className="text-md text-orange-500 text-center font-bold">오늘 방문객</p>
                    <p className="text-xl text-center py-2">3,738 명</p>
                    <p className="text-sm text-center pb-2">-723</p>
                    <p className="text-sm text-center font-semibold">전일 4,461명</p>
                </div>
                <div className="bg-slate-700 px-10 py-3 rounded-lg min-h-[140px]">
                    <p className="text-md text-orange-500 text-center font-bold">오늘 방문객</p>
                    <p className="text-xl text-center py-2">3,738 명</p>
                    <p className="text-sm text-center pb-2">-723</p>
                    <p className="text-sm text-center font-semibold">전일 4,461명</p>
                </div>

                <div className="bg-slate-700 px-5 py-3 rounded-lg min-h-[140px]">
                    <div className="flex">
                        <div className="pr-3">
                            <p className="text-md text-orange-500 text-center font-bold">온도</p>
                            <p className="text-xl text-center pt-10">0 ℃</p>    
                        </div>
                        <p className="bg-white w-[1px] min-h-[120px]"></p>
                        <div className="px-3">
                            <p className="text-md text-orange-500 text-center font-bold">습도</p>
                            <p className="text-xl text-center pt-10">47 ℃</p>    
                        </div>
                        <p className="bg-white w-[1px] min-h-[120px]"></p>
                        <div className="px-3">
                            <p className="text-md text-orange-500 text-center font-bold">미세먼지</p>
                            <p className="text-xl text-center pt-10">21 ㎍/㎥</p>    
                        </div>
                        <p className="bg-white w-[1px] min-h-[120px]"></p>
                        <div className="px-3">
                            <p className="text-md text-orange-500 text-center font-bold">초미세먼지</p>
                            <p className="text-xl text-center pt-10">16 ㎍/㎥</p>    
                        </div>
                        <p className="bg-white w-[1px] min-h-[120px]"></p>
                        <div className="pl-3">
                            <p className="text-md text-orange-500 text-center font-bold">TVOC</p>
                            <p className="text-xl text-center pt-10">285 ppb</p>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analysis;