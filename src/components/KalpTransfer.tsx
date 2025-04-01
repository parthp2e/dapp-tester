import { useState } from 'react';
import { Send } from 'lucide-react';
const writeKalpTransaction: any = (window as any).writeTransactionFromWallet;

// enum TransactionType {
//   PURE,
//   VIEW,
//   PAYABLE,
//   NONPAYABLE,
// }

export function KalpTransfer() {
	const handleClaimBtn = async () => {
		try {
			const dappToken = localStorage.getItem('dappToken');
			const address = localStorage.getItem('dappEnrollmentId');
			console.log('calling write transaction api ');
			const result = await writeKalpTransaction(
				dappToken,
				'TEST',
				window.location.href,
				`${window.location.origin}/favicon.ico`,
				'kalptantra',
				'QBLQfUfVnIePl5sMPrFSusoA9uuRxA7l1740646411934',
				'claim',
				['20', address],
			);
			console.log('result : ', result);
		} catch (error) {
			console.error('err : ', error);
		}
	};

	return (
		<div className="bg-white rounded-xl shadow-lg p-6">
			<button
				className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 font-medium"
				onClick={handleClaimBtn}
			>
				<Send size={20} />
				Claim
			</button>
			{/* <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
				<Send size={24} className="text-indigo-600" />
				Transfer Balance
			</h2>

			<div className="space-y-4">
				<div>
					<label htmlFor="wallet" className="block text-sm font-medium text-gray-700 mb-1">
						Wallet Address
					</label>
					<input
						id="wallet"
						type="text"
						value={walletAddress}
						onChange={(e) => setWalletAddress(e.target.value)}
						className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
						placeholder="Enter wallet address"
					/>
				</div>

				<div>
					<label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
						Amount
					</label>
					<input
						id="amount"
						type="number"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
						placeholder="Enter amount"
						min="0"
						step="0.01"
					/>
				</div>

				<button
					className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 font-medium"
					onClick={handleMetamaskTransaction}
				>
					<Send size={20} />
					Transfer
				</button>
			</div> */}
		</div>
	);
}
