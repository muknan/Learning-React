import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, payLoan, requestLoan, withdraw } from "./accountSlice";

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");

  const dispatch = useDispatch();
  const {
    loan: currentLoan,
    loanPurpose: currentLoanPurpose,
    balance,
    isLoading,
  } = useSelector((state) => state.account);

  console.log(balance);

  function handleDeposit() {
    setDepositAmount("");
    if (!depositAmount || depositAmount < 0) return;
    dispatch(deposit(depositAmount, currency));
  }

  function handleWithdrawal() {
    setWithdrawalAmount("");
    if (!withdrawalAmount || withdrawalAmount < 0) return;
    dispatch(withdraw(withdrawalAmount));
  }

  function handleRequestLoan() {
    setLoanAmount("");
    setLoanPurpose("");
    if (!loanAmount || loanAmount < 0 || !loanPurpose) return;
    dispatch(requestLoan(loanAmount, loanPurpose));
  }

  function handlePayLoan() {
    dispatch(payLoan());
  }

  return (
    <div>
      <h2>Your account operations</h2>
      <div className="inputs">
        <div>
          <label>Deposit</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>

          <button onClick={handleDeposit} disabled={isLoading}>
            {isLoading ? "Converting..." : "Deposit"} {depositAmount}
          </button>
        </div>

        <div>
          <label>Withdraw</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(+e.target.value)}
          />
          <button onClick={handleWithdrawal}>
            Withdraw {withdrawalAmount}
          </button>
        </div>

        <div>
          <label>Request loan</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
            placeholder="Loan amount"
          />
          <input
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder="Loan purpose"
          />
          <button onClick={handleRequestLoan}>Request loan</button>
        </div>

        {currentLoan > 0 ? (
          <div>
            <span>
              Pay back{" "}
              <strong>
                {currentLoan
                  ? "$" + currentLoan + ` (${currentLoanPurpose}) `
                  : ""}
              </strong>
            </span>
            <button onClick={handlePayLoan}>Pay loan</button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default AccountOperations;
