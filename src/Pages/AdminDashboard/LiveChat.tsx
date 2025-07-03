// import React, { useState, useRef, useEffect } from "react";
// import {
// 	Search,
// 	Send,
// 	User,
// 	Circle,
// 	Phone,
// 	Video,
// 	MoreVertical,
// } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { Card } from "@/components/ui/card";
// // import { ScrollArea } from "@/components/ui/scroll-area";
// // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// // import { Badge } from "@/components/ui/badge";

// interface ChatUser {
// 	id: string;
// 	name: string;
// 	email: string;
// 	avatar?: string;
// 	isOnline: boolean;
// 	lastMessage: string;
// 	lastMessageTime: string;
// 	unreadCount: number;
// }

// interface Message {
// 	id: string;
// 	userId: string;
// 	content: string;
// 	timestamp: string;
// 	isFromAdmin: boolean;
// }

// const LiveChat = () => {
// 	const [selectedUser, setSelectedUser] = useState<ChatUser | null>(null);
// 	const [searchQuery, setSearchQuery] = useState("");
// 	const [newMessage, setNewMessage] = useState("");
// 	const messagesEndRef = useRef<HTMLDivElement>(null);

// 	// Mock data for demonstration
// 	const [users] = useState<ChatUser[]>([
// 		{
// 			id: "1",
// 			name: "John Smith",
// 			email: "john@example.com",
// 			isOnline: true,
// 			lastMessage: "Hello, I need help with my order",
// 			lastMessageTime: "2 min ago",
// 			unreadCount: 2,
// 		},
// 		{
// 			id: "2",
// 			name: "Sarah Johnson",
// 			email: "sarah@example.com",
// 			isOnline: true,
// 			lastMessage: "Thank you for your help!",
// 			lastMessageTime: "5 min ago",
// 			unreadCount: 0,
// 		},
// 		{
// 			id: "3",
// 			name: "Mike Wilson",
// 			email: "mike@example.com",
// 			isOnline: false,
// 			lastMessage: "Is this service available 24/7?",
// 			lastMessageTime: "1 hour ago",
// 			unreadCount: 1,
// 		},
// 		{
// 			id: "4",
// 			name: "Emily Davis",
// 			email: "emily@example.com",
// 			isOnline: true,
// 			lastMessage: "I have a technical issue",
// 			lastMessageTime: "3 hours ago",
// 			unreadCount: 0,
// 		},
// 	]);

// 	const [messages] = useState<Message[]>([
// 		{
// 			id: "1",
// 			userId: "1",
// 			content: "Hello, I need help with my order",
// 			timestamp: "10:30 AM",
// 			isFromAdmin: false,
// 		},
// 		{
// 			id: "2",
// 			userId: "1",
// 			content:
// 				"Of course! I'd be happy to help you with your order. Can you please provide me with your order number?",
// 			timestamp: "10:31 AM",
// 			isFromAdmin: true,
// 		},
// 		{
// 			id: "3",
// 			userId: "1",
// 			content: "My order number is #12345",
// 			timestamp: "10:32 AM",
// 			isFromAdmin: false,
// 		},
// 	]);

// 	const filteredUsers = users.filter(
// 		(user) =>
// 			user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// 			user.email.toLowerCase().includes(searchQuery.toLowerCase())
// 	);

// 	const handleSendMessage = () => {
// 		if (newMessage.trim() && selectedUser) {
// 			// Here you would implement the actual message sending logic
// 			console.log(
// 				"Sending message:",
// 				newMessage,
// 				"to user:",
// 				selectedUser.id
// 			);
// 			setNewMessage("");
// 		}
// 	};

// 	const handleKeyPress = (e: React.KeyboardEvent) => {
// 		if (e.key === "Enter" && !e.shiftKey) {
// 			e.preventDefault();
// 			handleSendMessage();
// 		}
// 	};

// 	const scrollToBottom = () => {
// 		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// 	};

// 	useEffect(() => {
// 		scrollToBottom();
// 	}, [messages]);

// 	return (
// 		<div className="flex h-screen bg-gray-100">
// 			{/* Left Panel - User List */}
// 			<div className="w-80 bg-white border-r border-gray-200 flex flex-col">
// 				{/* Header */}
// 				<div className="p-4 border-b border-gray-200">
// 					<h2 className="text-xl font-semibold text-gray-800 mb-4">
// 						Live Chat Support
// 					</h2>
// 					<div className="relative">
// 						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
// 						<Input
// 							placeholder="Search users..."
// 							value={searchQuery}
// 							onChange={(e) => setSearchQuery(e.target.value)}
// 							className="pl-10"
// 						/>
// 					</div>
// 				</div>

// 				{/* Active Users Stats */}
// 				<div className="p-4 bg-blue-50 border-b border-gray-200">
// 					<div className="flex items-center justify-between text-sm">
// 						<span className="text-gray-600">Active Users</span>
// 						<div className="flex items-center">
// 							<Circle className="h-2 w-2 text-green-500 fill-current mr-1" />
// 							<span className="text-green-600 font-medium">
// 								{users.filter((u) => u.isOnline).length} online
// 							</span>
// 						</div>
// 					</div>
// 				</div>

// 				{/* User List */}
// 				<ScrollArea className="flex-1">
// 					<div className="p-2">
// 						{filteredUsers.map((user) => (
// 							<Card
// 								key={user.id}
// 								className={`p-3 mb-2 cursor-pointer transition-all duration-200 hover:bg-gray-50 ${
// 									selectedUser?.id === user.id
// 										? "bg-blue-50 border-blue-200"
// 										: "border-gray-200"
// 								}`}
// 								onClick={() => setSelectedUser(user)}
// 							>
// 								<div className="flex items-start space-x-3">
// 									<div className="relative">
// 										<Avatar className="h-10 w-10">
// 											<AvatarImage src={user.avatar} />
// 											<AvatarFallback className="bg-blue-100 text-blue-600">
// 												{user.name
// 													.split(" ")
// 													.map((n) => n[0])
// 													.join("")}
// 											</AvatarFallback>
// 										</Avatar>
// 										{user.isOnline && (
// 											<Circle className="absolute -bottom-1 -right-1 h-3 w-3 text-green-500 fill-current bg-white rounded-full" />
// 										)}
// 									</div>
// 									<div className="flex-1 min-w-0">
// 										<div className="flex items-center justify-between">
// 											<p className="text-sm font-medium text-gray-900 truncate">
// 												{user.name}
// 											</p>
// 											<div className="flex items-center space-x-1">
// 												{user.unreadCount > 0 && (
// 													<Badge
// 														variant="destructive"
// 														className="h-5 w-5 p-0 flex items-center justify-center text-xs"
// 													>
// 														{user.unreadCount}
// 													</Badge>
// 												)}
// 												<span className="text-xs text-gray-500">
// 													{user.lastMessageTime}
// 												</span>
// 											</div>
// 										</div>
// 										<p className="text-sm text-gray-500 truncate mt-1">
// 											{user.lastMessage}
// 										</p>
// 									</div>
// 								</div>
// 							</Card>
// 						))}
// 					</div>
// 				</ScrollArea>
// 			</div>

// 			{/* Right Panel - Chat Interface */}
// 			<div className="flex-1 flex flex-col">
// 				{selectedUser ? (
// 					<>
// 						{/* Chat Header */}
// 						<div className="bg-white border-b border-gray-200 p-4">
// 							<div className="flex items-center justify-between">
// 								<div className="flex items-center space-x-3">
// 									<div className="relative">
// 										<Avatar className="h-10 w-10">
// 											<AvatarImage
// 												src={selectedUser.avatar}
// 											/>
// 											<AvatarFallback className="bg-blue-100 text-blue-600">
// 												{selectedUser.name
// 													.split(" ")
// 													.map((n) => n[0])
// 													.join("")}
// 											</AvatarFallback>
// 										</Avatar>
// 										{selectedUser.isOnline && (
// 											<Circle className="absolute -bottom-1 -right-1 h-3 w-3 text-green-500 fill-current bg-white rounded-full" />
// 										)}
// 									</div>
// 									<div>
// 										<h3 className="font-semibold text-gray-900">
// 											{selectedUser.name}
// 										</h3>
// 										<p className="text-sm text-gray-500">
// 											{selectedUser.isOnline
// 												? "Online"
// 												: "Offline"}{" "}
// 											• {selectedUser.email}
// 										</p>
// 									</div>
// 								</div>
// 								<div className="flex items-center space-x-2">
// 									<Button variant="ghost" size="sm">
// 										<Phone className="h-4 w-4" />
// 									</Button>
// 									<Button variant="ghost" size="sm">
// 										<Video className="h-4 w-4" />
// 									</Button>
// 									<Button variant="ghost" size="sm">
// 										<MoreVertical className="h-4 w-4" />
// 									</Button>
// 								</div>
// 							</div>
// 						</div>

// 						{/* Messages Area */}
// 						<ScrollArea className="flex-1 p-4 bg-gray-50">
// 							<div className="space-y-4">
// 								{messages
// 									.filter(
// 										(msg) => msg.userId === selectedUser.id
// 									)
// 									.map((message) => (
// 										<div
// 											key={message.id}
// 											className={`flex ${message.isFromAdmin ? "justify-end" : "justify-start"}`}
// 										>
// 											<div
// 												className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
// 													message.isFromAdmin
// 														? "bg-blue-600 text-white"
// 														: "bg-white text-gray-900 border border-gray-200"
// 												}`}
// 											>
// 												<p className="text-sm">
// 													{message.content}
// 												</p>
// 												<p
// 													className={`text-xs mt-1 ${
// 														message.isFromAdmin
// 															? "text-blue-100"
// 															: "text-gray-500"
// 													}`}
// 												>
// 													{message.timestamp}
// 												</p>
// 											</div>
// 										</div>
// 									))}
// 								<div ref={messagesEndRef} />
// 							</div>
// 						</ScrollArea>

// 						{/* Message Input */}
// 						<div className="bg-white border-t border-gray-200 p-4">
// 							<div className="flex items-center space-x-2">
// 								<div className="flex-1">
// 									<Input
// 										placeholder="Type your message..."
// 										value={newMessage}
// 										onChange={(e) =>
// 											setNewMessage(e.target.value)
// 										}
// 										onKeyPress={handleKeyPress}
// 										className="w-full"
// 									/>
// 								</div>
// 								<Button
// 									onClick={handleSendMessage}
// 									disabled={!newMessage.trim()}
// 									className="bg-blue-600 hover:bg-blue-700"
// 								>
// 									<Send className="h-4 w-4" />
// 								</Button>
// 							</div>
// 						</div>
// 					</>
// 				) : (
// 					/* No User Selected */
// 					<div className="flex-1 flex items-center justify-center bg-gray-50">
// 						<div className="text-center">
// 							<User className="h-16 w-16 text-gray-400 mx-auto mb-4" />
// 							<h3 className="text-lg font-medium text-gray-900 mb-2">
// 								Select a conversation
// 							</h3>
// 							<p className="text-gray-500">
// 								Choose a user from the list to start chatting
// 							</p>
// 						</div>
// 					</div>
// 				)}
// 			</div>
// 		</div>
// 	);
// };

// export default LiveChat;

import { ArrowLeft, Search, Send, MoreVertical } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetActiveChatsQuery } from "../../redux/features/baseApi";

interface ActiveChatUserProps {
	firebase_chat_id: string;
	user_id: number;
	user_name: string;
	email: string;
	subject: string;
	status: string;
	last_message_at: string;
}

interface Message {
	id: string;
	senderId: string;
	text: string;
	timestamp: string;
	isAdmin: boolean;
}

const LiveChat = () => {
	const navigate = useNavigate();
	const { data: { active_chats: fetchedActiveUsers } = [] } =
		useGetActiveChatsQuery();
	console.log(fetchedActiveUsers);
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedUserId, setSelectedUserId] = useState("1");
	const [newMessage, setNewMessage] = useState("");

	// Mock data for users
	const users: ActiveChatUserProps[] = [
		{
			firebase_chat_id: "chat_a1b2c3d4e5f6g7h8",
			user_id: 123,
			user_name: "john_doe",
			subject: "Login Issues",
			status: "in_progress",
			last_message_at: "2025-07-01T10:45:00Z"
		},
		{
			firebase_chat_id: "chat_b2c3d4e5f6g7h8i9",
			user_id: 124,
			user_name: "jane_smith",
			subject: "Payment Problem",
			status: "open",
			last_message_at: "2025-07-01T10:20:00Z"
		},
		{
			firebase_chat_id: "chat_c3d4e5f6g7h8i9j0",
			user_id: 125,
			user_name: "mike_wilson",
			subject: "Feature Request",
			status: "open",
			last_message_at: "2025-07-01T09:55:00Z",
		}
	];

	// Mock data for messages
	const messages: Message[] = [
		{
			id: "1",
			senderId: "1",
			text: "Hi there! I need help with my account verification.",
			timestamp: "10:30 AM",
			isAdmin: false,
		},
		{
			id: "2",
			senderId: "admin",
			text: "Hello! I'd be happy to help you with account verification. Can you please tell me what specific issue you're experiencing?",
			timestamp: "10:32 AM",
			isAdmin: true,
		},
		{
			id: "3",
			senderId: "1",
			text: "I uploaded my documents yesterday but the status still shows pending.",
			timestamp: "10:33 AM",
			isAdmin: false,
		},
	];

	const filteredUsers = users.filter(
		(user) =>
			user.user_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			user.email.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const selectedUser = users.find((user) => user.id === selectedUserId);

	const handleSendMessage = () => {
		if (newMessage.trim()) {
			// Here you would normally send the message to your backend
			console.log("Sending message:", newMessage);
			setNewMessage("");
		}
	};

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSendMessage();
		}
	};

	return (
		<div className="w-full h-full bg-gray-50">
			{/* Header */}
			{/* <header className="bg-white shadow-sm border-b">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between py-4">
						<div className="flex items-center space-x-4">
							<button
								onClick={() => navigate("/")}
								className="p-2 hover:bg-gray-100 rounded-md transition-colors"
							>
								<ArrowLeft className="h-5 w-5" />
							</button>
							<div className="flex items-center space-x-3">
								<div className="bg-blue-600 p-2 rounded-lg">
									<div className="text-white font-bold text-lg">
										V
									</div>
								</div>
								<h1 className="text-2xl font-bold text-gray-900">
									Live Chat Management
								</h1>
							</div>
						</div>
					</div>
				</div>
			</header> */}

			<div className="w-full h-full sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-150px)]">
					{/* Users List */}
					<div className="lg:col-span-1 bg-white rounded-lg border shadow-sm">
						<div className="p-4 border-b">
							<h2 className="text-lg font-semibold text-gray-900 mb-4">
								Active Users
							</h2>
							<div className="sticky">
								<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
								<input
									type="text"
									placeholder="Search users..."
									className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									value={searchTerm}
									onChange={(e) =>
										setSearchTerm(e.target.value)
									}
								/>
							</div>
						</div>
						<div className="overflow-y-auto max-h-[calc(100vh-320px)]">
							{filteredUsers.map((user) => (
								<div
									key={user.id}
									className={`p-4 border-b cursor-pointer hover:bg-gray-50 transition-colors ${
										selectedUserId === user.id
											? "bg-blue-50 border-blue-200"
											: ""
									}`}
									onClick={() => setSelectedUserId(user.id)}
								>
									<div className="flex items-center space-x-3">
										<div className="relative">
											<img
												src={"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
												alt={user.user_name}
												className="w-10 h-10 rounded-full object-cover"
											/>
											<div
												className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
													user.isOnline
														? "bg-green-500"
														: "bg-gray-400"
												}`}
											/>
										</div>
										<div className="flex-1 min-w-0">
											<div className="flex items-center justify-between">
												<p className="text-sm font-medium text-gray-900 truncate">
													{user.user_name}
												</p>
												{/* {user.unreadCount > 0 && (
													<span className="bg-blue-600 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
														{user.unreadCount}
													</span>
												)} */}
											</div>
											<p className="text-xs text-gray-500 truncate">
												{/* {user.} */}
											</p>
											<p className="text-xs text-gray-400 truncate">
											</p>
											<p className="text-xs text-gray-400">
												{user.last_message_at}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Chat Area */}
					<div className="lg:col-span-3 bg-white rounded-lg border shadow-sm flex flex-col">
						{selectedUser ? (
							<>
								{/* Chat Header */}
								<div className="p-4 border-b flex items-center justify-between">
									<div className="flex items-center space-x-3">
										<div className="relative">
											<img
												src={"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
												alt={selectedUser.name}
												className="w-10 h-10 rounded-full object-cover"
											/>
											<div
												className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
													selectedUser.isOnline
														? "bg-green-500"
														: "bg-gray-400"
												}`}
											/>
										</div>
										<div>
											<h3 className="text-lg font-semibold text-gray-900">
												{selectedUser.name}
											</h3>
											<p className="text-sm text-gray-500">
												{selectedUser.isOnline
													? "Online"
													: "Offline"}
											</p>
										</div>
									</div>
									<button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
										<MoreVertical className="h-5 w-5 text-gray-500" />
									</button>
								</div>

								{/* Messages */}
								<div className="flex-1 overflow-y-auto p-4 space-y-4">
									{messages.map((message) => (
										<div
											key={message.id}
											className={`flex ${message.isAdmin ? "justify-end" : "justify-start"}`}
										>
											<div
												className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
													message.isAdmin
														? "bg-blue-600 text-white"
														: "bg-gray-100 text-gray-900"
												}`}
											>
												<p className="text-sm">
													{message.text}
												</p>
												<p
													className={`text-xs mt-1 ${
														message.isAdmin
															? "text-blue-100"
															: "text-gray-500"
													}`}
												>
													{message.timestamp}
												</p>
											</div>
										</div>
									))}
								</div>

								{/* Message Input */}
								<div className="p-4 border-t">
									<div className="flex space-x-2">
										<textarea
											value={newMessage}
											onChange={(e) =>
												setNewMessage(e.target.value)
											}
											onKeyPress={handleKeyPress}
											placeholder="Type your message..."
											className="flex-1 resize-none border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
											rows={1}
										/>
										<button
											onClick={handleSendMessage}
											className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors inline-flex items-center justify-center"
										>
											<Send className="h-4 w-4" />
										</button>
									</div>
								</div>
							</>
						) : (
							<div className="flex-1 flex items-center justify-center">
								<p className="text-gray-500">
									Select a user to start chatting
								</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default LiveChat;
