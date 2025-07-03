import React, { useState } from "react";
import { Search, Filter, MoreVertical, X } from "lucide-react";
import { useGetPaymentListQuery } from "../../redux/features/baseApi";

// const paymentsData = [
//   { user: "Pappy roy", email: "pappyroy3956@gmail.com", amount: "$29.99", plan: "Monthly", status: "Successful", paymentMethod: "Visa card", date: "Jan 15, 2023", veteranName: "John Smith", serviceBranch: "US Army", serviceHistory: "US Army, 2010-2018", lastLogin: "Today at 9:42 AM", disabilities: ["Post-Traumatic Stress Disorder", "Hearing Loss", "Back Injury"], documents: ["Medical Records", "DD-214 Certificate", "Personal Statement"] },
//   { user: "Pappy roy", email: "pappyroy3956@gmail.com", amount: "$29.99", plan: "Monthly", status: "Failed", paymentMethod: "Visa card", date: "Jan 15, 2023", veteranName: "John Smith", serviceBranch: "US Army", serviceHistory: "US Army, 2010-2018", lastLogin: "Today at 9:42 AM", disabilities: ["Post-Traumatic Stress Disorder", "Hearing Loss", "Back Injury"], documents: ["Medical Records", "DD-214 Certificate", "Personal Statement"] },
//   { user: "Pappy roy", email: "pappyroy3956@gmail.com", amount: "$29.99", plan: "Monthly", status: "Successful", paymentMethod: "Visa card", date: "Jan 15, 2023", veteranName: "John Smith", serviceBranch: "US Army", serviceHistory: "US Army, 2010-2018", lastLogin: "Today at 9:42 AM", disabilities: ["Post-Traumatic Stress Disorder", "Hearing Loss", "Back Injury"], documents: ["Medical Records", "DD-214 Certificate", "Personal Statement"] },
//   { user: "Pappy roy", email: "pappyroy3956@gmail.com", amount: "$29.99", plan: "Monthly", status: "Failed", paymentMethod: "Visa card", date: "Jan 15, 2023", veteranName: "John Smith", serviceBranch: "US Army", serviceHistory: "US Army, 2010-2018", lastLogin: "Today at 9:42 AM", disabilities: ["Post-Traumatic Stress Disorder", "Hearing Loss", "Back Injury"], documents: ["Medical Records", "DD-214 Certificate", "Personal Statement"] },
//   { user: "Pappy roy", email: "pappyroy3956@gmail.com", amount: "$29.99", plan: "Monthly", status: "Successful", paymentMethod: "Visa card", date: "Jan 15, 2023", veteranName: "John Smith", serviceBranch: "US Army", serviceHistory: "US Army, 2010-2018", lastLogin: "Today at 9:42 AM", disabilities: ["Post-Traumatic Stress Disorder", "Hearing Loss", "Back Injury"], documents: ["Medical Records", "DD-214 Certificate", "Personal Statement"] },
//   { user: "Pappy roy", email: "pappyroy3956@gmail.com", amount: "$29.99", plan: "Monthly", status: "Failed", paymentMethod: "Visa card", date: "Jan 15, 2023", veteranName: "John Smith", serviceBranch: "US Army", serviceHistory: "US Army, 2010-2018", lastLogin: "Today at 9:42 AM", disabilities: ["Post-Traumatic Stress Disorder", "Hearing Loss", "Back Injury"], documents: ["Medical Records", "DD-214 Certificate", "Personal Statement"] },
//   { user: "Pappy roy", email: "pappyroy3956@gmail.com", amount: "$29.99", plan: "Monthly", status: "Successful", paymentMethod: "Visa card", date: "Jan 15, 2023", veteranName: "John Smith", serviceBranch: "US Army", serviceHistory: "US Army, 2010-2018", lastLogin: "Today at 9:42 AM", disabilities: ["Post-Traumatic Stress Disorder", "Hearing Loss", "Back Injury"], documents: ["Medical Records", "DD-214 Certificate", "Personal Statement"] },
//   { user: "Pappy roy", email: "pappyroy3956@gmail.com", amount: "$29.99", plan: "Monthly", status: "Failed", paymentMethod: "Visa card", date: "Jan 15, 2023", veteranName: "John Smith", serviceBranch: "US Army", serviceHistory: "US Army, 2010-2018", lastLogin: "Today at 9:42 AM", disabilities: ["Post-Traumatic Stress Disorder", "Hearing Loss", "Back Injury"], documents: ["Medical Records", "DD-214 Certificate", "Personal Statement"] },
//   { user: "Pappy roy", email: "pappyroy3956@gmail.com", amount: "$29.99", plan: "Monthly", status: "Successful", paymentMethod: "Visa card", date: "Jan 15, 2023", veteranName: "John Smith", serviceBranch: "US Army", serviceHistory: "US Army, 2010-2018", lastLogin: "Today at 9:42 AM", disabilities: ["Post-Traumatic Stress Disorder", "Hearing Loss", "Back Injury"], documents: ["Medical Records", "DD-214 Certificate", "Personal Statement"] },
//   { user: "Pappy roy", email: "pappyroy3956@gmail.com", amount: "$29.99", plan: "Monthly", status: "Failed", paymentMethod: "Visa card", date: "Jan 15, 2023", veteranName: "John Smith", serviceBranch: "US Army", serviceHistory: "US Army, 2010-2018", lastLogin: "Today at 9:42 AM", disabilities: ["Post-Traumatic Stress Disorder", "Hearing Loss", "Back Injury"], documents: ["Medical Records", "DD-214 Certificate", "Personal Statement"] },
// ];

export default function Payment() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {data: paymentInfo} = useGetPaymentListQuery()
  console.log(paymentInfo)

 console.log("Payment Info:", paymentInfo);







  return (
    <div className=" bg-gray-50 min-h-screen">
      {/* Header with Search and Filter
      // <div className="flex justify-between items-center mb-6">
      //   <div className="flex items-center space-x-4">
      //     <div className="relative">
      //       <input
      //         type="text"
      //         placeholder="Search"
      //         className="input input-bordered pl-10 w-64"
      //         value={searchTerm}
      //         onChange={(e) => setSearchTerm(e.target.value)}
      //       />
      //       <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      //     </div>
      //     <button className="btn btn-outline">
      //       <Filter className="h-5 w-5 mr-2" />
      //       Filter
      //     </button>
      //   </div>
      // </div> */}

      {/* Table */}
      <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr className="bg-[#0A3161] text-white">
        <th className="py-3 px-4">User</th>
        <th className="py-3 px-4">Amount</th>
        <th className="py-3 px-4">Plan</th>
        <th className="py-3 px-4">Status</th>
       
        <th className="py-3 px-4">Date</th>
      </tr>
    </thead>
    <tbody>
      {paymentInfo?.map((payment, index) => (
        <tr key={index} className="border-b dark:text-gray-900">
          <td className="py-3 px-4">
            <div>
              <p className="font-medium">{payment?.user_name}</p>
              <p className="text-sm text-gray-500">{payment.user?.email}</p>
            </div>
          </td>
          <td className="py-3 px-4">{payment?.amount ? `$${payment.amount}` : '0'}</td>
          <td className="py-3 px-4">{payment.plan ? `${payment.plan}`: "Free"}</td>
          <td className="py-3 px-4">{payment.status ? `${payment.status}`: "Free"}</td>
         
        
          <td className="py-3 px-4 flex flex-col">
  <h1>
    Start Date:{" "}
    <span className="font-semibold">
      {payment?.start_date && new Date(payment.start_date).toLocaleDateString()}
    </span>
  </h1>
  <h1>
    End Date:{" "}
    <span className="font-semibold">
      {payment?.end_date && new Date(payment.end_date).toLocaleDateString()}
    </span>
  </h1>
</td>

        </tr>
      ))}
    </tbody>
  </table>
</div>

   
    </div>
  );
}