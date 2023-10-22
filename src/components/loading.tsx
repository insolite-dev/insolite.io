export default function LoadingIndicator() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-5 h-5 mx-1 bg-white rounded-full animate-bounce"></div>
            <div className="w-5 h-5 mx-1 bg-white rounded-full animate-bounce"></div>
            <div className="w-5 h-5 mx-1 bg-white rounded-full animate-bounce"></div>
        </div>
    );
}

