import { getCliClient } from 'sanity/cli'

const client = getCliClient()

async function deleteData() {
  console.log('Fetching documents to delete...')
  const docs = await client.fetch('*[_type in ["student", "feeTransaction"]]._id')
  
  if (docs.length === 0) {
    console.log('No documents found to delete.')
    return
  }

  console.log(`Deleting ${docs.length} documents...`)
  const transaction = client.transaction()
  docs.forEach((id) => transaction.delete(id))
  
  await transaction.commit()
  console.log('Success! Database cleared.')
}

deleteData().catch(console.error)
