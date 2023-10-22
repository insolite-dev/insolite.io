import InsoliteLogo from '@/components/insolite_logo';

export default function NotFound({ params }: any) {
    const slogElements = `Couldn't connect the dots for "insolite.io/${params}"`.split(' ').map((char, index) => (
        <span key={index}>{char}{' '}</span>
    ));
    return (
        <div className="notfound">
            <div className="flex flex-row justify-center items-center space-x-8">
                <a href="/"> <InsoliteLogo size="150" color="white" /> </a>
                <h1 className="display-1 text-white">404</h1>
            </div>
            <div className="mb-10" />
            <h2 className="animated display-4 animated-mission"> {slogElements} </h2>
        </div>
    );
}

