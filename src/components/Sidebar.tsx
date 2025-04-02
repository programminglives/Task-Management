import Link from "next/link";

function Sidebar() {
    return (
        <>
            <div className="w-2/12 mr-6">
                <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
                    <Link href="/" className="inline-block text-gray-600 hover:text-black my-4 w-full">
                        <span className="material-icons-outlined float-left pr-2">dashboard</span>
                        Home
                        <span className="material-icons-outlined float-right">keyboard_arrow_right</span>
                    </Link>
                    <Link href="/task/create"
                          className="inline-block text-gray-600 hover:text-black my-4 w-full">
                        <span className="material-icons-outlined float-left pr-2">file_copy</span>
                        Create New Task
                    </Link>
                </div>

                <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
                    <a href="" className="inline-block text-gray-600 hover:text-black my-4 w-full">
                        <span className="material-icons-outlined float-left pr-2">face</span>
                        Profile
                        <span className="material-icons-outlined float-right">keyboard_arrow_right</span>
                    </a>
                    <a href="" className="inline-block text-gray-600 hover:text-black my-4 w-full">
                        <span className="material-icons-outlined float-left pr-2">settings</span>
                        Settings
                        <span className="material-icons-outlined float-right">keyboard_arrow_right</span>
                    </a>
                    <a href="" className="inline-block text-gray-600 hover:text-black my-4 w-full">
                        <span className="material-icons-outlined float-left pr-2">power_settings_new</span>
                        Log out
                        <span className="material-icons-outlined float-right">keyboard_arrow_right</span>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Sidebar;