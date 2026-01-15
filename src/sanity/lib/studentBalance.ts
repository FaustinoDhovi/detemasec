import { client } from '@/sanity/lib/client';

// Query to get student with calculated balance
export const studentWithBalanceQuery = `
  *[_type == "student" && _id == $studentId][0] {
    ...,
    "transactions": *[_type == "feeTransaction" && references(^._id)] | order(transactionDate desc) {
      _id,
      transactionType,
      amount,
      description,
      transactionDate,
      paymentMethod
    },
    "calculatedBalance": *[_type == "feeTransaction" && references(^._id)] {
      transactionType,
      amount
    }.reduce($balance, $transaction) {
      $transaction.transactionType == "charge" => $balance + $transaction.amount,
      $transaction.transactionType == "payment" => $balance - $transaction.amount,
      $balance
    }, 0)
  }
`;

// Function to update student balance
export async function updateStudentBalance(studentId: string) {
  try {
    // Calculate balance from transactions
    const balanceQuery = `
      *[_type == "feeTransaction" && references($studentId)] {
        transactionType,
        amount
      }
    `;
    
    const transactions = await client.fetch(balanceQuery, { studentId });
    
    const balance = transactions.reduce((total: number, tx: any) => {
      if (tx.transactionType === 'charge') {
        return total + tx.amount;
      } else if (tx.transactionType === 'payment') {
        return total - tx.amount;
      }
      return total;
    }, 0);
    
    // Update student document
    await client
      .patch(studentId)
      .set({ currentBalance: balance })
      .commit();
    
    return balance;
  } catch (error) {
    console.error('Error updating balance:', error);
    return 0;
  }
}

// Query all students with balances
export const allStudentsWithBalancesQuery = `
  *[_type == "student"] | order(fullName asc) {
    _id,
    fullName,
    studentId,
    grade,
    classSection,
    status,
    currentBalance,
    "transactionCount": count(*[_type == "feeTransaction" && references(^._id)])
  }
`;