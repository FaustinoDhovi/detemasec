import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('School Management')
    .items([
      // STUDENTS SECTION
      S.listItem()
        .title('Students')
        .icon(() => '👨‍🎓')
        .child(
          S.list()
            .title('Students')
            .items([
              S.listItem()
                .title('All Students')
                .child(
                  S.documentTypeList('student')
                    .title('All Students')
                    .defaultOrdering([{ field: 'fullName', direction: 'asc' }])
                ),
              S.listItem()
                .title('Active Students')
                .child(
                  S.documentList()
                    .title('Active Students')
                    .filter('_type == "student" && status == "active"')
                    .defaultOrdering([{ field: 'fullName', direction: 'asc' }])
                ),
              S.listItem()
                .title('Students with Balance')
                .child(
                  S.documentList()
                    .title('Students with Balance')
                    .filter('_type == "student" && currentBalance > 0')
                    .defaultOrdering([{ field: 'currentBalance', direction: 'desc' }])
                ),
              S.listItem()
                .title('By Grade')
                .child(
                  S.list()
                    .title('Students by Grade')
                    .items([
                      S.listItem()
                        .title('Form 1')
                        .child(
                          S.documentList()
                            .title('Form 1 Students')
                            .filter('_type == "student" && grade == "f1"')
                        ),
                      S.listItem()
                        .title('Form 2')
                        .child(
                          S.documentList()
                            .title('Form 2 Students')
                            .filter('_type == "student" && grade == "f2"')
                        ),
                      S.listItem()
                        .title('Form 3')
                        .child(
                          S.documentList()
                            .title('Form 3 Students')
                            .filter('_type == "student" && grade == "f3"')
                        ),
                      S.listItem()
                        .title('Form 4')
                        .child(
                          S.documentList()
                            .title('Form 4 Students')
                            .filter('_type == "student" && grade == "f4"')
                        ),
                    ])
                ),
            ])
        ),

      // TRANSACTIONS SECTION
      S.listItem()
        .title('Fee Transactions')
        .icon(() => '💰')
        .child(
          S.list()
            .title('Transactions')
            .items([
              S.listItem()
                .title('All Transactions')
                .child(
                  S.documentTypeList('feeTransaction')
                    .title('All Transactions')
                    .defaultOrdering([{ field: 'transactionDate', direction: 'desc' }])
                ),
              S.listItem()
                .title('Fee Charges')
                .child(
                  S.documentList()
                    .title('Fee Charges')
                    .filter('_type == "feeTransaction" && transactionType == "charge"')
                    .defaultOrdering([{ field: 'transactionDate', direction: 'desc' }])
                ),
              S.listItem()
                .title('Payments Received')
                .child(
                  S.documentList()
                    .title('Payments Received')
                    .filter('_type == "feeTransaction" && transactionType == "payment"')
                    .defaultOrdering([{ field: 'transactionDate', direction: 'desc' }])
                ),
              S.listItem()
                .title('Refunds & Adjustments')
                .child(
                  S.documentList()
                    .title('Refunds & Adjustments')
                    .filter('_type == "feeTransaction" && transactionType in ["refund", "adjustment_debit", "adjustment_credit"]')
                ),
              S.listItem()
                .title('By Payment Method')
                .child(
                  S.list()
                    .title('Transactions by Payment Method')
                    .items([
                      S.listItem()
                        .title('Cash Payments')
                        .child(
                          S.documentList()
                            .title('Cash Payments')
                            .filter('_type == "feeTransaction" && transactionType == "payment" && paymentMethod->method == "cash"')
                        ),
                      S.listItem()
                        .title('Ecocash Payments')
                        .child(
                          S.documentList()
                            .title('Ecocash Payments')
                            .filter('_type == "feeTransaction" && transactionType == "payment" && paymentMethod->method == "ecocash"')
                        ),
                      S.listItem()
                        .title('Bank Transfers')
                        .child(
                          S.documentList()
                            .title('Bank Transfers')
                            .filter('_type == "feeTransaction" && transactionType == "payment" && paymentMethod->method == "bank_transfer"')
                        ),
                    ])
                ),
              S.listItem()
                .title('Unverified Payments')
                .child(
                  S.documentList()
                    .title('Unverified Payments')
                    .filter('_type == "feeTransaction" && transactionType == "payment" && verified == false')
                ),
            ])
        ),

      // ACADEMIC & SETTINGS SECTION
      S.divider(),

      S.listItem()
        .title('Academic Terms')
        .icon(() => '📅')
        .child(
          S.documentTypeList('academicYear')
            .title('Academic Years & Terms')
            .child(
              S.documentList()
                .title('Academic Years')
                .filter('_type == "academicYear"')
                .defaultOrdering([{ field: 'year', direction: 'desc' }])
            )
        ),

      S.listItem()
        .title('Payment Methods')
        .icon(() => '💳')
        .child(
          S.documentTypeList('paymentMethod')
            .title('Payment Methods')
            .child(
              S.documentList()
                .title('Payment Methods')
                .filter('_type == "paymentMethod"')
            )
        ),

      // REPORTS & ANALYTICS SECTION
      S.divider(),

      S.listItem()
        .title('Reports')
        .icon(() => '📊')
        .child(
          S.list()
            .title('Reports')
            .items([
              S.listItem()
                .title('Financial Summary')
                .child(
                  S.documentList()
                    .title('Financial Overview')
                    .filter('_type == "student"')
                    .defaultOrdering([{ field: 'currentBalance', direction: 'desc' }])
                    .canHandleIntent(() => false) // Prevent direct editing
                ),
              S.listItem()
                .title('Payment Summary')
                .child(
                  S.documentList()
                    .title('Payment Summary')
                    .filter('_type == "feeTransaction" && transactionType == "payment"')
                    .defaultOrdering([{ field: 'transactionDate', direction: 'desc' }])
                ),
              S.listItem()
                .title('Outstanding Balances')
                .child(
                  S.documentList()
                    .title('Outstanding Balances')
                    .filter('_type == "student" && currentBalance > 0')
                    .defaultOrdering([{ field: 'currentBalance', direction: 'desc' }])
                ),
              S.listItem()
                .title('Payment Methods Report')
                .child(
                  S.documentList()
                    .title('Payment Methods Usage')
                    .filter('_type == "feeTransaction" && transactionType == "payment"')
                    .defaultOrdering([{ field: 'transactionDate', direction: 'desc' }])
                ),
            ])
        ),

      // DEFAULT ITEMS (for any remaining document types)
      ...S.documentTypeListItems().filter(
        (item) =>
          !['student', 'feeTransaction', 'academicYear', 'paymentMethod'].includes(
            item.getId() || ''
          )
      ),
    ])