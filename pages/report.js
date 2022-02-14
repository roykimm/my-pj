import Head from "next/head";
import Nheader from "../components/Nheader";
import Nheader2 from "../components/Nheader2";
import {useRouter} from "next/Router"

const Report = () => {

    const router = useRouter();

    return (
        <div>
            <Head>
                <title>고성군 대시보드</title>
                <link rel="icon" href="/gosung_favicon.png" />
            </Head>
            <Nheader />
            <Nheader2 gb="4" />
            <div className="max-w-[500px] bg-white shadow-lg rounded-sm border border-slate-200 mt-5 text-center mx-auto">
                <header className="px-5 py-4 border-b border-slate-100">
                    <h2 className="font-semibold text-slate-800">주요관광지 유동인구 분석자료</h2>
                    
                </header>
                <div className="flex text-center justify-center items-center">
                    <select id="location" name="location" className="mt-1 w-30 pl-3 pr-10 py-2 text-black border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                        <option selected>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                    </select>
                </div>
                <div className="p-3">
                    {/* Table */}
                    <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        {/* Table header */}
                        <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
                        <tr>
                            <th className="p-2">
                                <div className="font-semibold text-center">월별 분석자료</div>
                            </th>
                            <th className="p-2">
                                <div className="font-semibold text-center">분석의견</div>
                            </th>
                            <th className="p-2">
                                <div className="font-semibold text-center">이동</div>
                            </th>
                        </tr>
                        </thead>
                        {/* Table body */}
                        <tbody className="text-sm font-medium ">
                        {/* Row */}
                        <tr>
                            <td className="p-2">
                                <div className="text-slate-800 text-center">1월 분석자료</div>
                            </td>
                            <td className="p-2">
                                <input id="offers" aria-describedby="offers-description" name="offers" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded items-center" />
                            </td>
                            <td className="p-2">
                                <button className="my-btn-blue" onClick={() => router.push('/monthreport/id=1')}>보기</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-2">
                                <div className="text-slate-800 text-center">2월 분석자료</div>
                            </td>
                            <td className="p-2">
                                <input id="offers" aria-describedby="offers-description" name="offers" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded items-center" />
                            </td>
                            <td className="p-2">
                                <button className="my-btn-blue">보기</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-2">
                                <div className="text-slate-800 text-center">3월 분석자료</div>
                            </td>
                            <td className="p-2">
                                <input id="offers" aria-describedby="offers-description" name="offers" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded items-center" />
                            </td>
                            <td className="p-2">
                                <button className="my-btn-blue">보기</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-2">
                                <div className="text-slate-800 text-center">4월 분석자료</div>
                            </td>
                            <td className="p-2">
                                <input id="offers" aria-describedby="offers-description" name="offers" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded items-center" />
                            </td>
                            <td className="p-2">
                                <button className="my-btn-blue">보기</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-2">
                                <div className="text-slate-800 text-center">5월 분석자료</div>
                            </td>
                            <td className="p-2">
                                <input id="offers" aria-describedby="offers-description" name="offers" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded items-center" />
                            </td>
                            <td className="p-2">
                                <button className="my-btn-blue">보기</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-2">
                                <div className="text-slate-800 text-center">6월 분석자료</div>
                            </td>
                            <td className="p-2">
                                <input id="offers" aria-describedby="offers-description" name="offers" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded items-center" />
                            </td>
                            <td className="p-2">
                                <button className="my-btn-blue">보기</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-2">
                                <div className="text-slate-800 text-center">7월 분석자료</div>
                            </td>
                            <td className="p-2">
                                <input id="offers" aria-describedby="offers-description" name="offers" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded items-center" />
                            </td>
                            <td className="p-2">
                                <button className="my-btn-blue">보기</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-2">
                                <div className="text-slate-800 text-center">8월 분석자료</div>
                            </td>
                            <td className="p-2">
                                <input id="offers" aria-describedby="offers-description" name="offers" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded items-center" />
                            </td>
                            <td className="p-2">
                                <button className="my-btn-blue">보기</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-2">
                                <div className="text-slate-800 text-center">9월 분석자료</div>
                            </td>
                            <td className="p-2">
                                <input id="offers" aria-describedby="offers-description" name="offers" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded items-center" />
                            </td>
                            <td className="p-2">
                                <button className="my-btn-blue">보기</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-2">
                                <div className="text-slate-800 text-center">10월 분석자료</div>
                            </td>
                            <td className="p-2">
                                <input id="offers" aria-describedby="offers-description" name="offers" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded items-center" />
                            </td>
                            <td className="p-2">
                                <button className="my-btn-blue">보기</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-2">
                                <div className="text-slate-800 text-center">11월 분석자료</div>
                            </td>
                            <td className="p-2">
                                <input id="offers" aria-describedby="offers-description" name="offers" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded items-center" />
                            </td>
                            <td className="p-2">
                                <button className="my-btn-blue">보기</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-2">
                                <div className="text-slate-800 text-center">12월 분석자료</div>
                            </td>
                            <td className="p-2">
                                <input id="offers" aria-describedby="offers-description" name="offers" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded items-center" />
                            </td>
                            <td className="p-2">
                                <button className="my-btn-blue">보기</button>
                            </td>
                        </tr>

                        </tbody>
                    </table>

                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Report;