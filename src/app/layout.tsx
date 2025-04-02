import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import {ToastContainer} from "react-toastify";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <link
                href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
                rel="stylesheet"/>
            <title>Task Management</title>
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="bg-orange-100 min-h-screen">
            <Navbar/>
            <div className="flex flex-row pt-24 px-10 pb-4">
                <Sidebar/>
                {children}
            </div>
        </div>
        <ToastContainer/>
        </body>
        </html>
    );
}
