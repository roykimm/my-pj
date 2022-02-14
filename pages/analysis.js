import { GlobeIcon } from "@heroicons/react/solid";
import Head from "next/head";
import TodayVisotor from "../components/chart/TodayVisotor";
import Nheader from "../components/Nheader";
import Nheader2 from "../components/Nheader2";

const Analysis = ({todayVisotor}) => {

    return (
        <div>
            <Head>
                <title>고성군 통합분석</title>
                <link rel="icon" href="/gosung_favicon.png" />
            </Head>
            <Nheader />
            <Nheader2 gb="2" />
            <div className="flex space-x-4 justify-center items-center py-2 bg-[#1B2137] text-white">
                {/* 좌측 통계 */}
                <div className="bg-slate-700 px-9 py-2 rounded-lg min-h-[140px]">
                    <p className="text-md text-orange-500 text-center font-bold">오늘 방문객</p>
                    <p className="text-xl text-center py-2">3,738 명</p>
                    <p className="text-sm text-center pb-2">-723</p>
                    <p className="text-sm text-center font-semibold">전일 4,461명</p>
                </div>
                <div className="bg-slate-700 px-9 py-2 rounded-lg min-h-[140px]">
                    <p className="text-md text-orange-500 text-center font-bold">이달의 방문객</p>
                    <p className="text-xl text-center py-2">3,738 명</p>
                    <p className="text-sm text-center pb-2">-723</p>
                    <p className="text-sm text-center font-semibold">전일 4,461명</p>
                </div>
                <div className="bg-slate-700 px-9 py-2 rounded-lg min-h-[140px]">
                    <p className="text-md text-orange-500 text-center font-bold">누적 방문객</p>
                    <p className="text-xl text-center py-2">3,738 명</p>
                    <p className="text-sm text-center pb-2">-723</p>
                    <p className="text-sm text-center font-semibold">전일 4,461명</p>
                </div>
                <div className="bg-slate-700 px-9 py-2 rounded-lg min-h-[140px]">
                    <p className="text-md text-orange-500 text-center font-bold">현재 체류 인원</p>
                    <p className="text-xl text-center py-2">3,738 명</p>
                    <p className="text-sm text-center pb-2">-723</p>
                    <p className="text-sm text-center font-semibold">전일 4,461명</p>
                </div>
                <div className="bg-slate-700 px-9 py-2 rounded-lg min-h-[140px]">
                    <p className="text-md text-orange-500 text-center font-bold">평균 체류 시간</p>
                    <p className="text-xl text-center py-2">3,738 명</p>
                    <p className="text-sm text-center pb-2">-723</p>
                    <p className="text-sm text-center font-semibold">전일 4,461명</p>
                </div>
                <div className="bg-slate-700 px-9 py-2 rounded-lg min-h-[140px]">
                    <p className="text-md text-orange-500 text-center font-bold">재방문자 수</p>
                    <p className="text-xl text-center py-2">3,738 명</p>
                    <p className="text-sm text-center pb-2">-723</p>
                    <p className="text-sm text-center font-semibold">전일 4,461명</p>
                </div>

                <div className="bg-slate-700 px-5 py-2 rounded-lg min-h-[140px]">
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
            <div className="flex mx-auto text-center justify-center bg-[#1B2137] text-white">
                <div className="w-[800px] mx-1 my-1">
                    <TodayVisotor todayVisotor={todayVisotor}/>
                </div>
                <div className="w-[800px] mx-1 my-1">
                    <TodayVisotor todayVisotor={todayVisotor}/>
                </div>
            </div>
            <div className="flex mx-auto text-center justify-center bg-[#1B2137] text-white pb-5">
                <div className="w-[800px] mx-1 my-1">
                    <TodayVisotor todayVisotor={todayVisotor}/>
                </div>
                <div className="w-[800px] mx-1 my-1">
                    <TodayVisotor todayVisotor={todayVisotor}/>
                </div>
            </div>

            {/* 여기부터 차트 */}
            {/* <div className="grid grid-cols-2 space-x-3 mx-5 min-h-[100px]">
                <div className="rounded-lg bg-slate-500 max-w-[]">
                    <div className="px-5 py-2 font-semibold flex items-center">
                        <GlobeIcon className="mr-2 w-5 h-5 text-blue-600 dark:text-blue-500" />
                        <p>오늘자 방문객</p>
                    </div>
                    <div className="bg-slate-700">
                        <TodayVisotor data={data} />
                    </div>
                </div>
                <div className="rounded-lg bg-slate-500 max-w-[]">
                    <div className="px-5 py-2 font-semibold flex items-center">
                        <GlobeIcon className="mr-2 w-5 h-5 text-blue-600 dark:text-blue-500" />
                        <p>오늘자 방문객</p>
                    </div>
                    <div className="bg-slate-700">
                        <TodayVisotor data={data} />
                    </div>
                </div> 
            </div> */}
            

        </div>
    )
}

export default Analysis;

export async function getServerSideProps(context) {
  
    console.log(33)
    const [
        todayVisotor,
    ] = await Promise.all([
      fetch(
        `${process.env.RESTAPI_URL}/getMainVisitGraph`
      )
    ]);
    const [todayVisotorData] =
      await Promise.all([
        todayVisotor.json(),
      ]);
  
    return {
      props : {
        todayVisotor: todayVisotorData.data,
      }
    }
  }