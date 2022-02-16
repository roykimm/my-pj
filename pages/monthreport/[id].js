import Head from "next/head";
import {useRouter} from "next/Router"
import { SearchIcon } from "@heroicons/react/solid";
import Nheader from "../../components/Nheader";
import Nheader2 from "../../components/Nheader2";

const MonthReport = () => {

    const router = useRouter();

    return (
        <div>
            <Head>
                <title>고성군 대시보드</title>
                <link rel="icon" href="/gosung_favicon.png" />
            </Head>
            <Nheader />
            <Nheader2 gb="4" />
            <div className="max-w-[1200px] bg-white shadow-lg rounded-sm border border-slate-200 mt-3 mx-auto py-2 text-black">
                <div className="text-black text-center text-xl font-semibold">2022 1월 고성관광지 분석자료</div>
                <div className="flex">
                {/* 첫번째 표 */}
                    <div className=" px-5">
                        <div className="text-black font-semibold">일별 방문자수</div>
                        <div className="">
                            {/* Table */}
                            <div className="overflow-x-auto">
                            <table className="table-auto w-full">
                                {/* Table header */}
                                <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
                                <tr>
                                    <th className="p-2">
                                        <div className="font-semibold text-center">날짜</div>
                                    </th>
                                    <th className="p-2">
                                        <div className="font-semibold text-center">방문자수</div>
                                    </th>
                                </tr>
                                </thead>
                                {/* Table body */}
                                <tbody className="text-sm font-medium ">
                                {/* Row */}
                                <tr>
                                    <td className="">
                                        <div className="text-slate-800 text-center">12월01일</div>
                                    </td>
                                    <td className="">
                                        <div className="text-slate-800 text-center">2,332명</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="">
                                        <div className="text-slate-800 text-center">12월01일</div>
                                    </td>
                                    <td className="">
                                        <div className="text-slate-800 text-center">2,332명</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="">
                                        <div className="text-slate-800 text-center">12월01일</div>
                                    </td>
                                    <td className="">
                                        <div className="text-slate-800 text-center">2,332명</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="">
                                        <div className="text-slate-800 text-center">12월01일</div>
                                    </td>
                                    <td className="">
                                        <div className="text-slate-800 text-center">2,332명</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="">
                                        <div className="text-slate-800 text-center">12월01일</div>
                                    </td>
                                    <td className="">
                                        <div className="text-slate-800 text-center">2,332명</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="">
                                        <div className="text-slate-800 text-center">12월01일</div>
                                    </td>
                                    <td className="">
                                        <div className="text-slate-800 text-center">2,332명</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="">
                                        <div className="text-slate-800 text-center">12월01일</div>
                                    </td>
                                    <td className="">
                                        <div className="text-slate-800 text-center">2,332명</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="">
                                        <div className="text-slate-800 text-center">12월01일</div>
                                    </td>
                                    <td className="">
                                        <div className="text-slate-800 text-center">2,332명</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="">
                                        <div className="text-slate-800 text-center">12월01일</div>
                                    </td>
                                    <td className="">
                                        <div className="text-slate-800 text-center">2,332명</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="">
                                        <div className="text-slate-800 text-center">12월01일</div>
                                    </td>
                                    <td className="">
                                        <div className="text-slate-800 text-center">2,332명</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="">
                                        <div className="text-slate-800 text-center">12월01일</div>
                                    </td>
                                    <td className="">
                                        <div className="text-slate-800 text-center">2,332명</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="">
                                        <div className="text-slate-800 text-center">12월01일</div>
                                    </td>
                                    <td className="">
                                        <div className="text-slate-800 text-center">2,332명</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="">
                                        <div className="text-slate-800 text-center">12월01일</div>
                                    </td>
                                    <td className="">
                                        <div className="text-slate-800 text-center">2,332명</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="">
                                        <div className="text-slate-800 text-center">12월01일</div>
                                    </td>
                                    <td className="">
                                        <div className="text-slate-800 text-center">2,332명</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="">
                                        <div className="text-slate-800 text-center">12월01일</div>
                                    </td>
                                    <td className="">
                                        <div className="text-slate-800 text-center">2,332명</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="">
                                        <div className="text-slate-800 text-center">12월01일</div>
                                    </td>
                                    <td className="">
                                        <div className="text-slate-800 text-center">2,332명</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="">
                                        <div className="text-slate-800 text-center">12월01일</div>
                                    </td>
                                    <td className="">
                                        <div className="text-slate-800 text-center">2,332명</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="">
                                        <div className="text-slate-800 text-center">12월01일</div>
                                    </td>
                                    <td className="">
                                        <div className="text-slate-800 text-center">2,332명</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="">
                                        <div className="text-slate-800 text-center">12월01일</div>
                                    </td>
                                    <td className="">
                                        <div className="text-slate-800 text-center">2,332명</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="">
                                        <div className="text-slate-800 text-center">12월01일</div>
                                    </td>
                                    <td className="">
                                        <div className="text-slate-800 text-center">2,332명</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="">
                                        <div className="text-slate-800 text-center">12월01일</div>
                                    </td>
                                    <td className="">
                                        <div className="text-slate-800 text-center">2,332명</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="">
                                        <div className="text-slate-800 text-center">12월01일</div>
                                    </td>
                                    <td className="">
                                        <div className="text-slate-800 text-center">2,332명</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="">
                                        <div className="text-slate-800 text-center">12월01일</div>
                                    </td>
                                    <td className="">
                                        <div className="text-slate-800 text-center">2,332명</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="">
                                        <div className="text-slate-800 text-center">12월01일</div>
                                    </td>
                                    <td className="">
                                        <div className="text-slate-800 text-center">2,332명</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="">
                                        <div className="text-slate-800 text-center">12월01일</div>
                                    </td>
                                    <td className="">
                                        <div className="text-slate-800 text-center">2,332명</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="">
                                        <div className="text-slate-800 text-center">12월01일</div>
                                    </td>
                                    <td className="">
                                        <div className="text-slate-800 text-center">2,332명</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="">
                                        <div className="text-slate-800 text-center">12월01일</div>
                                    </td>
                                    <td className="">
                                        <div className="text-slate-800 text-center">2,332명</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="">
                                        <div className="text-slate-800 text-center">12월01일</div>
                                    </td>
                                    <td className="">
                                        <div className="text-slate-800 text-center">2,332명</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="">
                                        <div className="text-slate-800 text-center">12월01일</div>
                                    </td>
                                    <td className="">
                                        <div className="text-slate-800 text-center">2,332명</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="">
                                        <div className="text-slate-800 text-center">12월01일</div>
                                    </td>
                                    <td className="">
                                        <div className="text-slate-800 text-center">2,332명</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="">
                                        <div className="text-slate-800 text-center">12월01일</div>
                                    </td>
                                    <td className="">
                                        <div className="text-slate-800 text-center">2,332명</div>
                                    </td>
                                </tr>

                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>

                    {/* 두번째 표 */}
                    <div className="px-5">
                        <div className="text-black font-semibold">요일별 방문자수</div>
                        <div className="">
                            {/* Table */}
                            <div className="overflow-x-auto">
                            <table className="table-auto w-full">
                                {/* Table header */}
                                <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
                                <tr>
                                    <th className="p-2">
                                        <div className="font-semibold text-center">요일별</div>
                                    </th>
                                    <th className="p-2">
                                        <div className="font-semibold text-center">월요일</div>
                                    </th>
                                    <th className="p-2">
                                        <div className="font-semibold text-center">화요일</div>
                                    </th>
                                    <th className="p-2">
                                        <div className="font-semibold text-center">수요일</div>
                                    </th>
                                    <th className="p-2">
                                        <div className="font-semibold text-center">목요일</div>
                                    </th>
                                    <th className="p-2">
                                        <div className="font-semibold text-center">금요일</div>
                                    </th>
                                    <th className="p-2">
                                        <div className="font-semibold text-center">토요일</div>
                                    </th>
                                    <th className="p-2">
                                        <div className="font-semibold text-center">일요일</div>
                                    </th>
                                </tr>
                                </thead>
                                {/* Table body */}
                                <tbody className="text-sm font-medium ">
                                {/* Row */}
                                <tr>
                                    <td className="p-2">
                                        <div className="text-slate-800 text-center">방문자</div>
                                    </td>
                                    <td className="p-2">
                                        <div className="text-slate-800 text-center">2,332명</div>
                                    </td>
                                    <td className="p-2">
                                        <div className="text-slate-800 text-center">2,332명</div>
                                    </td>
                                    <td className="p-2">
                                        <div className="text-slate-800 text-center">2,332명</div>
                                    </td>
                                    <td className="p-2">
                                        <div className="text-slate-800 text-center">2,332명</div>
                                    </td>
                                    <td className="p-2">
                                        <div className="text-slate-800 text-center">2,332명</div>
                                    </td>
                                    <td className="p-2">
                                        <div className="text-slate-800 text-center">2,332명</div>
                                    </td>
                                    <td className="p-2">
                                        <div className="text-slate-800 text-center">2,332명</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-2">
                                        <div className="text-slate-800 text-center">백분율</div>
                                    </td>
                                    <td className="p-2">
                                        <div className="text-slate-800 text-center">5%</div>
                                    </td>
                                    <td className="p-2">
                                        <div className="text-slate-800 text-center">5%</div>
                                    </td>
                                    <td className="p-2">
                                        <div className="text-slate-800 text-center">5%</div>
                                    </td>
                                    <td className="p-2">
                                        <div className="text-slate-800 text-center">5%</div>
                                    </td>
                                    <td className="p-2">
                                        <div className="text-slate-800 text-center">5%</div>
                                    </td>
                                    <td className="p-2">
                                        <div className="text-slate-800 text-center">5%</div>
                                    </td>
                                    <td className="p-2">
                                        <div className="text-slate-800 text-center">5%</div>
                                    </td>
                                </tr>

                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>

                </div>

                {/* 표 끝난후 */}

            </div>
        </div>
    )
} 

export default MonthReport;