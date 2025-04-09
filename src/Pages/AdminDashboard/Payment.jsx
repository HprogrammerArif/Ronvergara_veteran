import React, { useState } from "react";
import { Search, Filter, MoreVertical, X } from "lucide-react";

const paymentsData = [
  { user: "Pappy roy", email: "pappyroy3956@gmail.com", amount: "$29.99", plan: "Monthly", status: "Successful", paymentMethod: "Visa card", date: "Jan 15, 2023", veteranName: "John Smith", serviceBranch: "US Army", serviceHistory: "US Army, 2010-2018", lastLogin: "Today at 9:42 AM", disabilities: ["Post-Traumatic Stress Disorder", "Hearing Loss", "Back Injury"], documents: ["Medical Records", "DD-214 Certificate", "Personal Statement"] },
  { user: "Pappy roy", email: "pappyroy3956@gmail.com", amount: "$29.99", plan: "Monthly", status: "Failed", paymentMethod: "Visa card", date: "Jan 15, 2023", veteranName: "John Smith", serviceBranch: "US Army", serviceHistory: "US Army, 2010-2018", lastLogin: "Today at 9:42 AM", disabilities: ["Post-Traumatic Stress Disorder", "Hearing Loss", "Back Injury"], documents: ["Medical Records", "DD-214 Certificate", "Personal Statement"] },
  { user: "Pappy roy", email: "pappyroy3956@gmail.com", amount: "$29.99", plan: "Monthly", status: "Successful", paymentMethod: "Visa card", date: "Jan 15, 2023", veteranName: "John Smith", serviceBranch: "US Army", serviceHistory: "US Army, 2010-2018", lastLogin: "Today at 9:42 AM", disabilities: ["Post-Traumatic Stress Disorder", "Hearing Loss", "Back Injury"], documents: ["Medical Records", "DD-214 Certificate", "Personal Statement"] },
  { user: "Pappy roy", email: "pappyroy3956@gmail.com", amount: "$29.99", plan: "Monthly", status: "Failed", paymentMethod: "Visa card", date: "Jan 15, 2023", veteranName: "John Smith", serviceBranch: "US Army", serviceHistory: "US Army, 2010-2018", lastLogin: "Today at 9:42 AM", disabilities: ["Post-Traumatic Stress Disorder", "Hearing Loss", "Back Injury"], documents: ["Medical Records", "DD-214 Certificate", "Personal Statement"] },
  { user: "Pappy roy", email: "pappyroy3956@gmail.com", amount: "$29.99", plan: "Monthly", status: "Successful", paymentMethod: "Visa card", date: "Jan 15, 2023", veteranName: "John Smith", serviceBranch: "US Army", serviceHistory: "US Army, 2010-2018", lastLogin: "Today at 9:42 AM", disabilities: ["Post-Traumatic Stress Disorder", "Hearing Loss", "Back Injury"], documents: ["Medical Records", "DD-214 Certificate", "Personal Statement"] },
  { user: "Pappy roy", email: "pappyroy3956@gmail.com", amount: "$29.99", plan: "Monthly", status: "Failed", paymentMethod: "Visa card", date: "Jan 15, 2023", veteranName: "John Smith", serviceBranch: "US Army", serviceHistory: "US Army, 2010-2018", lastLogin: "Today at 9:42 AM", disabilities: ["Post-Traumatic Stress Disorder", "Hearing Loss", "Back Injury"], documents: ["Medical Records", "DD-214 Certificate", "Personal Statement"] },
  { user: "Pappy roy", email: "pappyroy3956@gmail.com", amount: "$29.99", plan: "Monthly", status: "Successful", paymentMethod: "Visa card", date: "Jan 15, 2023", veteranName: "John Smith", serviceBranch: "US Army", serviceHistory: "US Army, 2010-2018", lastLogin: "Today at 9:42 AM", disabilities: ["Post-Traumatic Stress Disorder", "Hearing Loss", "Back Injury"], documents: ["Medical Records", "DD-214 Certificate", "Personal Statement"] },
  { user: "Pappy roy", email: "pappyroy3956@gmail.com", amount: "$29.99", plan: "Monthly", status: "Failed", paymentMethod: "Visa card", date: "Jan 15, 2023", veteranName: "John Smith", serviceBranch: "US Army", serviceHistory: "US Army, 2010-2018", lastLogin: "Today at 9:42 AM", disabilities: ["Post-Traumatic Stress Disorder", "Hearing Loss", "Back Injury"], documents: ["Medical Records", "DD-214 Certificate", "Personal Statement"] },
  { user: "Pappy roy", email: "pappyroy3956@gmail.com", amount: "$29.99", plan: "Monthly", status: "Successful", paymentMethod: "Visa card", date: "Jan 15, 2023", veteranName: "John Smith", serviceBranch: "US Army", serviceHistory: "US Army, 2010-2018", lastLogin: "Today at 9:42 AM", disabilities: ["Post-Traumatic Stress Disorder", "Hearing Loss", "Back Injury"], documents: ["Medical Records", "DD-214 Certificate", "Personal Statement"] },
  { user: "Pappy roy", email: "pappyroy3956@gmail.com", amount: "$29.99", plan: "Monthly", status: "Failed", paymentMethod: "Visa card", date: "Jan 15, 2023", veteranName: "John Smith", serviceBranch: "US Army", serviceHistory: "US Army, 2010-2018", lastLogin: "Today at 9:42 AM", disabilities: ["Post-Traumatic Stress Disorder", "Hearing Loss", "Back Injury"], documents: ["Medical Records", "DD-214 Certificate", "Personal Statement"] },
];

export default function Payment() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredPayments = paymentsData.filter(
    (payment) =>
      payment.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (payment) => {
    setSelectedPayment(payment);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPayment(null);
  };

  const handleReject = () => {
    if (selectedPayment) {
      const updatedPayment = { ...selectedPayment, status: "Failed" };
      setSelectedPayment(updatedPayment);
      const paymentIndex = paymentsData.findIndex(
        (p) => p.date === updatedPayment.date && p.email === updatedPayment.email
      );
      paymentsData[paymentIndex] = updatedPayment;
      closeModal();
    }
  };

  const handleApprove = () => {
    if (selectedPayment) {
      const updatedPayment = { ...selectedPayment, status: "Successful" };
      setSelectedPayment(updatedPayment);
      const paymentIndex = paymentsData.findIndex(
        (p) => p.date === updatedPayment.date && p.email === updatedPayment.email
      );
      paymentsData[paymentIndex] = updatedPayment;
      closeModal();
    }
  };

  const handleDownload = () => {
    // Placeholder for download functionality
    alert("Downloading payment details...");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
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
              <th className="py-3 px-4">User</th>
              <th className="py-3 px-4">Amount</th>
              <th className="py-3 px-4">Plan</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Payment Method</th>
              <th className="py-3 px-4">Date</th>
              
            </tr>
          </thead>
          <tbody>
            {filteredPayments.map((payment, index) => (
              <tr key={index} className="border-b">
                <td className="py-3 px-4">
                  <div>
                    <p className="font-medium">{payment.user}</p>
                    <p className="text-sm text-gray-500">{payment.email}</p>
                  </div>
                </td>
                <td className="py-3 px-4">{payment.amount}</td>
                <td className="py-3 px-4">{payment.plan}</td>
                <td className="py-3 px-4">
                  <span
                    className={`badge ${
                      payment.status === "Successful"
                        ? "badge-success"
                        : "badge-error"
                    } text-white`}
                  >
                    {payment.status}
                  </span>
                </td>
                <td className="py-3 px-4">{payment.paymentMethod}</td>
                <td className="py-3 px-4">{payment.date}</td>
            
              </tr>
            ))}
          </tbody>
        </table>
      </div>

   
    </div>
  );
}