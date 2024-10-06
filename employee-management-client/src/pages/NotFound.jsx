import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-white mb-4">404</h1>
                <h2 className="text-3xl text-white font-semibold mb-6">Page Not Found</h2>
                <p className="text-white mb-8 text-lg">
                    <p>Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
                </p>
                <Link
                    to="/users"
                    className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
}

export default NotFound;
