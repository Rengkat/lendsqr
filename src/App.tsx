import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";

import {
  DecisionModels,
  Guarantors,
  Karma,
  Loan,
  LoanRequest,
  LoginPage,
  Savings,
  UserDetailLayOut,
  Whitelist,
  Error,
  SharedLayout,
  Organization,
  LoanProducts,
  SavingsProduct,
  FeesAndCharges,
  Tansactions,
  Services,
  ServiceAccount,
  Settlement,
  Report,
  Reference,
  FeesAndPricing,
  AuditLogs,
  User,
  MainDashboard,
  ProtectedRoute,
} from "./Pages/Index";
import {
  AppAndSystem,
  Document,
  BankDetails,
  Loans,
  Saving,
  GenteralDetails,
} from "./Pages/Dashboard/UserDetails/index";
// import { useData } from "./Pages/Dashboard/UserDetails/UserDetail";
function App() {
  // const { data }: any = useData();

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Error />} />
        {/* <ProtectedRoute> */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }>
          <Route index element={<MainDashboard />} />
          <Route path="dashboard" element={<MainDashboard />} />
          <Route path="user" element={<User />} />
          <Route path=":userID" element={<UserDetailLayOut />}>
            <Route index element={<GenteralDetails />} />
            <Route path="generalDetails" element={<GenteralDetails />} />
            <Route path="document" element={<Document />} />
            <Route path="appAndSystem" element={<AppAndSystem />} />
            <Route path="bankDetails" element={<BankDetails />} />
            <Route path="loan" element={<Loan />} />
            <Route path="saving" element={<Saving />} />
          </Route>
          <Route path="guarantors" element={<Guarantors />} />
          <Route path="loan" element={<Loan />} />
          <Route path="decisionModel" element={<DecisionModels />} />
          <Route path="savings" element={<Savings />} />
          <Route path="loanRequest" element={<LoanRequest />} />
          <Route path="wishlist" element={<Whitelist />} />
          <Route path="karma" element={<Karma />} />
          <Route path="organization" element={<Organization />} />
          <Route path="loanProducts" element={<LoanProducts />} />
          <Route path="savingProducts" element={<SavingsProduct />} />
          <Route path="feesAndCharges" element={<FeesAndCharges />} />
          <Route path="transactions" element={<Tansactions />} />
          <Route path="services" element={<Services />} />
          <Route path="servicesAccount" element={<ServiceAccount />} />
          <Route path="settlement" element={<Settlement />} />
          <Route path="reports" element={<Report />} />
          <Route path="preferences" element={<Reference />} />
          <Route path="feesAndPricing" element={<FeesAndPricing />} />
          <Route path="auditLogs" element={<AuditLogs />} />
          {/* </ProtectedRoute> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
