const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                        <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">B</span>
                        </div>
                        <span className="text-xl font-bold">Bella Vista</span>
                    </div>
                    <p className="text-gray-400 mb-4">
                        Authentic Italian Cuisine Since 1985
                    </p>
                    <p className="text-gray-500 text-sm">
                        © 2024 Bella Vista Restaurant. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
