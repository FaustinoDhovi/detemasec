"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ChevronLeft, 
  User, 
  Calendar, 
  BookOpen, 
  School, 
  Phone,
  Upload,
  FileText,
  CheckCircle,
  AlertCircle,
  Loader2
} from "lucide-react";

export default function Register() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    formLevel: "",
    previousSchool: "",
    parentName: "",
    parentPhone: "",
    parentEmail: "",
    address: "",
    transferLetter: null as File | null,
    birthCertificate: null as File | null
  });

  const formLevels = [
    "Form 1", "Form 2", "Form 3", "Form 4", 
    "Lower 6 (L6)", "Upper 6 (U6)"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center p-6">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Received!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for applying to Detema Secondary School. We've received your application and will review it within 3-5 working days.
            </p>
            <div className="bg-blue-50 p-6 rounded-xl mb-6">
              <p className="text-sm text-blue-800 font-semibold mb-2">Next Steps:</p>
              <ul className="text-sm text-blue-700 space-y-1 text-left">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Review of application documents</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Contact for interview (if required)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Admission decision via phone/email</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <Link 
                href="/" 
                className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all"
              >
                Return to Home
              </Link>
              <button className="block w-full border-2 border-blue-600 text-blue-700 font-bold py-3 rounded-lg hover:bg-blue-50 transition-all">
                Download Receipt
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/90 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="flex items-center space-x-2 text-blue-700 hover:text-blue-600 font-semibold"
            >
              <ChevronLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            
            <div className="text-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Student Registration
              </h1>
              <p className="text-sm text-gray-600">2026 Academic Year Admissions</p>
            </div>
            
            <div className="text-right">
              <div className="text-xs font-semibold text-blue-600">Step {step} of 4</div>
              <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 transition-all duration-300"
                  style={{ width: `${(step / 4) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Progress Steps */}
          <div className="flex justify-between mb-12 relative">
            <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200 -z-10"></div>
            {[
              { number: 1, label: "Personal", icon: User },
              { number: 2, label: "Academic", icon: BookOpen },
              { number: 3, label: "Parent", icon: Phone },
              { number: 4, label: "Documents", icon: FileText }
            ].map((s) => (
              <div key={s.number} className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${step >= s.number ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'} transition-all`}>
                  {step > s.number ? (
                    <CheckCircle className="h-6 w-6" />
                  ) : (
                    <s.icon className="h-6 w-6" />
                  )}
                </div>
                <span className={`text-sm mt-2 font-medium ${step >= s.number ? 'text-blue-600' : 'text-gray-500'}`}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Personal Information */}
              {step === 1 && (
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-8">
                    <User className="h-8 w-8 text-blue-600" />
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
                      <p className="text-gray-600">Tell us about the student</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full p-4 bg-gray-50 border-2 border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                          placeholder="Enter first name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full p-4 bg-gray-50 border-2 border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                          placeholder="Enter last name"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Date of Birth *
                        </label>
                        <input
                          type="date"
                          name="dateOfBirth"
                          required
                          value={formData.dateOfBirth}
                          onChange={handleInputChange}
                          className="w-full p-4 bg-gray-50 border-2 border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Gender *
                        </label>
                        <select
                          name="gender"
                          required
                          value={formData.gender}
                          onChange={handleInputChange}
                          className="w-full p-4 bg-gray-50 border-2 border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        >
                          <option value="">Select gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Residential Address *
                      </label>
                      <textarea
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full p-4 bg-gray-50 border-2 border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none"
                        placeholder="Enter complete residential address"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Academic Information */}
              {step === 2 && (
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-8">
                    <BookOpen className="h-8 w-8 text-blue-600" />
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Academic Information</h2>
                      <p className="text-gray-600">Educational background details</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Form Level *
                      </label>
                      <select
                        name="formLevel"
                        required
                        value={formData.formLevel}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-gray-50 border-2 border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      >
                        <option value="">Select form level</option>
                        {formLevels.map((level) => (
                          <option key={level} value={level}>{level}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Previous School *
                      </label>
                      <input
                        type="text"
                        name="previousSchool"
                        required
                        value={formData.previousSchool}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-gray-50 border-2 border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        placeholder="Name of previous school"
                      />
                    </div>

                    <div className="bg-blue-50 p-6 rounded-xl border-2 border-dashed border-blue-200">
                      <div className="flex items-center space-x-3 mb-4">
                        <School className="h-6 w-6 text-blue-600" />
                        <div>
                          <h4 className="font-bold text-blue-800">Transfer Students Note</h4>
                          <p className="text-sm text-blue-700">
                            Transfer students must submit a transfer letter from their previous school.
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        This document helps us understand your academic background and ensures proper placement.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Parent/Guardian Information */}
              {step === 3 && (
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-8">
                    <Phone className="h-8 w-8 text-blue-600" />
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Parent/Guardian Information</h2>
                      <p className="text-gray-600">Contact details of parent or guardian</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Parent/Guardian Full Name *
                      </label>
                      <input
                        type="text"
                        name="parentName"
                        required
                        value={formData.parentName}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-gray-50 border-2 border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        placeholder="Enter parent/guardian name"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="parentPhone"
                          required
                          value={formData.parentPhone}
                          onChange={handleInputChange}
                          className="w-full p-4 bg-gray-50 border-2 border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                          placeholder="+263 77 123 4567"
                        />
                        <p className="text-sm text-gray-500 mt-2">
                          WhatsApp/Call number for communication
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="parentEmail"
                          value={formData.parentEmail}
                          onChange={handleInputChange}
                          className="w-full p-4 bg-gray-50 border-2 border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                          placeholder="parent@example.com"
                        />
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                      <div className="flex items-start space-x-3">
                        <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-yellow-800 mb-2">Contact Information</h4>
                          <p className="text-sm text-yellow-700">
                            Ensure the phone number provided is active and accessible. All important updates, 
                            including admission decisions, will be communicated via this number.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Document Upload */}
              {step === 4 && (
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-8">
                    <FileText className="h-8 w-8 text-blue-600" />
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Required Documents</h2>
                      <p className="text-gray-600">Upload necessary documents for verification</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Transfer Letter (if applicable)
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-blue-400 transition-colors">
                        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <input
                          type="file"
                          name="transferLetter"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={handleFileChange}
                          className="hidden"
                          id="transferLetter"
                        />
                        <label htmlFor="transferLetter" className="cursor-pointer">
                          <p className="text-lg font-semibold text-gray-700 mb-2">
                            {formData.transferLetter ? formData.transferLetter.name : "Upload Transfer Letter"}
                          </p>
                          <p className="text-sm text-gray-500 mb-4">
                            PDF, JPG, or PNG (Max 5MB)
                          </p>
                          <button
                            type="button"
                            className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-2 rounded-lg font-medium transition-colors"
                          >
                            Choose File
                          </button>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Birth Certificate *
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-blue-400 transition-colors">
                        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <input
                          type="file"
                          name="birthCertificate"
                          required
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={handleFileChange}
                          className="hidden"
                          id="birthCertificate"
                        />
                        <label htmlFor="birthCertificate" className="cursor-pointer">
                          <p className="text-lg font-semibold text-gray-700 mb-2">
                            {formData.birthCertificate ? formData.birthCertificate.name : "Upload Birth Certificate"}
                          </p>
                          <p className="text-sm text-gray-500 mb-4">
                            Required for age verification (PDF, JPG, or PNG, Max 5MB)
                          </p>
                          <button
                            type="button"
                            className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-2 rounded-lg font-medium transition-colors"
                          >
                            Choose File
                          </button>
                        </label>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-green-800 mb-2">Document Guidelines</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• Ensure documents are clear and legible</li>
                            <li>• File size should not exceed 5MB per document</li>
                            <li>• Acceptable formats: PDF, JPG, PNG</li>
                            <li>• Documents will be verified for authenticity</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Form Navigation */}
              <div className="border-t border-gray-200 p-8">
                <div className="flex justify-between">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition-all"
                    >
                      Previous
                    </button>
                  ) : (
                    <div></div>
                  )}

                  {step < 4 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:shadow-lg transition-all"
                    >
                      Continue
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle className="h-5 w-5" />
                          <span>Submit Application</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>

          {/* Help Section */}
          <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-200">
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-blue-800 mb-2">Need Assistance?</h4>
                <p className="text-blue-700 mb-3">
                  Contact our admissions office for help with the registration process.
                </p>
                <div className="flex items-center space-x-6">
                  <div>
                    <p className="text-sm text-blue-600">Phone</p>
                    <p className="font-bold text-gray-900">0772 621 693</p>
                  </div>
                  <div>
                    <p className="text-sm text-blue-600">Email</p>
                    <p className="font-bold text-gray-900">admissions@detema.edu.zw</p>
                  </div>
                  <div>
                    <p className="text-sm text-blue-600">Hours</p>
                    <p className="font-bold text-gray-900">Mon-Fri: 8AM-4PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Detema Secondary School • Admissions Portal v2.0
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}