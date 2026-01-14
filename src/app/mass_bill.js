const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: 'your_project_id', // Replace with your Sanity Project ID
  dataset: 'production',
  useCdn: false,
  token: 'your_admin_token', // Requires a token with 'write' permissions
  apiVersion: '2024-01-01',
})

async function massBillStudents() {
  try {
    // 1. Fetch all active students
    const students = await client.fetch(`*[_type == "student" && status == "active"]{_id, fullName}`)
    console.log(`Found ${students.length} students to bill.`)

    const termDescription = "Term 1 2026 Tuition Fees" // Update this each term
    const amount = 75

    // 2. Create a transaction for each student
    const transactions = students.map(student => ({
      _type: 'feeTransaction',
      student: { _type: 'reference', _ref: student._id },
      transactionType: 'charge',
      amount: amount,
      description: termDescription,
      transactionDate: new Date().toISOString().split('T')[0],
    }))

    // 3. Commit to Sanity
    const transaction = client.transaction()
    transactions.forEach(txn => transaction.create(txn))
    
    await transaction.commit()
    console.log(`✅ Successfully billed ${students.length} students $${amount} each.`)
  } catch (err) {
    console.error('Mass billing failed:', err)
  }
}

massBillStudents()