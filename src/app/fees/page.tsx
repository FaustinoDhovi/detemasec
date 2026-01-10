// app/fees/page.tsx
'use client'; // Add this at the very top

import Image from 'next/image';

export default function FeesPage() {
  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f7f9fc',
      color: '#333',
      lineHeight: 1.6
    }}>
      {/* Home Link */}
      <div style={{
        marginBottom: '20px',
        fontSize: '0.9rem'
      }}>
        <a 
          href="/"
          style={{
            color: '#2c5aa0',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            borderRadius: '6px',
            backgroundColor: '#f0f7ff',
            border: '1px solid #d0e0ff',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#e0eeff';
            e.currentTarget.style.transform = 'translateY(-1px)';
            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#f0f7ff';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <span style={{ fontSize: '1.2rem' }}>←</span>
          Back to Home
        </a>
      </div>
      
      <div style={{
        textAlign: 'center',
        marginBottom: '40px',
        paddingBottom: '20px',
        borderBottom: '3px solid #2c5aa0'
      }}>
        <h1 style={{ color: '#2c5aa0', fontSize: '2.2rem', marginBottom: '10px' }}>
          Detema Secondary School
        </h1>
        <p style={{ color: '#666', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
          Payment Methods and Fee Structure
        </p>
      </div>
      
      {/* Fee Summary */}
      <div style={{
        backgroundColor: '#fff',
        borderRadius: '10px',
        padding: '25px',
        marginBottom: '40px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
        borderLeft: '5px solid #2c5aa0'
      }}>
        <h2 style={{ color: '#2c5aa0', marginBottom: '20px', fontSize: '1.5rem' }}>
          Fee Summary (Term 1)
        </h2>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '12px 0',
          borderBottom: '1px dashed #eee'
        }}>
          <span>School Fees (Per Term)</span>
          <span>$70.00</span>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '12px 0',
          borderBottom: '1px dashed #eee'
        }}>
          <span>Registration Fee (One-time)</span>
          <span>$20.00</span>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '12px 0',
          borderBottom: '1px dashed #eee'
        }}>
          <span>School Report Fee (One-time)</span>
          <span>$3.00</span>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '15px 0 0 0',
          marginTop: '10px',
          borderTop: '2px solid #eee',
          fontWeight: 'bold',
          color: '#2c5aa0',
          fontSize: '1.1rem'
        }}>
          <span>Total Due at Registration</span>
          <span>$93.00</span>
        </div>
      </div>
      
      {/* Payment Cards */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '30px',
        marginBottom: '40px'
      }}>
        {/* EcoCash Card */}
        <div style={{
          flex: 1,
          minWidth: '300px',
          backgroundColor: 'white',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 12px 25px rgba(0, 0, 0, 0.12)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.08)';
        }}
        >
          <div style={{
            backgroundColor: '#2c5aa0',
            color: 'white',
            padding: '20px',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '5px' }}>Mobile Money Payment</h3>
            <p>EcoCash Merchant Payment</p>
          </div>
          <div style={{ padding: '25px' }}>
            <div style={{ textAlign: 'center', marginBottom: '25px' }}>
              <Image 
                src="/ecocash.webp" 
                alt="EcoCash Logo" 
                width={180} 
                height={80}
                style={{ objectFit: 'contain' }}
              />
            </div>
            
            <div style={{ marginTop: '20px' }}>
              <p style={{ marginBottom: '12px', paddingLeft: '10px', borderLeft: '3px solid #f0f0f0' }}>
                <strong style={{ color: '#2c5aa0', display: 'inline-block', minWidth: '130px' }}>
                  Merchant Code:
                </strong>
                122743
              </p>
              <p style={{ marginBottom: '12px', paddingLeft: '10px', borderLeft: '3px solid #f0f0f0' }}>
                <strong style={{ color: '#2c5aa0', display: 'inline-block', minWidth: '130px' }}>
                  Payment Type:
                </strong>
                School Fees
              </p>
            </div>
            
            <div style={{
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              padding: '15px',
              marginTop: '20px',
              fontFamily: 'monospace',
              borderLeft: '4px solid #2c5aa0'
            }}>
              <strong>Dial on your phone:</strong><br />
              *151*2*3*122743*[Amount]*[Student Name]#
            </div>
            
            <p style={{ marginTop: '15px', fontSize: '0.9rem', color: '#666' }}>
              Example: For John Doe paying $93, dial:<br />
              <strong>*151*2*3*122743*93*John Doe#</strong>
            </p>
          </div>
        </div>
        
        {/* Bank Transfer Card */}
        <div style={{
          flex: 1,
          minWidth: '300px',
          backgroundColor: 'white',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 12px 25px rgba(0, 0, 0, 0.12)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.08)';
        }}
        >
          <div style={{
            backgroundColor: '#2c5aa0',
            color: 'white',
            padding: '20px',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '5px' }}>Bank Transfer</h3>
            <p>Banc ABC - Hwange Branch</p>
          </div>
          <div style={{ padding: '25px' }}>
            <div style={{ textAlign: 'center', marginBottom: '25px' }}>
              <Image 
                src="/bankabc.webp" 
                alt="Banc ABC Logo" 
                width={180} 
                height={80}
                style={{ objectFit: 'contain' }}
              />
            </div>
            
            <div style={{ marginTop: '20px' }}>
              <p style={{ marginBottom: '12px', paddingLeft: '10px', borderLeft: '3px solid #f0f0f0' }}>
                <strong style={{ color: '#2c5aa0', display: 'inline-block', minWidth: '130px' }}>
                  Bank Name:
                </strong>
                Banc ABC
              </p>
              <p style={{ marginBottom: '12px', paddingLeft: '10px', borderLeft: '3px solid #f0f0f0' }}>
                <strong style={{ color: '#2c5aa0', display: 'inline-block', minWidth: '130px' }}>
                  Branch:
                </strong>
                Hwange
              </p>
              <p style={{ marginBottom: '12px', paddingLeft: '10px', borderLeft: '3px solid #f0f0f0' }}>
                <strong style={{ color: '#2c5aa0', display: 'inline-block', minWidth: '130px' }}>
                  Account Name:
                </strong>
                Detema Secondary School
              </p>
            </div>
            
            <div style={{ marginTop: '25px' }}>
              <h4 style={{ color: '#2c5aa0', marginBottom: '15px' }}>Account Details:</h4>
              
              <div style={{ 
                backgroundColor: '#f0f7ff', 
                padding: '15px', 
                borderRadius: '8px', 
                marginBottom: '20px' 
              }}>
                <p style={{ fontWeight: 'bold', color: '#2c5aa0', marginBottom: '8px' }}>
                  NOSTRO Account (USD)
                </p>
                <p>
                  <strong style={{ color: '#2c5aa0', display: 'inline-block', minWidth: '130px' }}>
                    Account Number:
                  </strong>
                  11842546660000
                </p>
                <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '5px' }}>
                  For USD payments
                </p>
              </div>
              
              <div style={{ 
                backgroundColor: '#f0f7ff', 
                padding: '15px', 
                borderRadius: '8px' 
              }}>
                <p style={{ fontWeight: 'bold', color: '#2c5aa0', marginBottom: '8px' }}>
                  ZIG Account (ZWL)
                </p>
                <p>
                  <strong style={{ color: '#2c5aa0', display: 'inline-block', minWidth: '130px' }}>
                    Account Number:
                  </strong>
                  11842542802024
                </p>
                <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '5px' }}>
                  For Zimbabwean Dollar payments
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Important Notes */}
      <div style={{
        backgroundColor: '#fff9e6',
        borderRadius: '10px',
        padding: '25px',
        marginBottom: '30px',
        borderLeft: '5px solid #ffc107'
      }}>
        <h3 style={{ 
          color: '#d4a017', 
          marginBottom: '15px',
          display: 'flex',
          alignItems: 'center'
        }}>
          <span style={{
            backgroundColor: '#d4a017',
            color: 'white',
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '10px',
            fontWeight: 'bold'
          }}>
            !
          </span>
          Important Payment Instructions
        </h3>
        <p>1. Always use the student&apos;s full name as the payment reference.</p>
        <p>2. Keep your payment confirmation (SMS or receipt) for verification.</p>
        <p>3. For bank transfers, allow 24-48 hours for processing.</p>
        <p>4. If you need assistance with payment, please contact the Accounts Department before making payment.</p>
        <p>5. Present your payment confirmation when submitting documents at registration.</p>
      </div>
      
      {/* Contact Info */}
      <div style={{
        backgroundColor: '#e8f4ff',
        borderRadius: '10px',
        padding: '25px',
        textAlign: 'center'
      }}>
        <h3 style={{ color: '#2c5aa0', marginBottom: '20px' }}>Need Assistance?</h3>
        <p style={{ marginBottom: '20px' }}>Contact our Accounts Department for payment guidance:</p>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '15px 25px',
            borderRadius: '8px',
            boxShadow: '0 3px 10px rgba(0, 0, 0, 0.05)',
            fontWeight: 600,
            color: '#2c5aa0'
          }}>
            0772 621 693
          </div>
          <div style={{
            backgroundColor: 'white',
            padding: '15px 25px',
            borderRadius: '8px',
            boxShadow: '0 3px 10px rgba(0, 0, 0, 0.05)',
            fontWeight: 600,
            color: '#2c5aa0'
          }}>
            0775 704 499
          </div>
          <div style={{
            backgroundColor: 'white',
            padding: '15px 25px',
            borderRadius: '8px',
            boxShadow: '0 3px 10px rgba(0, 0, 0, 0.05)',
            fontWeight: 600,
            color: '#2c5aa0'
          }}>
            0777 589 599
          </div>
        </div>
        
        <p style={{ marginTop: '25px', fontStyle: 'italic' }}>
          Office hours: Monday-Friday, 8:00 AM - 4:00 PM
        </p>
      </div>
    </div>
  );
}