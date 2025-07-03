import { useState } from "react";
import { Search, Filter, MoreVertical, X } from "lucide-react";
import { useGetFormsQuery } from "../../redux/features/baseApi";
import { form } from "framer-motion/client";

const submissionsData = [
  { form: "VA-21-526EZ", submittedBy: "Pappy roy", status: "Pending review", submittedDate: "Jan 15, 2023", veteranName: "John Smith", serviceBranch: "US Army", serviceHistory: "US Army, 2010-2018", lastLogin: "Today at 9:42 AM", disabilities: ["Post-Traumatic Stress Disorder", "Hearing Loss", "Back Injury"], documents: ["Medical Records", "DD-214 Certificate", "Personal Statement"] },
  { form: "VA-21-526EZ", submittedBy: "Pappy roy", status: "Approved", submittedDate: "Jan 15, 2023", veteranName: "John Smith", serviceBranch: "US Army", serviceHistory: "US Army, 2010-2018", lastLogin: "Today at 9:42 AM", disabilities: ["Post-Traumatic Stress Disorder", "Hearing Loss", "Back Injury"], documents: ["Medical Records", "DD-214 Certificate", "Personal Statement"] },
  { form: "VA-21-526EZ", submittedBy: "Pappy roy", status: "Pending review", submittedDate: "Jan 15, 2023", veteranName: "John Smith", serviceBranch: "US Army", serviceHistory: "US Army, 2010-2018", lastLogin: "Today at 9:42 AM", disabilities: ["Post-Traumatic Stress Disorder", "Hearing Loss", "Back Injury"], documents: ["Medical Records", "DD-214 Certificate", "Personal Statement"] },
  { form: "VA-21-526EZ", submittedBy: "Pappy roy", status: "Rejected", submittedDate: "Jan 15, 2023", veteranName: "John Smith", serviceBranch: "US Army", serviceHistory: "US Army, 2010-2018", lastLogin: "Today at 9:42 AM", disabilities: ["Post-Traumatic Stress Disorder", "Hearing Loss", "Back Injury"], documents: ["Medical Records", "DD-214 Certificate", "Personal Statement"] },
  { form: "VA-21-526EZ", submittedBy: "Pappy roy", status: "Pending review", submittedDate: "Jan 15, 2023", veteranName: "John Smith", serviceBranch: "US Army", serviceHistory: "US Army, 2010-2018", lastLogin: "Today at 9:42 AM", disabilities: ["Post-Traumatic Stress Disorder", "Hearing Loss", "Back Injury"], documents: ["Medical Records", "DD-214 Certificate", "Personal Statement"] },
  { form: "VA-21-526EZ", submittedBy: "Pappy roy", status: "Approved", submittedDate: "Jan 15, 2023", veteranName: "John Smith", serviceBranch: "US Army", serviceHistory: "US Army, 2010-2018", lastLogin: "Today at 9:42 AM", disabilities: ["Post-Traumatic Stress Disorder", "Hearing Loss", "Back Injury"], documents: ["Medical Records", "DD-214 Certificate", "Personal Statement"] },
  { form: "VA-21-526EZ", submittedBy: "Pappy roy", status: "Pending review", submittedDate: "Jan 15, 2023", veteranName: "John Smith", serviceBranch: "US Army", serviceHistory: "US Army, 2010-2018", lastLogin: "Today at 9:42 AM", disabilities: ["Post-Traumatic Stress Disorder", "Hearing Loss", "Back Injury"], documents: ["Medical Records", "DD-214 Certificate", "Personal Statement"] },
  { form: "VA-21-526EZ", submittedBy: "Pappy roy", status: "Rejected", submittedDate: "Jan 15, 2023", veteranName: "John Smith", serviceBranch: "US Army", serviceHistory: "US Army, 2010-2018", lastLogin: "Today at 9:42 AM", disabilities: ["Post-Traumatic Stress Disorder", "Hearing Loss", "Back Injury"], documents: ["Medical Records", "DD-214 Certificate", "Personal Statement"] },
  { form: "VA-21-526EZ", submittedBy: "Pappy roy", status: "Pending review", submittedDate: "Jan 15, 2023", veteranName: "John Smith", serviceBranch: "US Army", serviceHistory: "US Army, 2010-2018", lastLogin: "Today at 9:42 AM", disabilities: ["Post-Traumatic Stress Disorder", "Hearing Loss", "Back Injury"], documents: ["Medical Records", "DD-214 Certificate", "Personal Statement"] },
  { form: "VA-21-526EZ", submittedBy: "Pappy roy", status: "Approved", submittedDate: "Jan 15, 2023", veteranName: "John Smith", serviceBranch: "US Army", serviceHistory: "US Army, 2010-2018", lastLogin: "Today at 9:42 AM", disabilities: ["Post-Traumatic Stress Disorder", "Hearing Loss", "Back Injury"], documents: ["Medical Records", "DD-214 Certificate", "Personal Statement"] },
];

export default function FormView() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {data:formData, isLoading} = useGetFormsQuery();
  console.log("formData", formData)

  const filteredSubmissions = submissionsData.filter(
    (submission) =>
      submission.form.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.submittedBy.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (submission) => {
    setSelectedSubmission(submission);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSubmission(null);
  };

  const handleReject = () => {
    if (selectedSubmission) {
      const updatedSubmission = { ...selectedSubmission, status: "Rejected" };
      setSelectedSubmission(updatedSubmission);
      const submissionIndex = submissionsData.findIndex(
        (s) => s.submittedDate === updatedSubmission.submittedDate
      );
      submissionsData[submissionIndex] = updatedSubmission;
      closeModal();
    }
  };

  const handleApprove = () => {
    if (selectedSubmission) {
      const updatedSubmission = { ...selectedSubmission, status: "Approved" };
      setSelectedSubmission(updatedSubmission);
      const submissionIndex = submissionsData.findIndex(
        (s) => s.submittedDate === updatedSubmission.submittedDate
      );
      submissionsData[submissionIndex] = updatedSubmission;
      closeModal();
    }
  };

  const handleDownload = () => {
    // Placeholder for download functionality
    alert("Downloading form...");
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
          <button className="btn btn-outline">
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
              <th className="py-3 px-4">Form</th>
              <th className="py-3 px-4">Submitted By</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Submitted Date</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredSubmissions.map((submission, index) => (
              <tr key={index} className="border-b dark:text-gray-900 ">
                <td className="py-3 px-4">{submission.form}</td>
                <td className="py-3 px-4">{submission.submittedBy}</td>
                <td className="py-3 px-4">
                  <span
                    className={`badge ${
                      submission.status === "Approved"
                        ? "badge-success"
                        : submission.status === "Rejected"
                        ? "badge-error"
                        : "badge-warning"
                    } text-white`}
                  >
                    {submission.status}
                  </span>
                </td>
                <td className="py-3 px-4">{submission.submittedDate}</td>
                <td className="py-3 px-4">
                  <button
                    className="btn btn-ghost btn-sm"
                    onClick={() => openModal(submission)}
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
      {isModalOpen && selectedSubmission && (
        <div className="modal modal-open">
          <div className="modal-box max-w-lg">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-4">
                <div className="avatar placeholder">
                  <div className="bg-[#0A3161] text-white rounded-full w-12 h-12 flex items-center justify-center">
                    <span className="text-xl">
                      {selectedSubmission.veteranName.charAt(0)}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="font-bold text-lg">{selectedSubmission.veteranName}</p>
                  <p className="text-sm text-gray-500">{selectedSubmission.submittedBy}</p>
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
                  selectedSubmission.status === "Approved"
                    ? "badge-success"
                    : selectedSubmission.status === "Rejected"
                    ? "badge-error"
                    : "badge-warning"
                } text-white`}
              >
                {selectedSubmission.status}
              </span>
            </div>

            {/* Veteran Details */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Veteran Name</p>
                  <p className="font-medium">{selectedSubmission.veteranName}</p>
                  <p className="text-sm text-gray-500">{selectedSubmission.serviceBranch}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Service History</p>
                  <p className="font-medium">{selectedSubmission.serviceHistory}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500">Last login</p>
                <p className="font-medium">{selectedSubmission.lastLogin}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Claimed Disabilities</p>
                <ul className="list-disc list-inside">
                  {selectedSubmission.disabilities.map((disability, index) => (
                    <li key={index} className="text-sm">{disability}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Supporting Documents</p>
                <ul className="list-disc list-inside">
                  {selectedSubmission.documents.map((doc, index) => (
                    <li key={index} className="text-sm">{doc}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-2 mt-6">
              <button
                className="btn btn-error btn-outline"
                onClick={handleReject}
              >
                Reject
              </button>
              <button
                className="btn btn-success"
                onClick={handleApprove}
              >
                Approve
              </button>
              <button
                className="btn btn-warning"
                onClick={handleDownload}
              >
                Download Form
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


