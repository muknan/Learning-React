import { useSelector } from "react-redux";
// import { connect } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

// Commented part is the legacy way of connecting Components to Redux

// function BalanceDisplay({ balance }) {
function BalanceDisplay() {
  const balance = useSelector((store) => store.account.balance);
  return <div className="balance">{formatCurrency(balance)}</div>;
}

// function mapStateToProps(state) {
//   return { balance: state.account.balance };
// }

// export default connect(mapStateToProps)(BalanceDisplay);
export default BalanceDisplay;
