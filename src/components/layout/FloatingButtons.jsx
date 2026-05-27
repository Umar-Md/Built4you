"use client";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-[300] flex flex-col gap-3">
      {/* CALL */}
      <a
        href="tel:+917981122596"
        className="group w-[56px] h-[56px] rounded-full bg-[#1E1E20] border border-[#DD7E1F] flex items-center justify-center hover:bg-[#DD7E1F] transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 text-[#DD7E1F] group-hover:text-white transition-all duration-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a1.5 1.5 0 001.5-1.5v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.5 1.5 0 00-1.465.417l-.97.97a12.035 12.035 0 01-5.516-5.516l.97-.97a1.5 1.5 0 00.417-1.465L7.963 3.6A1.125 1.125 0 006.872 2.75H5.5A1.5 1.5 0 004 4.25v2.5z"
          />
        </svg>
      </a>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/917981122596"
        target="_blank"
        className="group w-[56px] rounded-full h-[56px] bg-[#1E1E20] border border-[#25D366] flex items-center justify-center hover:bg-[#25D366] transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-5 h-5 fill-[#25D366] group-hover:fill-white transition-all duration-300"
        >
          <path d="M16 .396C7.164.396 0 7.56 0 16.396c0 3.123.893 6.042 2.438 8.514L0 32l7.305-2.383a15.922 15.922 0 008.695 2.56c8.836 0 16-7.164 16-16S24.836.396 16 .396zm0 29.09a13.03 13.03 0 01-6.633-1.813l-.477-.283-4.336 1.414 1.414-4.227-.31-.49A13.015 13.015 0 013.004 16.4c0-7.18 5.82-13 13-13s13 5.82 13 13-5.82 13-13 13zm7.137-9.75c-.392-.196-2.32-1.145-2.68-1.277-.36-.131-.621-.196-.883.197-.261.392-1.014 1.277-1.244 1.538-.229.261-.458.294-.85.098-.392-.196-1.655-.61-3.154-1.944-1.166-1.04-1.954-2.323-2.183-2.715-.229-.392-.024-.604.172-.8.176-.175.392-.458.588-.687.196-.229.261-.392.392-.654.131-.261.065-.49-.033-.687-.098-.196-.883-2.123-1.21-2.91-.318-.764-.642-.66-.883-.672l-.752-.013c-.261 0-.687.098-1.047.49-.36.392-1.374 1.342-1.374 3.273s1.407 3.797 1.603 4.058c.196.261 2.77 4.23 6.71 5.93.938.405 1.67.647 2.24.828.94.299 1.796.257 2.473.156.754-.112 2.32-.948 2.647-1.864.327-.915.327-1.7.229-1.864-.098-.163-.36-.261-.752-.458z" />
        </svg>
      </a>
    </div>
  );
}