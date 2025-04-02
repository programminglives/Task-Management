import Link from "next/link";

function Navbar() {
    return (
        <>
            <div className="fixed bg-white text-blue-800 px-10 py-1 z-10 w-full">
                <div className="flex items-center justify-between py-2 text-5x1">
                    <div className="font-bold text-blue-900 text-xl">
                        <Link href="/">
                            Task <span className="text-orange-600">Management</span>
                        </Link>
                    </div>
                    <div className="flex items-center text-gray-500">
                        <span className="material-icons-outlined p-2">search</span>
                        <span className="material-icons-outlined p-2">notifications</span>
                        <div
                            className="bg-center bg-cover bg-no-repeat rounded-full inline-block h-12 w-12 ml-2"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;