"use client"
import React from 'react';

const accomplishments = [
    {
        title: "Android Development with Kotlin",
        organization: "GeeksforGeeks",
        dateRange: "Oct 2023",
        location: "1f8f5332f81c75d60ccc0d64a8d17969",
        proofUrl: "https://media.geeksforgeeks.org/courses/certificates/1f8f5332f81c75d60ccc0d64a8d17969.pdf"
    },
    {
        title: "Supreme Batch DSA Bootcamp",
        organization: "CodeHelp",
        dateRange: "Aug 2023",
        location: "OMSCXNHI",
        proofUrl: "https://learn.codehelp.in/share-certificate?serialno=OMSCXNHI"
    }
];

const Accomplishments = () => {
  return (
    <section className='text-white'>
      <div className='items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 flex flex-col-reverse md:flex-row'>
        <div className="md:w-2/3 space-y-5 sm:p-5 md:space-y-10 px-10 py-5">
          {accomplishments.map((acc, index) => (
            <div key={index} className="border-r-4 border-[#fefae0] pr-4">
              <h3 className="text-xl font-semibold">{acc.title}</h3>
              <p className="text-md">{acc.organization}</p>
              <p className="text-sm italic">{acc.dateRange} · {acc.location}</p>
              <button
                className="border-2 border-solid border-[#fefae0] hover:border-[#d4a373] text-white font-semibold py-2 px-4 rounded mt-2"
                onClick={() => window.open(acc.proofUrl, '_blank')}
              >
                PDF
              </button>
            </div>
          ))}
        </div>
        <div className='md:w-1/3 text-center justify-center p-5'>
          <h2 className="text-4xl font-bold text-white mb-4">Accomplishments and Certifications</h2>
        </div>
      </div>
    </section>
  )
}

export default Accomplishments;
