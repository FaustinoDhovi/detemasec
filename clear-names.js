import { getCliClient } from 'sanity/cli'
const client = getCliClient()
async function clear() {
  const docs = await client.fetch('*[_type in ["student", "feeTransaction"]]._id')
  const transaction = client.transaction()
  docs.forEach(id => transaction.delete(id))
  await transaction.commit()
  console.log('Old data cleared!')
}
clear().catch(console.error)
