import { type SchemaTypeDefinition } from 'sanity'
import student from './student'
import feeTransaction from './feeTransaction'
import academicYear from './academicYear'
import paymentMethod from './paymentMethod'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    student,
    feeTransaction,
    academicYear,
    paymentMethod,
  ],
}