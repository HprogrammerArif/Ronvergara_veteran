// import React, { useState } from "react";
// import { Search, Filter, MoreVertical } from "lucide-react";

// const formsData = [
//   { form: "VA-21-526EZ", submittedBy: "Pappy roy", status: "Ready to submit", faxStatus: "Sent", submittedDate: "Jan 15, 2023" },
//   { form: "VA-21-526EZ", submittedBy: "Pappy roy", status: "Sent", faxStatus: "Sent", submittedDate: "Jan 15, 2023" },
//   { form: "VA-21-526EZ", submittedBy: "Pappy roy", status: "Pending", faxStatus: "Sent", submittedDate: "Jan 15, 2023" },
//   { form: "VA-21-526EZ", submittedBy: "Pappy roy", status: "Failed", faxStatus: "Sent", submittedDate: "Jan 15, 2023" },
//   { form: "VA-21-526EZ", submittedBy: "Pappy roy", status: "Ready to submit", faxStatus: "Sent", submittedDate: "Jan 15, 2023" },
//   { form: "VA-21-526EZ", submittedBy: "Pappy roy", status: "Sent", faxStatus: "Sent", submittedDate: "Jan 15, 2023" },
//   { form: "VA-21-526EZ", submittedBy: "Pappy roy", status: "Pending", faxStatus: "Sent", submittedDate: "Jan 15, 2023" },
//   { form: "VA-21-526EZ", submittedBy: "Pappy roy", status: "Failed", faxStatus: "Sent", submittedDate: "Jan 15, 2023" },
//   { form: "VA-21-526EZ", submittedBy: "Pappy roy", status: "Ready to submit", faxStatus: "Sent", submittedDate: "Jan 15, 2023" },
//   { form: "VA-21-526EZ", submittedBy: "Pappy roy", status: "Sent", faxStatus: "Sent", submittedDate: "Jan 15, 2023" },
// ];

// export default function Submission() {
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredForms = formsData.filter(
//     (form) =>
//       form.form.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       form.submittedBy.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className=" bg-gray-50 min-h-screen">
//       {/* Header with Search and Filter */}
//       <div className="flex justify-between items-center mb-6">
//         <div className="flex items-center space-x-4">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search"
//               className="input input-bordered pl-10 w-64"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//           </div>
//           <button className="btn btn-outline dark:text-gray-900">
//             <Filter className="h-5 w-5 mr-2" />
//             Filter
//           </button>
//         </div>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="table w-full">
//           <thead>
//             <tr className="bg-[#0A3161] text-white">
//               <th className="py-3 px-4">Form</th>
//               <th className="py-3 px-4">Submitted By</th>
//               <th className="py-3 px-4">Status</th>
//               <th className="py-3 px-4">Fax Status</th>
//               <th className="py-3 px-4">Submitted Date</th>

//             </tr>
//           </thead>
//           <tbody>
//             {filteredForms.map((form, index) => (
//               <tr key={index} className="border-b dark:text-gray-900">
//                 <td className="py-3 px-4">{form.form}</td>
//                 <td className="py-3 px-4">{form.submittedBy}</td>
//                 <td className="py-3 px-4">
//                   <span
//                     className={`badge ${
//                       form.status === "Ready to submit"
//                         ? "badge-info"
//                         : form.status === "Sent"
//                         ? "badge-success"
//                         : form.status === "Pending"
//                         ? "badge-warning"
//                         : "badge-error"
//                     } text-white`}
//                   >
//                     {form.status}
//                   </span>
//                 </td>
//                 <td className="py-3 px-4">
//                   <span className="badge badge-success text-white">
//                     {form.faxStatus}
//                   </span>
//                 </td>
//                 <td className="py-3 px-4">{form.submittedDate}</td>
          
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }