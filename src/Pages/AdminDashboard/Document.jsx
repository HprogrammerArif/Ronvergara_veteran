import React, { useState } from "react";
import { Search, Filter, MoreVertical, X } from "lucide-react";
import { PiFilePdf } from "react-icons/pi";
import { VscFilePdf } from "react-icons/vsc";

const documentsData = [
  { document: "DD-214.pdf", uploadedBy: "Pappy roy", email: "pappyroy6539@gmail.com", uploadDate: "Jun 16, 2023", status: "Verified", date: "Jan 15, 2023", documentType: "Military Services Record", description: "Certificate Of Release Or Discharge From Active Duty" },
  { document: "DD-214.pdf", uploadedBy: "Pappy roy", email: "pappyroy6539@gmail.com", uploadDate: "Jun 16, 2023", status: "Pending", date: "Jan 15, 2023", documentType: "Military Services Record", description: "Certificate Of Release Or Discharge From Active Duty" },
  { document: "DD-214.pdf", uploadedBy: "Pappy roy", email: "pappyroy6539@gmail.com", uploadDate: "Jun 16, 2023", status: "Verified", date: "Jan 15, 2023", documentType: "Military Services Record", description: "Certificate Of Release Or Discharge From Active Duty" },
  { document: "DD-214.pdf", uploadedBy: "Pappy roy", email: "pappyroy6539@gmail.com", uploadDate: "Jun 16, 2023", status: "Pending", date: "Jan 15, 2023", documentType: "Military Services Record", description: "Certificate Of Release Or Discharge From Active Duty" },
  { document: "DD-214.pdf", uploadedBy: "Pappy roy", email: "pappyroy6539@gmail.com", uploadDate: "Jun 16, 2023", status: "Verified", date: "Jan 15, 2023", documentType: "Military Services Record", description: "Certificate Of Release Or Discharge From Active Duty" },
  { document: "DD-214.pdf", uploadedBy: "Pappy roy", email: "pappyroy6539@gmail.com", uploadDate: "Jun 16, 2023", status: "Pending", date: "Jan 15, 2023", documentType: "Military Services Record", description: "Certificate Of Release Or Discharge From Active Duty" },
  { document: "DD-214.pdf", uploadedBy: "Pappy roy", email: "pappyroy6539@gmail.com", uploadDate: "Jun 16, 2023", status: "Verified", date: "Jan 15, 2023", documentType: "Military Services Record", description: "Certificate Of Release Or Discharge From Active Duty" },
  { document: "DD-214.pdf", uploadedBy: "Pappy roy", email: "pappyroy6539@gmail.com", uploadDate: "Jun 16, 2023", status: "Pending", date: "Jan 15, 2023", documentType: "Military Services Record", description: "Certificate Of Release Or Discharge From Active Duty" },
  { document: "DD-214.pdf", uploadedBy: "Pappy roy", email: "pappyroy6539@gmail.com", uploadDate: "Jun 16, 2023", status: "Verified", date: "Jan 15, 2023", documentType: "Military Services Record", description: "Certificate Of Release Or Discharge From Active Duty" },
  { document: "DD-214.pdf", uploadedBy: "Pappy roy", email: "pappyroy6539@gmail.com", uploadDate: "Jun 16, 2023", status: "Pending", date: "Jan 15, 2023", documentType: "Military Services Record", description: "Certificate Of Release Or Discharge From Active Duty" },
];

export default function Document() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredDocuments = documentsData.filter(
    (doc) =>
      doc.document.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.uploadedBy.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (doc) => {
    setSelectedDocument(doc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDocument(null);
  };

  return (
    <div className=" bg-gray-50 min-h-screen">
      {/* Header with Search and Filter */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered pl-10 w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          <button className="btn btn-outline dark:text-gray-900">
            <Filter className="h-5 w-5 mr-2" />
            Filter
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="bg-[#0A3161] text-white">
              <th className="py-3 px-4">Document</th>
              <th className="py-3 px-4">Uploaded By</th>
              <th className="py-3 px-4">Upload Date</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredDocuments.map((doc, index) => (
              <tr key={index} className="border-b dark:text-gray-900">
                <td className="py-3 px-4 flex items-center gap-2">
                    <VscFilePdf  size={20}/>
                    {doc.document}
                </td>
                <td className="py-3 px-4">
                  <div>
                    <p className="font-medium">{doc.uploadedBy}</p>
                    <p className="text-sm text-gray-500">{doc.email}</p>
                  </div>
                </td>
                <td className="py-3 px-4">{doc.uploadDate}</td>
                <td className="py-3 px-4">
                  <span
                    className={`badge ${
                      doc.status === "Verified"
                        ? "badge-success"
                        : "badge-warning"
                    } text-white`}
                  >
                    {doc.status}
                  </span>
                </td>
                <td className="py-3 px-4">{doc.date}</td>
                <td className="py-3 px-4">
                  <button
                    className="btn btn-ghost btn-sm"
                    onClick={() => openModal(doc)}
                  >
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && selectedDocument && (
        <div className="modal modal-open">
          <div className="modal-box max-w-2xl dark:text-gray-200">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-4">
                <div className="avatar placeholder">
                  <div className="bg-[#0A3161] text-white rounded-full w-12 h-12 flex items-center justify-center">
                    <span className="text-xl">
                      {selectedDocument.uploadedBy.charAt(0)}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="font-bold text-lg">{selectedDocument.uploadedBy}</p>
                  <p className="text-sm text-gray-100">{selectedDocument.email}</p>
                </div>
              </div>
              <button onClick={closeModal} className="btn btn-sm btn-circle">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Status Badge */}
            <div className="flex items-center mb-4">
              <span
                className={`badge ${
                  selectedDocument.status === "Verified"
                    ? "badge-success"
                    : "badge-warning"
                } text-white`}
              >
                {selectedDocument.status}
              </span>
            </div>

            {/* Document Details */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">File Name</p>
                  <p className="font-medium">{selectedDocument.document}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Document Type</p>
                  <p className="font-medium">{selectedDocument.documentType}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500">Description</p>
                <p className="font-medium">{selectedDocument.description}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Document preview</p>
                <div className="border border-gray-200 rounded-lg p-4 text-center h-48 flex items-center justify-center">
                  <p className="text-gray-500">Document preview unavailable here</p>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}