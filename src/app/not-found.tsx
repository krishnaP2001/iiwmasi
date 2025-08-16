import Image from "next/image";
import { notfound } from "@/assets";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-center p-6">
      <Image src={notfound} alt="Page Not Found" width={400} height={400} />
      <h1 className="text-3xl font-bold mt-6">Under Construction</h1>
      <p className="text-gray-500 mt-2">
        We’re working hard to bring you something amazing. Please check back
        soon!
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg hover:green-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
