// import React, { useState } from "react";
// import {
//   Search,
//   Filter,
//   X,
//   User,
//   FileText,
//   Send,
//   ChevronRight,
//   ChevronLeft,
//   Ellipsis,
// } from "lucide-react";
// import { useGetUsersQuery } from "../../redux/features/baseApi";

// export default function UserManagement() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedUserId, setSelectedUserId] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState("userDetails");

//   const { data: allUsers } = useGetUsersQuery();
//   const userInfo = allUsers?.subscriptions || [];

//   // Find the selected user based on ID
//   const selectedUser =
//     userInfo.find((user) => user.id === selectedUserId) || null;

//   const openModal = (userId) => {
//     setSelectedUserId(userId);
//     setIsModalOpen(true);
//     document.body.classList.add("overflow-hidden");
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     document.body.classList.remove("overflow-hidden");
//     setTimeout(() => {
//       setSelectedUserId(null);
//     }, 300);
//   };

//   // Handle click outside modal to close it
//   const handleModalBackdropClick = (e) => {
//     if (e.target === e.currentTarget) {
//       closeModal();
//     }
//   };

//   // Handle escape key to close modal
//   React.useEffect(() => {
//     const handleEscKey = (e) => {
//       if (e.key === "Escape" && isModalOpen) {
//         closeModal();
//       }
//     };

//     window.addEventListener("keydown", handleEscKey);
//     return () => {
//       window.removeEventListener("keydown", handleEscKey);
//     };
//   }, [isModalOpen]);

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Page Title */}
//       <h1 className="text-2xl font-bold text-gray-800 mb-6">User Management</h1>

//       {/* Header with Search, Filter, and Add User */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
//         <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full md:w-auto">
//           <div className="relative w-full sm:w-64">
//             <input
//               type="text"
//               placeholder="Search users..."
//               className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//           </div>
//           <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors w-full sm:w-auto justify-center">
//             <Filter className="h-5 w-5 mr-2 text-gray-600" />
//             <span>Filter</span>
//           </button>
//         </div>
//       </div>

//       {/* Table */}
//       <div className="bg-white rounded-lg shadow overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead>
//               <tr className="bg-[#0A3161] text-white">
//                 <th className="py-3 px-4 text-left">User</th>
//                 <th className="py-3 px-4 text-left">Account Status</th>
//                 <th className="py-3 px-4 text-left">Role</th>
//                 <th className="py-3 px-4 text-left">Join Date</th>
//                 <th className="py-3 px-4 text-center">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {userInfo.length > 0 ? (
//                 userInfo.map((user, index) => (
//                   <tr
//                     key={user.id || index}
//                     className={`border-b hover:bg-gray-50 transition-colors ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
//                   >
//                     <td className="py-3 px-4">
//                       <div>
//                         <p className="font-medium text-gray-800">
//                           {user.user?.user_profile?.name || "N/A"}
//                         </p>
//                         <p className="text-sm text-gray-500">
//                           {user.user?.email || "N/A"}
//                         </p>
//                       </div>
//                     </td>
//                     <td className="py-3 px-4">
//                       <span
//                         className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
//                           user.status === "Active"
//                             ? "bg-green-100 text-green-800"
//                             : "bg-yellow-100 text-yellow-800"
//                         }`}
//                       >
//                         {user.status || "N/A"}
//                       </span>
//                     </td>
//                     <td className="py-3 px-4 text-gray-700">
//                       {user.user?.role || "N/A"}
//                     </td>
//                     <td className="py-3 px-4 text-gray-700">
//                       {user.user?.user_profile?.joined_date
//                         ? new Date(
//                             user.user.user_profile.joined_date
//                           ).toLocaleDateString("en-US", {
//                             year: "numeric",
//                             month: "long",
//                             day: "numeric",
//                           })
//                         : "N/A"}
//                     </td>
//                     <td className="py-3 px-4 text-center">
//                       <button
//                         className="p-1 rounded-full hover:bg-gray-200 transition-colors"
//                         onClick={() => openModal(user.id)}
//                         aria-label={`View details for ${user.user?.user_profile?.name || "user"}`}
//                       >
//                         <Ellipsis className="h-5 w-5 text-gray-600" />
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan={5} className="py-8 text-center text-gray-500">
//                     No users found matching your search criteria.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
//           <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
//             <div>
//               <p className="text-sm text-gray-700">
//                 Showing <span className="font-medium"></span> of{" "}
//                 <span className="font-medium">{userInfo.length}</span> results
//               </p>
//             </div>
//             <div>
//               <nav
//                 className="isolate inline-flex -space-x-px rounded-md shadow-sm"
//                 aria-label="Pagination"
//               >
//                 <a
//                   href="#"
//                   className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
//                 >
//                   <span className="sr-only">Previous</span>
//                   <ChevronLeft />
//                 </a>
//                 <a
//                   href="#"
//                   aria-current="page"
//                   className="relative z-10 inline-flex items-center bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
//                 >
//                   1
//                 </a>
//                 <a
//                   href="#"
//                   className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
//                 >
//                   <span className="sr-only">Next</span>
//                   <ChevronRight />
//                 </a>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       {isModalOpen && selectedUser && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 transition-opacity"
//           onClick={handleModalBackdropClick}
//           aria-modal="true"
//           role="dialog"
//         >
//           <div
//             className={`bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-hidden transform transition-all ${isModalOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Modal Header */}
//             <div className="flex justify-between items-center p-4 border-b">
//               <div className="flex items-center space-x-4">
//                 <div className="bg-[#0A3161] text-white rounded-full w-12 h-12 flex items-center justify-center">
//                   <span className="text-xl font-bold">
//                     {selectedUser.user?.user_profile?.name?.charAt(0) || "N/A"}
//                   </span>
//                 </div>
//                 <div>
//                   <p className="font-bold text-lg text-gray-800">
//                     {selectedUser.user?.user_profile?.name || "N/A"}
//                   </p>
//                   <p className="text-sm text-gray-500">
//                     {selectedUser.user?.email || "N/A"}
//                   </p>
//                 </div>
//               </div>
//               <button
//                 onClick={closeModal}
//                 className="p-1 rounded-full hover:bg-gray-200 transition-colors"
//                 aria-label="Close modal"
//               >
//                 <X className="h-6 w-6 text-gray-500" />
//               </button>
//             </div>

//             {/* Toggle Button for Status */}
//             <div className="flex items-center p-4 border-b">
//               <div className="flex items-center justify-between w-full">
//                 <span className="text-gray-700 font-medium">
//                   Account Status
//                 </span>
//                 <div className="flex items-center gap-2">
//                   <span
//                     className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
//                       selectedUser.status === "Active"
//                         ? "bg-green-100 text-green-800"
//                         : "bg-yellow-100 text-yellow-800"
//                     }`}
//                   >
//                     {selectedUser.status || "N/A"}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Tabs */}
//             <div className="flex border-b">
//               <button
//                 className={`flex items-center px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
//                   activeTab === "userDetails"
//                     ? "border-blue-600 text-blue-600"
//                     : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//                 }`}
//                 onClick={() => setActiveTab("userDetails")}
//               >
//                 <User className="h-4 w-4 mr-2" />
//                 User Details
//               </button>
//               <button
//                 className={`flex items-center px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
//                   activeTab === "documents"
//                     ? "border-blue-600 text-blue-600"
//                     : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//                 }`}
//                 onClick={() => setActiveTab("documents")}
//               >
//                 <FileText className="h-4 w-4 mr-2" />
//                 Documents
//               </button>
//               <button
//                 className={`flex items-center px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
//                   activeTab === "submissions"
//                     ? "border-blue-600 text-blue-600"
//                     : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//                 }`}
//                 onClick={() => setActiveTab("submissions")}
//               >
//                 <Send className="h-4 w-4 mr-2" />
//                 Submissions
//               </button>
//             </div>

//             {/* Tab Content */}
//             <div className="p-4 overflow-y-auto max-h-[50vh]">
//               {activeTab === "userDetails" && (
//                 <div className="space-y-4">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div className="bg-gray-50 p-3 rounded-lg">
//                       <p className="text-xs text-gray-500 mb-1">Email</p>
//                       <p className="font-medium text-gray-800">
//                         {selectedUser.user?.email || "N/A"}
//                       </p>
//                     </div>
//                     <div className="bg-gray-50 p-3 rounded-lg">
//                       <p className="text-xs text-gray-500 mb-1">Join Date</p>
//                       <p className="font-medium text-gray-800">
//                         {selectedUser.user?.user_profile?.joined_date
//                           ? new Date(
//                               selectedUser.user.user_profile.joined_date
//                             ).toLocaleDateString("en-US", {
//                               year: "numeric",
//                               month: "long",
//                               day: "numeric",
//                             })
//                           : "N/A"}
//                       </p>
//                     </div>
//                   </div>
//                   <div className="bg-gray-50 p-3 rounded-lg">
//                     <p className="text-xs text-gray-500 mb-1">Address</p>
//                     <p className="font-medium text-gray-800">
//                       {selectedUser.user?.user_profile?.address || "N/A"}
//                     </p>
//                   </div>
//                   <div className="bg-gray-50 p-3 rounded-lg">
//                     <p className="text-xs text-gray-500 mb-1">
//                       Service History
//                     </p>
//                     <p className="font-medium text-gray-800">
//                       {selectedUser.user?.user_profile?.serviceHistory || "N/A"}
//                     </p>
//                   </div>
//                 </div>
//               )}
//               {activeTab === "documents" && (
//                 <div className="flex flex-col items-center justify-center py-8 text-center">
//                   <FileText className="h-12 w-12 text-gray-300 mb-2" />
//                   <p className="text-gray-500 mb-2">No documents available</p>
//                 </div>
//               )}
//               {activeTab === "submissions" && (
//                 <div className="flex flex-col items-center justify-center py-8 text-center">
//                   <Send className="h-12 w-12 text-gray-300 mb-2" />
//                   <p className="text-gray-500 mb-2">
//                     Submissions: {selectedUser.submissions || "N/A"}
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

//final code
import React, { useState } from "react";
import {
  Search,
  Filter,
  Ellipsis,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useGetUsersQuery } from "../../redux/features/baseApi";
import UserModal from "./Modal/UserModal";

export default function UserManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: allUsers } = useGetUsersQuery();
  const userInfo = allUsers?.subscriptions || [];

  const openModal = (userId) => {
    setSelectedUserId(userId);
    setIsModalOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove("overflow-hidden");
    setTimeout(() => {
      setSelectedUserId(null);
    }, 300);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">User Management</h1>

      {/* Header with Search, Filter */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full md:w-auto">
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search users..."
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors w-full sm:w-auto justify-center">
            <Filter className="h-5 w-5 mr-2 text-gray-600" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#0A3161] text-white">
                <th className="py-3 px-4 text-left">User</th>
                <th className="py-3 px-4 text-left">Account Status</th>
                <th className="py-3 px-4 text-left">Role</th>
                <th className="py-3 px-4 text-left">Join Date</th>
                <th className="py-3 px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {userInfo.length > 0 ? (
                userInfo.map((user, index) => (
                  <tr
                    key={user.id || index}
                    className={`border-b hover:bg-gray-50 transition-colors ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                  >
                    <td className="py-3 px-4">
                      <div>
                        <p className="font-medium text-gray-800">
                          {user.user?.user_profile?.name || "N/A"}
                        </p>
                        <p className="text-sm text-gray-500">
                          {user.user?.email || "N/A"}
                        </p>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          user.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {user.status || "N/A"}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-700">
                      {user.user?.role || "N/A"}
                    </td>
                    <td className="py-3 px-4 text-gray-700">
                      {user.user?.user_profile?.joined_date
                        ? new Date(
                            user.user.user_profile.joined_date
                          ).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })
                        : "N/A"}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <button
                        className="p-1 rounded-full hover:bg-gray-200 transition-colors"
                        onClick={() => openModal(user.id)}
                        aria-label={`View details for ${user.user?.user_profile?.name || "user"}`}
                      >
                        <Ellipsis className="h-5 w-5 text-gray-600" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-gray-500">
                    No users found matching your search criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to{" "}
                <span className="font-medium">
                  {userInfo.length > 10 ? 10 : userInfo.length}
                </span>{" "}
                of <span className="font-medium">{userInfo.length}</span>{" "}
                results
              </p>
            </div>
            <div>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeft />
                </a>
                <a
                  href="#"
                  aria-current="page"
                  className="relative z-10 inline-flex items-center bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  1
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
                  <ChevronRight />
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* User Modal */}
      <UserModal
        userInfo={userInfo}
        selectedUserId={selectedUserId}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />
    </div>
  );
}
