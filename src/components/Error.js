import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError()
    return (
        <div className="flex justify-center items-center min-h-[60vh] bg-orange-50">
            <div className="bg-white rounded-xl shadow-lg border border-orange-200 p-10 flex flex-col items-center max-w-md">
                <div className="text-6xl mb-4 text-orange-500">⚠️</div>
                <h1 className="text-2xl font-bold text-orange-600 mb-2">Oops!!</h1>
                <h2 className="text-lg text-gray-700 mb-2">Something went wrong!!</h2>
                <h3 className="text-base text-gray-500">{err.status}: {err.statusText}</h3>
            </div>
        </div>
    )
}

export default Error;