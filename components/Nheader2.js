import { GlobeIcon } from "@heroicons/react/solid";

const Nheader2 = ({gb}) => {
    console.log(gb)
    return (
        <div className="border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px justify-center">
                <li className="mr-2">
                    {
                        gb == '1' ? 
                            <div>
                                <a href="/dashboard" className="inline-flex py-4 px-4 text-sm font-medium text-center text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500 group" aria-current="page">
                                    <GlobeIcon className="mr-2 w-5 h-5 text-blue-600 dark:text-blue-500" />
                                    대시보드
                                </a>
                            </div>
                            : 
                            <div>
                                <a href="/dashboard" className="inline-flex py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 group">
                                    <GlobeIcon className="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"/>
                                    대시보드
                                </a>
                            </div>
                    }
                </li>
                <li className="mr-2">
                    {
                        gb == '2' ? 
                            <div>
                                <a href="/analysis" className="inline-flex py-4 px-4 text-sm font-medium text-center text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500 group" aria-current="page">
                                    <GlobeIcon className="mr-2 w-5 h-5 text-blue-600 dark:text-blue-500" />
                                    통합분석
                                </a>
                            </div>
                            : 
                            <div>
                                <a href="/analysis" className="inline-flex py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 group">
                                    <GlobeIcon className="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"/>
                                    통합분석
                                </a>
                            </div>
                    }
                </li>
                <li className="mr-2">
                    {
                        gb == '3' ? 
                            <div>
                                <a href="/compare" className="inline-flex py-4 px-4 text-sm font-medium text-center text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500 group" aria-current="page">
                                    <GlobeIcon className="mr-2 w-5 h-5 text-blue-600 dark:text-blue-500" />
                                    비교분석
                                </a>
                            </div>
                            : 
                            <div>
                                <a href="/compare" className="inline-flex py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 group">
                                    <GlobeIcon className="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"/>
                                    비교분석
                                </a>
                            </div>
                    }
                </li>
                <li className="mr-2">
                    {
                        gb == '4' ? 
                            <div>
                                <a href="/compare" className="inline-flex py-4 px-4 text-sm font-medium text-center text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500 group" aria-current="page">
                                    <GlobeIcon className="mr-2 w-5 h-5 text-blue-600 dark:text-blue-500" />
                                    분석리포트
                                </a>
                            </div>
                            : 
                            <div>
                                <a href="/compare" className="inline-flex py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 group">
                                    <GlobeIcon className="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"/>
                                    분석리포트
                                </a>
                            </div>
                    }
                </li>
            </ul>
        </div>
    )
}

export default Nheader2;